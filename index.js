// Code your solutions in this file

function writeCards(cards,gift) {
  const newArr = [];
  for (let i = 0; i < cards.length; i++) {
    newArr.push(`Thank you, ${cards[i]}, for the wonderful ${gift}!`);
  }

  return newArr;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");
