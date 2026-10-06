import Image from 'next/image'
import Link from 'next/link'

import Navbar from '../components/navbar'
import CategoryItem from '../components/homepage/catergorie-item'
import UitgelichtItem from '../components/homepage/Uitgelicht-item'

export default function Home() {
  return (
    <div
      id="main"
      className="
      min-h-screen bg-[#121218] text-white
      "
    >
      <Navbar />

      <main className="w-full">
        {/* Header */}
        <section
          id="Header"
          className="
          mx-auto flex w-full max-w-360 flex-col gap-5 px-4 py-6
          sm:gap-6 sm:px-6 sm:py-8
          md:grid md:grid-cols-2 md:items-center md:gap-8 md:px-8 md:py-10
          lg:grid-cols-[720px_1fr] lg:gap-10 lg:px-10
          "
        >
          <div
            id="Header-text"
            className="
            flex w-full flex-col gap-4
            sm:gap-5
            md:gap-5
            lg:gap-6
            "
          >
            <h1
              className="
              text-[36px] leading-10 font-extrabold
              sm:text-[40px] sm:leading-11
              md:text-[44px] md:leading-13
              lg:text-[48px] lg:leading-14.5
              "
            >
              Welkom bij the byte outpost
            </h1>

            <p
              className="
              w-full text-[16px] leading-6 text-white opacity-70
              sm:max-w-xl
              md:max-w-full
              lg:max-w-180
              "
            >
              De beste elektronica voor de beste prijs. Plain, basic en
              functioneel, zonder onnodige opsmuk. Direct geleverd uit eigen
              voorraad.
            </p>

            <Link
              href="/producten"
              className="
              flex w-full items-center justify-center bg-[#5e6ad2] px-6 py-4 text-[16px] font-bold text-white transition hover:bg-[#707dea]
              sm:w-fit
              md:w-fit
              lg:w-fit
              "
            >
              Bekijk Producten
            </Link>
          </div>

          <div
            className="
            relative h-55 w-full overflow-hidden bg-[#1e1e28]
            sm:h-65
            md:h-72
            lg:h-85
            "
          >
            <Image
              src="/Placeholder/600x340.webp"
              alt="Elektronica"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 600px"
              className="object-cover"
            />
          </div>
        </section>

        {/* Categories */}
        <section
          id="Content-Categories"
          className="
          mx-auto flex w-full max-w-360 flex-col gap-4 px-4 py-6
          sm:gap-5 sm:px-6 sm:py-8
          md:gap-5 md:px-8 md:py-10
          lg:gap-6 lg:px-10
          "
        >
          <h2
            className="
            text-[24px] font-extrabold
            sm:text-[24px]
            md:text-[24px]
            lg:text-[24px]
            "
          >
            Categorieën
          </h2>

          <div
            id="Categories"
            className="
            grid grid-cols-2 gap-3
            sm:grid-cols-2 sm:gap-4
            md:grid-cols-2 md:gap-5
            lg:grid-cols-4 lg:gap-5
            "
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

        {/* Featured */}
        <section
          id="Content-Uitgelicht"
          className="
          mx-auto flex w-full max-w-360 flex-col gap-4 px-4 py-6
          sm:gap-5 sm:px-6 sm:py-8
          md:gap-5 md:px-8 md:py-10
          lg:gap-6 lg:px-10
          "
        >
          <h2
            className="
            text-[24px] font-extrabold
            sm:text-[24px]
            md:text-[24px]
            lg:text-[24px]
            "
          >
            Uitgelichte producten
          </h2>

          <div
            id="Uitgelicht"
            className="
            grid grid-cols-1 gap-3
            sm:grid-cols-2 sm:gap-4
            md:grid-cols-2 md:gap-5
            lg:grid-cols-4 lg:gap-5
            "
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

      {/* Footer */}
      <footer
        id="footer"
        className="
        mx-auto mt-6 flex w-full max-w-360 flex-col gap-4 border-t border-[#171717] px-4 py-6 text-white
        sm:gap-6 sm:px-6 sm:py-8
        md:grid md:grid-cols-2 md:gap-8 md:px-8 md:py-10
        lg:mt-0 lg:grid-cols-[400px_200px_300px] lg:justify-between lg:gap-10 lg:px-10
        "
      >
        <div
          id="footer-content"
          className="
          flex flex-col gap-2
          sm:gap-2
          md:gap-2
          lg:gap-2
          "
        >
          <h3
            className="
            text-[20px] font-extrabold text-white
            sm:text-[20px]
            md:text-[20px]
            lg:text-[20px]
            "
          >
            the byte outpost
          </h3>

          <p
            className="
            text-[14px] text-white opacity-70
            sm:text-[14px]
            md:text-[14px]
            lg:text-[14px]
            "
          >
            Uw no-nonsense winkel voor betrouwbare en betaalbare elektronica.
          </p>
        </div>

        <div
          id="footer-links"
          className="
          flex flex-col gap-2
          sm:gap-2
          md:gap-2
          lg:gap-2
          "
        >
          <h3
            className="
            text-[14px] font-bold text-white
            sm:text-[14px]
            md:text-[14px]
            lg:text-[14px]
            "
          >
            Links
          </h3>

          <div
            className="
            flex flex-col gap-2
            sm:gap-2
            md:gap-2
            lg:gap-2
            "
          >
            <a
              href="#"
              className="
              text-[14px] text-[#a1a5ff] transition hover:text-white
              sm:text-[14px]
              md:text-[14px]
              lg:text-[14px]
              "
            >
              Privacybeleid
            </a>

            <a
              href="#"
              className="
              text-[14px] text-[#a1a5ff] transition hover:text-white
              sm:text-[14px]
              md:text-[14px]
              lg:text-[14px]
              "
            >
              Voorwaarden
            </a>

            <Link
              href="/contact"
              className="
              text-[14px] text-[#a1a5ff] transition hover:text-white
              sm:text-[14px]
              md:text-[14px]
              lg:text-[14px]
              "
            >
              Contact
            </Link>
          </div>
        </div>

        <div
          id="footer-contact"
          className="
          flex flex-col gap-2
          sm:gap-2
          md:gap-2
          lg:gap-2
          "
        >
          <h3
            className="
            text-[14px] font-bold text-white
            sm:text-[14px]
            md:text-[14px]
            lg:text-[14px]
            "
          >
            Contactgegevens
          </h3>

          <p
            className="
            text-[13px] text-white
            sm:text-[13px]
            md:text-[13px]
            lg:text-[13px]
            "
          >
            Adres: Revelingseweg 4 8191 KR Wapenveld
          </p>

          <p
            className="
            text-[13px] text-white
            sm:text-[13px]
            md:text-[13px]
            lg:text-[13px]
            "
          >
            E-mail: info@thebyteoutpost.nl
          </p>

          <p
            className="
            text-[13px] text-white
            sm:text-[13px]
            md:text-[13px]
            lg:text-[13px]
            "
          >
            Tel: 012-345678
          </p>
        </div>

        <div
          className="
          w-full border-t border-[#171717] pt-4
          sm:pt-4
          md:col-span-2 md:mt-2
          lg:col-span-3 lg:mt-2
          "
        >
          <p
            className="
            text-center text-[12px] text-white opacity-50
            sm:text-center
            md:text-left
            lg:text-left
            "
          >
            © 2024 The Byte Outpost | Alle rechten voorbehouden.
          </p>
        </div>
      </footer>
    </div>
  )
}
