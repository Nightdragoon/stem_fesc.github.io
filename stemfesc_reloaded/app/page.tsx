"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import ActivityCard from "@/components/ActivityCard";
import MemberCard from "@/components/MemberCard";
import { miembros } from "@/data/miembros";
import SuscribeteANewsLetter from "@/components/SuscribeteANewsLetter";

const Mapa = dynamic(() => import("@/components/Mapa"), { ssr: false });

export default function HomePage() {
  return (
    <>
      <Hero />
      <Sobre />
      <section id="actividades" className="bg-black/50 py-5">
        <div className="flex justify-center items-center ">
          <div className="container">
            <h2 className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center mb-12">
              Nuestras Actividades
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ActivityCard
                titulo="Actividades"
                imagen="/Imagenes/semana_cosmonautica.avif"
                href="/actividades"
                delay={100}
              />
              <ActivityCard
                titulo="Congresos"
                imagen="/Imagenes/congreso_proyectos.avif"
                href="/actividades/congresos"
                delay={200}
              />
              <ActivityCard
                titulo="Competencias"
                imagen="/Imagenes/primeraFecha_ICPC.avif"
                href="/actividades/competencias"
                delay={300}
              />
            </div>
          </div>
        </div>
      </section>
      <Mapa />
      <section id="miembros" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-white text-4xl font-bold font-manrope leading-normal text-center mb-12">
            Miembros
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {miembros.map((miembro) => (
              <MemberCard key={miembro.slug} miembro={miembro} />
            ))}
          </div>
        </div>
      </section>
      <SuscribeteANewsLetter />

    </>
  );
}
