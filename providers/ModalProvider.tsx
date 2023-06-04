"use client";

import { useEffect, useState } from "react";
import AuthModel from "@/components/AuthModel";
import UploadModal from "@/components/UploadModal";
import SubscribeModal from "@/components/SubscribeModal";

import { ProductWithPrice } from "@/types";

interface ModalProviderProps {
  products: ProductWithPrice[];
}

const ModalProvider: React.FC<ModalProviderProps> = ({
  products
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModel/>
      <UploadModal/>
      <SubscribeModal products={products} />
    </>
  );
}

export default ModalProvider;
