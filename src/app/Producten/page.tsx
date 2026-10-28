import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import ProductCatalog from '../../components/producten/product-catalog'
import products from '../../data/products.json'

export default function Producten() {
  return (
    <div
      id="main"
      className="
      min-h-screen bg-[#121218] text-white
      "
    >
      <Navbar activePage="producten" />

      <main className="w-full">
        <section
          id="Content-Header"
          className="
          mx-auto w-full max-w-360 px-4 pt-6
          sm:px-6 sm:pt-8
          md:px-8 md:pt-10
          lg:px-10
          "
        >
          <h1
            className="
            text-[28px] font-extrabold
            sm:text-[30px]
            md:text-[32px]
            lg:text-[32px]
            "
          >
            Onze Producten
          </h1>
        </section>

        <section
          id="Content-Products"
          className="
          mx-auto grid w-full max-w-360 grid-cols-1 items-start gap-6 px-4 py-6
          sm:gap-8 sm:px-6 sm:py-8
          md:grid-cols-[220px_minmax(0,1fr)] md:gap-8 md:px-8 md:py-10
          lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10 lg:px-10
          "
        >
          <ProductCatalog products={products} />
        </section>
      </main>
      <Footer />
    </div>
  )
}
