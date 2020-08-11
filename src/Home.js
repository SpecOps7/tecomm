import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home__image" 
            src="https://media.wired.com/photos/5dd828ba9ac14a0008116983/16:9/w_2160,h_1215,c_limit/Transpo_TeslaStoryOne_Cybertruck-5.jpg"
            />

            <div className="home__row">
            <Product 
                id="1213" 
                title="Cyber Armor" 
                price={11} 
                image="https://www.teslarati.com/wp-content/uploads/2019/12/tesla-cybertruck-mods.jpg" 
                rating={4}  
                />
            <Product 
                id="1213" 
                title="Cyber Dominos" 
                price={11} 
                image="https://imgix.bustle.com/uploads/image/2020/3/13/3f94b197-5488-4de7-92f0-e5dd3829d66d-4dfda3a7-a6a9-4c54-a833-6e0c97e1d9e9_dominoescybertruck-leasefetcher.jpg?w=1200&h=630&q=70&fit=crop&crop=faces&fm=jpg"
                rating={4}  
                />



               

            </div>
            <div className="home__row">
            <Product 
                id="1213" 
                title="Cyber NYPD" 
                price={11} 
                image="https://www.carscoops.com/wp-content/uploads/2020/03/Tesla-Cybertruck-3-1-1024x555.jpg"
                rating={4}  
                />
                <Product 
                id="1213" 
                title="Cyber OPP" 
                price={11}
                image="https://thenextavenue.com/wp-content/uploads/2020/02/Tesla-Cybertruck-Police.jpg"
                rating={4}  
                />
            </div>

            <div className="home__row">
            <Product 
                id="1213" 
                title="Cyber 12" 
                price={11} 
                image="https://cnet4.cbsistatic.com/img/xrPRcajuqHLUHQD_PmXEGko48yY=/1200x675/2020/05/18/e3f50068-fcbc-46de-8e6e-7e25bbbf1ba1/ogi-cybertruck.jpg" 
                rating={4}  
                />
                <Product 
                id="1213" 
                title="Cyber Sheriff" 
                price={11} 
                image="https://lawofficer.com/wp-content/uploads/2019/11/cybertruck2.jpg" 
                rating={4}  
                />
            </div>

            <div className="home__row">
            <Product 
                id="1213" 
                title="Cyber APC" 
                price={11} 
                image="https://electrek.co/wp-content/uploads/sites/3/2020/05/Tesla-Cybertruck-electric-military-vehicle-e1588712677557.jpg?quality=82&strip=all" 
                rating={4}  
                />
                <Product 
                id="1213" 
                title="Cyber Stark Missile" 
                price={11} 
                image="https://electrek.co/2020/05/05/tesla-cybertruck-electric-military-vehicle/cybertruck_rear_transport_02-copy/" 
                rating={4}  
                />
            </div>

            <div className="home__row">
            <Product 
                id="1213" 
                title="Cyber Nark" 
                price={11} 
                image="https://www.teslarati.com/wp-content/uploads/2020/06/cybertruck-coast-guard-e1593158411329.jpg" 
                rating={4}  
                />
                <Product 
                id="1213" 
                title="Cyber Coastie" 
                price={11} 
                image="https://www.cybertruckownersclub.com/forum/attachments/cybertruck-coast-guard-jpg.1388/" 
                rating={4}  
                />
            </div>

        </div>
    )
}

export default Home
