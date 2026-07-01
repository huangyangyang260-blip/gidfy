import Image from "next/image";
import {useTranslations} from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 pb-40 pt-40">
      <div className="absolute right-0 top-20 h-[520px] w-[520px] rounded-full bg-amber-200/30 blur-3xl" />
      <div className="absolute bottom-10 left-0 h-72 w-72 rounded-full bg-zinc-200/70 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-20 lg:flex-row lg:justify-between">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-semibold tracking-[0.35em] text-amber-600">
            GLOBAL B2B FRAGRANCE INGREDIENT PLATFORM
          </p>

          <h1 className="text-5xl font-bold leading-tight text-zinc-950 md:text-7xl">
            {t("title1")}
            <br />
            {t("title2")} {t("title3")}
            <br />
            {t("title4")} {t("title5")}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-500">
            {t("description")}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-black px-8 py-4 text-white transition hover:-translate-y-1 hover:bg-amber-600 hover:shadow-xl"
            >
              {t("primaryButton")} →
            </a>

            <a
              href="#why"
              className="rounded-full border border-zinc-300 px-8 py-4 font-medium text-zinc-800 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white hover:shadow-xl"
            >
              {t("secondaryButton")} →
            </a>
          </div>
        </div>

        <div className="hidden justify-center lg:flex lg:w-[520px]">
          <div className="relative flex h-[560px] w-[560px] items-center justify-center">
            <div className="absolute h-[540px] w-[540px] rounded-full bg-white" />
            <div className="absolute h-[560px] w-[560px] rounded-full bg-amber-200/30 blur-3xl" />

            <Image
              src="/logo.png"
              alt="GIDFY LAB"
              width={520}
              height={520}
              priority
              className="relative z-10 h-[520px] w-[520px] animate-float rounded-full object-contain drop-shadow-2xl transition duration-700 hover:scale-105 hover:-rotate-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}