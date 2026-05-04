import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

const PolicyModal = ({ isOpen, onClose, title, content }) => {
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
            className="fixed inset-0 bg-black/70 z-50"
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                       w-[90%] max-w-3xl bg-white rounded-xl shadow-2xl z-50"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center border-b px-6 py-4">
              <h2 className="text-lg font-semibold">{title}</h2>
              <button onClick={onClose}>
                <AiOutlineClose />
              </button>
            </div>

            {/* CONTENT */}
            <div className="p-6 max-h-[70vh] overflow-y-auto text-sm text-gray-700 leading-relaxed">
              {content}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PolicyModal;