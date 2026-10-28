'use client'

import { useState } from 'react'
import ProductItem from './product-item'
import ProductSort, { type ProductSortOrder } from './product-sort'
import type { Product } from './product-types'

type ProductListProps = {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
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
      <ProductSort value={sortOrder} onChange={setSortOrder} />

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
