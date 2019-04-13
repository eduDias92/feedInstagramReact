import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Feed from './Components/Feed';

class App extends Component{
    render(){
        //Renderiza o feed
        return ( <Feed /> );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));