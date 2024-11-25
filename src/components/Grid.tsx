import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/data";

function Grid() {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map(({id,description,title,className,img,imgClassName,spareImg,titleClassName}) => {
          return (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              titleClassName={titleClassName}
              imgClassName={imgClassName}
              spareImg={spareImg}
            />
          );
        })}
      </BentoGrid>
    </section>
  );
}

export default Grid;
