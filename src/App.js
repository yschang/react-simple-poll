import * as React from "react";
import { useState } from "react";
import SimplePoll from "./lib/components/SimplePoll";

function App() {
  const pollData = {
    title: "What is the best burger?",
    options: [
      { text: "In-N-Out", votes: 6 },
      { text: "Burger King", votes: 2 },
      { text: "McDonald's", votes: 3 },
    ],
  };

  const { title, options } = pollData;
  const [isVoted, setIsVoted] = useState(false);

  console.log({ title });

  return (
    <SimplePoll
      title={title}
      options={options}
      isVoted={isVoted}
      onVoted={setIsVoted}
    />
  );
}

export default App;
