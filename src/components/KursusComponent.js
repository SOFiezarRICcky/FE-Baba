import React from "react";

const KursusComponent = (props) => {
    return (

        <div id="paketkursus">
            <div id="gambar">
                <img src={props.image} alt="" />
            </div>
            <div id="isi">
                <ul>
                    <li id="judul">
                        <p>{props.nama_kursus}</p>
                    </li>
                    <li>
                        <img id="student" src={require("../img/icons8_video_16.png")} />
                        <p>Durasi Video : {props.durasi}</p>
                    </li>
                    <li>
                        <img id="student" src={require("../img/icons8_read_online_16.png")} />
                        <p>{props.jumlah_murid} Jumlah Murid Saat Ini</p>
                    </li>
                    <li>
                        <img id="student" src={require("../img/icons8_read_16.png")} />
                        <p>Jumlah Materi : {props.jumlah_materi}</p>
                    </li>
                </ul>

                <p id="harga"><strike>Rp. {props.harga}</strike></p>
                <strong id="hargafix"> Rp. {props.diskon}</strong>
            </div>
        </div>

    )
}

export default KursusComponent;