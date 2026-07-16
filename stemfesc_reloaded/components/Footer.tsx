import Link from "next/link";

const socialLinks = [
  { href: "https://www.facebook.com/people/STEM-FESC/61568259396270/?_rdr", icon: "bi-facebook" },
  { href: "https://linktr.ee/stem.fesc", icon: "bi-link" },
  { href: "https://www.instagram.com/stem.fesc", icon: "bi-instagram" },
  { href: "https://www.tiktok.com/@stem.fesc?is_from_webapp=1&sender_device=pc", icon: "bi-tiktok" },
  { href: "https://www.whatsapp.com/channel/0029Vb58wf9ElagtOTOgiG1S", icon: "bi-whatsapp" },
];

export default function Footer() {
  return (
    <>
      <section id="email" className="py-16">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-white text-4xl font-bold font-manrope mb-6">
            Contáctanos por Email
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Para dudas, sugerencias o más información, envíanos un correo a: stemfesc@gmail.com
          </p>
          <a
            href="mailto:stemfesc@gmail.com"
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-8 rounded-2xl transition-colors"
          >
            <i className="bi bi-envelope-fill"></i>
            Enviar correo
          </a>
        </div>
      </section>

      <section id="redes" className="bg-black/50 py-16">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-white text-4xl font-bold font-manrope mb-8">
            Síguenos en Redes Sociales
          </h2>
          <div className="flex justify-center gap-6 flex-wrap">
            {socialLinks.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`bi ${social.icon} text-4xl`}></i>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
