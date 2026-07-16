"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";

const campo1: [number, number] = [19.637036769118815, -99.20785050208028];
const campo4: [number, number] = [19.69346263478449, -99.18990935263753];

export default function Mapa() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;
    const map = L.map(mapRef.current).setView(campo4, 15);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    const marker = L.marker(campo4).addTo(map).bindPopup("Campo 4").openPopup();
    mapInstanceRef.current = map;
    markerRef.current = marker;
    return () => { map.remove(); mapInstanceRef.current = null; };
  }, []);

  const irACampo = (coords: [number, number], nombre: string) => {
    const map = mapInstanceRef.current;
    if (!map) return;
    if (markerRef.current) map.removeLayer(markerRef.current);
    markerRef.current = L.marker(coords).addTo(map).bindPopup(nombre).openPopup();
    map.setView(coords, nombre === "Campo 1" ? 17 : 15);
  };

  return (
    <section id="ubicacion" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-4xl font-bold font-manrope leading-normal text-center mb-12">
          Nuestra Ubicación
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4 flex flex-col">
            <button
              type="button"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-xl transition-colors mb-3"
              data-aos="fade-right"
              data-aos-delay={100}
              onClick={() => irACampo(campo1, "Campo 1")}
            >
              Campo 1
            </button>
            <button
              type="button"
              className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-xl transition-colors mb-3"
              data-aos="fade-right"
              data-aos-delay={200}
              onClick={() => irACampo(campo4, "Campo 4")}
            >
              Campo 4
            </button>
          </div>
          <div className="md:col-span-8">
            <div
              ref={mapRef}
              className="w-full h-[400px] rounded-2xl shadow-lg mt-4"
              data-aos="fade-left"
              data-aos-delay={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
