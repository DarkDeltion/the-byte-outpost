import Image from 'next/image'

type ProductItemProps = {
  name: string
  details: string
  price: number
  image: string
}

export default function ProductItem({
  name,
  details,
  price,
  image,
}: ProductItemProps) {
  return (
    <article
      className="
      flex min-w-0 w-full flex-col gap-3 bg-[#1e1e28] p-4
      sm:p-4
      md:p-4
      lg:p-4
      "
    >
      <div
        className="
        relative h-48 w-full overflow-hidden bg-[#121218]
        sm:h-52
        md:h-56
        lg:h-60
        "
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 35vw, (max-width: 1439px) 20vw, 240px"
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
        <h2
          title={name}
          className="
          truncate text-[16px] font-bold text-white
          sm:text-[16px]
          md:text-[17px]
          lg:text-[18px]
          "
        >
          {name}
        </h2>

        <p
          title={details}
          className="
          truncate text-[13px] text-white opacity-60
          sm:text-[13px]
          md:text-[14px]
          lg:text-[14px]
          "
        >
          {details}
        </p>

        <p
          className="
          text-[18px] font-extrabold text-white
          sm:text-[18px]
          md:text-[19px]
          lg:text-[20px]
          "
        >
          €{price.toLocaleString('nl-NL')}
        </p>
      </div>

      {/* De winkelwagen wordt later aangesloten. */}
      <button
        type="button"
        disabled
        aria-label={`${name} in winkelwagen (binnenkort beschikbaar)`}
        className="
        mt-auto flex w-full items-center justify-center bg-[#5e6ad2] px-2 py-3 text-[14px] font-bold text-white
        sm:py-3
        md:py-3
        lg:py-3
        "
      >
        In Winkelwagen
      </button>
    </article>
  )
}
