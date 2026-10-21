export default function ProductFilters() {
  return (
    <aside
      id="Filters"
      aria-labelledby="filters-heading"
      className="
      flex flex-col gap-5
      sm:gap-6
      md:gap-6
      lg:gap-6
      "
    >
      <h2
        id="filters-heading"
        className="
        text-[18px] font-extrabold
        "
      >
        Filters
      </h2>

      {/* De filters zijn voorlopig alleen visueel en daarom uitgeschakeld. */}
      <div
        className="
        grid grid-cols-1 gap-6
        sm:grid-cols-3 sm:gap-6
        md:grid-cols-1 md:gap-10
        lg:gap-10
        "
      >
        {/* Categorie */}
        <fieldset
          disabled
          className="
          min-w-0
          "
        >
          <legend
            className="
            mb-3 text-[14px] font-bold text-white/80
            "
          >
            Categorie
          </legend>

          <div
            className="
            flex flex-col gap-2
            "
          >
            <label
              className="
              flex items-center gap-2 text-[14px] text-white/70
              "
            >
              <input
                type="checkbox"
                className="
                h-4 w-4 appearance-none border border-white/50 bg-transparent
                "
              />
              Telefoons
            </label>

            <label
              className="
              flex items-center gap-2 text-[14px] text-white/70
              "
            >
              <input
                type="checkbox"
                className="
                h-4 w-4 appearance-none border border-white/50 bg-transparent
                "
              />
              Tablets
            </label>

            <label
              className="
              flex items-center gap-2 text-[14px] text-white/70
              "
            >
              <input
                type="checkbox"
                className="
                h-4 w-4 appearance-none border border-white/50 bg-transparent
                "
              />
              Laptops
            </label>

            <label
              className="
              flex items-center gap-2 text-[14px] text-white/70
              "
            >
              <input
                type="checkbox"
                className="
                h-4 w-4 appearance-none border border-white/50 bg-transparent
                "
              />
              Computers
            </label>
          </div>
        </fieldset>

        {/* Prijs */}
        <fieldset
          disabled
          className="
          min-w-0
          "
        >
          <legend
            className="
            mb-3 text-[14px] font-bold text-white/80
            "
          >
            Prijs
          </legend>

          <div
            className="
            flex flex-col gap-2
            "
          >
            <label
              className="
              flex items-center gap-2 text-[14px] text-white/70
              "
            >
              <input
                type="checkbox"
                className="
                h-4 w-4 appearance-none border border-white/50 bg-transparent
                "
              />
              €0 - €500
            </label>

            <label
              className="
              flex items-center gap-2 text-[14px] text-white/70
              "
            >
              <input
                type="checkbox"
                className="
                h-4 w-4 appearance-none border border-white/50 bg-transparent
                "
              />
              €500 - €1000
            </label>

            <label
              className="
              flex items-center gap-2 text-[14px] text-white/70
              "
            >
              <input
                type="checkbox"
                className="
                h-4 w-4 appearance-none border border-white/50 bg-transparent
                "
              />
              €1000 - €2000
            </label>

            <label
              className="
              flex items-center gap-2 text-[14px] text-white/70
              "
            >
              <input
                type="checkbox"
                className="
                h-4 w-4 appearance-none border border-white/50 bg-transparent
                "
              />
              €2000+
            </label>
          </div>
        </fieldset>

        {/* Merk */}
        <fieldset
          disabled
          className="
          min-w-0
          "
        >
          <legend
            className="
            mb-3 text-[14px] font-bold text-white/80
            "
          >
            Merk
          </legend>

          <div
            className="
            flex flex-col gap-2
            "
          >
            <label
              className="
              flex items-center gap-2 text-[14px] text-white/70
              "
            >
              <input
                type="checkbox"
                className="
                h-4 w-4 appearance-none border border-white/50 bg-transparent
                "
              />
              Apple
            </label>

            <label
              className="
              flex items-center gap-2 text-[14px] text-white/70
              "
            >
              <input
                type="checkbox"
                className="
                h-4 w-4 appearance-none border border-white/50 bg-transparent
                "
              />
              Samsung
            </label>

            <label
              className="
              flex items-center gap-2 text-[14px] text-white/70
              "
            >
              <input
                type="checkbox"
                className="
                h-4 w-4 appearance-none border border-white/50 bg-transparent
                "
              />
              Lenovo
            </label>

            <label
              className="
              flex items-center gap-2 text-[14px] text-white/70
              "
            >
              <input
                type="checkbox"
                className="
                h-4 w-4 appearance-none border border-white/50 bg-transparent
                "
              />
              HP
            </label>

            <label
              className="
              flex items-center gap-2 text-[14px] text-white/70
              "
            >
              <input
                type="checkbox"
                className="
                h-4 w-4 appearance-none border border-white/50 bg-transparent
                "
              />
              ASUS
            </label>
          </div>
        </fieldset>
      </div>
    </aside>
  )
}
