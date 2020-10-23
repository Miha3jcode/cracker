import './index.scss';

import CrackerConstructor from '@js/CrackerConstructor';

document.addEventListener("DOMContentLoaded", function () {

  const crackerGrains = [{ name: 'soybean', default: 90 }, { name: 'sesame', default: 10 }, { name: 'wheat', default: 0 }, { name: 'corn', default: 0 }];

  const constructor = document.getElementById('constructor');

  new CrackerConstructor(constructor, crackerGrains);
});