import {useState, useEffect, useMemo} from "react";
import Table from '../table'

import Navbar from "../navbar";
import TasksService from "../../services/tasks-service";
import EmployeesService from "../../services/employees-service";
import ProjectsService from "../../services/projects-service";

import "./app.css";

export default function App(props) {

    const [table,setTable]=useState([]);

    const tasksService = useMemo(() => new TasksService(), []);
    const projectsService = useMemo(() => new ProjectsService(), []);
    const employeesService = useMemo(() => new EmployeesService(), []);

    const [navbarItem, setNavbarItem] = useState("projects");

    const [projectsData, setProjectsData] = useState([]);
    const [employeesData, setEmployeesData] = useState([]);

    const [tasksData, setTasksData] = useState([]);

    useEffect(async function () {
        console.log(navbarItem);
        if (navbarItem === "projects") {
            const projectsDataLoaded = await projectsService.getEmployees();
            setProjectsData(projectsDataLoaded);
            setTable(projectsData);
        }
       /* else if (navbarItem === "tasks")
            /!*const tasksDataLoaded = tasksService.getTasks();
        setTasksData(tasksDataLoaded);*!/
            setTable(tasksData)
        }*/
        else {
            const employeesDataLoaded = await employeesService.getEmployees();
            setEmployeesData(employeesDataLoaded);
            setTable(employeesData);
        }

    }, [navbarItem]);

    const handleNavbarItemChange = (event) => {
        const navbarItemValue = event.target.value;
        setNavbarItem(navbarItemValue);
    }

    return (
        <div className="container">
            <Navbar navbarItem={navbarItem} setNavbarItem={handleNavbarItemChange}/>
            <Table data={table}/>
        </div>
    );
}