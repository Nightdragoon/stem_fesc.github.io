import Link from "next/link";
import { Miembro } from "@/types";

interface MemberCardProps {
  miembro: Miembro;
}

export default function MemberCard({ miembro }: MemberCardProps) {
  return (
    <Link href={`/miembros/${miembro.slug}`} className="block">
      <div
        className="bg-black/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(13,202,240,0.3)] hover:-translate-y-2 hover:scale-[1.02]"
        data-aos="zoom-in"
        data-aos-delay={100}
      >
        <img
          src={miembro.imagen}
          alt={`${miembro.nombre} ${miembro.apellido}`}
          className="w-full h-64 object-cover"
        />
        <div className="p-5">
          <h3 className="text-white text-xl font-semibold">
            {miembro.nombre} {miembro.apellido}
          </h3>
        </div>
      </div>
    </Link>
  );
}
