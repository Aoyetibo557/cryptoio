import React from 'react';
import "./MarketPage.css";
import Header from '../../components/header/Header'
import MarketComp from '../../components/markets/MarketComp'
import MarketTable from '../../components/markets/MarketTable';
import Footer from '../../components/footer/Footer';

function MarketPage() {
  return (
    <div className='marketpage'>
      <Header />
      <div className='market__content'>
        <div className='market__container'>

          <MarketComp />
          <MarketTable />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default MarketPage