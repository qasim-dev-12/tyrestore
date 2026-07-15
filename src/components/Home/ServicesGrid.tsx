import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import services from "@/data/services";

const featured = services.filter((s) =>
  [
    "tyre-repair",
    "buy-new-tyre",
    "tyre-replacement",
    "air-fill",
    "spare-tyre-change",
    "fix-puncture-tyre",
  ].includes(s.slug),
);

const ServicesGrid = () => {
  return (
    <section className="bg-gray-light dark:bg-bg-color-dark py-10 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Fastest On-Site Tyre Repair & Replacement in Dubai"
          paragraph="800 Speedy provides complete mobile tyre services across Dubai. Our vans are stocked and ready to reach you in 20-30 minutes, anywhere in the city."
          center
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="block rounded-lg bg-white p-6 shadow-one hover:shadow-two dark:bg-dark dark:shadow-three"
            >
              <h3 className="mb-3 text-lg font-bold text-black dark:text-white">
                {service.title}
              </h3>
              <p className="mb-4 text-sm text-body-color">{service.description}</p>
              <span className="text-sm font-semibold text-primary">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
