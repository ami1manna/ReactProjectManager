import NewProject from "./component/NewProject";
import NoProjectSelected from "./component/NoProjectSelected";
import ProjectsSideBar from "./component/ProjectsSideBar";
import { useState } from "react";
function App() {
    // undefined no project and not selected
    // null have project but not selected
    // id - selected project
    const [projectsState,setProjectsState] =  useState({
      selectedProjectId:undefined,
      projects:[]
  });
function handleStartAddProject(){
  setProjectsState(prevState=>{
      return {
          ...prevState,
          selectedProjectId:null,
      };
  });
}

function handleAddProject(projectData){

  setProjectsState(prevState=>{
  const newProject = {
    ...projectData,
    id:Math.random()
  };
    return {
      ...prevState,
      selectedProjectId:undefined,
      projects:[...prevState.projects, newProject]
    }
  })
}

let content;
if(projectsState.selectedProjectId===null){
  content = <NewProject onAdd={handleAddProject}/>
}
else if(projectsState.selectedProjectId === undefined){
content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
}
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSideBar onStartAddProject={handleStartAddProject} projects={projectsState.projects}/>
      {content}

    </main>
  );
}

export default App;
