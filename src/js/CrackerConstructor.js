class CrackerConstructor {
  constructor(crackerConstructor, grainsInfo) {
    this.crackerConstructor = crackerConstructor;
    this.grains = grainsInfo.map(g => g.name);

    const sum = grainsInfo.reduce((sum, g) => sum + g.default, 0);
    if (sum !== 100) throw new Error('default sum must be 100!');

    this.inputs = grainsInfo
      .map(g => ({
        name: g.name,
        node: crackerConstructor.querySelector(`input[name=${g.name}]`),
        label: crackerConstructor.querySelector(`[data-grain-type=${g.name}]`),
        value: g.default
      }));
    this._update();

    crackerConstructor.addEventListener('change', this._onChangeHandler.bind(this));
    crackerConstructor.addEventListener('input', this._onMoveThumbHandler.bind(this));
  }

  _onChangeHandler(event) {
    const { name, value } = event.target;

    if (this.grains.find(g => g === name)) {
      const maxValue = this._getMaxInputValue(name);

      const newValue = value < maxValue ? value : maxValue;

      this._setValue(name, newValue);
      event.target.value = newValue;
      this._calcAndSetLastInputValue();
      this._update();
    }
  }

  _onMoveThumbHandler(event) {
    const { name, value } = event.target;

    if (this.grains.find(g => g === name)) {
      const maxValue = this._getMaxInputValue(name);

      const newValue = value < maxValue ? value : maxValue;

      event.target.value = newValue;
      this._updateLabel(name, newValue);
    }
  }

  // updates all input except the last one (but updates it's label)
  _update() {
    this.inputs.forEach(i => {
      if (i.name !== this.grains[this.grains.length - 1]) {
        i.node.value = i.value;
      }
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

  // gives rest percents to last input and animates their changing
  _calcAndSetLastInputValue() {
    const lastInputName = this.grains[this.grains.length - 1];
    const otherInputsSum = this.inputs
      .filter(i => i.name !== lastInputName)
      .reduce((sum, i) => sum + +i.value, 0);

    const newValue = 100 - otherInputsSum;
    const lastInput = this.inputs
      .find(i => i.name === lastInputName)
      .node;

    if (this.lastInputAnimationInterval) {
      clearInterval(this.lastInputAnimationInterval);
      this.lastInputAnimationInterval = null;
    }

    this._setValue(lastInputName, newValue);

    this.lastInputAnimationInterval = setInterval(() => {
      if (lastInput.value > newValue) {
        lastInput.stepDown();
      }
      else if (lastInput.value < newValue) {
        lastInput.stepUp();
      }
      else {
        clearInterval(this.lastInputAnimationInterval);
        this.lastInputAnimationInterval = null;
      }
    }, 10);
  }

  // returns max possible value without taking account of last input
  _getMaxInputValue(name) {
    return 100 - this.inputs
      .filter(i => i.name !== name && i.name !== this.grains[this.grains.length - 1])
      .reduce((sum, i) => sum + +i.value, 0);
  }
}

export default CrackerConstructor;