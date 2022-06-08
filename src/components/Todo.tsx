import React , {memo} from 'react'
import { deleteTodo } from '../actions/index'
import cross from '../assets/closee.png'
import { useDispatch } from 'react-redux'

// type TodoProps = [
//     list: [
//         data : string,
//     ]
// ]

const Todo = memo((props:any) => {
    const dispatch = useDispatch();
    const {list} = props;
    // console.log('Todo console=',props)
    return(
        <ul>
            <div className='grid grid-cols-[50px_550px_20px] relative shadow-xl bg-white p-5 box-border border-2 '>
                <div className=''>
                    <input 
                        type="radio"
                        className='w-7 h-7 rounded-full bg-gray-100'>
                    </input>
                </div>
                <div>
                    <label className='bg-white col-span-3 italic font-bold text-xl'>
                        {list.data}
                    </label>
                </div>
                
                <div className='flex items-center'>
                <img
                    src= {cross}
                    alt='Cross Icon'
                    className=' hover:cursor-pointer'
                    onClick={() => dispatch(deleteTodo(1))} //Change to list.id later
                    >
                </img> 
                </div>
                  
            </div>
        </ul>
    )
})
export default Todo;