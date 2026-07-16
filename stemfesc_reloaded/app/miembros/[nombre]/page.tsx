import { notFound } from "next/navigation";
import Link from "next/link";
import { miembros } from "@/data/miembros";
import type { Miembro } from "@/types";

export function generateStaticParams() {
  return miembros.map((m) => ({ nombre: m.slug }));
}

function NeonNombre({ miembro }: { miembro: Miembro }) {
  return (
    <h1 className="text-white text-4xl font-bold text-center mb-4 animate-neon-glow">
      {miembro.nombre} <span className="text-cyan-400">{miembro.apellido}</span>
    </h1>
  );
}

function RedesOvalo({ miembro }: { miembro: Miembro }) {
  if (miembro.redes.length === 0) return null;

  return (
    <div className="flex justify-center w-full my-4" data-aos="fade-up">
      <div className="text-center inline-block px-8 py-2 my-4 bg-cyan-900/20 border border-cyan-500/30 shadow-lg shadow-cyan-500/20 rounded-full transition-transform duration-200 hover:scale-105">
        <h2 className="mb-1">
          <strong className="text-cyan-400">Mis redes</strong>
        </h2>
        <div className="flex justify-center gap-3 flex-wrap">
          {miembro.redes.map((red) => (
            <a
              key={red.nombre}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              href={red.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`bi ${red.icono} text-4xl`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default async function MiembroPage({ params }: { params: Promise<{ nombre: string }> }) {
  const { nombre } = await params;
  const miembro = miembros.find((m) => m.slug === nombre);

  if (!miembro) notFound();

  return (
    <>
      <section className="pt-24 pb-16 flex justify-center min-h-screen">
        <div
          className="bg-black/80 backdrop-blur-md rounded-2xl shadow-2xl w-[90%] max-w-[600px]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex flex-col items-center">
            <div className="w-full px-4 pt-20 mt-5">
              <NeonNombre miembro={miembro} />
              <RedesOvalo miembro={miembro} />
            </div>
            <div className="px-4 py-4">
              {miembro.bio && (
                <p className="text-gray-300 text-lg text-justify">
                  {miembro.bio}
                </p>
              )}
              <div className="bg-transparent border-0 text-center w-full mt-6">
                <img
                  src={miembro.imagen}
                  alt={`${miembro.nombre} ${miembro.apellido}`}
                  className="w-48 h-48 rounded-full object-cover mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center pb-16">
        <Link
          href="/#miembros"
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-8 rounded-2xl transition-colors shadow-lg shadow-cyan-600/20"
          data-aos="fade-up"
        >
          Volver
        </Link>
      </section>
    </>
  );
}
