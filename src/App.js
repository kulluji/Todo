import React from 'react';
// import ReactDOM from "react-dom"
// import logo from './logo.svg';
import './App.css';
// import DeleteTask from './deleteTask'
//import ShowTask from './showTask'

import ToDoList from './ToDoList';

//export default class App  extends React.Component {
//   constructor (props){
//      super(props);
//      this.state = {
//        newTask: ''
//      };
//      this.handleChange = this.handleChange.bind(this);
//      this.handleSubmit = this.handleSubmit.bind(this);
//      //this.DeleteTask = this.DeleteTask.bind(this);
//  }
//    allTask =[];
//    getDone =[];

//    handleChange(event){
//      // alert(this.state.newTask);
//      this.setState({newTask: event.target.value});
//    }

//    handleSubmit(event){
//      // alert(this.state.newTask);
//      // this.setState({allTasks: this.state.allTasks.push(this.state.newTask)});
//      this.allTask.push(this.state.newTask);
//      this.getDone.push("undone");
//      // this.state.allTasks.push(this.state.newTask);
//      this.setState({newTask: ''});
//      console.log(this.allTask);
//      event.preventDefault();
//    }

//    DeleteTask(tasknum){

//    }

//  render(){
//    // const listItems = this.allTask.map((task,index) =>
//    // <p>{task}
//    // {/* <button onClick = {DeleteTask tasknum={index} >Delete </button> */}
//    // </p>
//    // );

//  return (
//    <div className="App">
//    <h1>ToDo List</h1>
//    <form onSubmit = {this.handleSubmit}>
//      <label>
//        Task:
//        <input type="text" value = {this.state.newTask} onChange = {this.handleChange} />
//        </label>
//        <input type = "submit" value = "Submit" />
//    </form>

//    <ShowTask tasks = {this.allTask} done = {this.getDone} />

//    {/* <ul>{listItems}</ul> */}
//    </div>


//  );
//  }


//}
export default class App  extends React.Component {

  render(){
    return <div classname = 'App'>
            <ToDoList/>
    </div>
  }
}

