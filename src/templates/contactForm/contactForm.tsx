"use client";

import { useContactForm } from "@/hooks";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    successMessage,
    errorMessage,
    onSubmit,
  } = useContactForm();

  return (
    <div
      id="Contact"
      className="flex flex-col md:flex-row font-sans text-gray-900 py-22 px-6 md:px-12 gap-8 md:gap-0 justify-around items-start md:items-center bg-white w-full"
    >
      <div>
        <h2 className="text-sm text-blue-700 font-bold uppercase">
          Contáctanos
        </h2>
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <p className="text-3xl font-bold text-black py-4">
          Nuestro equipo está listo para <br />
          brindarte la mejor atención.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg">
          <div>
            <label className="block font-medium">
              Nombre <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Juan Pérez"
              {...register("name", {
                required: "El nombre es obligatorio",
                pattern: {
                  value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?:\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/,
                  message: "El nombre no es válido",
                },
              })}
              className="w-full p-2 border border-gray-300 focus:ring focus:ring-blue-300"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">
              Correo Electrónico <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              placeholder="correoelectronico@dominio.com"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/,
                  message: "Email no válido",
                },
              })}
              className="w-full p-2 border border-gray-300 focus:ring focus:ring-blue-300"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">
              Número de Teléfono <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              placeholder="555-555-5555"
              {...register("phone", {
                required: "El teléfono es obligatorio",
                pattern: {
                  value: /^3[0-9]{9}$/,
                  message: "Número de teléfono no válido para Colombia",
                },
              })}
              className="w-full p-2 border border-gray-300 focus:ring focus:ring-blue-300"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Mensaje</label>
            <textarea
              {...register("message")}
              className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
              rows={8}
            ></textarea>
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="consent"
              {...register("consent", {
                required: "Debes aceptar el almacenamiento de tu información",
              })}
              className="mt-1"
            />
            <label htmlFor="consent" className="text-sm text-gray-700">
              Permito que este sitio web almacene mi envío para que puedan
              responder a mi consulta. <span className="text-red-600">*</span>
            </label>
          </div>
          {errors.consent && (
            <p className="text-red-500 text-sm">{errors.consent.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Enviar
          </button>
        </form>
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
    </div>
  );
};
