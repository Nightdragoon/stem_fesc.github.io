import Link from "next/link";

interface ActivityCardProps {
  titulo: string;
  imagen: string;
  href: string;
  delay?: number;
}

export default function ActivityCard({ titulo, imagen, href, delay = 100 }: ActivityCardProps) {
  return (
    <Link href={href} className="block">
      <div
        className="bg-black/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(13,202,240,0.3)] hover:-translate-y-2 hover:scale-[1.02]"
        data-aos="fade-up"
        data-aos-delay={delay}
      >
        <img
          src={imagen}
          alt={titulo}
            className="w-full h-96 object-cover"
        />
        <div className="p-5">
          <h1 className="text-white text-xl font-semibold">{titulo}</h1>
        </div>
      </div>
    </Link>
  );
}
