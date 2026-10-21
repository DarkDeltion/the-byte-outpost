import Link from 'next/link'

export default function Footer() {
  return (
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
  )
}
