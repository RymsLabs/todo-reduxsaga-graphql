import React , {memo} from 'react'
import Todo from './Todo'

const TodoList = memo( (props) => {
    return(
        <section>
            <ul>  
                {
                    <Todo/>
                } 
                
            </ul>
        </section>
    )
})
export default TodoList;