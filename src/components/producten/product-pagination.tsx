type ProductPaginationProps = {
  page: number
  pageCount: number
  onPageChange: (page: number) => void
}

export default function ProductPagination({ page, pageCount, onPageChange }: ProductPaginationProps) {
  if (pageCount <= 1) return null

  let pages: (number | string)[]
  if (pageCount <= 5) {
    pages = Array.from({ length: pageCount }, (_, index) => index + 1)
  } else if (page <= 3) {
    pages = [1, 2, 3, 'end-gap', pageCount]
  } else if (page >= pageCount - 2) {
    pages = [1, 'start-gap', pageCount - 2, pageCount - 1, pageCount]
  } else {
    pages = [1, 'start-gap', page, 'end-gap', pageCount]
  }

  const buttonClass = 'flex h-11 min-w-9 items-center justify-center rounded-lg border border-white/20 px-2 text-[13px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5e6ad2]'

  return (
    <nav aria-label="Productpagina’s" className="mt-6 flex items-center justify-center gap-1 sm:gap-2">
      <button
        type="button"
        aria-label="Vorige pagina"
        aria-controls="Products"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className={`${buttonClass} gap-2 bg-[#1e1e28] enabled:hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35 lg:px-3`}
      >
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
          <path d="m12.5 5-5 5 5 5" />
        </svg>
        <span className="hidden lg:inline">Vorige</span>
      </button>

      {pages.map((number) => typeof number === 'number' ? (
        <button
          key={number}
          type="button"
          aria-label={`Pagina ${number}`}
          aria-current={number === page ? 'page' : undefined}
          aria-controls="Products"
          onClick={() => onPageChange(number)}
          className={`${buttonClass} ${number === page ? 'border-[#5e6ad2] bg-[#5e6ad2] font-bold' : 'bg-[#1e1e28] hover:bg-white/10'}`}
        >
          {number}
        </button>
      ) : (
        <span key={number} aria-hidden="true" className="flex h-11 w-5 items-center justify-center text-white/50">…</span>
      ))}

      <button
        type="button"
        aria-label="Volgende pagina"
        aria-controls="Products"
        disabled={page === pageCount}
        onClick={() => onPageChange(page + 1)}
        className={`${buttonClass} gap-2 bg-[#1e1e28] enabled:hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35 lg:px-3`}
      >
        <span className="hidden lg:inline">Volgende</span>
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
          <path d="m7.5 5 5 5-5 5" />
        </svg>
      </button>
    </nav>
  )
}
