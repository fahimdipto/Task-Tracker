import React,{Component} from "react";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from 'axios';


export default class CreateUser extends Component{
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state = {
            username: ''
        }

    }

    componentDidMount() {
        this.setState({
            username: 'test user'
        });
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
        }
        console.log(user);
        axios.post('http://localhost:5000/users/add',user)
            .then(res => console.log(res.data))

        this.setState
            ({username: ''})
    }
    render() {
        return(
            <div>
                <h3>New Client Entry</h3>
                <form onSubmit={this.onSubmit}>
                    <div className=" mb-3">
                        <label>Username:</label>
                        <input type="text" required className= "form-control" value={this.setState.username} onChange={this.onChangeUsername} />
                    </div>
                    <div className="mb-3">
                        <input type="submit" value="Create User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}