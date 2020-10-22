import Moon from '../js/luna';

export class Validator {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `<form id="form">
        <div id="pic_card"></div>
        <label>
          <input id="input" type="number" placeholder="Type card number">
          <submit id="verify">Verify</submit>
        </label>
      </form>`;
  }

  static get inputSelector() {
    return '[id=input]';
  }

  static get submitSelector() {
    return '[id=verify]';
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const submit = this.parentEl.querySelector(this.constructor.submitSelector);
    submit.addEventListener('click', (event) => {
      this.onSubmit(event);
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const inputEl = this.parentEl.querySelector(this.constructor.inputSelector);
    if (Moon(inputEl.value)) {
      inputEl.classList.add('valid');
    } else {
      inputEl.classList.add('invalid');
    }
  }
}
