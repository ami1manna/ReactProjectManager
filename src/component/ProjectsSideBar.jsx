import React from 'react'
import Button from './Button'
const ProjectsSideBar = ({onStartAddProject,projects,onSelectProject,selectedProjectId}) => {
 
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
        <h2 className ='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Projects</h2>
        <div>
            <Button onClick={onStartAddProject}>+ Project</Button>
        </div>
        <ul className='mt-8'>
          {projects.map(item =>{
             let cssClasses = 'w-full text-left my-1 px-2 py-1 rounded-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800';
             if(item.id === selectedProjectId){
               cssClasses += ' text-stone-200 bg-stone-800';
             }
             else{
               cssClasses = ' w-full text-left my-1 px-2 py-1 rounded-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800';
             }
             
          return(
          <li key={item.id}>
            <button className={cssClasses} onClick={()=>onSelectProject(item.id)}>{item.title}</button>
          </li>
          )
          })
          }
          
        </ul>
    </aside>
  )
}

export default ProjectsSideBar
