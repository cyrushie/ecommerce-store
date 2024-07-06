import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import { getCategory } from "@/data/categories";
import { getAllColors } from "@/data/colors";
import { getAllProducts } from "@/data/products";
import { getAllSizes } from "@/data/sizes";
import React from "react";
import Filter from "./_components/filter";
import NoResults from "@/components/ui/no-results.";
import ProductCard from "@/components/ui/product-card";
import MobileFilteres from "./_components/mobile-filters";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getAllProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const colors = await getAllColors();
  const sizes = await getAllSizes();
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-6">
            <MobileFilteres
              sizes={sizes}
              colors={colors}
            />
            <div className="hidden lg:block">
              <Filter
                valueKey="sizeId"
                name="Size"
                data={sizes}
              />
              <Filter
                valueKey="colorId"
                name="Color"
                data={colors}
              />
            </div>

            <div className="mt-6 lg:col-span-4 lg:mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.length === 0 && <NoResults />}
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
