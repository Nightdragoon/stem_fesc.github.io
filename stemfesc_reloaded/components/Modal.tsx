"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  id: string;
  titulo: string;
  descripcion: string;
}

export default function Modal({ id, titulo, descripcion }: ModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-xl transition-colors"
        onClick={() => setOpen(true)}
      >
        ver mas
      </button>
      {open && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div className="fixed inset-0 bg-black/60" />
          <div
            className="relative bg-[#1a1a1a] rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <h2 className="text-white text-xl font-semibold">{titulo}</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white transition-colors text-2xl leading-none"
              >
                &times;
              </button>
            </div>
            <div className="p-5">
              <p className="text-gray-300 leading-relaxed">{descripcion}</p>
            </div>
            <div className="flex justify-end p-5 border-t border-white/10">
              <button
                onClick={() => setOpen(false)}
                className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-xl transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
