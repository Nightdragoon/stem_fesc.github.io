"use client";

import Link from "next/link";
import { congresos } from "@/data/actividades";
import Modal from "@/components/Modal";

export default function CongresosPage() {
  return (
    <>
      <section id="actividades" className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-white text-4xl font-bold font-manrope mb-12">
            Nuestros Congresos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {congresos.map((c, i) => (
              <div
                key={i}
                className="bg-black/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(13,202,240,0.3)] hover:-translate-y-2 hover:scale-[1.02]"
                data-aos="fade-up"
                data-aos-delay={(i + 1) * 100}
              >
                <img
                  src={c.imagen}
                  alt={c.titulo}
                  className="w-full h-64 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-white text-xl font-semibold mb-4">
                    {c.titulo}
                  </h3>
                  <Modal id={`modalCong${i}`} titulo={c.titulo} descripcion={c.descripcion} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex justify-center pb-16">
        <Link
          href="/"
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-8 rounded-2xl transition-colors"
        >
          Volver
        </Link>
      </section>
    </>
  );
}
