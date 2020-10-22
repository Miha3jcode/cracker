class CrackerConstructor {
  constructor(crackerConstructor, grains) {
    this.crackerConstructor = crackerConstructor;
    this.grains = grains;

    this.inputs = grains
      .map(name => ({
        name,
        node: crackerConstructor.querySelector(`input[name=${name}]`),
        label: crackerConstructor.querySelector(`[data-grain-type=${name}]`),
        value: 0
      }));
    this._update();

    crackerConstructor.addEventListener('change', this._onChangeHandler.bind(this));
    crackerConstructor.addEventListener('input', this._onMoveThumbHandler.bind(this));
  }

  _onChangeHandler(event) {
    const { name, value } = event.target;

    const maxValue = this._getMaxInputValue(name);

    const newValue = value < maxValue ? value : maxValue;

    this._setValue(name, newValue);
    event.target.value = newValue;
    this._calcAndSetLastInputValue();
    this._update();
  }

  _onMoveThumbHandler(event) {
    const { name, value } = event.target;

    const maxValue = this._getMaxInputValue(name);

    const newValue = value < maxValue ? value : maxValue;

    event.target.value = newValue;
    this._updateLabel(name, newValue);
  }

  _update() {
    this.inputs.forEach(i => {
      i.node.value = i.value;
      i.label.innerHTML = i.value + '%';
    });
  }

  _updateLabel(name, value) {
    this.inputs
      .find(i => i.name === name)
      .label.innerHTML = value + '%';
  }

  _setValue(name, value) {
    this.inputs.find(i => i.name === name).value = value;
  }

  // gives rest percents to last input
  _calcAndSetLastInputValue() {
    const otherInputsSum = this.inputs
      .filter(i => i.name !== this.grains[this.grains.length - 1])
      .reduce((sum, i) => sum + +i.value, 0);
    this.inputs
      .find(i => i.name === this.grains[this.grains.length - 1])
      .value = 100 - otherInputsSum;
  }

  // returns max possible value without taking account of last input
  _getMaxInputValue(name) {
    return 100 - this.inputs
      .filter(i => i.name !== name && i.name !== this.grains[this.grains.length - 1])
      .reduce((sum, i) => sum + +i.value, 0);
  }
}

export default CrackerConstructor;