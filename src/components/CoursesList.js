import React, { Component } from "react";
import Courses from "./Courses";

import { ProdukKursus } from "../Context";

export default class CoursesList extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="wrapper">
                    <div id="isikursus">
                        <h2>Filter By</h2>
                        <select name="filter-master" id="filter-master">
                            <option value selected>Pilih</option>
                            <option value="courses">Kursus</option>
                            <option value="package">Paket Kursus</option>
                            <option value="kategory">Kategori</option>
                            <option value="subkategory">Sub Kategori</option>
                            <option value="price">Harga Kursus</option>
                        </select>
                        <select name="filter-master-isi" id="filter-master-isi">
                            <option value selected>Pilih</option>
                            <option value="courses">Kursus</option>
                            <option value="package">Paket Kursus</option>
                            <option value="kategory">Kategori</option>
                            <option value="subkategory">Sub Kategori</option>
                            <option value="price">Harga Kursus</option>
                        </select>
                        <input type="text" placeholder="Search" />
                        <span id="tombolcari">
                            <button>Search</button>
                        </span>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}