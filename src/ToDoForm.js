import React from 'react';
import TextField from '@material-ui/core/TextField';
import shortid from 'shortid';
// import DeleteTask from './deleteTask';
//import './index.css';
import { Typography } from '@material-ui/core';

export default class ToDoForm  extends React.Component{
    state = {
        text : ''
    };
handleChange = event => {
    this.setState({
        text : event.target.value
    });

    
};

handleSubmit = event => {
    event.preventDefault();
    //console.log(this.state.text, "sdfklnlf");
    if(this.state.text !== '') {

        this.props.onSubmit({
            id : shortid.generate(),
            text: this.state.text,
            complete : false
        })
        this.setState({
            text : ""
        });
    }
}
    render(){
        return (
            <div>
                <Typography className = 'typo' component = "h1" variant ="h2">
                    Todos
                </Typography>

                <form>
                <TextField
                name = 'text'
                value = {this.state.text} 
                onChange = {this.handleChange}
                autofocus ={true} />
                 
                
                <button onClick = {this.handleSubmit}>Add todo</button>
                </form>;
            </div>    
        )
    }
}