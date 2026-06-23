import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { profile, socialLinks } from "../data/portfolio";
import { Section } from "./Section";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const buildMailto = (data) => {
    const to = profile.email || "";
    const subject = encodeURIComponent(data.subject || "");
    const body = encodeURIComponent(
      `${data.message || ""}\n\nFrom: ${data.name || ""} (${data.email || ""})`,
    );
    return `mailto:${to}?subject=${subject}&body=${body}`;
  };

  const contacts = [
    ["Email", profile.email, FaEnvelope, `mailto:${profile.email}`],
    [
      "Phone",
      profile.phone,
      FaPhone,
      `tel:${profile.phone.replace(/\s/g, "")}`,
    ],
    ["Location", profile.location, FaLocationDot, "#home"],
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxGWAcFsz65T87ds65nHoc2nMarksur84NHYzH-enmOwKLa0G9Y1fOOLaVqY6cDpvKT/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8", // Bypasses the OPTIONS preflight check
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        }
      );

      const text = await response.text();
      const result = JSON.parse(text);

      if (response.ok && result.success) {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setStatus({
          type: "success",
          message: "Thanks! Your message has been sent successfully.",
        });
      } else {
        throw new Error(result.error || "Failed to submit.");
      }
    } catch (error) {
      console.error("Contact Error:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Ready to discuss backend Java opportunities."
      description="Use the form or direct links to connect about Java, Spring Boot, REST API, MySQL, or enterprise backend roles."
      className="bg-white dark:bg-ink"
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4">
          {contacts.map(([label, value, Icon, href]) => (
            <a
              key={label}
              href={href}
              className="card focus-ring flex items-center gap-4 rounded-lg p-5 transition hover:-translate-y-1 hover:border-royal dark:hover:border-skyline"
            >
              <span className="grid h-12 w-12 place-items-center rounded-md bg-slate-100 text-royal dark:bg-white/10 dark:text-skyline">
                <Icon />
              </span>
              <span>
                <span className="block text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {label}
                </span>
                <span className="block break-all font-extrabold text-ink dark:text-paper">
                  {value}
                </span>
              </span>
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="focus-ring grid h-12 w-12 place-items-center rounded-md bg-slate-100 text-slate-700 transition hover:bg-royal hover:text-white dark:bg-panel dark:text-slate-200 dark:hover:bg-skyline dark:hover:text-ink"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <form className="card rounded-lg p-6 sm:p-8" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
              Name
              <input
                className="focus-ring rounded-md border border-slate-200 bg-white px-4 py-3 font-medium text-ink dark:border-white/10 dark:bg-ink dark:text-paper"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
              Email
              <input
                className="focus-ring rounded-md border border-slate-200 bg-white px-4 py-3 font-medium text-ink dark:border-white/10 dark:bg-ink dark:text-paper"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
            Subject
            <input
              className="focus-ring rounded-md border border-slate-200 bg-white px-4 py-3 font-medium text-ink dark:border-white/10 dark:bg-ink dark:text-paper"
              type="text"
              name="subject"
              placeholder="Backend Java Developer role"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>
          <label className="mt-5 grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
            Message
            <textarea
              className="focus-ring min-h-36 rounded-md border border-slate-200 bg-white px-4 py-3 font-medium text-ink dark:border-white/10 dark:bg-ink dark:text-paper"
              name="message"
              placeholder="Share the opportunity details"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          {status.message && (
            <div className="mt-5">
              <p
                className={`rounded-md px-4 py-3 text-sm font-bold ${status.type === "success"
                  ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300"
                  : "bg-red-50 text-red-700 dark:bg-red-400/10 dark:text-red-300"
                  }`}
              >
                {status.message}
              </p>
              {status.type === "error" && (
                <div className="mt-3 flex gap-2">
                  <a
                    href={buildMailto(formData)}
                    className="focus-ring inline-flex items-center gap-2 rounded-md bg-royal px-4 py-2 text-sm font-extrabold text-white hover:bg-blue-700 dark:bg-skyline dark:text-ink"
                  >
                    Send via email
                  </a>
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, "")}`}
                    className="focus-ring inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm font-extrabold text-ink dark:border-white/10 dark:text-paper"
                  >
                    Call
                  </a>
                </div>
              )}
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="focus-ring mt-6 w-full rounded-md bg-royal px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-skyline dark:text-ink dark:hover:bg-cyan-300"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </Section>
  );
}
