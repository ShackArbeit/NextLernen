import { Metadata } from "next";
type Props = {
  params: {
    productsID: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${params.productsID}`);
    }, 1000)
  });
  return {
    title: ` ${title}`,
  };
};

const ProductsList = ({ params }: Props) => {
  return <div>ProductsList Details {params.productsID}</div>;
};

export default ProductsList;
