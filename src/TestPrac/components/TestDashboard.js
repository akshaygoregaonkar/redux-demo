import React from 'react'
import { createStore } from 'redux'
import reducer from '../Reducer/reducer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../../components/Home'
import TestUSerDetails from './TestUserDetails'
import TestCommentDetails from './TestCommentDetails'
import TestHeader from './TestHeader'
import {Provider} from 'react-redux'
import TestEditComments from './TestEditComments'

const initialVal = {
    userDetails: ['Adam','Tommy'],
    commentDetails:[]
}

const store = createStore(reducer, initialVal)

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div>
                <Provider store={store}>               
                <BrowserRouter>
                <TestHeader/>
                    <Switch>
                        <Route path='/comment/:id' component={TestEditComments}/>
                        <Route path='/user' component={TestUSerDetails} />
                        <Route path='/comment' component={TestCommentDetails} />
                        <Route path='/' component={Home}/>
                    </Switch>
                </BrowserRouter>

                </Provider>

            </div>)
    }
}