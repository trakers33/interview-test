import React, { Component } from 'react';
import PriceHighlight from './PriceHighlight.js';

class Collection extends Component {

  render() {

    var coverImage = {backgroundImage: 'url(' + this.props.coverImage + ')'}

    return (
      <article className="organism-collectionBox">
        <a className="collectionBox-fullLinkWrapper" href="#">

          <div className="collectionBox-coverImageWrapper">
            <figure className="collectionBox-coverImage" style={coverImage}></figure>
          </div>

          <div className="collectionBox-content">
            <h2 className="collectionBox-title">{this.props.title}</h2>
            <h3 className="collectionBox-subtitle">{this.props.secondaryTitle}</h3>
            <div className="collectionBox-priceAndRating">
              <div className="collectionBox-pricingWrapper">
                <PriceHighlight 
                  showDiscount={this.props.showDiscount}
                  showPrice={this.props.showPrice}
                  showValue={this.props.showValue}
                  discountPercent={this.props.discountPercent}
                  value={this.props.value}
                  price={this.props.price}/>
              </div>
            </div>
          </div>
        </a>
      </article>
    );
  }
}

export default Collection;