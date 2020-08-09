import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            />

            <div className="home__row">
            <Product 
                id="1213" 
                title="The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array." 
                price={11} 
                image="https://m.media-amazon.com/images/I/81SrwYY-6-L._SS400_.jpg" 
                rating={4}  
                />
            <Product 
                id="1213" 
                title="The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array." 
                price={11} 
                image="https://m.media-amazon.com/images/I/81SrwYY-6-L._SS400_.jpg" 
                rating={4}  
                />

<Product 
                id="1213" 
                title="The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array." 
                price={11} 
                image="https://m.media-amazon.com/images/I/81SrwYY-6-L._SS400_.jpg" 
                rating={4}  
                />

               

            </div>
            <div className="home__row">
                <Product 
                id="1213" 
                title="The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array." 
                price={11} 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTG3TdW8x2VAen-ybRLr4k7NegS0gPb20No4Q&usqp=CAU" 
                rating={4}  
                />
                </div>
        </div>
    )
}

export default Home
