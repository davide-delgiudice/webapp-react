import React from 'react'
import Header from '../components/Header'

import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <>
        <Header />
        <main className='container'>
            <Outlet />
        </main>
    </>
  )
}

export default DefaultLayout