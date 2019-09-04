import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state={
    stocks: [],
    portfolio: [],
    filterTerm: 'All',
    sortTerm: ''
  }

  componentDidMount(){
    fetch(`http://localhost:3000/stocks`)
    .then(res => res.json())
    .then(allStocks => {this.setState({stocks: allStocks})})
  }

  addToPortfolio = (boughtStock) => {
    const newStock = {...boughtStock, bought: true}
    this.setState({
      portfolio: [...this.state.portfolio, newStock]
    })
  }

  soldStock = (stockSold) => {
    const updatedPortfolio = [...this.state.portfolio].filter(stock => {
      return stock !== stockSold
    })
    this.setState({
      portfolio: updatedPortfolio
    })
  }

  setSortTerm = (term) => {
    this.setState({
      sortTerm: term
    })
  }

  setFilterTerm = (term) => {
    this.setState({
      filterTerm: term
    })
  }

  filterStocks = () => {
    let stocks = [...this.state.stocks]
    if (this.state.filterTerm === 'All') {
      stocks = [...this.state.stocks]
    } else {
      stocks = this.state.stocks.filter(stock => stock.type === this.state.filterTerm)
    }

    if (this.state.sortTerm === 'Price') {
      stocks.sort((a, b) =>{
        return a.price - b.price
      })
    } else if (this.state.sortTerm === 'Alphabetically') {
      stocks.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    }
    return stocks
  }

  render() {
    const { portfolio, filterTerm, sortTerm } = this.state
    return (
      <div>
        <SearchBar setFilterTerm={this.setFilterTerm} filterTerm={filterTerm} setSortTerm={this.setSortTerm} sortTerm={sortTerm}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.filterStocks()} addToPortfolio={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={portfolio} soldStock={this.soldStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
