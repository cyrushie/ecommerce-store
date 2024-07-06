"use client";

import { cn } from "@/lib/utils";
import { Tab } from "@headlessui/react";
import { Image as ImageType } from "@/types";
import Image from "next/image";

interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab = ({ image }: GalleryTabProps) => {
  console.log(image, "heelo there");
  return (
    <Tab className="relative flex items-center justify-center rounded-md bg-white aspect-square cursor-pointer">
      {/* <span className="aspect-square rounded-md overflow-hidden w-full h-full  inset-0">
        <Image
          src={image.imageUrl}
          width={299}
          height={299}
          alt=""
          className="object-cover object-center w-full h-full"
        />
      </span> */}
      {({ selected }) => (
        <div>
          <span className="aspect-square rounded-md overflow-hidden w-full h-full  inset-0">
            <Image
              src={image.imageUrl}
              width={299}
              height={299}
              alt=""
              className="object-cover object-center w-full h-full"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 ring-2 rounded-md ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
