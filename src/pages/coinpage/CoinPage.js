import React from 'react'
import { useParams } from 'react-router';
import CoinDetails from '../../components/coindetails/CoinDetails';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

function CoinPage() {
    const {coinName, uuid} = useParams();
  return (
    <div>
        <Header />
        <div>
          <CoinDetails coinName={coinName} uuid={uuid} />
        </div>
        <Footer />
    </div>
  )
}

export default CoinPage