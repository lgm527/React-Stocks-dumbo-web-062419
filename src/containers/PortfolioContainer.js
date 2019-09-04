import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {

    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.portfolio.map( stockObj => {
              return <Stock stock={stockObj} key={stockObj.id} soldStock={this.props.soldStock}/>
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;
