const initialData = {
    list : [{
        id:'1',
        data: 'task1',
        completed : true
    },
    {
        id:'2',
        data: 'task2',
        completed : false
    }
]
}
const todoReducers = (state=initialData , action) => {
    switch(action.type) {
        case "ADD_TODO" : 
            const {id, data} = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id:id,
                        data:data
                }]
            }
          
        case "DELETE_TODO" :
            console.log('In Delete Section')
            console.log('List after deleted =',state)
            const newList = state.list.filter((elem)=> elem.id != action.id)
                return {
                    ...state,
                    list: newList
                }
        
        case "SHOW_ALL" :
            console.log('In All Section')
            console.log('List All =',state)
            return{
                ...state
            }
        
        case "COMPLETED_TODO" :
            console.log('In Completed Section')
            console.log('List after completed =',state)
            const completedList = state.list.filter((elem)=> elem.completed === true)
                return {
                    ...state,
                    list: completedList
                }
        
        case "ACTIVE_TODO" :
            console.log('In Active Section')
            console.log('List =',state)
            const activeList = state.list.filter((elem)=> elem.completed == false)
                return {
                    ...state,
                    list: activeList
                }

        default :
            return state;
    }
}

export default todoReducers;