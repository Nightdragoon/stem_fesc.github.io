import Link from "next/link";

const divisiones = [
  { icon: "bi-check-circle", label: "Astronomía" },
  { icon: "bi-check-circle", label: "Programación" },
  { icon: "bi-check-circle", label: "CanSats" },
  { icon: "bi-check-circle", label: "Divulgación científica" },
  { icon: "bi-check-circle", label: "Cohetería Experimental" },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 lg:gap-16 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex" data-aos="fade-right">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h2 className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Qué es <span className="text-cyan-400">STEM FESC</span>
              </h2>
              <p className="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                Somos un equipo de profesionistas en formación provenientes de diversas carreras de la Facultad de Estudios Superiores Cuautitlán UNAM. Contamos con las divisiones de:
              </p>
              <ul className="w-full flex flex-col gap-2 lg:items-start items-center">
                {divisiones.map((div, i) => (
                  <li key={i} className="flex items-center gap-2" data-aos="fade-up" data-aos-delay={100 + i * 50}>
                    <i className={`bi ${div.icon} text-cyan-400`}></i>
                    <span className="text-gray-200 text-base font-medium">{div.label}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center" data-aos="fade-up" data-aos-delay="400">
                Nos proponemos retos y competimos en diversas convocatorias relacionadas a nuestras áreas, para conseguir un aprendizaje extracurricular, al igual que colaboramos con universidades, laboratorios y empresas tecnológicas para ofrecer recursos y mentorías que impulsen la experimentación, innovación y tecnoética. ¡Únete a nuestra comunidad y forma parte de la próxima generación de creadorxs e innovadorxs!
              </p>
            </div>
            <Link
              href="/#actividades"
              className="sm:w-fit w-full px-3.5 py-2 bg-blue-600 hover:bg-blue-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex cursor-pointer text-center"
              data-aos="fade-up" data-aos-delay="500"
            >
              <span className="px-1.5 text-white text-sm font-medium leading-6">
                Ver Actividades
              </span>
            </Link>
          </div>
          <img
            className="lg:mx-0 mx-auto w-full max-w-2xl max-h-[500px] rounded-3xl object-contain hover:scale-105 transition-all duration-700 ease-in-out"
            src="/Imagenes/quienes_somos_sin_fondo.avif"
            alt="about Us image"
            data-aos="fade-left"
          />
        </div>
      </div>
    </section>
  );
}
