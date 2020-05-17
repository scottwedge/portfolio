import React, { Component, useEffect } from 'react';
import $ from 'jquery';
import { Redirect } from 'react-router-dom';


class Contact extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:'',
            subject:'',
            message:'',
            email:'',
            redirect:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        this.setState({
            [target.name]:target.value
        });
    }

    handleSubmit(e){
        $(function() {
            $('form').submit(function() {
                $.ajax({
                    type:"POST",
                    url:'/contact',
                    data: JSON.stringify(this.state)
                }).done(function(){
                    this.setState({
                        redirect:true
                    });
                });;
                return <Redirect to="/" />;
            });
        });
    }

    render(){
        if(this.state.redirect === true) {
                return <Redirect to="/" />
        }
        return (
            <div className='Contact' style={{ marginLeft:'20%',marginRight:'20%' }}>
                <h2>Contact Me</h2>
                <form action="/contact" onSubmit={this.handleSubmit} style={ formStyle } method="POST">
                    <label>Name:</label>
                    <input name="name" type="text" style={shortBoxStyle} value={this.state.name} onChange={this.handleChange} />
                    <label>Subject:</label>
                    <input name="subject" type="text" style={shortBoxStyle} value={this.state.subject} onChange={this.handleChange} />
                    <label>Message:</label>
                    <textarea name="message" rows='7' value={this.state.message} onChange={this.handleChange} />
                    <label>Your email:</label>
                    <span style={{ display:'flex', flexDirection:'row' }}>
                        <input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
                        <input style={btnStyle} type="submit" value="Submit" />
                    </span>
                </form>
            </div>
        );
    }
}

const formStyle = {
    color:'#ffffff',
    fontSize:'1.5em',
    display:'flex',
    flexDirection:'column',
}

const shortBoxStyle = {
    marginRight:'60%'
}

const btnStyle = {
    backgroundColor:"#21e6c1",
    borderRadius:'16px',
    fontSize:'1.25em',
    alignment:'center',
    width:'15%',
    margin:'0 5%'
}

export default Contact;