import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const initial = { name: "", phone: "", email: "", message: "" };
export default function Contact() {
  const [form, setForm] = useState(initial),
    [state, setState] = useState("idle"),
    [notice, setNotice] = useState("");
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    setState("loading");
    setNotice("");
    try {
      const response = await fetch(`${API}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.message || "Unable to send your message.");
      setState("success");
      setNotice("Your message has been sent. Thank you for reaching out!");
      setForm(initial);
    } catch (err) {
      setState("error");
      setNotice(
        err.message || "Could not connect to the server. Please try again.",
      );
    }
  };
  const field =
    "w-full rounded-xl border border-white/10 bg-[#0d0a17] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-violet-400/70 focus:ring-2 focus:ring-violet-500/10";
  return (
    <section id="contact" className="section-space">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Have a project in mind?"
          title={
            <>
              Let's build something{" "}
              <span className="gradient-text">great.</span>
            </>
          }
          text="Have an opportunity, question or idea? Send me a message and I'll get back to you."
        />
        <div className="grid gap-6 lg:grid-cols-[.75fr_1.25fr]">
          <div className="glass rounded-3xl p-7">
            <h3 className="font-display text-xl font-semibold">Get in touch</h3>
            <p className="mt-3 leading-7 text-white/50">
              I'm open to connecting about pment opportunities and
              interesting projects.
            </p>
            <div className="mt-8 space-y-6">
              <a
                href="mailto:mirzahammadali786@gmail.com"
                className="flex items-center gap-4"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-400/10 text-violet-200">
                  <Mail />
                </span>
                <span>
                  <small className="block text-white/40">Email</small>
                  <span className="text-sm">mirzahammadali786@gmail.com</span>
                </span>
              </a>
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-400/10 text-violet-200">
                  <MapPin />
                </span>
                <span>
                  <small className="block text-white/40">Location</small>
                  <span className="text-sm">Sadiqabad, Pakistan</span>
                </span>
              </div>
              <a href="tel:+923013231900" className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-400/10 text-violet-200">
                  <Phone />
                </span>
                <span>
                  <small className="block text-white/40">Phone</small>
                  <span className="text-sm">+92 301 3231900</span>
                </span>
              </a>
            </div>
            <div className="mt-9 flex gap-3">
              <a
                className="outline-btn !p-3"
                href="https://github.com/Mirza-Hammad-Ali"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
              </a>
              <a
                className="outline-btn !p-3"
                href="https://www.linkedin.com/in/mirzahammad786/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} />
              </a>
              <a
                className="outline-btn !p-3 hover:!text-green-400 transition-colors"
                href="https://wa.me/923013231900?text=Hi%20Mirza,%20I%20visited%20your%20portfolio."
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
          <motion.form
            onSubmit={submit}
            className="glass rounded-3xl p-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-white/60">
                Full name
                <input
                  className={`${field} mt-2`}
                  name="name"
                  value={form.name}
                  onChange={change}
                  placeholder="Your name"
                  required
                  minLength="2"
                  maxLength="80"
                />
              </label>
              <label className="text-sm text-white/60">
                Phone number
                <input
                  className={`${field} mt-2`}
                  name="phone"
                  value={form.phone}
                  onChange={change}
                  placeholder="+92..."
                  required
                  minLength="7"
                  maxLength="20"
                />
              </label>
              <label className="text-sm text-white/60 sm:col-span-2">
                Email address
                <input
                  className={`${field} mt-2`}
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={change}
                  placeholder="you@example.com"
                  required
                  maxLength="120"
                />
              </label>
              <label className="text-sm text-white/60 sm:col-span-2">
                Message
                <textarea
                  className={`${field} mt-2 min-h-36 resize-y`}
                  name="message"
                  value={form.message}
                  onChange={change}
                  placeholder="Tell me about your idea..."
                  required
                  minLength="10"
                  maxLength="3000"
                />
              </label>
            </div>
            <div
              aria-live="polite"
              className={`mt-4 text-sm ${state === "error" ? "text-rose-300" : state === "success" ? "text-emerald-300" : "text-white/50"}`}
            >
              {notice}
            </div>
            <button
              disabled={state === "loading"}
              className="primary-btn mt-5 w-full disabled:cursor-wait disabled:opacity-60"
              type="submit"
            >
              {state === "loading" ? (
                "Sending..."
              ) : (
                <>
                  Send message <Send size={16} />
                </>
              )}
            </button>
            <p className="mt-3 text-center text-xs text-white/30">
              Your details are used only to respond to your message.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
