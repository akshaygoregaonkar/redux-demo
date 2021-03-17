import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Comments from './Comments'
import DataProvider from './ContextApi/ContextApi'
import Home from './Home'
import Users from './Users'
export default class UsingHooks extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <DataProvider>
                    <BrowserRouter>
                        <div> 
                            <h3 style={{ float: 'left', marginLeft: '25px',marginRight:'25px' }}><Link to='/'>Home</Link></h3>
                            <h3 style={{ float: 'left',marginRight:'25px'}}><Link to='/user'>UserDetails</Link></h3>
                            <h3 style={{ float: 'left' }}><Link to='/comment'>Comment Details</Link></h3>
                            <div style={{ clear: 'both' }}></div>
                        </div>
                        <Switch>
                            <Route path='/user' component={Users} />
                            <Route path='/comment' component={Comments} />
                            <Route path='/' component={Home} />
                        </Switch>
                    </BrowserRouter>
                </DataProvider>

            </div>
        )
    }
}