import React, { useState } from "react";
import SingleBestScore from "./SingleBestScore";
interface Score {
  score: number;
  rank: number;
  userid: string;
  image: any;
}

const BestScores = () => {
  const [scores, setScores] = useState<Score[]>([
    {
      score: 1560,
      rank: 2,
      userid: "2614h4345",
      image: "/assets/32.png",
    },
    {
      score: 26770,
      rank: 1,
      userid: "65478hr234",
      image: "/assets/31.png",
    },
    {
      score: 1819,
      rank: 3,
      userid: "4183hr987",
      image: "/assets/30.png",
    },
  ]);

  return scores ? (
    <div className="  max-sm:grid max-sm:grid-flow-col max-sm:grid-rows-3 flex p-5 max-lg:justify-center justify-between flex-wrap items-end gap-10 lg:h-screen md:px-15">
      {scores.map((score: Score, index) => {
        return <SingleBestScore score={score} key={index} />;
      })}
    </div>
  ) : (
    <div>scores not valid</div>
  );
};

export default BestScores;
