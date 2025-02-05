import React from "react";
interface Score {
  score: number;
  rank: number;
  userid: string;
  image: any;
}
const myStyle = {
  clipPath: " polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
  backgroundImage:
    "linear-gradient(to bottom, rgba(255,0,0,0) , rgba(217,238,250,255)",
};

const bestsAssets = [
  { image: "/assets/gold-medal-1.png", text: "نفر اول" },
  { image: "/assets/silver-medal-1.png", text: "نفر دوم" },
  { image: "/assets/bronze-medal-1.png", text: "نفر سوم" },
];

const SingleBestScore = ({ score }: { score: Score }) => {
  return (
    <div
      key={score.userid}
      className={`flex flex-col min-w-max gap-5  ${
        score.rank - 1 == 0 && "max-sm:col-start-1 lg:self-start "
      }`}
    >
      <div className=" flex justify-between p-4 items-center gap-2">
        <img src={score.image} alt="image" className="w-[100px] " />
        <div>
          <h2 className="text-2xl font-bold">{score.userid}</h2>
          <h3 className="text-gray-500">{score.score}</h3>
        </div>
      </div>
      <div>
        <div className="mt-[-30px]" style={myStyle}>
          &nbsp;
        </div>
        <div className="bg-gradient-to-b from-[rgba(195,217,229,255)] from-10% via-[rgba(225,237,244,255)] via-50% to-[rgba(242,248,253,255)] to-90% h-[300px] flex flex-col items-center ">
          <div>
            <img
              className="w-[100px]"
              src={bestsAssets[score.rank - 1].image}
              alt="medal_img"
            />
          </div>
          <p className="[text-shadow:_3px_3px_3px_rgb(0_0_0_/_0.5)]  text-xl md:text-2xl leading-snug font-manrope font-extrabold">
            {bestsAssets[score.rank - 1].text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBestScore;
