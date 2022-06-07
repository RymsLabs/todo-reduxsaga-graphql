import React , {memo} from 'react'
import cross from '../assets/closee.png'

const TodoList = memo(() => {
    return(
        <li>
            <div className='grid grid-cols-[50px_550px_20px] relative shadow-xl bg-white p-5 box-border border-2 '>
                <div className=''>
                    <input 
                        type="radio"
                        className='w-7 h-7 rounded-full bg-gray-100'>
                    </input>
                </div>
                <div>
                    <label className='bg-white col-span-3 italic font-bold text-xl'>
                        Todo
                    </label>
                </div>
                
                <div className='flex items-center'>
                <img
                    src= {cross}
                    alt='Cross Icon'
                    className=' hover:cursor-pointer'>
                </img> 
                </div>
                  
            </div>
        </li>
    )
})
export default TodoList;