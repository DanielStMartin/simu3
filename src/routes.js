import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./Components/Auth/Auth"
import Dash from "./Components/Dash/Dash"
import Form from "./Components/Form/Form"
import Nav from "./Components/Nav/Nav"
import Post from "./Components/Post/Post"



export default (
    <Switch>
      <Route exact path = "/" component = { Auth }/>
      <Route exact path = "/Dash" component = { Dash }/>
      <Route exact path = "/Form" component = { Form }/>
      <Route exact path = "/Nav" component = { Nav }/>
      <Route exact path = "/post/:postid" component = { Post }/>
    </Switch>
  );