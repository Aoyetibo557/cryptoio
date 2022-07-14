import React from 'react'
import { useParams } from 'react-router';
import CoinDetails from '../../components/coindetails/CoinDetails';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

function CoinPage() {
    const {coinName} = useParams();
  return (
    <div>
        <Header />
        <div>
            <CoinDetails coinName={coinName} />
        </div>
        <Footer />
    </div>
  )
}

export default CoinPage