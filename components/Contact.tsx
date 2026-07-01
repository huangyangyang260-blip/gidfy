import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="bg-zinc-950 px-6 py-36 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-sm font-semibold tracking-[0.35em] text-amber-500">
          {t("label")}
        </p>

        <h2 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          {t("title")}
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          {t("description")}
        </p>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <a
            href="mailto:business@gidfylab.com"
            className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-2 hover:border-amber-500"
          >
            <p className="text-sm tracking-widest text-zinc-500">
              {t("emailLabel")}
            </p>
            <h3 className="mt-3 text-2xl font-bold group-hover:text-amber-500">
              gidylab0701@naver.com
            </h3>
            <p className="mt-4 text-zinc-400">{t("emailDesc")}</p>
          </a>

          <a
            href="https://instagram.com/gidfylab"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-2 hover:border-amber-500"
          >
            <p className="text-sm tracking-widest text-zinc-500">
              {t("instagramLabel")}
            </p>
            <h3 className="mt-3 text-2xl font-bold group-hover:text-amber-500">
              @gidfylab
            </h3>
            <p className="mt-4 text-zinc-400">{t("instagramDesc")}</p>
          </a>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm tracking-widest text-zinc-500">
              {t("linkedinLabel")}
            </p>
            <h3 className="mt-3 text-2xl font-bold">
              {t("linkedinTitle")}
            </h3>
            <p className="mt-4 text-zinc-400">{t("linkedinDesc")}</p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm tracking-widest text-zinc-500">
              {t("locationLabel")}
            </p>
            <h3 className="mt-3 text-2xl font-bold">
              {t("locationTitle")}
            </h3>
            <p className="mt-4 text-zinc-400">{t("locationDesc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}