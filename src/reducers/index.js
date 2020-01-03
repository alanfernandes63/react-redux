
const INITIAL_TODO = {
    data:['teste1','teste2']
}
export default function todos(state = INITIAL_TODO, action){

    switch(action.type){
        case 'ADD_TODO':
            return { ...state, data:[...state.data, action.todo] };
        case 'REMOVE_TODO':
            return { ...state , data:state.data.filter( todo => todo !== action.todo)}
        default:
            return state;
    }

}