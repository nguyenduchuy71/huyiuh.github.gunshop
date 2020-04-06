import React, { Component } from 'react';
import CartForm from './../CartForm/CartForm';
class CartList extends Component {
    render() {
        return (
            <div>
               <div className="cart-container">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <section className="section">
                            <div className="table-responsive">
                                <table className="table product-table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.children}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <CartForm/>
                    </div>
                </div>
            </div>
            <footer>
                <div className="w-col w-col-4 w-col-stack col no-pad">
                    <div className="social-media-icons">
                        <a className="w-inline-block social-icon-link"
                            href="//www.tripadvisor.in/Attraction_Review-g45963-d2233714-Reviews-The_Gun_Store-Las_Vegas_Nevada.html"
                            >
                            <img width="35" src="https://thegunstorelasvegas.com/wp-content/themes/HoneyBadger/images/white-tripadvisor.png" />
                        </a>
                        <a className="w-inline-block social-icon-link" href="https://www.yelp.com/biz/the-gun-store-las-vegas"
                            ><img width="35" src="https://thegunstorelasvegas.com/wp-content/themes/HoneyBadger/images/white-yelp.png" />
                        </a>
                        <a className="w-inline-block social-icon-link" href="//twitter.com/gunstore" >
                            <img width="35" src="https://thegunstorelasvegas.com/wp-content/themes/HoneyBadger/images/white-twitter.png" />
                        </a>
                        <a className="w-inline-block social-icon-link"
                            href="//www.youtube.com/channel/UCE9rBP-hw-oiWcPElc83TSQ" >
                            <img width="30" src="https://thegunstorelasvegas.com/wp-content/themes/HoneyBadger/images/white_yt.png" /> </a> <a
                                className="w-inline-block social-icon-link" href="//instagram.com/thegunstore/" >
                            <img width="35"
                                src="https://thegunstorelasvegas.com/wp-content/themes/HoneyBadger/images/white-ig.png" /> </a> <a
                                    className="w-inline-block social-icon-link" href="https://plus.google.com/101133935439486435825"
                                    ><img width="35"
                                        src="https://thegunstorelasvegas.com/wp-content/themes/HoneyBadger/images/white-g+.png" /> </a> <a
                                            className="w-inline-block social-icon-link" href="//www.facebook.com/TheGunStore?fref=ts"
                                            ><img width="35"
                                                src="https://thegunstorelasvegas.com/wp-content/themes/HoneyBadger/images/white-fb.png" /> </a>
                    </div>
                </div>
                <div className="w-col w-col-4 w-col-stack col no-pad">
                    <div className="text-white footer-links centered"><a className="footer-link"
                        href="https://thegunstorelasvegas.com/contact">Contact</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;<a
                            className="footer-link" href="https://thegunstorelasvegas.com/faq">FAQ</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a
                                className="footer-link" href="https://thegunstorelasvegas.com/blog">Blog</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a
                                    className="footer-link" href="https://thegunstorelasvegas.com/privacy-policy">Privacy Policy</a></div>
                </div>
                <div className="w-col w-col-4 w-col-stack col no-pad">
                    <div className="text-white copyright-text">© 2020 TheGunStoreLasVegas.com &nbsp;|<a className="footer-link"
                        href="https://machinegunlasvegas.com">Machine Guns Las Vegas</a></div>
                </div>
            </footer>
        </div>
        );
    }
}
export default CartList;
