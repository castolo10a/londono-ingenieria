import { servicesData } from "@/constants";
import { Card } from "@/components";

export const Services = () => {
  return (
    <section id="Services" className="py-22 px-4 md:px-16 bg-gray-100">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="md:w-1/2">
          <h2 className="text-sm text-blue-700 font-bold uppercase">
            Nuestros Servicios
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-gray-800 py-4">
            Expertos en consultoría, interventoría y ejecución de obras civiles.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {servicesData.map((service, index) => (
          <Card
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>
    </section>
  );
};
