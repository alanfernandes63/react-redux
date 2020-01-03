import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


const Ul = (props) => {

    const dispatch = useDispatch();

    function removeTodo(){
        
        dispatch({type:'REMOVE_TODO',todo:props.value });
    }


    return(
    <li>{ props.value }
        <button onClick={ removeTodo }>{ props.value }</button>
    </li>
    );
}


export default function TodoList(props){

    const todos = useSelector( state => state.data );
    const dispatch = useDispatch();
    const [newTodo, changeNewTodo] = useState('');

    function handleChangeNewTodo(event){
        changeNewTodo(event.target.value);
    }

    function addTodo(){
        dispatch({type:'ADD_TODO',todo:newTodo});
        changeNewTodo('');
    }

    return(
        <>
        <ul>
            {
                todos.map( todo => <Ul key={ Math.random() } value={ todo }></Ul>)
            }

        </ul>
        <input type="text" value={ newTodo } onChange={ handleChangeNewTodo }></input>
        <button type="button" onClick={ addTodo }>
            Add Todo
        </button>
        </>
    );
}