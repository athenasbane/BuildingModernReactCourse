import React, { useEffect } from 'react';
import styled from 'styled-components';
import { 
    getTodosLoading,  
    getCompletedTodos,
    getIncompleteTodos
} from './selectors'
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';
import { loadTodos, removeTodoRequest, markTodoCompletedRequest } from './thunks';
import NewTodoForm from './NewTodoForm';

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;


const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {

    useEffect(() => {
        startLoadingTodos()
    }, [])

    const loadingMessage = <div>Loading Todos...</div>
    const content = (
        <ListWrapper>
            <NewTodoForm />
            <h3>Incomplete:</h3>
            {incompleteTodos.map(todo => <TodoListItem 
                key={todo.id}
                todo={todo} 
                onRemovePressed={onRemovePressed} 
                onCompletedPressed={onCompletedPressed} />)}
            <h3>Completed:</h3>
            {completedTodos.map(todo => <TodoListItem 
                key={todo.id}
                todo={todo} 
                onRemovePressed={onRemovePressed} 
                onCompletedPressed={onCompletedPressed} />)}
        </ListWrapper>)
    
    return isLoading ? loadingMessage : content
};

const mapStateToProps = state => ({
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
    isLoading: getTodosLoading(state),
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoCompletedRequest(id)),
    startLoadingTodos: () => dispatch(loadTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);