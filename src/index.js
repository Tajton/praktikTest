import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Test, {MoreTest} from './test';
import 'bootstrap/dist/css/bootstrap.css';
import './css.css';

class MerTest extends Component{
    render(){
        return(
               <Test />              
        );
    }
}


ReactDOM.render(<MerTest/ >,
  document.getElementById('root')
);