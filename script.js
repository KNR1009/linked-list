function diceStreakGamble(player1, player2, player3, player4) {
  const score = [
    consecutiveWalk(player1),
    consecutiveWalk(player2),
    consecutiveWalk(player3),
    consecutiveWalk(player4),
  ];

  let maxScore = score[0].length;
  let index = 0;

  for (let i = 0; i < score.length; i++) {
    if (score.length > maxScore) {
      maxScore = score.length;
      index = i;
    }
  }
  return `Winner: Player ${index + 1} won $${maxScore * 4} by rolling [${
    scores[index]
  }]`;
}

// 連続で続いた配列を返す
function consecutiveWalk(arr) {
  stack = [];
  stack.push(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (stack[stack.length - 1] > arr[i]) {
      // popはO(1)でできる
      while (stack.pop() != undefined);
    }
    stack.push(arr[i]);
  }

  return stack;
}
