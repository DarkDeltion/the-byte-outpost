import Image from 'next/image'

type TeamItemProps = {
  name: string
  role: string
  image: string
}

export default function TeamItem({ name, role, image }: TeamItemProps) {
  return (
    <article
      className="
      flex w-full flex-col items-center gap-4 bg-[#1e1e28] p-5
      "
    >
      <Image
        src={image}
        alt={`Portret bij ${name}`}
        width={140}
        height={140}
        className="h-35 w-35 shrink-0 object-cover"
      />

      <div className="flex w-full flex-col gap-1 text-center">
        <h3 className="text-[18px] font-bold text-white">
          {name}
        </h3>

        <p className="text-[14px] text-[#a1a5ff]">
          {role}
        </p>
      </div>
    </article>
  )
}
