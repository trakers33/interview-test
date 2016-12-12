import React, { Component } from 'react';
import Collection from './Collection.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  loadData = () => {
    fetch("http://www.deindeal.ch/api/public/v2/data/search?p=1&q=rot")
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({
          results: json.results
        });
      }).catch(function (error) {
        console.log('error', error)
      });
  };

  componentDidMount = () => {
    this.loadData();
  }

  nextResults = () => {

  }

  prevResults = () => {

  }

  render = () => {

    var collectionBoxes = this.state.results.map(function (result, index) {

      return <Collection key={index}
                title={result.formatted.title}
                secondaryTitle={result.formatted.secondaryTitle}
                coverImage={result.images.cover}
                price={result.formatted.price}
                value={result.formatted.value}
                discountPercent={result.discountPercentage + "%"}
                showPrice={result.showPrice}
                showDiscount={result.showDiscount}
                showValue={result.showValue} />
    });

    return (
      <div className="App">
        <h2 className="heading">Search Results</h2>
        <div className="nav">
          <div className="nav-item">Prev</div>
          <div className="nav-item">|</div>
          <div className="nav-item">Next</div>
        </div>
        <div className="collections">
          {collectionBoxes}
        </div>
      </div>
    );
  }
}

export default App;