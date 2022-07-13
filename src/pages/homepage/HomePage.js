import React from 'react';
import "./HomePage.css"
import Banner from '../../components/banner/Banner'
import Header from '../../components/header/Header'
import Table from '../../components/table/Table'

function HomePage() {
  return (
    <div className='homepage'>
        <Header />
        <div className='homepage__content'>
            <Banner />
            <Table />

            <div>
                <Banner />
            </div>
        </div>
    </div>
  )
}

export default HomePage