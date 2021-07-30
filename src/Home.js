import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="banner"
                />

                <div className="home__row">
                    <Product
                        id={1}
                        title="HYAIZLZ Designed for Gold iPhone 12 Pro Max Case with Camera Protection,[Support Wireless Charging] Slim Thin Silicone Shockproof Protective Phone Case Cover for Women/Men,Electroplated Frame "
                        price={14.99}
                        image="https://images.bewakoof.com/t540/be-brave-samsung-galaxy-a50-mobile-cover-samsung-galaxy-a50-mobile-covers-220974-1561033685.jpg"
                        rating={3}
                    />
                    <Product
                        id={2}
                        title="Casio Women's LQ139B-1B Classic Round Analog Watch"
                        price={15.45}
                        image="https://m.media-amazon.com/images/I/81H5GpCx2hL._AC_UL480_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id={3}
                        title="Harry Potter Complete Series Boxed Set Paperback Collection JK Rowling All 7 Books! New!"
                        price={58.86}
                        image="https://m.media-amazon.com/images/I/81gvKPsewML._AC_UY327_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                    <Product
                        id={4}
                        title="Resistance Bands for Legs and Butt Exercise Bands - Non Slip Elastic Booty Bands, 3 Levels Workout Bands Women Sports Fitness Band for Squat Glute Hip Training"
                        price={11.99}
                        image="https://m.media-amazon.com/images/I/51J2GoKi6nS._AC_UL480_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                   <Product
                        id={5}
                        title="Neutrogena Oil-Free Liquid Eye Makeup Remover, Residue-Free, Non-Greasy, Gentle & Skin-Soothing Makeup Remover Solution with Aloe & Cucumber Extract for Waterproof Mascara, 5.5 fl. oz"
                        price={5.24}
                        image="https://m.media-amazon.com/images/I/712Hr4oztrL._AC_UL480_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id={6}
                        title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
                        price={431.00}
                        image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UL480_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                </div>


            </div>

            
        </div>
    )
}

export default Home
