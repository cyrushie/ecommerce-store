import { Product } from "@/types";
import { create } from "zustand";

interface usePreviewModalStore {
  open: boolean;
  onOpen: (data: Product) => void;
  onClose: () => void;
  data: Product | undefined;
}

export const usePreviewModal = create<usePreviewModalStore>((set) => ({
  open: false,
  data: undefined,
  onOpen: (data: Product) => set({ data: data, open: true }),
  onClose: () => set({ open: false }),
}));
