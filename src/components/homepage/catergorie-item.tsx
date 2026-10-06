import Image from 'next/image'
import Link from 'next/link'

type CategoryCardProps = {
  products_aantal: number
  products_name: string
}

export default function CategoryItem({
  products_aantal,
  products_name,
}: CategoryCardProps) {
  return (
    <article
      className="
      flex w-full flex-col gap-3 bg-[#1e1e28] p-4
      sm:min-h-80 sm:p-4
      md:min-h-92 md:p-5
      lg:min-h-104.25 lg:p-5
      "
    >
      <div
        className="
        relative h-30 w-full overflow-hidden bg-[#121218]
        sm:h-40
        md:h-52
        lg:h-71.25
        "
      >
        <Image
          src="/Placeholder/285x285.webp"
          alt={products_name}
          fill
          sizes="(max-width: 767px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      <div
        className="
        flex flex-col gap-1
        sm:gap-1
        md:gap-1
        lg:gap-1
        "
      >
        <h3
          className="
          text-[16px] font-bold text-white
          sm:text-[16px]
          md:text-[17px]
          lg:text-[18px]
          "
        >
          {products_name}
        </h3>

        <p
          className="
          text-[12px] text-white opacity-50
          sm:text-[12px]
          md:text-[13px]
          lg:text-[13px]
          "
        >
          {products_aantal} producten
        </p>
      </div>

      <Link
        href="/producten"
        className="
        mt-auto text-[12px] font-bold text-[#a1a5ff] transition hover:text-white
        sm:text-[12px]
        md:text-[13px]
        lg:text-[13px]
        "
      >
        Bekijk →
      </Link>
    </article>
  )
}
