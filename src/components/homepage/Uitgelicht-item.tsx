import Image from 'next/image'
import Link from 'next/link'

type FeaturedProductProps = {
  products_name: string
  product_details: string
  product_price: string
}

export default function UitgelichtItem({
  products_name,
  product_details,
  product_price,
}: FeaturedProductProps) {
  return (
    <article
      className="
      flex w-full flex-col gap-3 bg-[#1e1e28] p-4
      sm:min-h-90 sm:p-4
      md:min-h-96 md:p-5
      lg:min-h-103.75 lg:p-5
      "
    >
      <div
        className="
        relative h-40 w-full overflow-hidden bg-[#121218]
        sm:h-44
        md:h-48
        lg:h-50
        "
      >
        <Image
          src="/Placeholder/285x200.webp"
          alt={products_name}
          fill
          sizes="(max-width: 767px) 100vw, 25vw"
          className="object-cover"
        />
      </div>

      <div
        className="
        flex flex-col gap-1.5
        sm:gap-1.5
        md:gap-2
        lg:gap-2
        "
      >
        <h3
          className="
          truncate text-[16px] font-bold text-white
          sm:text-[16px]
          md:text-[17px]
          lg:text-[18px]
          "
        >
          {products_name}
        </h3>

        <p
          className="
          truncate text-[13px] text-white opacity-60
          sm:text-[13px]
          md:text-[14px]
          lg:text-[14px]
          "
        >
          {product_details}
        </p>

        <p
          className="
          text-[18px] font-extrabold text-white
          sm:text-[18px]
          md:text-[19px]
          lg:text-[20px]
          "
        >
          {product_price}
        </p>
      </div>

      <Link
        href="/producten"
        className="
        mt-auto flex w-full items-center justify-center bg-[#5e6ad2] px-4 py-3 text-[14px] font-bold text-white transition hover:bg-[#707dea]
        sm:py-3
        md:py-3
        lg:py-3
        "
      >
        Bekijk
      </Link>
    </article>
  )
}
