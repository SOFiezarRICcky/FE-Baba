import React, { Component } from "react";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div id="header">
                    <div id="header-master">
                        <div id="header-left">
                            <ul>
                                <li id="lilogo"><a href="#"><img id="logo"
                                    src={require("../img/Logo Baba Studio_Putih (169x32).png")} /></a></li>
                                <li id="licategories"><a href="#"><img id="categories"
                                    src={require("../img/icons8_squared_menu_putih_16.png")} />Categories</a></li>
                            </ul>
                        </div>
                        <div id="header-tgh">
                            <input type="text" />
                            <span id="iconcari">
                                <a href="#"><i><img src={require("../img/icons8_search_32.png")} /></i></a>
                            </span>
                        </div>
                        <div id="header-right">
                            <ul>
                                <li>
                                    <a href="#">Techfor Comunity</a>
                                </li>
                                <li>
                                    <a href="">Login</a>
                                </li>
                                <li>
                                    <button>Sign Up</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="kursus">
                    <img src={require("../img/kursus.PNG")} alt="" />
                </div>
                <h2>All Courses</h2>
            </div>
        )
    }
}
