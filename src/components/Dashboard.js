import React from'react'
import {createStore} from 'redux'
import reducer from './Reducer/reducer'
import {Provider} from 'react-redux'
import UserDetails from './UserDetails'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import CommentDetails from './CommentDetails'
import Home from './Home'
import Header from './Header'
import EditComments from './EditComments'

const initialVal={
    userDetails:["Tommy",'jack'],
    commentDetails:[]
}
const store=createStore(reducer,initialVal) 

export default class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                
                 <Provider store={store}>
                 <BrowserRouter>
                
                <Header/>
                     <Switch>
                         <Route path='/comment/:id' component={EditComments}/>
                        <Route path='/user' component={UserDetails}/>
                        <Route path='/comment' component={CommentDetails}/>
                        <Route exact path='/' component={Home}/>
                     </Switch>
                    
                     </BrowserRouter>
                 </Provider>
                
                
               
            </div>
        )
    }
}