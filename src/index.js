import './index.scss';

import CrackerConstructor from '@js/CrackerConstructor';

document.addEventListener("DOMContentLoaded", function () {

  const crackerGrains = ['soybean', 'sesame', 'wheat', 'corn'];

  const constructor = document.getElementById('constructor');

  new CrackerConstructor(constructor, crackerGrains);
});