"use client";

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Color, Size } from "@/types";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import React, { useState } from "react";
import Filter from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilteres: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  return (
    <>
      <Button
        className="flex items-center gap-2 lg:hidden"
        onClick={onOpen}
      >
        Filters
        <Plus className="h-4 w-4 text-white" />
      </Button>

      <Dialog
        open={open}
        as="div"
        onClose={onClose}
        className="relative lg:hidden z-40"
      >
        <div className="fixed bg-black opacity-25 inset-0"></div>
        <div className="fixed inset-0 z-40 flex h-full w-full">
          <DialogPanel
            transition
            className="max-w-xs flex flex-col shadow-xl p-4 pb-6 w-full h-full bg-white overflow-y-auto ml-auto "
          >
            {/* Close button */}
            <div className="flex items-center justify-end">
              <IconButton
                icon={<X size={15} />}
                onClick={onClose}
              />
            </div>
            <div className="pt-4">
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
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilteres;
