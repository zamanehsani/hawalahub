import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="bg-gray-light dark:bg-gray-dark flex flex-wrap items-center justify-center rounded-xs px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center py-[15px] sm:w-1/2 md:w-1/5 lg:w-1/6">
      <h3 className="rounded-full border bg-slate-700 px-5 text-2xl font-semibold text-white">
        {name}
      </h3>
      {/* <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      > */}
      {/* <Image src={imageLight} alt={name} fill className="hidden dark:block" />*/}
      {/* <Image src={image} alt={name} fill className="block dark:hidden" />  */}
      {/* </a> */}
    </div>
  );
};
