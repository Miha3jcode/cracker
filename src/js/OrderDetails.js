class OrderDetails {
  constructor(detailsLabel, orderDetails, closeIcon) {
    this.label = detailsLabel;
    this.details = orderDetails;
    this.closeIcon = closeIcon;
    this.isJustHided = false;

    this.closeIcon.addEventListener('click', this.onCloseHandler.bind(this));

    this.label.addEventListener('mouseover', this.mouseOverHandler.bind(this));
    this.details.addEventListener('mouseover', this.mouseOverHandler.bind(this));

    this.label.addEventListener('mouseout', this.mouseOutHandler.bind(this));
    this.details.addEventListener('mouseout', this.mouseOutHandler.bind(this));
  }

  onCloseHandler() {
    this.details.classList.remove('order-details_visible');
    this.isJustHided = true;
  }

  mouseOverHandler() {
    this.details.classList.remove('order-details_hidden');
    this.details.classList.add('order-details_visible');
  }

  mouseOutHandler() {
    console.log('out');
    if (this.isJustHided) {
      this.isJustHided = false;
      return;
    }

    this.details.classList.remove('order-details_visible');
    this.details.classList.add('order-details_hidden');
  }
}

export default OrderDetails;