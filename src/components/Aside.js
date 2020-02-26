import React, {Component} from 'react';
import './Aside.css';
import { getToken, getUser } from '../authentication';

class Aside extends Component{

    state={}

    componentDidMount(){
        this._getProfile();
    }

    _getProfile= async()=>{
        const profile = await this._callProfile()
        console.log("aaaaaaaaa");
        console.log(getUser().username)
        const user = profile["user"]
        console.log(user)
        const finances = []
        for(let i=0 ; i< user["finances"].length;i++){
            finances.push(user["finances"][i])
        }
        
        this.setState({
            finances:finances,
            username:user["username"],
            money:user["money"]
        })
    }

    _callProfile = ()=>{
        return fetch("http://kong.sparcs.org:37289/api/user/profile",{
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "x-access-token": getToken()
            },
            method: "POST",
            body: JSON.stringify({
                username:getUser().username
            }),
            credentials: 'same-origin'
        })
        .then(res=> {
            console.log(res)
            console.log(typeof(res))
            return res.json()
        }).then(json=>{
            return json;
        })
        .catch(err=>{
            console.log(err)
        })
    }

    _renderProfile = ()=>{
        console.log("1")
        console.log(this.state)
        return (
            <div>
                다행이다
                {this.state.username}
                <br></br>
                {this.state.money}
                <br></br>
                <div className="finances">
                    {this.state.finances.map((f,index)=>{
                        return <Finance finance={f} key={index}/>
                    })}
                </div>
            </div>
        )
    }
    
    

    render(){
        return(
            <div id="aside">
                <input id="first" type="radio" name="tab" checked="checked"></input>
                <input id="second" type="radio" name="tab"></input>
                <section class="buttons">
                <label for="first">
                    <div>First</div>
                </label>
                <label for="second"><div>Second</div></label>
                </section>
                <div class="tab_item">
                    <h1>Profile</h1>
                    {this.state.username ? this._renderProfile() : "loading"}
                </div>
                <div class="tab_item">
                    <h1>finance</h1>
                    {this.state.username ? this._renderProfile() : "loading"}
                </div>
            </div>       
        )
    }
}

function Finance({finance,key}){
    return (
        <div>
            {finance["company_name"]}
            {finance["amount"]}
        </div>
    )
}
export default Aside;