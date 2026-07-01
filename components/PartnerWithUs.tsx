import { useTranslations } from "next-intl";

export default function PartnerWithUs() {
  const t = useTranslations("Partner");

  const items = t.raw("items") as {
    title: string;
    desc: string;
  }[];

  return (
    <section id="partner" className="bg-white px-6 py-36">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-amber-700">
          {t("label")}
        </p>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl font-bold leading-tight text-zinc-950 md:text-6xl">
              {t("title1")}
              <br />
              {t("title2")}
              <br />
              {t("title3")}
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-500">
              {t("description")}
            </p>
          </div>

          <div className="space-y-6">
            {items.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-amber-500 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700 transition-all duration-500 group-hover:bg-amber-500 group-hover:text-white">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-bold text-zinc-950 transition-colors duration-300 group-hover:text-amber-700">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-zinc-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}