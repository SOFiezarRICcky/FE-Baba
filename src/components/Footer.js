import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div id="footer">
                    <div id="footer-atas">
                        <div id="footer-atas-kiri">
                            <img src={require("../img/Logo Baba Studio_Putih (169x32).png")} />
                        </div>
                        <div id="footer-atas-kanan">
                            <ul>
                                <li id="pertama">Tentang</li>
                                <li>Kupon</li>
                                <li>Kursus</li>
                                <li>Login</li>
                            </ul>
                            <ul>
                                <li id="pertama">Customer Service</li>
                                <li>FAQ</li>
                                <li>Kontak Kami</li>
                            </ul>
                            <ul id="ketiga">
                                <li id="pertama">Subscribe</li>
                                <li>Ikuti Berita Kami</li>
                                <li><input type="text" placeholder="Enter your email" /></li>
                                <li>Kontak Kami</li>
                            </ul>
                        </div>
                    </div>
                    <div id="footer-bawah">
                        <hr />
                        <br /><br />
                        CopyRight @2019 <a href="www.github.com/SOFiezarRICcky">Sofiezar Ricky</a>, All right reserved.
            </div>
                </div>
            </div>
        )
    }
}
