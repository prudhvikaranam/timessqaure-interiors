import React from "react";
import { useParams } from "react-router-dom";

export const IdeaItems = () => {
  const { ideaRoom } = useParams();
  return (
    <>
      <h1>{ideaRoom} Items</h1>
    </>
  );
};
