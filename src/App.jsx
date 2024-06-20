import NewProject from "./component/NewProject";
import NoProjectSelected from "./component/NoProjectSelected";
import ProjectsSideBar from "./component/ProjectsSideBar";
import { useState } from "react";
import SelectedProject from "./component/SelectedProject";
function App() {
    // undefined no project and not selected
    // null have project but not selected
    // id - selected project
    const [projectsState,setProjectsState] =  useState({
      selectedProjectId:undefined,
      projects:[],
      task:[]
  });

function handleAddTask(text){
  setProjectsState(prevState=>{
    const newTask = {
      text:text,
      projectId:prevState.selectedProjectId,
      id:Math.random()
    };
      return {
        ...prevState,
        task:[...prevState.task, newTask]
      }
    })
}
function handleDeleteTask(id){
  setProjectsState(prevState=>{
    return {
        ...prevState,
        task:prevState.task.filter((items)=>items.id!== id) 
    };
});
}
  
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

function handleCancelAddProject(){
  setProjectsState(prevState=>{
    return {
        ...prevState,
        selectedProjectId:undefined, 
    };
});
}

function handleSelectProject(id){
    setProjectsState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId:id,
      }
    })
}

function handleDeleteProject(){
  setProjectsState(prevState=>{
    return {
        ...prevState,
        selectedProjectId:undefined,
        projects:prevState.projects.filter((items)=>items.id!==prevState.selectedProjectId) 
    };
});
}
const selectedProject = projectsState.projects.find(project=> project.id == projectsState.selectedProjectId);

let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} task={projectsState.task} />;
if(projectsState.selectedProjectId===null){
  content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
}
else if(projectsState.selectedProjectId === undefined){
content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
}
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSideBar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectsState.selectedProjectId}/>
      {content}

    </main>
  );
}

export default App;
