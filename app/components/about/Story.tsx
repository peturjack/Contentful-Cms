import Image from "next/image";
import React from "react";
type Props = {
  about: React.ReactNode;
  image: string;
};
const Story = ({ about, image }: Props) => {
  return (
    <section className=" my-8 gap-4">
      <div
        className="prose-lg max-w-screen-xl mx-auto prose-p:text-gray-600
       prose-headings:font-semibold prose-headings:mt-0
       prose-headings:mb-2"
      >
        {about}
      </div>
      <Image
        className="rounded-lg w-full h-[300px] md:h-[600px] brightness-[0.7]
        mt-8 object-[50%_15%] object-cover"
        height={1000}
        width={1000}
        alt="the about image"
        src={image}
      />
    </section>
  );
};

export default Story;
