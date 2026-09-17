import Image from 'next/image'

// components
import Navbar from '../components/navbar'
import CategoryItem from '../components/homepage/catergorie-item'
import UitgelichtItem from '../components/homepage/Uitgelicht-item'


export default function Home() {
  return (
    <div id="main">
      <Navbar />
      <div id="Content">
        <div id="Header" className='flex mx-15 mt-15 mb-10'>
          <div id="Header-text" className='flex-1'>
            <h1>Welkom bij The Byte Outpost</h1>
            <p>De beste elektronica voor de beste prijs. Plain, Basic en functioneel, zonder onnodige opsmuk. Direct geleverd uit eigen voorraad.</p>
            <div id="Header-button">
              <a href=".">Bekijk Producten</a>
            </div>
          </div>
          <div id="Header-image">
            <Image src="/Placeholder/600x340.webp" alt="placeholder" width={600} height={340} loading='eager'/>
          </div>
        </div>

        <div id="Content-Categories">
          <h2>Categorieën</h2>
          <div id="Categories">
            <CategoryItem
              products_aantal={120}
              products_name="Telefoons"
            />
            <CategoryItem
              products_aantal={85}
              products_name="Tablets"
            />
            <CategoryItem
              products_aantal={150}
              products_name="Laptops"
            />
            <CategoryItem
              products_aantal={95}
              products_name="Computers"
            />
          </div>
        </div>

        <div id="Content-Uitgelicht">
          <h2>Uitgelicht</h2>
          <div id="Uitgelicht">
            <UitgelichtItem
              products_name="MacBook Air M3"
              product_details="13.6 inch Retina - 8 GB - 256 GB SSD"
            />
            <UitgelichtItem
              products_name="Samsung Galaxy S24"
              product_details="6.2 inch AMOLED - 128 GB"
            />
            <UitgelichtItem
              products_name="Samsung Galaxy S24"
              product_details="6.2 inch AMOLED - 128 GB"
            />
          </div>
        </div>
      </div>
      <div id="footer">
        <div id="footer-content">
          <h3>the byte outpost</h3>
          <p>Uw no-nonsense winkel voor betrouwbare en betaalbare elektronica.</p>
        </div>
        <div id="footer-links">
          <p>links</p>
          <a href="#">Privacybeleid</a>
          <a href="#">Voorwaarden</a>
          <a href="#">Contact</a>
        </div>
        <div id="footer-contact">
          <p>contactgegevens</p>
          <p>Adres: revelingseweg 4 8191 KR Wapenveld</p>
          <p>Email: info@thebyteoutpost.nl</p>
          <p>Telefoon: 012-345678</p>
        </div>
      </div>
    </div>
  );
}
