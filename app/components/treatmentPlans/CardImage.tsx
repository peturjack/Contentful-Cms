import Image from "next/image";
import React from "react";
type Props = {
  src: string;
};
const CardImage = ({ src }: Props) => {
  return (
    <Image
      priority={true}
      width={2000}
      height={2000}
      className="h-[400px] 2xl:h-[600px] object-cover object-[50%_35%] w-full rounded-lg brightness-[0.7]"
      src={src}
      alt=""
    />
  );
};

export default CardImage;
