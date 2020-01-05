import { Component } from 'react';
import LoginForm from '../components/LoginForm';
import Layout from '../components/Layout';
import axios from 'axios';
import {withRouter} from 'next/router';
import clientConfig from '../config';

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            userNiceName:'',
            loggedIn: false,
            error:''
        }
    }

    onFormSubmit = () => {
        event.preventDefault();
        const URL = clientConfig.siteUrl;

        const loginData = {
            username:this.state.username,
            password:this.state.password
        };
        
        axios.post(`${URL}/wp-json/jwt-auth/v1/token`, loginData)
            .then(res => {
                if(res.data.token === undefined) {
                    this.setState({error:data.message});
                    return;
                } else {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('niceName', res.data.user_nicename);
                    localStorage.setItem('loggedIn', 'true');
                    this.setState({token:res.data.token,
                    userEmail: res.data.user_email,
                    loggedIn: true
                    }, () => {
                        this.props.router.push(`/`);
                    })
                }
            })
            .catch(err => {
                console.log(err.response.data)
                this.setState({error:err.response.data});
            })

    }
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    render(){
        return (
            <Layout>
            <div className="top-pad">
            <LoginForm submit={this.onFormSubmit} change={this.handleChange} state={this.state}/>
            </div>
            </Layout>
        );
    }
}
export default (withRouter(login));