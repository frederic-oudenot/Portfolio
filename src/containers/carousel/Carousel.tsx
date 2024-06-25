import SliderButton from "@/components/buttons/SliderButton";
import Image from "next/image";

export default function Carousel({ projectImage }: any) {
  return (
    <section id="carousel" className="flex relative w-full h-96 bg-slate-600">
      <SliderButton
        handleClickOpenSession={() => true}
        direction="left"
        positionX={20}
        top={150}
        color={"red"}
        label={"<"}
      />

      {projectImage.map((img: string, index: number) => (
        <Image
          key={index}
          width={500}
          height={100}
          className={"rounded-lg"}
          src={img}
          alt={img}
        />
      ))}
      <SliderButton
        handleClickOpenSession={() => true}
        direction="right"
        positionX={20}
        top={150}
        color={"red"}
        label={">"}
      />
    </section>
  );
}
