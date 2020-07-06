import React, { Component } from 'react'
import axios from 'axios';

export default class ApiProgres extends Component {

    state={
        pendingapicall:false
    }
    componentDidMount(){
       this.requestIn= axios.interceptors.request.use((request)=>{
            this.setState({
                pendingapicall:true
            });
            return request;
        });
        this.responseIn=axios.interceptors.response.use((response)=>{
            this.setState({
                pendingapicall:false
            });
            return response;
        },(error)=>{
            this.setState({
                pendingapicall:false
            });
            throw error;
        })
    }
    componentWillUnmount(){
        axios.interceptors.request.eject(this.requestIn);
        axios.interceptors.response.eject(this.responseIn);
    }
    render() {
        return (
            <div>
               {React.cloneElement(this.props.children,{
                   pendingapicall:this.state.pendingapicall
               })} 
            </div>
        )
    }
}
