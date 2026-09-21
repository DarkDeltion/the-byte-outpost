import Image from 'next/image';

type FeaturedProductProps = {
  products_name: string;
  product_details: string;
  product_price: string;
};

export default function UitgelichtItem({
  products_name,
  product_details,
  product_price,
}: FeaturedProductProps) {
  return (
    <article className="flex min-h-62.5 flex-col bg-[#20202a] p-4">
      <div className="relative h-43.75 overflow-hidden bg-[#111116]">
        <Image
          src="/Placeholder/285x200.webp"
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
          {product_details}
        </p>

        <p className="mt-4 text-lg font-bold text-white">
          {product_price}
        </p>

        <a
          href="/producten"
          className="mt-3 block bg-[#626fd8] py-3 text-center text-xs font-bold text-white transition hover:bg-[#707dea]"
        >
          Bekijk
        </a>
      </div>
    </article>
  );
}
