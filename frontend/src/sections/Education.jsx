import { GraduationCap } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { education } from "../data/education";
export default function Education() {
  return (
    <section id="education" className="section-space">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Learning journey"
          title={
            <>
              Education & <span className="gradient-text">growth.</span>
            </>
          }
        />
        {education.map((e) => (
          <div key={e.degree} className="glass flex gap-5 rounded-3xl p-7">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-violet-400/10 text-violet-200">
              <GraduationCap />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold">{e.degree}</h3>
              <p className="mt-2 text-violet-200">{e.institution}</p>
              <p className="mt-1 text-sm text-white/45">{e.period}</p>
              <p className="mt-4 text-sm text-white/50">{e.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
