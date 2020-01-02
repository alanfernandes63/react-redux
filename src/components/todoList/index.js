import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


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
         { todos.map(todo => <li key={ Math.random() }>{ todo }</li>) }
        </ul>
        <input type="text" value={ newTodo } onChange={ handleChangeNewTodo }></input>
        <button type="button" onClick={ addTodo }>
            Add Todo
        </button>
        </>
    );
}