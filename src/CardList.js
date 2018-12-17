import React from "react";

const initRobot = (robots, func) => {
  console.log("go to here");
  return robots.map(element => {
    return (
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw shadow-5">
        <button onClick={func(element.id)} className="br-pill fr w-30">
          delete
        </button>
        <img alt="robots" src={`https://robohash.org/${element.id}?200x200`} />
        <div>
          <h2>{element.name}</h2>
          <p>{element.email}</p>
        </div>
      </div>
    );
  });
};

export default initRobot;
