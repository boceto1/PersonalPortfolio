/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BeyondCard } from "./BeyondCard";
import { activities } from "../data";

export const BeyondCarousel = () => {
  return (
    <div
      sx={{
        margin: "1rem",
        border: "1px solid white",
        display: "grid",
        gridTemplateColumns: "30px 1fr 30px",
        alignItems: "center",
      }}
    >
      <FontAwesomeIcon
        icon={["fas", "chevron-left"]}
        sx={{ color: "secondary" }}
        size="2x"
      />
      <div sx={{
        display: 'flex',
        flexFlow: ['colum nowrap', 'row nowrap', 'row nowrap']}}>
        {activities.slice(3).map(activity => 
          <BeyondCard img={activity.path} description={activity.description} />
        )}
      </div>
      <FontAwesomeIcon
        icon={["fas", "chevron-right"]}
        sx={{ color: "secondary", marginRight: "10rem" }}
        size="2x"
      />
    </div>
  );
};
