import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const TopicRepos = () => {
  const { name } = useParams();

  return (
    <div>
      <h3>Topic repository</h3>
      <p>Topic name: {name}</p>
    </div>
  );
};
