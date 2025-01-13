import React from "react";
import { useParams } from "react-router-dom";

export const IdeaItems = () => {
  const { ideaRoom } = useParams();

  const images = {
    bedroom: [
      "bedroom_1_1.jpeg",
      "bedroom_1_10.jpeg",
      "bedroom_1_11.jpeg",
      "bedroom_1_12.jpeg",
      "bedroom_1_13.jpeg",
      "bedroom_1_14.jpeg",
      "bedroom_1_15.jpeg",
      "bedroom_1_16.jpeg",
      "bedroom_1_17.jpeg",
      "bedroom_1_2.jpeg",
      "bedroom_1_3.jpeg",
      "bedroom_1_4.jpeg",
      "bedroom_1_5.jpeg",
      "bedroom_1_6.jpeg",
      "bedroom_1_7.jpeg",
      "bedroom_1_8.jpeg",
      "bedroom_1_9.jpeg"
    ]
  };

  const filteredIdea = images[ideaRoom] || [];

  return (
    <>
      <div className="ideas-hero-container">
        <h3 className="mr-tb-40 ">
          We provide wide range of bedroom Interiors.
        </h3>
        <p>Choose from the wide range of interiors</p>

        <div className="ideas-container mr-tb-40 ">
          {filteredIdea.length
            ? filteredIdea.map((image, i) => {
                return (
                  <div className="idea-image">
                    <img
                      src={require(`../assets/images/BEDROOM/${image}`)}
                      alt={`bedrooms_${i}`}
                      key={i}
                      className="image"
                    />
                  </div>
                );
              })
            : "Interiors for selected Ideas are loading"}
        </div>
      </div>
    </>
  );
};
