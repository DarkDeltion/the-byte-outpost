'use client'

import { useState } from 'react'
import ProductFilters from './product-filters'
import ProductList from './product-list'
import type { PriceRange } from './price-range'
import type { Product } from './product-types'

export default function ProductCatalog({ products }: { products: Product[] }) {
  const maxPrice = products.reduce((highest, product) => Math.max(highest, product.price), 0)
  const [priceRange, setPriceRange] = useState<PriceRange>([0, maxPrice])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])

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

  function resetFilters() {
    setSelectedCategories([])
    setSelectedBrands([])
    setPriceRange([0, maxPrice])
  }

  return (
    <>
      <ProductFilters
        categories={categories}
        brands={brands}
        selectedCategories={selectedCategories}
        selectedBrands={selectedBrands}
        onCategoriesChange={setSelectedCategories}
        onBrandsChange={setSelectedBrands}
        maxPrice={maxPrice}
        priceRange={priceRange}
        onPriceChange={setPriceRange}
        hasActiveFilters={hasActiveFilters}
        onReset={resetFilters}
      />
      <ProductList products={filteredProducts} />
    </>
  )
}
