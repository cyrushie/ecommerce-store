import { Product } from "@/types";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { X } from "lucide-react";
import React, { Fragment } from "react";
import IconButton from "./icon-button";

interface PreviewModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ open, onClose, children }: PreviewModalProps) => {
  return (
    <Transition
      as={Fragment}
      appear
      show={open}
    >
      <Dialog
        as="div"
        className="relative z-10"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black opacity-25" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex justify-center items-center min-h-full text-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-3xl overflow-hidden rounded-lg align-middle">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <div className="absolute top-4 right-4">
                    <IconButton
                      onClick={onClose}
                      icon={<X size={15} />}
                    />
                  </div>
                  {children}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
