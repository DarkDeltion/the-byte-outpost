type ValueItemProps = {
  title: string
  description: string
}

export default function ValueItem({ title, description }: ValueItemProps) {
  return (
    <article
      className="
      flex w-full flex-col gap-3 bg-[#1e1e28] p-5
      lg:p-6
      "
    >
      <div aria-hidden="true" className="h-10 w-10 shrink-0 bg-[#121218]" />

      <h3 className="text-[18px] font-bold text-white">
        {title}
      </h3>

      <p className="text-[14px] text-white opacity-70">
        {description}
      </p>
    </article>
  )
}
