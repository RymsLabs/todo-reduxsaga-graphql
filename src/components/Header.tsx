import { FormEvent, useState } from "react";
import React, {memo} from 'react';
import { useDispatch ,useSelector } from "react-redux"
import { addTodo ,deleteTodo } from "../actions/index";
import TodoList from "./TodoList";
import Todo from "./Todo";

const Header = memo(() => {
    const dispatch = useDispatch();
    const [inputData , setInputData] :any = useState('');
    const list = useSelector((state:any) => state.todoReducers.list);
    console.log('list=',list);
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        dispatch(addTodo(inputData));
        setInputData('');
    };
    

    return(
        
        <div className="">
            <h1 className='text-9xl text-center text-myred-500'>todos</h1>
            <form onSubmit={ (e) => handleSubmit(e) }>
                <input 
                className='w-full h-full p-[16px_16px_16px_60px] border-2 bg-white shadow-xl text-4xl py-5 mt-5 italic'
                type="text" name="name" placeholder='What needs to be done?'
                value={inputData}
                onChange= { (event) => setInputData(event.target.value)} />
            </form>
        <div>
            {
                list.map((elem) => {
                    // console.log('elem=',elem)
                    return(
                    
                        <div key={elem.id}>
                            
                            <Todo 
                                list={elem}
                            />
                        </div>
                    )
                    
                })
            }
        </div>
            
            
            
        </div>
            
    )
})

export default Header