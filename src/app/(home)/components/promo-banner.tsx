import Image from "next/image";

interface BannerProps {
  src: string;
  alt: string;
}
const PromoBanner = ({ src, alt }: BannerProps) => {
  return (
    <Image
      src={src}
      height={0}
      width={0}
      alt={alt}
      sizes="100vw"
      className="my-8 h-auto w-full px-8"
    />
  );
};

export default PromoBanner;
