import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/sidebar'
import Contact from '../components/users/Contact'
const ContactScren = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header/>
        <Contact/>
      </main>
    </>
  )
}

export default ContactScren