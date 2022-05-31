import { useState, useEffect } from "react";

import Header from "../components/Header";
import TaskManager from "../components/TaskManager";

import "../styles.css";

function PageTimer() {
    const [tasks, setTasks] = useState([]);
    // return ( <
    //     >
    //     <
    //     main >
    //     <
    //     div > < h1 > Hello World !< /h1> </div >
    //     <
    //     /main>   <
    //     />
    // );
    return (
        <div className="App">
          <Header tasks={tasks} />
          <main>
            <TaskManager tasks={tasks} setTasks={setTasks} />
          </main>
        </div>
    );
}

export default PageTimer;