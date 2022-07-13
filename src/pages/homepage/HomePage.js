import React from 'react';
import "./HomePage.css"
import Banner from '../../components/banner/Banner'
import Header from '../../components/header/Header'
import Table from '../../components/table/Table'
import BodyBanner from '../../components/bodybanner/BodyBanner';
import Footer from '../../components/footer/Footer';

function HomePage() {
  return (
    <div className='homepage'>
        <Header />
        <div className='homepage__content'>
            <Banner />
            <Table />
            <BodyBanner />
            <Footer />
        </div>
    </div>
  )
}

export default HomePage