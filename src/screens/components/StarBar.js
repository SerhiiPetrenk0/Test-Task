import React from "react";
import { BsStarFill } from "react-icons/bs";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

export const StarBar = (props) => {

    const stars = Array(5).fill(0)
    const { count } = props
    return (
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <BsStarFill
                key={index}
                size={20}
                color={count > index ? colors.orange : colors.grey}
                style={{
                  marginRight: 5,
                  cursor: "pointer"
                }}
              />
            )
          })}
        </div>

    );
}

const styles = {
    stars: {
      display: "flex",
      flexDirection: "row",
    },
  };