import Image from 'next/image'

type CategoryCardProps = {
  product_details: string;
  products_name: string;
};

export default function UitgelichtItem({
  products_name,
  product_details,
}: CategoryCardProps) {
  return (
    <div id="Uitgelicht-item">
      <div id="Uitgelicht-image">
        <Image src="/Placeholder/285x200.webp" alt="placeholder" width={285} height={200} />
      </div>
      <div id="Uitgelicht-text">
        <h4>{products_name}</h4>
        <p>{product_details}</p>
      </div>
      <div id="Uitgelicht-button">
        <a href=".">Bekijk</a>
      </div>
    </div>
  );
}
