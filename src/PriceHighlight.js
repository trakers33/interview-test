import React, { Component } from 'react';

export default class PriceHighlight extends Component {
  render() {

    var discountPercent   = this.props.showDiscount   ? <div className="priceHighlight-discountPercentage">{this.props.discountPercent}</div> : "";
    var value             = this.props.showValue      ? <div className="priceHighlight-value">{this.props.value}</div> : "";
    var price             = this.props.showPrice      ? <div className="priceHighlight-price">{this.props.price}</div> : "";

    return (
      <div className="molecule-priceHighlight">
          {discountPercent}
          {value}
          {price}
      </div>
    );
  }
}