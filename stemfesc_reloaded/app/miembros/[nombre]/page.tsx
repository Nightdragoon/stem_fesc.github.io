import { notFound } from "next/navigation";
import Link from "next/link";
import { miembros } from "@/data/miembros";
import type { Miembro } from "@/types";

export function generateStaticParams() {
  return miembros.map((m) => ({ nombre: m.slug }));
}

function MemberCSS({ miembro }: { miembro: Miembro }) {
  return (
    <style>{`
      body {
        background-image: linear-gradient(rgba(0, 0, 0, 0.721), rgba(0, 0, 0, 0.5)),
          url('${miembro.fondo}');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        margin: 0;
        padding: 0;
      }
    `}</style>
  );
}

function NeonNombre({ miembro }: { miembro: Miembro }) {
  return (
    <h1
      className="text-center mb-4"
      style={{
        color: "#f0f0f0",
        textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #007bff, 0 0 20px #007bff",
        animation: "neonGlow 1.5s ease-in-out infinite alternate",
      }}
    >
      {miembro.nombre} <span style={{ color: "#00ffff" }}>{miembro.apellido}</span>
    </h1>
  );
}

function RedesOvalo({ miembro }: { miembro: Miembro }) {
  if (miembro.redes.length === 0) return null;

  return (
    <div className="d-flex justify-content-center w-100" style={{ margin: "1rem 0" }} data-aos="fade-up">
      <div
        className="text-center d-inline-block"
        style={{
          padding: "0.5rem 2rem",
          margin: "1rem 0",
          background: "rgba(0, 123, 255, 0.15)",
          border: "1px solid rgba(0, 123, 255, 0.3)",
          boxShadow: "0 0 15px rgba(0, 123, 255, 0.2)",
          borderRadius: "100px",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
      >
        <h2 className="mb-1"><strong style={{ color: "#00ffff" }}>Mis redes</strong></h2>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          {miembro.redes.map((red) => (
            <div className="col-auto" key={red.nombre}>
              <a className="link-light" href={red.url} target="_blank" rel="noopener noreferrer" style={{ transition: "all 0.3s ease" }}>
                <i className={`bi ${red.icono} fs-1`} style={{ transition: "color 0.2s" }}></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MiembroPage({ params }: { params: { nombre: string } }) {
  const miembro = miembros.find((m) => m.slug === params.nombre);

  if (!miembro) notFound();

  return (
    <>
      <MemberCSS miembro={miembro} />
      <section>
        <div className="col d-flex justify-content-center">
          <div
            className="card h-70 rounded-4 border-0"
            style={{ background: "rgba(0, 0, 0, 0.82)", backdropFilter: "blur(5px)", borderRadius: "1rem", width: "90%", maxWidth: "600px", margin: "0 auto", display: "block" }}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="row align-items-center">
              <div className="container mt-5 pt-5 px-4">
                <NeonNombre miembro={miembro} />
                <RedesOvalo miembro={miembro} />
              </div>
              <div className="card-body px-4">
                {miembro.bio && (
                  <p className="text-light fs-5" style={{ textAlign: "justify", color: "#f0f0f0", textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}>
                    {miembro.bio}
                  </p>
                )}
                <div className="card bg-transparent border-0 d-inline-block text-center w-100">
                  <img src={miembro.imagen} alt={`${miembro.nombre} ${miembro.apellido}`} className="img-fluid rounded-circle" style={{ maxWidth: "200px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center mt-4">
        <Link href="/#miembros" className="btn btn-lg btn-primary btn-stem" data-aos="fade-up" style={{ borderRadius: "2rem", fontWeight: 600, letterSpacing: "1px", boxShadow: "0 2px 8px #0dcaf0", width: "110px" }}>Volver</Link>
      </section>
    </>
  );
}
