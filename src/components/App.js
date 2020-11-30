import React from 'react';
import {Router,Route} from 'react-router-dom';

import Header from './Header';
import MyShop from './MyShop';
import Registeration from './Registeration';
import history from '../history';
import LogIn from './LogIn';
import ProductDetail from './ProductDetail';

const App=()=>{
    return (
        <Router history={history}>
            <div className="ui container">
                <Header/>
                <Route exact path="/" component={MyShop}/>
                <Route path="/auth" component={LogIn}/>
                <Route path="/registeration" component={Registeration}/>
                <Route path="/detail/:id" component={ProductDetail}/>
            </div>
        </Router>
        
    )
}

export default App;