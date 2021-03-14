import React from "react";
import shortId from 'short-id';
import Edit from '../../assets/edit.svg'
import Delete from '../../assets/delete.svg'

import "./table.css";
// import { deleteTask } from "../../services/tasks-service";


export default function Table(props) {

    const {data} = props;
    console.log(data);

    return (
        data.map(element=>{
            return (
                <div className="Card" key={shortId.generate()}>
                    <div
                        style={{
                            width: "20px"
                        }}
                    >{element.id} </div>
                    <div>{element.name}</div>
                    <div
                        style={{
                            width: "60px"
                        }}
                    >{element.hours} hours</div>
                    <div>{element.project.description}</div>
                    <div
                        style={{
                            width: "120px"
                        }}
                    >{element.project.name}</div>
                    <div>{element.status.name}</div>
                    <img 
                        src={Edit} 
                        alt="Edit"
                    />
                    <img 
                        onClick={() =>
                            props.dlt(element.id) 
                            
                        }
                        src={Delete} 
                        alt="Delete"
                    />
                </div>
            )
        })
    );
}