import Image from "next/image";
import {useLocale, useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";

export default function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();

  const menuItems = [
    {name: t("why"), href: "#why"},
    {name: t("partner"), href: "#partner"},
    {name: t("contact"), href: "#contact"}
  ];

  const languages = [
    {code: "ko", label: "KR"},
    {code: "en", label: "EN"},
    {code: "zh", label: "中文"}
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="GIDFY LAB"
            width={42}
            height={42}
            className="h-10 w-10 rounded-full object-contain"
          />

          <div>
            <div className="text-2xl font-black tracking-[-0.04em] leading-none">
              <span className="text-zinc-950">GIDFY</span>
              <span className="text-amber-600 transition group-hover:text-amber-500">
                LAB
              </span>
            </div>

            <p className="mt-1 hidden text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-400 sm:block">
              Global Fragrance B2B Platform
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-zinc-700 transition hover:text-amber-600"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden gap-2 md:flex">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href="/"
              locale={lang.code}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                locale === lang.code
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-300 text-zinc-600 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              {lang.label}
            </Link>
          ))}
        </div>

        <button className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 md:hidden">
          Menu
        </button>
      </div>
    </header>
  );
}