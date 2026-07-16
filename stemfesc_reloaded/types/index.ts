export interface RedSocial {
  nombre: string;
  url: string;
  icono: string;
}

export interface Miembro {
  nombre: string;
  apellido: string;
  slug: string;
  bio: string;
  imagen: string;
  fondo: string;
  redes: RedSocial[];
}

export interface Actividad {
  titulo: string;
  imagen: string;
  descripcion: string;
}
