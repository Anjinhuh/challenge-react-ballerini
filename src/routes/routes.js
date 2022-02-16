import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import landing from '../pages/landingPage/landing'
import devPage from '../pages/manageDev/dev'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={landing} />
                <Route path="/developer" exact component={devPage} />
            </Switch>
        </BrowserRouter>
    )
}