import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Task from '../Task';
import MainPage from '../MainPage';

export default function () {
  return (
    <Switch>
      <Route exact path='/' component={Task} />
      <Route path='/users' component={MainPage} />
    </Switch>
  )
}
