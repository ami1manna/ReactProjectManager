import React from 'react'
import NewTask from '../component/NewTask'

const Task = ({task,onAdd,onDelete}) => {
  return (
    <section>
      <h2 className='text-2xl font-bold text-stone-700 mb-4'>
       <NewTask  onAdd={onAdd}/>
      </h2>
     {task.length === 0 &&  (<p className='text-stone-800 my-4'>This project does not have any task yet</p>)}
     {task.length > 0 &&   (
       <ul className='p-4 mt-8 rounded-md bg-stone-100'>
          {task.map((tas)=>(
            <li key={tas.id} className='flex justify-between my-4'>
              <span>
              {tas.text}
              </span>
              <button className='text-stone-700 hover:text-red-500' onClick={()=>onDelete(tas.id)}>Clear</button>
              </li>
          ))}
      </ul>
     )}
    </section>
  )
}

export default Task
