import * as React from "react";
import { useState } from "react";
import randomColor from "randomcolor";

const SimplePoll = ({ title, options, isVoted, onVoted, barColor = null }) => {
  const [pollOptions, setPollOptions] = useState(options);

  const vote = (index) => {
    if (!isVoted) {
      options[index].votes++;
      setPollOptions(options);
      onVoted(true);
    }
  };

  const getTotalVotes = () => {
    let count = 0;
    for (let i = 0; i < pollOptions.length; ++i) {
      count += pollOptions[i].votes;
    }

    return count;
  };

  const getBarWidth = (votes) => {
    const totalVotes = getTotalVotes();
    const votesPercentage = (votes / totalVotes) * 100;
    return `${votesPercentage}%`;
  };

  console.log({ barColor });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h3>{title}</h3>
      {pollOptions.map((element, index) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            margin: "10px",
          }}
          key={index}
        >
          <div
            style={{
              width: "50%",
              alignSelf: "center",
            }}
          >
            <b
              style={{ cursor: isVoted ? "default" : "pointer" }}
              onClick={() => vote(index)}
            >
              {element.text}
            </b>
          </div>
          <div style={{ width: "50%" }}>
            <div
              style={{
                backgroundColor: isVoted
                  ? barColor === null
                    ? randomColor({
                        luminosity: "light",
                        hue: "hsla",
                      })
                    : barColor
                  : "transparent",
                width: getBarWidth(element.votes),
                padding: "3px",
              }}
            >
              {isVoted && <span>{element.votes}</span>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimplePoll;
