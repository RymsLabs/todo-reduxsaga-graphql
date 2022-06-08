export const addTodo = (data) => {
    return {
        type : "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data:data,
            completed : false
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type : "DELETE_TODO",
        id
    }
}

export const AllTodo = () => {
    return{
        type : "SHOW_ALL",
    }
}

export const CompletedTodo = ()  => {
    return{
        type : "COMPLETED_TODO",
        completed : true
    }
}

export const ActiveTodo = () => {
    return{
        type : "ACTIVE_TODO",
        completed : false
    }
}