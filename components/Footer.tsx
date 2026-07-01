export default function Footer() {
  return (
    <footer className="bg-black px-6 py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-white/10 pt-10 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            GIDFY <span className="text-amber-500">LAB</span>
          </h2>

          <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
            Global Ingredient Distribution For You.
            <br />
            A B2B bridge for global fragrance ingredients.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-zinc-400">
          <a href="#why" className="transition hover:text-amber-500">
            Why GIDFY
          </a>
          <a href="#partner" className="transition hover:text-amber-500">
            Partner
          </a>
          <a href="#contact" className="transition hover:text-amber-500">
            Contact
          </a>
        </div>

        <p className="text-sm text-zinc-600">
          © 2026 GIDFY LAB. All rights reserved.
        </p>
      </div>
    </footer>
  );
}