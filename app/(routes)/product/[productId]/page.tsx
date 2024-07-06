import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { getAllProducts, getProduct } from "@/data/products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getAllProducts({
    categoryId: product.category.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 py-10">
          <div className="lg:grid lg:grid-cols-2 lg:place-items-start gap-x-8">
            {/* Gallery */}
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:px-0 lg:mt-0 sm:mt-16 ">
              {/* info */}
              <Info data={product} />
            </div>
          </div>
          <hr />
          <ProductList
            title="Related items"
            products={suggestedProducts}
          />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
