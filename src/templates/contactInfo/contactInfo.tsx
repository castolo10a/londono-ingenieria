"use client";

export const ContactInfo = () => {
  return (
    <section
      id="Contact"
      className="flex flex-col md:flex-row font-sans text-gray-900 py-24 px-6 md:px-12 gap-8 md:gap-0 justify-around items-start md:items-center bg-white w-full"
    >
      <div>
        <h2 className="text-sm text-blue-700 font-bold uppercase">
          Contáctanos
        </h2>
        <p className="text-3xl font-bold text-black py-4">
          Nuestro equipo está listo para <br />
          brindarte la mejor atención.
        </p>
        <p className="text-gray-700 text-lg">
          Puedes comunicarte con nosotros por correo o teléfono. <br />
          Estaremos encantados de ayudarte.
        </p>
      </div>

      <div className="bg-gray-100 rounded-2xl shadow-lg p-6 w-full max-w-sm h-full">
        <h3 className="text-xl font-bold mb-4 text-blue-600">
          Información de contacto
        </h3>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-800">Correo</h4>
          <a
            href="mailto:londonoingenieriacivil@gmail.com"
            className="text-blue-500 hover:underline"
          >
            londonoingenieriacivil@gmail.com
          </a>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-800">Teléfono</h4>
          <a href="tel:+573115726968" className="text-blue-500 hover:underline">
            +57 311 572 6968
          </a>
        </div>

        <div className="mb-2">
          <h4 className="font-semibold text-gray-800">Horario</h4>
          <p className="text-gray-700 text-sm leading-5">
            Lunes a Viernes: 8:00am - 6:00pm
            <br />
            Sábado: 9:00am - 2:00pm
            <br />
            Domingo: Cerrado
          </p>
        </div>
      </div>
    </section>
  );
};
