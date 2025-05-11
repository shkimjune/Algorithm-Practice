function bowlingScore(frames) {
  const framesArray = frames.split(" ");
  const scoreStack = [];
  let totalScore = 0;

  framesArray.forEach(frames => {
    frames.split("").forEach(rollChar => {
      if (rollChar === "X") {
        scoreStack.push(10);
      } else if (rollChar === "/") {
        const previousScore = scoreStack[scoreStack.length - 1];

        scoreStack.push(10 - previousScore);
      } else {
        scoreStack.push(parseInt(rollChar));
      }
    });
  });

  let rollIndex = 0;

  for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (scoreStack[rollIndex] === 10) {
      const bonus = scoreStack[rollIndex + 1] + scoreStack[rollIndex + 2];

      totalScore += 10 + bonus;
      rollIndex++;
    } else if (scoreStack[rollIndex] + scoreStack[rollIndex + 1] === 10) {
      const bonus = scoreStack[rollIndex + 2];

      totalScore += 10 + bonus;
      rollIndex += 2;
    } else {
      totalScore += scoreStack[rollIndex] + scoreStack[rollIndex + 1];
      rollIndex += 2;
    }
  }

  return totalScore;
}
