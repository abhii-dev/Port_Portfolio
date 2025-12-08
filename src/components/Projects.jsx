import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Projects — Aesthetic single-file React component using Tailwind + Framer Motion
// Drop this into your project (e.g. src/components/Projects.jsx)

export default function Projects() {
  const [tab, setTab] = useState("3d");

  const projects = {
    "3d": [
      { name: "xyz", url: "#" , desc: "asdasdasdasdasdasdasdasdad"},
      { name: "xyz", url: "#" , desc: "dasdasdasdasdasdasdasdasdasd"},
      { name: "xyz", url: "#" , desc: "asdasdasdasdasdasdasdasdasdasd"},
    ],
    "video": [
      { name: "xyz", url: "#", desc: "asdasdasdasddadwedweddasdasd"},
      { name: "xyz", url: "#", desc: "sadqdqdwededwsdasdasdasdsadsda"},
      { name: "xyz", url: "#", desc: "wdewef3ferfeferferferferfefef"},
    ],
    "motion": [
      { name: "xyz", url: "#", desc: "erferferferfekmfjenrifjeni"},
      { name: "xyz", url: "#", desc: "wjfnwijenfiwjenfijwnefiwjnef"},
      { name: "xyz", url: "#", desc: "wefkwefijnefhwnejfbwjehfnjwhenfj"},
    ],
  };

  const tabs = [
    { id: "3d", label: "3D Animation" },
    { id: "video", label: "Video Editing" },
    { id: "motion", label: "Motion Graphics" },
  ];

  return (
    <section className="w-full bg-black text-white py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-start justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-red-400">Projects</h2>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-3 mb-8 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              aria-pressed={tab === t.id}
              className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-rose-400/30 ${
                tab === t.id
                  ? "bg-gradient-to-br from-red-600 to-rose-500 text-white shadow-2xl"
                  : "bg-white/4 text-rose-100/90 hover:bg-white/6"
              }`}
            >
              {t.label}
              {tab === t.id && (
                <span className="absolute left-0 -bottom-3 w-full flex justify-center">
                  <span className="w-14 h-1 rounded-full bg-gradient-to-r from-red-400 to-rose-300 shadow-sm" />
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid of cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {projects[tab].map((p, i) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.02 }}
                className="group rounded-2xl overflow-hidden border border-white/8 bg-gradient-to-b from-white/3 to-transparent backdrop-blur-md p-0 shadow-lg"
              >
                {/* Title + description block */}
                <div className="p-4">
                  <h3 className="text-sm font-bold text-rose-50">{p.name}</h3>
                  <p className="mt-1 text-xs text-rose-200/80 line-clamp-2">{p.desc}</p>
                </div>

                {/* Controls */}
                <div className="px-4 py-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-white/4 border border-white/6">Demo</span>
                    <span className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-white/4 border border-white/6">{tab.toUpperCase()}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs px-3 py-1 rounded-full font-semibold bg-gradient-to-r from-red-600 to-rose-500 shadow-sm hover:brightness-105"
                    >
                      View
                    </a>
                  </div>
                </div>

              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
