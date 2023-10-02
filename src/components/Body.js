import React from 'react'
import './Body.css'
import Footer from './Footer'
import Header from './Header'
const Body = () => {
    return (
        <>
            <Header />
            <section className="hero">
                <div className="main-width">
                    <div className="container content-hero">
                        <div className="hero-text">
                            <h1>Welcome User</h1>
                         </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Body
