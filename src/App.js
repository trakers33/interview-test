import React, { Component } from 'react';
import Collection from './Collection.js';
import Pagination from './Pagination.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      currentPage:1
    };
  }

  loadData = (page) => {
    fetch("http://www.deindeal.ch/api/public/v2/data/search?p="+page+"&q=rot")
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({
          results: json.results,
          currentPage:page
        });
        console.log(this.state);
      }).catch(function (error) {
        console.log('error', error)
      });
  };

  componentDidMount = () => {
    this.loadData(1);
  }

  nextResults = () => {
    
    this.loadData(this.state.currentPage+1);
  }

  prevResults = () => {
    
    this.loadData(this.state.currentPage-1);
   
  }


  showNext = () => {
    return this.state.results.length >=60;
  }

  showPrev = () => {
    return this.state.currentPage !== 1;
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
        <Pagination 
          prevResults={this.prevResults}
          nextResults={this.nextResults}
          showPrev={this.showPrev()}
          showNext={this.showNext()}
          />
        <div className="collections">
          {collectionBoxes}
        </div>
      </div>
    );
  }
}

export default App;