import React from "react";
import UserCards from "./userCards";
import Preloader from './Preloader'
import Prew from './Prevew'

class test extends React.Component{

    constructor(){
        super();
        this.state = {
            info: <Prew/>,
        }
    }

    buttonClick = async () => {
        this.setState( {info:<Preloader/>} )
        let value = await (await fetch("https://randomuser.me/api/?results=10")).json()
        value = value.results.map((el)=><UserCards name = {el.name} email = {el.email} phone = {el.phone} picture = {el.picture}/>)
        this.setState( {info:value} )
    }

    render() {
        return (
            <div className="wrapper">
                <div className="userList" >
                    <div>{this.state.info}</div>
                </div>
                <button className="button" onClick={this.buttonClick}>Тык</button>

            </div>

        )
    }
}
export default test