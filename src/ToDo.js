import React from 'react';
import './App.css'

//import AutoComplete from '@material-ui/AutoComplete' ;
import { ListItem, IconButton, Checkbox } from '@material-ui/core';
//import DeleteIcon from '@material-ui/icons/Delete';


export default class ToDo extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const {props} = this;
        const buttonName= (props.todo.complete) ? "Delete" : "Edit";

        return (
        <div>
            <table>
                <tr className="Table">
                    <td><Checkbox onClick = {props.onComplete} tabIndex={-1} disableRipple /></td>
                    <td> 
                        <div contentEditable = {!props.todo.complete} style = {{
                            textDecoration : props.todo.complete ? "line-through" : ""
                        }} > 
                            {props.todo.text}
                        </div>
                    </td>
                    <td><button className = "Delete" onClick ={props.onDelete}> {buttonName} </button></td>
                </tr>
            </table>
        </div>)
    }
}




