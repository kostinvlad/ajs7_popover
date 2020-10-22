export function sysAffiliation(number) {
  switch (parseInt(number[0])) {
    case 5: {
      document.getElementById('pic_card').classList.remove('visa');
      document.getElementById('pic_card').classList.add('mc');

      break;
    }
    case 4: {
      document.getElementById('pic_card').classList.add('visa');
      document.getElementById('pic_card').classList.remove('mc');
      break;
    }
    default: {
      break;
    }
  }
}
