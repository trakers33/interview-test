import React, { Component } from 'react';

class Pagination extends Component {

  render() {

   
    return (
      <div className="nav">
          <div className={"nav-item "+ (!this.props.showPrev?'disablePagination':'')}  onClick={this.props.prevResults} >Prev</div>
          <div className="nav-item">|</div>
          <div className={"nav-item "+ (!this.props.showNext?'disablePagination':'')}  onClick={this.props.nextResults}>Next</div>
        </div>
    );
  }
}

export default Pagination;



//{"nav-item "+(this.hasNext ? 'disablePagination':'')}