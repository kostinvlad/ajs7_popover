export default function Moon(cardNumber) {
  if (cardNumber === '') {
    return false;
  }
  const arr = [];
  var cardNumber = cardNumber.toString();
  for (let i = 0; i < cardNumber.length; i++) {
    if (i % 2 === 0) {
      const m = parseInt(cardNumber[i]) * 2;
      if (m > 9) {
        arr.push(m - 9);
      } else if (isNaN(m) || m === '' || m === 0) {
        return false;
      } else {
        arr.push(m);
      }
    } else {
      const n = parseInt(cardNumber[i]);
      arr.push(n);
    }
  }
  // console.log(arr);
  const summ = arr.reduce((a, b) => a + b);
  return Boolean(!(summ % 10));
}
