import React,{Component} from "react";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import axios from "axios";

export default class EditUser extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state = {
            username: '',
            users: []
        }

    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/'+this.props.match.params.id)
            .then(response =>{
                this.setState({
                    username: response.data.username,
                })
            })
            .catch((error)=>{
                console.log(error);
            })
        axios.get('http://localhost:5000/users/')
            .then(response =>{
                if(response.data.length>0){
                    this.setState({
                            users: response.data.map(user => user.username),
                            username: response.data[0].username
                        }
                    )
                }
            })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const exercise = {
            username: this.state.username,
        }
        axios.post('http://localhost:5000/users/update/'+this.props.match.params.id,exercise)
            .then(res => console.log(res.data))
        console.log(exercise);
        window.location = "/user-list";
    }

    render() {
        return (
            <div>
                <h3>Edit Task</h3>
                <form onSubmit={this.onSubmit}>
                    <div className=" mb-3">
                        <label>Username:</label>
                        <input type="text" className="form-control" placeholder="Your Name"  value={this.state.username} on
                               onChange={this.onChangeUsername}/>
                    </div>

                    <div className="mb-3">
                        <input type="submit" value="Edit User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}