import React, { Component } from "react";

import { dataCourses } from "./data";

const CoursesContext = React.createContext();

class CoursesProvider extends Component {
    state = {
        courses: []
    }

    componentDidMount() {
        this.setCourses();
    }

    setCourses = () => {
        let tempCourses = [];
        dataCourses.forEach(item => {
            const singleItem = { ...item };
            tempCourses = [...tempCourses, singleItem];
        });
        this.setState(() => {
            return { courses: tempCourses };
        });
    }

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

}

const ProdukKursus = CoursesContext.Consumer;

export { CoursesProvider, ProdukKursus };