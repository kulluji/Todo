import React from 'react';
import './index.css'
// import DeleteTask from './deleteTask';

export default class ShowTask  extends React.Component {
   constructor(props){
       super(props);
       this.state = {
           alltask: this.props.tasks,
           getDone: this.props.done
       };
       this.delTask= this.delTask.bind(this);
   }
   delTask(index){
       console.log("hello friends" + index);
       console.log("delete index"+ this.state.getDone[index]);
       // this.state.alltask.splice(index,1);
       // this.setState({alltask: this.state.alltask});
   }



   render(){
   const listItems = this.state.alltask.map((task,index) =>
       <div>
       {/* <p keys = {index} onDoubleClick ={this.contentEditable=true}>{task} */}

        <p className={this.state.getDone[index]} >{task}</p>
       {/* pending task */}
       <input type="button" value= {this.state.getDone[index]} onClick = {()=> {
           this.state.getDone[index]="done";
           this.setState({getDone: this.state.getDone});
           }} />

      {/* to delete task  */}
       <input type="button" value= "Delete" onClick = { ()=>{
           this.state.alltask.splice(index,1);
           this.setState({alltask: this.state.alltask});
       } } />
       </div>
       );
       return(
           <ul> {listItems}</ul>
       );
   };
}
