import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import tyreBrands from "@/data/tyreBrands";

const BrandsShowcase = () => {
  return (
    <section className="py-10 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Not Your Average Tyre Shop in Dubai — We Fit On-Site"
          paragraph="As a trusted mobile tyre shop in Dubai, we supply only certified, authentic tyres from the world's leading brands. Every purchase includes a full manufacturer warranty and professional fitting at your location."
          center
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {tyreBrands.map((brand, i) => (
            <Link
              key={brand.slug}
              href={`/tyre-brands/${brand.slug}`}
              style={{ animationDelay: `${i * 100}ms` }}
              className="group flex flex-col items-center gap-4 rounded-2xl bg-dark p-6 text-center ring-1 ring-stroke-dark transition-all duration-300 hover:-translate-y-2 hover:ring-primary hover:shadow-[0_12px_40px_rgba(52,235,229,0.15)] animate-[fadeInUp_0.5s_ease_both]"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white">
                <svg viewBox="0 0 24 24" className="h-12 w-12 text-dark" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4a1 1 0 110 2 1 1 0 010-2zm0 12a1 1 0 110-2 1 1 0 010 2zm-6-6a1 1 0 112 0 1 1 0 01-2 0zm12 0a1 1 0 112 0 1 1 0 01-2 0zM7.76 7.76a1 1 0 111.42 1.42 1 1 0 01-1.42-1.42zm7.06 7.06a1 1 0 111.42 1.42 1 1 0 01-1.42-1.42zm0-7.06a1 1 0 111.42-1.42 1 1 0 01-1.42 1.42zM7.76 16.24a1 1 0 111.42-1.42 1 1 0 01-1.42 1.42zM12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-primary">
                {brand.title.replace(" Tyres", "").replace(" Tires", "")}
              </span>
              <span className="text-xs text-body-color-dark">View Models →</span>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-body-color">
          All tyres provided by 800 Speedy come with full manufacturer
          warranty and free doorstep fitting.{" "}
          <Link href="/warranty" className="text-primary">
            Terms and conditions apply.
          </Link>
        </p>
      </div>
    </section>
  );
};

export default BrandsShowcase;
