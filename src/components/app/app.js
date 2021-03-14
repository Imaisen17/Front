import {useState, useEffect} from "react";
import Table from '../table'
import TaskForm from '../taskForm'
import { getTasks, saveTask, deleteTask } from '../../services/tasks-service';

// import Navbar from "../navbar";
// import TasksService from "../../services/tasks-service";
// import EmployeesService from "../../services/employees-service";
// import ProjectsService from "../../services/projects-service";

import "./app.css";

export default function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setData(await getTasks())
        }
        fetchAPI()
    }, [setData]);

    const dlt = (id) => {
        console.log(id)
        console.log(deleteTask(id))
        
    }

    return (
        <div className="container">
            <h1>ADD TASK</h1>
            <TaskForm change={saveTask} />
            <div className="Card"
                style={{
                    opacity: "0.2",
                    margin: "0",
                    borderRadius: "0"
                }}
            >
                    <div
                        style={{
                            width: "20px"
                        }}
                    >id </div>
                    <div>name</div>
                    <div
                        style={{
                            width: "60px"
                        }}
                    >hours</div>
                    <div>description</div>
                    <div
                        style={{
                            width: "120px"
                        }}
                    >project</div>
                    <div>status</div>
                    <div
                        style={{
                            width: "90px",
                            
                        }}
                    >functions </div>
                </div>
            <Table data={data} dlt={dlt}/>
        </div>
    );
}