import React from "react";
import shortId from 'short-id';

import "./table.css";

export default function Table(props) {

    const {data}=props;
    console.log(data);

    return (
        data.map(element=>{
            return (
                <div key={shortId.generate()}>
                    <span>{element.id}) </span>
                    <span>{element.name}</span>
                </div>
            )
        })
    );
}