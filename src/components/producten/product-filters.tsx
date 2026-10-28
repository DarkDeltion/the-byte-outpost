import type { ReactNode } from 'react'
import PriceRange, { type PriceRange as PriceRangeValue } from './price-range'

type ProductFiltersProps = {
  categories: string[]
  brands: string[]
  selectedCategories: string[]
  selectedBrands: string[]
  onCategoriesChange: (categories: string[]) => void
  onBrandsChange: (brands: string[]) => void
  maxPrice: number
  priceRange: PriceRangeValue
  onPriceChange: (range: PriceRangeValue) => void
  hasActiveFilters: boolean
  onReset: () => void
}

function FilterGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details open className="group min-w-0 self-start border-b border-white/10 pb-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[14px] font-bold text-white/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5e6ad2] [&::-webkit-details-marker]:hidden">
        {title}
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180"
        >
          <path d="m5 7.5 5 5 5-5" />
        </svg>
      </summary>
      <div className="pt-4">{children}</div>
    </details>
  )
}

function CheckboxOptions({
  title,
  options,
  selected,
  onChange,
}: {
  title: string
  options: string[]
  selected: string[]
  onChange: (selected: string[]) => void
}) {
  return (
    <fieldset className="flex min-w-0 flex-col gap-2">
      <legend className="sr-only">{title}</legend>
      {options.map((option) => (
        <label key={option} className="flex cursor-pointer items-center gap-2 text-[14px] text-white/70">
          <input
            type="checkbox"
            checked={selected.includes(option)}
            aria-controls="Products"
            onChange={(event) => onChange(event.target.checked
              ? [...selected, option]
              : selected.filter((value) => value !== option))}
            className="h-4 w-4 shrink-0 cursor-pointer accent-[#5e6ad2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5e6ad2]"
          />
          {option}
        </label>
      ))}
    </fieldset>
  )
}

export default function ProductFilters({
  categories,
  brands,
  selectedCategories,
  selectedBrands,
  onCategoriesChange,
  onBrandsChange,
  maxPrice,
  priceRange,
  onPriceChange,
  hasActiveFilters,
  onReset,
}: ProductFiltersProps) {
  return (
    <aside id="Filters" aria-labelledby="filters-heading" className="flex flex-col gap-5 sm:gap-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 id="filters-heading" className="text-[18px] font-extrabold">Filters</h2>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onReset}
            className="text-[12px] text-white/70 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5e6ad2]"
          >
            Wis filters
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-3 md:grid-cols-1">
        <FilterGroup title="Categorie">
          <CheckboxOptions
            title="Categorie"
            options={categories}
            selected={selectedCategories}
            onChange={onCategoriesChange}
          />
        </FilterGroup>

        <FilterGroup title="Prijs">
          <PriceRange maxPrice={maxPrice} value={priceRange} onChange={onPriceChange} />
        </FilterGroup>

        <FilterGroup title="Merk">
          <CheckboxOptions
            title="Merk"
            options={brands}
            selected={selectedBrands}
            onChange={onBrandsChange}
          />
        </FilterGroup>
      </div>
    </aside>
  )
}
