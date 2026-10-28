'use client'

import { useState } from 'react'
import ProductItem from './product-item'
import ProductSort, { type ProductSortOrder } from './product-sort'
import type { Product } from './product-types'

type ProductListProps = {
  products: Product[]
  onOpenFilters: () => void
  filtersOpen: boolean
  activeFilterCount: number
}

export default function ProductList({ products, onOpenFilters, filtersOpen, activeFilterCount }: ProductListProps) {
  const [sortOrder, setSortOrder] = useState<ProductSortOrder>('popular')
  const sortedProducts = [...products]

  switch (sortOrder) {
    case 'name-asc':
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name, 'nl', { sensitivity: 'base' }))
      break
    case 'name-desc':
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name, 'nl', { sensitivity: 'base' }))
      break
    case 'price-asc':
      sortedProducts.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      sortedProducts.sort((a, b) => b.price - a.price)
      break
    // Until popularity data is available, the catalog order is the recommended order.
    case 'popular':
      break
  }

  return (
    <div className="min-w-0">
      <div className="mb-4 flex items-center gap-2 md:mb-6 md:justify-end">
        <button
          type="button"
          onClick={onOpenFilters}
          aria-haspopup="dialog"
          aria-controls="mobile-filters-dialog"
          aria-expanded={filtersOpen}
          className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg border border-white/20 bg-[#1e1e28] px-3 text-[13px] font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5e6ad2] md:hidden"
        >
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
            <path d="M3 5h14M3 10h14M3 15h14M7 3v4m6 1v4m-6 1v4" />
          </svg>
          Filters
          {activeFilterCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#5e6ad2] px-1 text-[11px]">
              <span className="sr-only">Actief: </span>{activeFilterCount}
            </span>
          )}
        </button>
        <ProductSort value={sortOrder} onChange={setSortOrder} />
      </div>

      <p role="status" className="sr-only">
        {sortedProducts.length} producten gevonden
      </p>

      {sortedProducts.length === 0 && (
        <p className="bg-[#1e1e28] p-6 text-[14px] text-white/80">
          Geen producten gevonden. Pas je filters of prijsbereik aan.
        </p>
      )}

      <div
        id="Products"
        className="
        grid grid-cols-1 gap-3
        sm:grid-cols-2 sm:gap-4
        md:grid-cols-2 md:gap-5
        lg:grid-cols-4 lg:gap-5
        "
      >
        {sortedProducts.map((product) => (
          <ProductItem
            key={product.id}
            name={product.name}
            details={product.details}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  )
}
