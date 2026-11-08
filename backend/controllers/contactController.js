import Contact from "../models/Contact.js";
import { sendContactNotification } from "../utils/mailer.js";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()\-\s\d]{7,20}$/;

export async function createContact(req, res) {
  try {
    const { name, phone, email, message } = req.body || {};
    if (
      ![name, phone, email, message].every(
        (v) => typeof v === "string" && v.trim(),
      )
    ) {
      return res.status(400).json({ message: "Please complete all fields." });
    }
    if (name.trim().length < 2 || name.trim().length > 80)
      return res
        .status(400)
        .json({ message: "Name must be between 2 and 80 characters." });
    if (!phonePattern.test(phone.trim()))
      return res
        .status(400)
        .json({ message: "Please enter a valid phone number." });
    if (!emailPattern.test(email.trim()) || email.length > 120)
      return res
        .status(400)
        .json({ message: "Please enter a valid email address." });
    if (message.trim().length < 10 || message.trim().length > 3000)
      return res
        .status(400)
        .json({ message: "Message must be between 10 and 3000 characters." });

    const saved = await Contact.create({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      message: message.trim(),
    });
    let emailSent = false;
    try {
      emailSent = await sendContactNotification(saved);
    } catch (mailError) {
      console.error("Email notification failed:", mailError.message);
    }
    return res
      .status(201)
      .json({
        message: "Your message was saved successfully.",
        id: saved._id,
        emailNotificationSent: emailSent,
      });
  } catch (error) {
    console.error("Contact submission failed:", error);
    return res
      .status(500)
      .json({ message: "Could not save your message. Please try again." });
  }
}
