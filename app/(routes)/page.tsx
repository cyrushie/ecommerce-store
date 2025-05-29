import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { getBillboard } from "@/data/billboards";
import { getAllProducts } from "@/data/products";

const HomePage = async () => {
  const products = await getAllProducts({ isFeatured: true });
  const billboards = await getBillboard("e73b1f56-9bd3-4137-905e-b6b75e6fb3ff");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />
        <div className="px-4 flex flex-col sm:px-6 lg:px-8 gap-y-8">
          <ProductList
            title="Featured Products"
            products={products}
          />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
