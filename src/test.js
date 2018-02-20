import React, {Component} from 'react';
//import ReactDom from 'react-dom';
import {Button, Jumbotron, PageHeader} from 'react-bootstrap';
import './css.css';

class Test extends Component {
    render (){
        return(
        <div className = "wrapper">
            <Jumbotron className ="background-turqoise">
            <PageHeader>Hello, guys! <br/><small>Whaddup</small></PageHeader>
            </Jumbotron>
            
            <div className="article-card">
               <div> Hello Hello Hello Hello Hello Hello Hello
                Hello Hello Hello</div>
            </div>
            <div className="article-card">
                Hello Hello Hello Hello Hello Hello Hello
                Hello Hello Hello 
            </div>
            <div className="article-card">
                Hello Hello Hello Hello Hello Hello Hello
                Hello Hello Hello
            </div>

        </div>


        );
    }
}

/*export class MoreTest extends Component {
    render(){
        return(
            <h2>Hello, again!</h2>
        );
    }
}*/

export default Test;