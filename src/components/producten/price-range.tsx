import styles from './price-range.module.css'

export type PriceRange = [number, number]

type PriceRangeProps = {
  maxPrice: number
  value: PriceRange
  onChange: (value: PriceRange) => void
}

const formatPrice = (value: number) => `€${value.toLocaleString('nl-NL')}`

export default function PriceRange({ maxPrice, value, onChange }: PriceRangeProps) {
  const [min, max] = value
  const start = maxPrice > 0 ? (min / maxPrice) * 100 : 0
  const end = maxPrice > 0 ? (max / maxPrice) * 100 : 0

  return (
    <fieldset className="min-w-0">
      <legend className="sr-only">Prijsbereik</legend>

      <div className="flex justify-between gap-2 text-[14px] text-white/80">
        <span>Van <output htmlFor="price-min">{formatPrice(min)}</output></span>
        <span>Tot <output htmlFor="price-max">{formatPrice(max)}</output></span>
      </div>

      <div className="relative h-11">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-2.5 top-1/2 h-1 -translate-y-1/2 rounded-full bg-white/20">
          <div
            className="absolute h-full rounded-full bg-[#5e6ad2]"
            style={{ left: `${start}%`, right: `${100 - end}%` }}
          />
        </div>

        <input
          id="price-min"
          type="range"
          min={0}
          max={maxPrice}
          step={1}
          value={min}
          disabled={maxPrice === 0}
          aria-label="Minimumprijs"
          aria-valuemax={max}
          aria-valuetext={formatPrice(min)}
          aria-controls="Products"
          onChange={(event) => onChange([Math.min(Number(event.target.value), max), max])}
          className={styles.range}
          style={{ zIndex: min === maxPrice ? 2 : 0 }}
        />
        <input
          id="price-max"
          type="range"
          min={0}
          max={maxPrice}
          step={1}
          value={max}
          disabled={maxPrice === 0}
          aria-label="Maximumprijs"
          aria-valuemin={min}
          aria-valuetext={formatPrice(max)}
          aria-controls="Products"
          onChange={(event) => onChange([min, Math.max(Number(event.target.value), min)])}
          className={styles.range}
        />
      </div>

      <div aria-hidden="true" className="flex justify-between text-[12px] text-white/50">
        <span>{formatPrice(0)}</span>
        <span>{formatPrice(maxPrice)}</span>
      </div>
    </fieldset>
  )
}
