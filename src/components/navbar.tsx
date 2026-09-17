import Image from 'next/image'

export default function Navbar() {
  return (
    <div id="navbar" className='flex bg-[#121218] w-auto h-15'>
      <div id="navbar-logo" className='flex items-center ml-10'>
        <Image src="/Placeholder/24x24.webp" alt="placeholder" width={24} height={24} className='mr-2' />
        <h2 className='ml-2'>The Byte Outpost</h2>
      </div>
      <div id="navbar-links" className='flex items-center ml-auto mr-auto '>
        <a href="." className='mx-3'>Home</a>
        <a href="." className='mx-3'>Producten</a>
        <a href="." className='mx-3'>Over Ons</a>
        <a href="." className='mx-3'>Contact</a>
      </div>
      <div id="navbar-cart" className='flex items-center mr-10'>
        <Image src="/Placeholder/24x24.webp" alt="placeholder" width={24} height={24} className='mr-2' />
        <a href="." className='ml-2'>Winkelwagen</a>
      </div>
    </div>
  );
}
