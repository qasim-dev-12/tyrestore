import SectionTitle from "../Common/SectionTitle";

const icons = [
  <path key="call" d="M9 3h6v3H9V3zm1 4h4v9h-4V7zm2 10.5a1 1 0 100 2 1 1 0 000-2z" />,
  <path key="pin" d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />,
  <path key="wrench" d="M21 3l-4 4 2 2 4-4a5 5 0 01-6 6L6 22l-2-2 11-11a5 5 0 016-6z" />,
  <path key="car" d="M5 17a2 2 0 104 0 2 2 0 00-4 0zm10 0a2 2 0 104 0 2 2 0 00-4 0zM3 16l1.5-6c.3-1.2 1.4-2 2.6-2h9.8c1.2 0 2.3.8 2.6 2L21 16v3H3v-3z" />,
];

const steps = [
  { title: "Call or Book Online", text: "Tell us your location and vehicle details." },
  { title: "Drop Your Location", text: "Share your live location, nearest technician is dispatched." },
  { title: "Diagnose & Fit", text: "We inspect first, then fit or repair your tyre." },
  { title: "Drive Away", text: "Ready to go, with full warranty documentation." },
];

const HowItWorks = () => {
  return (
    <section id="how-we-work" className="bg-gray-light dark:bg-bg-color-dark py-10 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Back on the Road in 4 Steps"
          paragraph="Getting your tyre fixed in Dubai has never been this simple."
          center
        />
        <div className="relative mx-auto max-w-lg">
          <div className="absolute left-1/2 top-2 h-[calc(100%-1rem)] w-0.5 -translate-x-1/2 bg-primary/25" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative flex items-center py-6">
              <div className={i % 2 === 0 ? "w-1/2 pr-8 text-right" : "order-2 w-1/2 pl-8 text-left"}>
                <h3 className="mb-1 text-base font-bold text-black dark:text-white">{s.title}</h3>
                <p className="text-sm text-body-color dark:text-body-color-dark">{s.text}</p>
              </div>
              <span className="absolute left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-gray-light bg-primary text-white shadow-lg dark:border-bg-color-dark">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">{icons[i]}</svg>
              </span>
              <div className={i % 2 === 0 ? "w-1/2" : "order-1 w-1/2"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
