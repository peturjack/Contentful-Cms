import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="flex gap-4 px-6 bg-gray-100">
      <div className="flex-1 bg-gray-300 animate-pulse h-[300] rounded-lg"></div>
      <div className="flex-1 bg-gray-300 animate-pulse h-[300] rounded-lg"></div>
      <div className="flex-1 bg-gray-300 animate-pulse h-[300] rounded-lg"></div>
    </div>
  );
};

export default ProductCardSkeleton;
