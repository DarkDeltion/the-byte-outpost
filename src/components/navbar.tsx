'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      id="navbar"
      className="
      w-full border-b border-[#171717] bg-[#121218]
      "
    >
      <div
        className="
        flex h-16 w-full items-center justify-between px-4
        sm:h-16 sm:px-6
        md:h-18 md:px-8
        lg:h-18 lg:px-10
        "
      >
        <Link
          href="/"
          id="navbar-logo"
          className="
          flex items-center
          sm:flex
          md:flex
          lg:flex
          "
        >
          <Image
            src="/Placeholder/24x24.webp"
            alt="The Byte Outpost logo"
            width={24}
            height={24}
            className="
            mr-2 h-5 w-5
            sm:h-5 sm:w-5
            md:h-6 md:w-6
            lg:h-6 lg:w-6
            "
          />

          <h2
            className="
            whitespace-nowrap text-[18px] font-extrabold text-white
            sm:text-[18px]
            md:text-[20px]
            lg:text-[20px]
            "
          >
            The Byte Outpost
          </h2>
        </Link>

        <div
          id="navbar-links"
          className="
          hidden items-center gap-8
          sm:hidden
          md:hidden
          lg:flex
          "
        >
          <Link
            href="/"
            className="
            text-[15px] font-bold text-[#5e6ad2] underline
            sm:text-[15px]
            md:text-[15px]
            lg:text-[15px]
            "
          >
            Home
          </Link>

          <Link
            href="/producten"
            className="
            text-[15px] text-white
            sm:text-[15px]
            md:text-[15px]
            lg:text-[15px]
            "
          >
            Producten
          </Link>

          <Link
            href="/over-ons"
            className="
            text-[15px] text-white
            sm:text-[15px]
            md:text-[15px]
            lg:text-[15px]
            "
          >
            Over Ons
          </Link>

          <Link
            href="/contact"
            className="
            text-[15px] text-white
            sm:text-[15px]
            md:text-[15px]
            lg:text-[15px]
            "
          >
            Contact
          </Link>
        </div>

        <Link
          href="/winkelwagen"
          id="navbar-cart"
          className="
          hidden items-center gap-2
          sm:hidden
          md:hidden
          lg:flex
          "
        >
          <Image
            src="/Placeholder/24x24.webp"
            alt="Winkelwagen"
            width={18}
            height={18}
          />

          <span
            className="
            whitespace-nowrap text-[15px] font-medium text-white
            sm:text-[15px]
            md:text-[15px]
            lg:text-[15px]
            "
          >
            Winkelwagen (0)
          </span>
        </Link>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="
          flex h-10 w-10 items-center justify-center rounded-xl bg-[#1e1e28]
          sm:flex
          md:flex
          lg:hidden
          "
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="
          border-t border-[#171717] bg-[#121218] px-4 pb-4
          sm:px-6
          md:px-8
          lg:hidden
          "
        >
          <div
            className="
            flex flex-col pt-2
            sm:pt-2
            md:pt-3
            lg:pt-3
            "
          >
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="
              border-b border-[#1e1e28] py-3 text-[15px] font-bold text-[#5e6ad2]
              sm:py-3
              md:py-4
              lg:py-4
              "
            >
              Home
            </Link>

            <Link
              href="/producten"
              onClick={() => setMenuOpen(false)}
              className="
              border-b border-[#1e1e28] py-3 text-[15px] text-white
              sm:py-3
              md:py-4
              lg:py-4
              "
            >
              Producten
            </Link>

            <Link
              href="/over-ons"
              onClick={() => setMenuOpen(false)}
              className="
              border-b border-[#1e1e28] py-3 text-[15px] text-white
              sm:py-3
              md:py-4
              lg:py-4
              "
            >
              Over Ons
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="
              border-b border-[#1e1e28] py-3 text-[15px] text-white
              sm:py-3
              md:py-4
              lg:py-4
              "
            >
              Contact
            </Link>

            <Link
              href="/winkelwagen"
              onClick={() => setMenuOpen(false)}
              className="
              flex items-center gap-2 py-3 text-[15px] font-medium text-white
              sm:py-3
              md:py-4
              lg:py-4
              "
            >
              <Image
                src="/Placeholder/24x24.webp"
                alt="Winkelwagen"
                width={18}
                height={18}
              />

              <span>Winkelwagen (0)</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

function MenuIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
