import { Inter } from 'next/font/google'

import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import ValueItem from '../../components/over-ons/value-item'
import TeamItem from '../../components/over-ons/team-item'

const inter = Inter({ subsets: ['latin'] })

export default function OverOns() {
  return (
    <div
      id="main"
      className={`
      ${inter.className} min-h-screen bg-[#121218] leading-[normal] text-white
      `}
    >
      <Navbar
        activePage="over-ons"
        brandName="the byte outpost"
      />

      <main id="Content" className="w-full">
        {/* Header */}
        <section className="w-full border-b border-[#171717]">
          <div
            className="
            mx-auto w-full max-w-360 p-5
            sm:px-6
            md:px-8
            lg:px-10 lg:py-6
            "
          >
            <h1
              className="
              text-[28px] font-extrabold
              lg:text-[32px]
              "
            >
              <span className="lg:hidden">Over TechWinkel</span>
              <span className="hidden lg:inline">Over the byte outpost</span>
            </h1>
          </div>
        </section>

        {/* History */}
        <section
          id="Content-History"
          className="
          mx-auto flex w-full max-w-360 flex-col gap-4 p-5
          sm:px-6
          md:px-8
          lg:p-10
          "
        >
          <h2
            className="
            text-[20px] font-extrabold
            lg:text-[22px]
            "
          >
            Onze Historie &amp; Missie
          </h2>

          <p className="text-[16px] opacity-80">
            TechWinkel is opgericht in 2018 met een duidelijk doel voor ogen:
            kwalitatieve en functionele elektronica toegankelijk maken voor
            iedereen, zonder ingewikkelde marketing of overbodige details. Wij
            houden van een no-nonsense aanpak. Bij ons vindt u simpelweg
            betrouwbare producten voor een eerlijke, transparante prijs.
          </p>

          <p className="text-[16px] opacity-80">
            Dankzij ons ruime assortiment en nauwe banden met leveranciers kunnen
            we snel schakelen en bestellingen vaak al de volgende dag gratis
            thuisbezorgen. Onze winkel staat voor betrouwbaarheid, functionaliteit
            en transparantie.
          </p>
        </section>

        {/* Values */}
        <section
          id="Content-Values"
          aria-label="Onze voordelen"
          className="
          mx-auto w-full max-w-360 p-5
          sm:px-6
          md:px-8
          lg:p-10
          "
        >
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-5">
            <ValueItem
              title="Gratis Verzending"
              description="Voor alle bestellingen boven de €50."
              image="/images/icons/truck.webp"
            />

            <ValueItem
              title="2 Jaar Garantie"
              description="Standaard garantie op het gehele assortiment."
              image="/images/icons/shield-check.webp"
            />

            <ValueItem
              title="Klantenservice"
              description="Antwoord binnen 24 uur op al uw vragen."
              image="/images/icons/headset.webp"
            />
          </div>
        </section>

        {/* Team */}
        <section
          id="Content-Team"
          className="
          mx-auto flex w-full max-w-360 flex-col gap-4 p-5
          sm:px-6
          md:px-8
          lg:gap-6 lg:p-10
          "
        >
          <h2
            className="
            text-[20px] font-extrabold
            lg:text-[22px]
            "
          >
            Ons Team
          </h2>

          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-5">
            <TeamItem
              name="Johan Bakker"
              role="Oprichter"
              image="/images/team/johan-bakker.webp"
            />
            <TeamItem
              name="Lieke de Jong"
              role="Klantenservice"
              image="/images/team/lieke-de-jong.webp"
            />
            <TeamItem
              name="Mark van Dijk"
              role="Technisch Adviseur"
              image="/images/team/mark-van-dijk.webp"
            />
          </div>
        </section>
      </main>

      <Footer email="info@byteoutpost.nl" copyrightName="the byte outpost" />
    </div>
  )
}
