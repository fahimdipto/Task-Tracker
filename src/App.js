import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import  Navbar from "./Components/navbar.component";
import ExercisesList from "./Components/exercises-list.component";
import EditExercise from  "./Components/edit-exercises.component";
import CreateExercise from "./Components/create-exercises.component";
import CreateUser from "./Components/create-user.component";
import userList from "./Components/user-list.component"
import EditUser from "./Components/edit-user.component"
function App() {
  return (
      <Router>
          <div className="container">
        <Navbar />
        <br/>
        <Route path ="/" exact component ={ExercisesList} />
        <Route path ="/edit/:id" exact component ={EditExercise} />
        <Route path ="/create" exact component ={CreateExercise} />
        <Route path ="/user" exact component ={CreateUser} />
              <Route path ="/user-list" exact component ={userList} />
              <Route path ="/user-edit/:id" exact component ={EditUser} />
          </div>
      </Router>
  );
}


export default App;
