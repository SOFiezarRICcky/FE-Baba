import React, { Component } from "react";
import KursusComponent from "./KursusComponent";
import axios from "axios";

export default class Kursus extends Component {

    state = {
        post: [],
        token: ""
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => console.log(json))
        axios.get("http://localhost:5000/products")
            .then((result) => {
                this.setState({
                    post: result.data.response
                })
                //console.log(result.data.response);

            })

        axios.post("http://localhost:5000/gettoken", {
            username: "coba Cart3",
            password: "Coba Cart3"
        })
            .then((result) => {
                this.setState({
                    token: result.data.token
                })
                console.log(result.data.token);

            })
    }


    render() {
        return (
            <div>

                {/* <KursusComponent title="title" desc="desc" /> */}
                {
                    this.state.post.map(post => {
                        return <KursusComponent key={post.id} nama_kursus={post.nama_kursus} durasi={post.durasi} jumlah_murid={post.jumlah_murid} jumlah_materi={post.jumlah_materi} harga={post.harga} diskon={post.diskon} image={post.image} />
                    })

                }
            </div>

        )
    }
}
