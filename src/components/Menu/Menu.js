import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
const menus = [
    {
        name: 'Home Page',
        to: '/',
        exact: true
    },
    {
        name: 'Products',
        to: '/products',
        exact: true
    },
    {
        name: 'Cart',
        to: '/cart',
        exact: false
    }
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={(match) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
}
class Menu extends Component {
    render() {
        return (
            <div>
                <div className="nav nav-bar-default menu">
                    {this.showMenus(menus)}
                </div>
                <header>
                    <div className="navbar-head">
                        <a className="navbar-brand" >
                            <img className="logo-img"
                                src="https://thegunstorelasvegas.com/wp-content/themes/HoneyBadger/images/gun-store-logo-white-mobile.png"
                                alt="logo" />
                        </a>
                        <ul className="nav-item">
                            <li>
                                <a>All</a>
                            </li>
                            <li>
                                <a>Handguns</a>
                            </li>
                            <li>
                                <a>Semi-Auto</a>
                            </li>
                            <li>
                                <a>Full-Auto</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-section wrapper-full top-section page-title-blurb-section ">
                        <div className="w-container wrapper-1286">
                            <h1 className="page-title">The guns</h1>
                            <div className="page-title-blurb">
                                <p><em><strong>Individual rentals are available ranging between $30.00 to $75.00. Not available for
                                booking online. In store ONLY.</strong></em></p>
                                <h1><strong>THE GUNS SHOWN BELOW ARE FOR <span>RENTAL</span> USE
                            ONLY.&nbsp;</strong></h1>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            });
        }
        return result;
    }
}
export default Menu;