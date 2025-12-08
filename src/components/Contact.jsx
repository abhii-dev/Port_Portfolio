// src/components/Contact.jsx
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaUser, FaTag } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvgebbog";

export default function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  function validateEmail(v) {
    return /^\S+@\S+\.\S+$/.test(v);
  }

  async function handleSend(e) {
    e.preventDefault();
    setStatus(null);

    if (!validateEmail(email)) {
      setStatus({ type: "error", text: "Enter a valid email." });
      return;
    }
    if (message.trim().length < 8) {
      setStatus({ type: "error", text: "Message too short." });
      return;
    }

    setSending(true);

    try {
      const payload = { name, subject, email, message };
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus({ type: "success", text: "Message sent — thank you! Check your email." });
        setName("");
        setSubject("");
        setEmail("");
        setMessage("");
      } else {
        const errMsg =
          (data && data.error) ||
          (data &&
            data.errors &&
            data.errors.map((x) => x.message).join(", ")) ||
          "Send failed. Try again later.";
        setStatus({ type: "error", text: errMsg });
      }
    } catch (err) {
      console.error("Formspree submit error:", err);
      setStatus({ type: "error", text: "Network error — try again." });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="w-full bg-black text-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">

          {/* LEFT INFO */}
          <div className="col-span-1 md:col-span-4 md:col-start-2 flex flex-col gap-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-red-400">
              CONTACT
            </h2>

            <p className="text-sm sm:text-base text-gray-300 max-w-lg leading-relaxed">
              Working on something cool? I’m available for freelance, collabs, and creative work. 
              Tell me your idea and timeline.
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1.5 rounded-full bg-black/40 border border-white/10 text-xs text-gray-200">
                Available for hire
              </span>
              <span className="px-3 py-1.5 rounded-full bg-black/40 border border-white/10 text-xs text-gray-200">
                Open to collabs
              </span>
            </div>

            <div className="mt-4 flex items-start gap-3">
              <div className="flex flex-col items-center">
                <div className="w-[2px] h-10 bg-red-500" />
                <span className="text-xs text-gray-400 mt-1">Reach me</span>
              </div>

              <div className="flex gap-2 items-center">
                <Social icon={<FaLinkedin />} label="LinkedIn" />
                <Social icon={<FaGithub />} label="GitHub" />
                <Social icon={<FaTwitter />} label="Twitter" />
                <Social icon={<FaInstagram />} label="Instagram" />
              </div>
            </div>
          </div>

          {/* RIGHT FORM — bigger on laptop, same on mobile */}
          <div className="col-span-1 md:col-span-6 lg:col-span-7 md:col-end-12">
            <div
              className="
                w-full 
                max-w-none      /* allow full width inside grid */
                lg:max-w-xl     /* bigger on laptop */
                xl:max-w-2xl    /* even bigger on large screens */
                mx-auto rounded-2xl 
                bg-[#0a0a0a] border border-white/8 
                p-4 sm:p-6 shadow-xl
              "
            >
              <form onSubmit={handleSend} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Input icon={<FaUser />} value={name} setValue={setName} placeholder="Your name" inputClass="py-3" />
                  <Input icon={<FaTag />} value={subject} setValue={setSubject} placeholder="Subject" inputClass="py-3" />
                </div>

                <Input icon={<MdEmail />} value={email} setValue={setEmail} type="email" placeholder="you@example.com" inputClass="py-3" />

                <label className="block">
                  <textarea
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project, timeline, budget..."
                    className="mt-2 w-full rounded-lg px-3 py-3 bg-black/50 border border-white/10 text-white placeholder-gray-400 
                               focus:ring-2 focus:ring-red-600 resize-none text-sm sm:text-base"
                    required
                  />
                </label>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full sm:w-auto px-5 py-3 rounded-full text-sm font-semibold 
                               disabled:opacity-60 disabled:cursor-not-allowed transition-transform transform-gpu hover:-translate-y-0.5"
                    style={{
                      background: "linear-gradient(90deg,#C00000,#A30000)",
                      boxShadow: "0 10px 30px rgba(192,20,20,0.22)",
                    }}
                  >
                    {sending ? "Sending..." : "Send message"}
                  </button>

                  <div className="text-xs text-gray-400">
                    Or <a href="mailto:youremail@example.com" className="text-red-300">email me</a>
                  </div>
                </div>

                {status && (
                  <div
                    className={`mt-2 px-3 py-2 rounded-md text-sm ${
                      status.type === "success"
                        ? "bg-emerald-900/30 text-emerald-200"
                        : "bg-red-900/30 text-red-200"
                    }`}
                  >
                    {status.text}
                  </div>
                )}
              </form>

              <div className="mt-4 text-xs text-gray-500">
                Replies typically within 24–48 hours.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* Input Component */
function Input({ icon, value, setValue, placeholder, type = "text", inputClass = "" }) {
  return (
    <label className="relative block">
      <div className="absolute left-3 inset-y-0 flex items-center text-gray-400 pointer-events-none">{icon}</div>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className={`pl-10 pr-3 w-full rounded-lg bg-black/50 border border-white/10 text-white 
                    placeholder-gray-400 focus:ring-2 focus:ring-red-600 text-sm sm:text-base ${inputClass}`}
      />
    </label>
  );
}

/* Social Icon */
function Social({ icon, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex items-center justify-center p-2 rounded-md bg-black/40 border border-white/10 
                 text-red-400 hover:scale-105 transition-transform text-sm"
      style={{ minWidth: 36, minHeight: 36 }}
    >
      {icon}
    </a>
  );
}
