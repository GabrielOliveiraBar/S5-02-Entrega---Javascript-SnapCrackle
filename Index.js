function snapCrackle(maxValue) {

  let counter = []
  for (let i = 1; i <= maxValue; i++) {


    if (i % 2 !== 0 && i % 5 == 0) {
      counter.push("SnapCrackle")
    }
    else if (i % 2 !== 0) {
      counter.push("snap")


    }
    else if (i % 5 == 0) {
      counter.push("Crackle")
    } else {
      counter.push(i)
    }

  }
  counter = `${counter}`
  return counter 



}
snapCrackle(20)