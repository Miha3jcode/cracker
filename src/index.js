import './index.scss';

import CrackerConstructor from '@js/CrackerConstructor';
import OrderDetails from '@js/OrderDetails';

document.addEventListener("DOMContentLoaded", function () {

  // Init CrackerConstructor
  const crackerGrains = [{ name: 'soybean', default: 90 }, { name: 'sesame', default: 10 }, { name: 'wheat', default: 0 }, { name: 'corn', default: 0 }];

  const constructor = document.getElementById('constructor');

  new CrackerConstructor(constructor, crackerGrains);

  // Init OrderDetails

  const details = document.getElementById('details');
  const orderDetails = document.getElementById('order-details');
  const closeIcon = orderDetails.querySelector('.order-details__close-icon');

  new OrderDetails(details, orderDetails, closeIcon);
});