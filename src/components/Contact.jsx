// src/components/Contact.jsx
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaUser, FaTag } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

/**
 * Contact.jsx — Formspree wired to https://formspree.io/f/xvgebbog
 * - Sends JSON to Formspree and shows inline success/error state
 * - Keeps the aesthetic layout you approved
 */

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
      const payload = {
        name,
        subject,
        email,
        message,
      };

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Accept": "application/json",
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
          (data && data.errors && data.errors.map((x) => x.message).join(", ")) ||
          "Send failed. Try again later.";
        setStatus({ type: "error", text: errMsg });
      }
    } catch (err) {
      console.error("Formspree submit error:", err);
      setStatus({ type: "error", text: "Network error — please try again." });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="w-full min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* LEFT SIDE */}
          <div className="col-span-12 md:col-span-4 md:col-start-2 flex flex-col gap-6">
            <h2 className="text-4xl font-bold uppercase tracking-wide text-red-400">CONTACT</h2>

            <p className="text-gray-300 max-w-sm">
              Working on something cool? I’m available for freelance, collabs, and creative work.
              Tell me your idea and timeline.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              <span className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-xs text-gray-200">
                Available for hire
              </span>

            </div>

            {/* Socials */}
            <div className="mt-6 flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-[2px] h-12 bg-red-500" />
                <span className="text-xs text-gray-400 mt-1">Reach me</span>
              </div>

              <div className="flex gap-3">
                <Social icon={<FaLinkedin />} />
                <Social icon={<FaGithub />} />
                <Social icon={<FaTwitter />} />
                <Social icon={<FaInstagram />} />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="col-span-12 md:col-span-6 md:col-end-13">
            <div className="w-full rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 shadow-xl">
              <form onSubmit={handleSend} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input icon={<FaUser />} value={name} setValue={setName} placeholder="Your name" />
                  <Input icon={<FaTag />} value={subject} setValue={setSubject} placeholder="Subject" />
                </div>

                <Input icon={<MdEmail />} value={email} setValue={setEmail} type="email" placeholder="you@example.com" />

                <textarea
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your project, timeline, budget..."
                  className="mt-2 w-full rounded-lg px-4 py-3 bg-black/50 border border-white/10 text-white placeholder-gray-500
                             focus:ring-2 focus:ring-red-600 resize-none"
                  required
                />

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={sending}
                    className="px-6 py-2 rounded-full text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: "linear-gradient(90deg,#C00000,#A30000)",
                      boxShadow: "0 10px 30px rgba(192,20,20,0.22)",
                    }}
                  >
                    {sending ? "Sending..." : "Send message"}
                  </button>

                  <span className="text-xs text-gray-400">
                    Or <a href="mailto:youremail@example.com" className="text-red-300">email me</a>
                  </span>
                </div>

                <div aria-live="polite" className="min-h-[1.25rem]">
                  {status && (
                    <div className={`mt-2 px-3 py-2 rounded-md text-sm ${status.type === "success" ? "bg-emerald-900/30 text-emerald-200" : "bg-red-900/30 text-red-200"}`}>
                      {status.text}
                    </div>
                  )}
                </div>
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

/* Input component */
function Input({ icon, value, setValue, placeholder, type = "text" }) {
  return (
    <label className="relative block">
      <div className="absolute left-3 inset-y-0 flex items-center text-gray-400">{icon}</div>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="pl-10 pr-4 py-3 w-full rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-500 
                   focus:ring-2 focus:ring-red-600"
      />
    </label>
  );
}

/* Social icon bubble */
function Social({ icon }) {
  return (
    <div className="p-2 rounded-md bg-black/40 border border-white/10 text-red-400 hover:scale-105 transition">
      {icon}
    </div>
  );
}
