import React from 'react'
import Button from './Button'
const ProjectsSideBar = ({onStartAddProject,projects}) => {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
        <h2 className ='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Projects</h2>
        <div>
            <Button onClick={onStartAddProject}>+ Project</Button>
        </div>
        <ul className='mt-8'>
          {projects.map(item =>
            <li key={item.id}>
            <button className='w-full text-left my-1 px-2 py-1 rounded-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800'>{item.title}</button>
          </li>)
          }
          
        </ul>
    </aside>
  )
}

export default ProjectsSideBar
