import React from 'react';
import "./HomePage.css"
import Banner from '../../components/banner/Banner'
import Header from '../../components/header/Header'
import Table from '../../components/table/Table'
import BodyBanner from '../../components/bodybanner/BodyBanner';

function HomePage() {
  return (
    <div className='homepage'>
        <Header />
        <div className='homepage__content'>
            <Banner />
            <Table />

            <div>
                <BodyBanner />
            </div>
        </div>
    </div>
  )
}

export default HomePage