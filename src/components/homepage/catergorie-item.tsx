import Image from 'next/image'

type CategoryCardProps = {
  products_aantal: number;
  products_name: string;
};

export default function CategoryItem({
  products_aantal,
  products_name,
}: CategoryCardProps) {
  return (
    <div id="Category-tab">
      <div id="Category-image">
        <Image src="/Placeholder/285x285.webp" alt="placeholder" width={285} height={285} />
      </div>
      <div id="Category-text">
        <h4>{products_name}</h4>
        <p>{products_aantal} producten</p>
      </div>
      <div id="Category-button">
        <a href=".">Bekijk</a>
      </div>
    </div>
  );
}
