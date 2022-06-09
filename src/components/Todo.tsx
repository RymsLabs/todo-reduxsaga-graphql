import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../actions/index'
import cross from '../assets/closee.png'

const Todo = memo((props: any) => {
    const dispatch = useDispatch();
    const { list } = props;

    return (
        <li>
            <div className='grid grid-cols-12 items-center relative shadow-xl bg-white p-5 box-border border-2 '>
                <div className='col-span-1 items-center'>
                    <input
                        type="radio"
                        className='w-7 h-7 rounded-full bg-gray-100 cursor-pointer'>
                    </input>
                </div>
                <div className='col-span-10 '>
                    <label className='bg-white col-span-3 italic font-bold text-xl'>
                        {list.data}
                    </label>
                </div>

                <div className='col-span-1 flex items-center'>
                    <img
                        src={cross}
                        alt='Cross Icon'
                        className='w-6 h-6 cursor-pointer'
                        onClick={() => dispatch(deleteTodo(1))} //Change to list.id later
                    >
                    </img>
                </div>

            </div>
        </li>
    )
})
export default Todo;