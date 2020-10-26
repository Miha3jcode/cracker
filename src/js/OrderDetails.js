class OrderDetails {
  constructor(detailsLabel, orderDetails, closeIcon) {
    this.label = detailsLabel;
    this.details = orderDetails;
    this.closeIcon = closeIcon;
    this.isJustHided = false;

    this.closeIcon.addEventListener('click', this.onCloseHandler.bind(this));

    this.label.addEventListener('mouseenter', this.mouseOverHandler.bind(this), false);
    this.details.addEventListener('mouseenter', this.mouseOverHandler.bind(this), false);

    this.label.addEventListener('mouseleave', this.mouseOutHandler.bind(this), false);
    this.details.addEventListener('mouseleave', this.mouseOutHandler.bind(this), false);
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
    if (this.isJustHided) {
      this.isJustHided = false;
      return;
    }

    this.details.classList.remove('order-details_visible');
    this.details.classList.add('order-details_hidden');
  }
}

export default OrderDetails;