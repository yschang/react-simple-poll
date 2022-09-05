<!-- # react-simple-poll -->

# react-simple-poll

<b>react-simple-poll</b> is a simple poll component.

# ![](sample.png)

## Install

### NPM

```bash
npm i --save react-simple-poll
```

## Usage

```ts
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

```

## Options

You can pass an options object to influence the type of color it produces. The options object accepts the following properties:

```title``` – Required. Title of the poll.

```options``` – Required. List of options for the poll. Need to use the following format for JSON object: ```[{"text": "In-N-Out", votes: 6}, {"text": "Burger King", votes: 2}, ...]```

```isVoted``` – Required. User will be able to vote if set to ```false```. Otherwise, user won't be able to vote.

```onVoted``` - Required. Action to take when user votes.

```barColor``` – Optional. Specifies the color of each bar. Otherwise, by default, the color of each bar is randomized.
