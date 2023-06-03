"use client";

import { useEffect, useState } from "react";
import AuthModel from "@/components/AuthModel";
import UploadModal from "@/components/UploadModal";

// import SubscribeModal from "@/components/SubscribeModal";
// import UploadModal from "@/components/UploadModal";
// import { ProductWithPrice } from "@/types";

// interface ModalProviderProps {
//   products: ProductWithPrice[];
// }

const ModalProvider = () => {
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
      {/* <AuthModal />
      <SubscribeModal products={products} />
      <UploadModal /> */}
    </>
  );
}

export default ModalProvider;
