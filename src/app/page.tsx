import Image from 'next/image';

import Navbar from '../components/navbar';
import CategoryItem from '../components/homepage/catergorie-item';
import UitgelichtItem from '../components/homepage/Uitgelicht-item';

export default function Home() {
  return (
    <div id="main" className="min-h-screen bg-[#111116] text-white">
      <Navbar />

      <main className="mx-auto w-full max-w-350 px-8">
        <section
          id="Header"
          className="grid items-center gap-16 py-20 md:grid-cols-2"
        >
          <div id="Header-text">
            <h1 className="text-5xl font-bold tracking-tight">
              Welkom bij the byte outpost
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400">
              De beste elektronica voor de beste prijs. Plain, basic en
              functioneel, zonder onnodige opsmuk. Direct geleverd uit eigen
              voorraad.
            </p>

            <a
              href="/producten"
              className="mt-7 inline-block bg-[#626fd8] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#707dea]"
            >
              Bekijk Producten
            </a>
          </div>

          <div className="relative h-80 w-full bg-[#20202a]">
            <Image
              src="/Placeholder/600x340.webp"
              alt="Elektronica"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </section>

        <section id="Content-Categories" className="py-8">
          <h2 className="mb-6 text-2xl font-bold">Categorieën</h2>

          <div
            id="Categories"
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            <CategoryItem
              products_aantal={120}
              products_name="Telefoons"
            />
            <CategoryItem
              products_aantal={85}
              products_name="Tablets"
            />
            <CategoryItem
              products_aantal={150}
              products_name="Laptops"
            />
            <CategoryItem
              products_aantal={95}
              products_name="Computers"
            />
          </div>
        </section>

        <section id="Content-Uitgelicht" className="py-8">
          <h2 className="mb-6 text-2xl font-bold">
            Uitgelichte producten
          </h2>

          <div
            id="Uitgelicht"
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            <UitgelichtItem
              products_name="MacBook Air M3"
              product_details="13.6 inch Retina · 8GB · 256GB SSD"
              product_price="€1.299"
            />

            <UitgelichtItem
              products_name="Samsung Galaxy S24"
              product_details="6.2 inch AMOLED · 128GB"
              product_price="€899"
            />

            <UitgelichtItem
              products_name='iPad Pro 13"'
              product_details="Apple M4 chip · Ultra Retina XDR"
              product_price="€1.199"
            />

            <UitgelichtItem
              products_name="Gaming PC Elite"
              product_details="RTX 4080 · Intel i9 · 32GB RAM"
              product_price="€2.499"
            />
          </div>
        </section>
      </main>

      <footer
        id="footer"
        className="mx-auto mt-12 grid w-full max-w-350 gap-10 border-t border-[#25252f] px-8 py-12 text-sm text-gray-400 md:grid-cols-3"
      >
        <div id="footer-content">
          <h3 className="mb-3 text-base font-bold text-white">
            the byte outpost
          </h3>
          <p>
            Uw no-nonsense winkel voor betrouwbare en betaalbare elektronica.
          </p>
        </div>

        <div id="footer-links">
          <h3 className="mb-3 text-base font-bold text-white">Links</h3>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-[#7b87ee] hover:text-white">
              Privacybeleid
            </a>
            <a href="#" className="text-[#7b87ee] hover:text-white">
              Voorwaarden
            </a>
            <a href="#" className="text-[#7b87ee] hover:text-white">
              Contact
            </a>
          </div>
        </div>

        <div id="footer-contact">
          <h3 className="mb-3 text-base font-bold text-white">
            Contactgegevens
          </h3>
          <p>Adres: revelingseweg 4 8191 KR Wapenveld</p>
          <p>Email: info@thebyteoutpost.nl</p>
          <p>Tel: 012-345678</p>
        </div>

        <p className="text-center text-xs text-gray-600 md:col-span-3">
          © 2024 The Byte Outpost | Alle rechten voorbehouden.
        </p>
      </footer>
    </div>
  );
}
