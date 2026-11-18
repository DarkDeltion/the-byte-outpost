import Image from 'next/image'

type ValueItemProps = {
  title: string
  description: string
  image: string
}

export default function ValueItem({ title, description, image }: ValueItemProps) {
  return (
    <article
      className="
      flex w-full flex-col gap-3 bg-[#1e1e28] p-5
      lg:p-6
      "
    >
      <Image
        src={image}
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 object-contain"
      />

      <h3 className="text-[18px] font-bold text-white">
        {title}
      </h3>

      <p className="text-[14px] text-white opacity-70">
        {description}
      </p>
    </article>
  )
}
