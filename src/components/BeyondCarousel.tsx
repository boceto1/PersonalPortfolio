/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BeyondCard } from "./BeyondCard";
import { activities } from "../data";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const BeyondCarousel = () => {

  return (
    <div
      sx={{
        margin: "1rem",
        alignItems: "center",
        marginBottom: '0px'
      }}
    >
        <Carousel
          responsive={responsive}
          infinite
        >
          {activities.map((activity) => (
            <BeyondCard
              img={activity.path}
              description={activity.description}
            />
          ))}
        </Carousel>
    </div>
  );
};
