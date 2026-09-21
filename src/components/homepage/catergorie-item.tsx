import Image from 'next/image';

type CategoryCardProps = {
  products_aantal: number;
  products_name: string;
};

export default function CategoryItem({
  products_aantal,
  products_name,
}: CategoryCardProps) {
  return (
    <article className="flex min-h-[250px] flex-col bg-[#20202a] p-4">
      <div className="relative h-[175px] overflow-hidden bg-[#111116]">
        <Image
          src="/Placeholder/285x285.webp"
          alt={products_name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <h3 className="text-sm font-bold text-white">
          {products_name}
        </h3>

        <p className="mt-1 text-xs text-gray-500">
          {products_aantal} producten
        </p>

        <a
          href="/producten"
          className="mt-auto pt-4 text-xs text-[#7b87ee] hover:text-white"
        >
          Bekijk →
        </a>
      </div>
    </article>
  );
}
