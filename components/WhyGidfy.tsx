import {useTranslations} from "next-intl";

export default function WhyGidfy() {
  const t = useTranslations("Why");
  const items = t.raw("items") as {
    number: string;
    title: string;
    desc: string;
  }[];

  return (
    <section id="why" className="bg-[#FAF9F7] px-6 py-36 text-zinc-950">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-sm font-semibold tracking-[0.35em] text-amber-600">
          {t("label")}
        </p>

        <h2 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          {t("title1")}
          <br />
          {t("title2")}
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-500">
          {t("description")}
        </p>

        <div className="mt-24 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.number}
              className="group rounded-[2rem] border border-zinc-200 bg-white p-10 transition duration-500 hover:-translate-y-2 hover:border-amber-500 hover:shadow-xl"
            >
              <div className="mb-8 text-5xl font-bold text-zinc-200 transition group-hover:text-amber-500">
                {item.number}
              </div>

              <h3 className="text-2xl font-bold">{item.title}</h3>

              <p className="mt-5 leading-8 text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}