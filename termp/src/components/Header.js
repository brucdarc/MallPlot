import React, { Component } from "react";
import headerImage from '../resources/mall.jpg';

class Header extends Component{

    constructor(props){
        super(props);
        this.state={};

    }

    render(){
        return(
            <div id={'header'} >
               <img src={headerImage} style={{border:'0',width:'100%', height:500}}/>
            </div>
        );
    }
};
export default Header;