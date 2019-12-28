import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";
import { ProdukKursus } from "../Context"
import PropTypes from "prop-types";

export default class Courses extends Component {
    render() {
        const { id, nama_kursus, img, total_durasi, total_murid, jumlah_video, harga } = this.props.kursus;
        return (

            <div id="wrapper">
                <div id="courses">
                    <div id="paketkursus">



                    </div>
                </div>
            </div>


        )
    }
}
Courses.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        nama_kursus: PropTypes.string,
        total_durasi: PropTypes.string,
        total_murid: PropTypes.number,
        jumlah_video: PropTypes.number,
        harga: PropTypes.number,
    }).isRequired
};