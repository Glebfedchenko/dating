import React from 'react'
import male from '../styles/img/maleUsers.png';
import female from '../styles/img/femaleUsers.png';
import married from '../styles/img/married.png';

const Info = () =>
    <section className='infosection'>
        <div className="container text-center" >
            <div className="col-md-4 col-lg-4 col-sm-4 col-xs-4 text-center" id='infoContainer'>
                <img src={female} alt="" />
                <h2>OVER 5000</h2>
                <p>Female users</p>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4 text-center col-xs-4" id='infoContainer'>
                <img src={married} alt="" />
                <h2>OVER 9000</h2>
                <p>Happy couples</p>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4 text-center col-xs-4" id='infoContainer'>
                <img src={male} alt="" />
                <h2>OVER 4000</h2>
                <p>Male users</p>
            </div>
        </div>
    </section>
export default Info