import React from 'react';
// import DeleteTask from './deleteTask';
import './index.css';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

import  { Checkbox } from '@material-ui/core';

export default class ToDoList  extends React.Component{
    state = {
        todos : [],
        todoshow : 'all'
    };


    addTodo = (todos) => {
        this.setState({
            todos : [todos, ...this.state.todos]
        });
    };

    onComplete = (id) => {
        //var index = this.state.todos.findIndex(todo => todo.id ===id);
        // console.log(index);
        this.setState({
            todos : this.state.todos.map(todo => {
                if(todo.id===id){
                    
                    return ({
                        ...todo,
                        complete: !todo.complete
                    })
                }
                else{
                    return todo;
                }
            })
        });
        //console.log(this.state.todos[index].complete);
    };

    updatetodoshow = (s) => {
        this.setState({
            todoshow : s
        });
    };

    onDelete = (id) => {
        var index = this.state.todos.findIndex(todo => todo.id ===id);
        //console.log(this.state.todos.complete)
        if(this.state.todos[index].complete === true){
            console.log('if');
        this.setState({
            todos : this.state.todos.filter(todos => todos.id!==id)
        });
        }
        else{
            console.log("else");
            this.setState({
                todos : this.state.todos 
            });
        }
    };

    render(){
        

        let todos = [];
        if(this.state.todoshow === 'all')
        todos = this.state.todos;
        else if(this.state.todoshow === 'active')
        todos = this.state.todos.filter( todo => !todo.complete);
        else if(this.state.todoshow === 'complete')
        todos = this.state.todos.filter( todo => todo.complete);

        return (
            <div>
                <ToDoForm onSubmit ={this.addTodo} />

                 {todos.map (todo => (
                 <ToDo key = {todo.id} 
                      onComplete ={() => this.onComplete(todo.id)} 
                      onDelete = {() => this.onDelete(todo.id)}
                      todo = {todo}/>
                ))} 

                
                     {/* {todos.map ( todo => (
                         <div key = {todo.id }>
                        <Checkbox onclick = {() => this.onDelete(todo.id)} />
                        <button onClick = {() => this.onDelete(todo.id)} > Delete </button>
                        {todo.text}
                        </div>
                    ))}  */}
              
                <div>
                    todos left: {this.state.todos.filter(todo => !todo.complete).length}
                </div>
                <div>
                    <button onClick ={() => this.updatetodoshow ('all')}>all </button>
                    <button onClick ={() => this.updatetodoshow ('active')}> active </button>
                    <button onClick ={() => this.updatetodoshow ('complete')}> complete </button>
                </div>
            </div>

        
        );
    }
}