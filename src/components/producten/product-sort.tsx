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
    <div className="mb-6 hidden items-center justify-end gap-3 lg:flex">
      <label htmlFor="product-sort" className="text-[14px] font-bold text-white/80">
        Sorteren op
      </label>
      <select
        id="product-sort"
        value={value}
        onChange={(event) => onChange(event.target.value as ProductSortOrder)}
        aria-controls="Products"
        className="cursor-pointer border border-white/20 bg-[#1e1e28] px-4 py-3 text-[14px] text-white scheme-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5e6ad2]"
      >
        <option value="popular">Populair</option>
        <option value="name-asc">Naam: A–Z</option>
        <option value="name-desc">Naam: Z–A</option>
        <option value="price-asc">Prijs: laag naar hoog</option>
        <option value="price-desc">Prijs: hoog naar laag</option>
      </select>
    </div>
  )
}
