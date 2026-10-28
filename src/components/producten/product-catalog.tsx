'use client'

import { useEffect, useRef, useState } from 'react'
import ProductFilters from './product-filters'
import ProductList from './product-list'
import type { PriceRange } from './price-range'
import type { Product } from './product-types'

export default function ProductCatalog({ products }: { products: Product[] }) {
  const maxPrice = products.reduce((highest, product) => Math.max(highest, product.price), 0)
  const [priceRange, setPriceRange] = useState<PriceRange>([0, maxPrice])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [page, setPage] = useState(1)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (!filtersOpen) return
    const dialog = dialogRef.current
    if (!dialog) return

    // Start each visit to the popup with its filter groups collapsed.
    dialog.querySelectorAll('details').forEach((group) => { group.open = false })
    dialog.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const desktop = window.matchMedia('(min-width: 768px)')
    const closeOnDesktop = () => {
      if (desktop.matches) dialog.close()
    }
    desktop.addEventListener('change', closeOnDesktop)
    closeOnDesktop()

    return () => {
      desktop.removeEventListener('change', closeOnDesktop)
      document.body.style.overflow = previousOverflow
      if (dialog.open) dialog.close()
    }
  }, [filtersOpen])

  const categories = [...new Set(products.map((product) => product.category))]
  const brands = [...new Set(products.map((product) => product.brand))]
    .sort((a, b) => a.localeCompare(b, 'nl'))

  const filteredProducts = products.filter((product) => (
    (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
    (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
    product.price >= priceRange[0] && product.price <= priceRange[1]
  ))

  const hasActiveFilters = selectedCategories.length > 0 || selectedBrands.length > 0 ||
    priceRange[0] > 0 || priceRange[1] < maxPrice
  const activeFilterCount = selectedCategories.length + selectedBrands.length +
    Number(priceRange[0] > 0 || priceRange[1] < maxPrice)

  function resetFilters() {
    setSelectedCategories([])
    setSelectedBrands([])
    setPriceRange([0, maxPrice])
    setPage(1)
  }

  const filterProps = {
    categories,
    brands,
    selectedCategories,
    selectedBrands,
    onCategoriesChange: (categories: string[]) => {
      setSelectedCategories(categories)
      setPage(1)
    },
    onBrandsChange: (brands: string[]) => {
      setSelectedBrands(brands)
      setPage(1)
    },
    maxPrice,
    priceRange,
    onPriceChange: (range: PriceRange) => {
      setPriceRange(range)
      setPage(1)
    },
    hasActiveFilters,
    onReset: resetFilters,
  }

  return (
    <>
      <div className="hidden md:block">
        <ProductFilters {...filterProps} />
      </div>
      <ProductList
        products={filteredProducts}
        onOpenFilters={() => setFiltersOpen(true)}
        filtersOpen={filtersOpen}
        activeFilterCount={activeFilterCount}
        page={page}
        onPageChange={setPage}
      />
      <dialog
        ref={dialogRef}
        id="mobile-filters-dialog"
        aria-labelledby="mobile-filters-heading"
        onClose={() => setFiltersOpen(false)}
        onClick={(event) => {
          const bounds = event.currentTarget.getBoundingClientRect()
          if (event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom) {
            event.currentTarget.close()
          }
        }}
        className="fixed inset-0 m-auto max-h-[85dvh] w-[calc(100%_-_2rem)] max-w-md overflow-hidden rounded-2xl border border-white/15 bg-[#121218] p-0 text-white shadow-2xl backdrop:bg-black/70 md:hidden"
      >
        <div className="flex max-h-[85dvh] flex-col">
          <div className="overflow-y-auto p-5">
            <ProductFilters
              {...filterProps}
              idPrefix="mobile-filters"
              onClose={() => dialogRef.current?.close()}
            />
          </div>
          <div className="shrink-0 border-t border-white/10 p-4">
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="min-h-11 w-full rounded-lg bg-[#5e6ad2] px-4 py-3 text-[14px] font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5e6ad2]"
            >
              Toon {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'producten'}
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}
