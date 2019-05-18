import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Form from './Components/Form/Form';
import Dash from './Components/Dash/Dash';
import Post from './Components/Post/Post';
import React from 'react';

export default (
  <Switch>
      <Route path='/' exact component={Auth} />
      <Route path='/new' component={Form} />
      <Route path='/dash' component={Dash} />
      <Route path='/post/:postid' component={Post} />
      <Redirect to='/' />
  </Switch>
  )

