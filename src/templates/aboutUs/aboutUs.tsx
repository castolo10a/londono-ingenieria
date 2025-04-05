import Image from "next/image";

export const AboutUs = () => {
  return (
    <section
      id="AboutUs"
      className="w-full bg-white flex flex-col md:flex-row py-22 px-6 md:px-12 gap-8 md:gap-0 justify-between items-start md:items-center"
    >
      {/* Lado Izquierdo */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 text-left">
        <h3 className="text-sm text-blue-700 font-bold uppercase">
          Construcción y Consultoría
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Creamos soluciones que construyen el futuro
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          En Londoño Ingeniería brindamos servicios de consultoría,
          interventoría y construcción en proyectos de infraestructura. <br /><br /> Nos
          enfocamos en edificaciones, vías, espacios públicos, infraestructura
          deportiva, sanitaria y distritos de riego. También ofrecemos alquiler
          de maquinaria, fabricación de estibas plásticas y fundición de cajas
          de concreto para sistemas eléctricos. <br /><br /> Comprometidos con la calidad y
          la eficiencia, damos vida a tus proyectos.
        </p>
        <a
          href="#Contact"
          className="mt-4 py-2 text-gray-600 underline hover:no-underline"
        >
          Ponte en contacto con nosotros
        </a>
      </div>

      {/* Lado Derecho - Imagen */}
      <div className="w-full max-w-lg h-full">
        <Image
          src="/assets/about.webp" // Ruta pública, colócala dentro de la carpeta /public
          alt="Imagen representativa de la empresa"
          width={600} // Puedes ajustar estos valores según la imagen
          height={400}
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};
