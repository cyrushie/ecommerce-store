"use client";

import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import { Image as ImageType } from "@/types";
import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: ImageType[];
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <TabGroup className="flex flex-col-reverse">
      <div className="mt-10 hidden sm:block max-w-2xl lg:max-w-none mx-auto">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab
              key={image.id}
              image={image}
            />
          ))}
        </TabList>
      </div>
      <TabPanels className="aspect-square w-full ">
        {images.map((image) => (
          <TabPanel key={image.id}>
            <div className="aspect-square sm:rounded-lg relative w-full h-full overflow-hidden">
              <Image
                src={image.imageUrl}
                alt="image"
                fill
                className="object-cover object-center"
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;
