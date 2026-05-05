import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

const PolicyModal = ({ isOpen, onClose, title, content }) => {
  const y = useMotionValue(0);
  const contentRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  // 🔥 Detect scroll (for header shadow)
  const handleScroll = () => {
    if (!contentRef.current) return;
    setScrolled(contentRef.current.scrollTop > 10);
  };

  // 🔥 Close on drag down
  const handleDragEnd = (_, info) => {
    if (info.offset.y > 120 || info.velocity.y > 500) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* 🔥 MOBILE (BOTTOM SHEET) */}
          <motion.div
            drag="y"
            dragConstraints={{ top: 0 }}
            onDragEnd={handleDragEnd}
            style={{ y }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="
              fixed bottom-0 left-0 w-full z-50
              md:hidden
              bg-white rounded-t-2xl shadow-2xl
              max-h-[90vh] flex flex-col
            "
          >
            {/* DRAG HANDLE */}
            <div className="flex justify-center py-2">
              <div className="w-10 h-1.5 bg-gray-300 rounded-full" />
            </div>

            {/* HEADER */}
            <div
              className={`sticky top-0 z-10 flex justify-between items-center px-5 py-4 border-b bg-white transition ${
                scrolled ? "shadow-md" : ""
              }`}
            >
              <h2 className="text-base font-semibold">{title}</h2>
              <button onClick={onClose}>
                <AiOutlineClose />
              </button>
            </div>

            {/* CONTENT */}
            <div
              ref={contentRef}
              onScroll={handleScroll}
              className="relative px-5 pb-6 overflow-y-auto text-sm text-gray-700 leading-relaxed"
            >
              {content}

              {/* 🔥 TOP FADE */}
              <div className="pointer-events-none sticky top-0 h-6 bg-gradient-to-b from-white to-transparent" />

              {/* 🔥 BOTTOM FADE */}
              <div className="pointer-events-none sticky bottom-0 h-6 bg-gradient-to-t from-white to-transparent" />
            </div>
          </motion.div>

          {/* 💻 DESKTOP (CENTER MODAL) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="
              hidden md:flex fixed inset-0 items-center justify-center z-50
            "
          >
            <div className="w-[90%] max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden">
              
              {/* HEADER */}
              <div className="flex justify-between items-center border-b px-6 py-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <button onClick={onClose}>
                  <AiOutlineClose />
                </button>
              </div>

              {/* CONTENT */}
              <div className="relative max-h-[70vh] overflow-y-auto px-6 py-5 text-sm text-gray-700">
                {content}

                {/* FADE */}
                <div className="pointer-events-none sticky top-0 h-6 bg-gradient-to-b from-white to-transparent" />
                <div className="pointer-events-none sticky bottom-0 h-6 bg-gradient-to-t from-white to-transparent" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PolicyModal;