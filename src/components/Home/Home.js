import React from "react";
import '../../styles/Home.css';
import { Carousel } from 'antd';
import rk from '../../images/rk.png';
import sr from '../../images/sr.png';
import sp from '../../images/sp.png';
import hands from '../../images/hands.png';





const Home = () => {

    return (
        <div>
            <Carousel className="sideling" autoplay>
                <div>
                    <h3 className="carr"><img src={rk} alt='rk'/></h3>
                </div>
                <div>
                    <h3 className="carr"><img src={sr} alt='sr'/></h3>
                </div>
                <div>
                    <h3 className="carr"><img src={sp} alt='sp'/></h3>
                </div>
                <div>
                    <h3 className="carr"><img src={hands} alt='hands'/></h3>
                </div>
            </Carousel>
            <div>
                <p style={{ color: "black", fontSize: "20px", textAlign: "center", }}>If you like to know more about me, Please contact me...!</p>
            </div>
        </div>
    )
}

export default Home;