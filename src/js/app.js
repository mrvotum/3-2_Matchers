const playersArr = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

export default function playersSort(playersArr) {
  function compareHealth(playerA, playerB) { // Как сортировать
    return playerA.health - playerB.health;
  }

  playersArr.sort(compareHealth);

  // for (let i = 0; i < playersArr.length; i++) {
  //   console.log(playersArr[i]);
  // }
  
  return `${playersArr[0].name}, ${playersArr[1].name}, ${playersArr[2].name}`;
  // Нужно только для тестов
}

// console.log(playersSort(playersArr));
