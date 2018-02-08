import React from 'react'

const Footer = () =>
    <section className='footersection'>
        <div className="container" id="footercontainer">
            <div className="col-md-5 col-lg-5 col-sm-5 col-xs-12">
                <h1 id="about">ABOUT US</h1>
                <p> We are announcing the rebranding of Dating Solutions to WP Dating today.
                We thank all our customers of Dating Solutions and assure you that you
                 will still remain as valued customers. You will still be able to
                 receive the same or better level of products and support</p>
            </div><div className="col-md-2 col-lg-2 col-sm-2 col-xs-6" id="footerlinks">
                <h3>
                    <a href="">Home</a>
                </h3>
                <h3>
                    <a href="">Search</a>
                </h3>
                <h3><a href="">Members</a></h3>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-2 col-xs-6" id="footerlinks">
                <h3><a href="">Extras</a>
                </h3>
                <h3>
                    <a href="">Contact Us</a>
                </h3>
                <h3>
                    <a href="">Blog</a>
                </h3>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3 col-xs-12">
                <h3 id="social">SOCIAL</h3>
                <ul>
                    <li><a href="">
                        <i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
                    </a></li>
                    <li><a href="">
                        <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a></li>
                    <li><a href=""><i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                    </a></li></ul><p id="copy">Copyright @ Karma Dating 2017</p>
            </div>
        </div>
    </section>

export default Footer