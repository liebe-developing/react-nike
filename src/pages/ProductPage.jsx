import { useParams } from "react-router-dom";
import { products } from "../constants";
import { useEffect } from "react";

const ProductPage = () => {
  const { productName } = useParams();
  const product = products.find((product) => product.name === productName);
  const { imgURL, name, price, description } = product;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="max-container flex max-lg:flex-col padding-x padding-y gap-10 max-sm:py-28">
      <div>
        <img src={imgURL} alt={`${name} shoe`} width={500} height={500} />
      </div>
      <div className="max-w-3xl">
        <h3 className="mt-2 text-4xl max-sm:text-3xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
          {price}
        </p>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-8 text-justify">
          {description}
        </p>
      </div>
    </section>
  );
};

export default ProductPage;
