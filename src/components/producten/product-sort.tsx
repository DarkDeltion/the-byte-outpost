export type ProductSortOrder =
  | 'popular'
  | 'name-asc'
  | 'name-desc'
  | 'price-asc'
  | 'price-desc'

type ProductSortProps = {
  value: ProductSortOrder
  onChange: (value: ProductSortOrder) => void
}

export default function ProductSort({ value, onChange }: ProductSortProps) {
  return (
    <div className="flex min-w-0 flex-1 items-center justify-end gap-3 md:flex-none">
      <label htmlFor="product-sort" className="sr-only text-[14px] font-bold text-white/80 md:not-sr-only">
        Sorteren op
      </label>
      <div className="relative min-w-0 flex-1 md:w-56 md:flex-none">
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-white/70 md:hidden">
          <path d="M6 3v14m-3-3 3 3 3-3M14 17V3m-3 3 3-3 3 3" />
        </svg>
        <select
          id="product-sort"
          value={value}
          onChange={(event) => onChange(event.target.value as ProductSortOrder)}
          aria-controls="Products"
          className="h-11 w-full min-w-0 cursor-pointer appearance-none rounded-lg border border-white/20 bg-[#1e1e28] pr-8 pl-9 text-[13px] text-white scheme-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5e6ad2] md:rounded-none md:pl-4 md:text-[14px]"
        >
          <option value="popular">Populair</option>
          <option value="name-asc">Naam: A–Z</option>
          <option value="name-desc">Naam: Z–A</option>
          <option value="price-asc">Prijs: laag–hoog</option>
          <option value="price-desc">Prijs: hoog–laag</option>
        </select>
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-white/70">
          <path d="m5 7.5 5 5 5-5" />
        </svg>
      </div>
    </div>
  )
}
