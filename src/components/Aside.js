import React, {Component} from 'react';
import './Aside.css';

class Aside extends Component{

    state={}

    componentDidMount(){
        this._getProfile();
    }

    _getProfile= async()=>{
        const profile = await this._callProfile()
        console.log("aaaaaaaaa");
        console.log(profile);
        this.setState({
            profile:profile
        })
        console.log(this.state)
    }

    _callProfile = ()=>{
        return fetch("http://kong.sparcs.org:37289/profile")
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
        console.log(this.state.profile);
        return (
            <div>
                다행이다ㅠㅠㅠㅠㅠㅠㅠ너무귀여워
                {this.state.user}
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
                    {this.state.profile ? this._renderProfile() : "loading"}
                </div>
                <div class="tab_item">
                    <h1>finance</h1>
                    {this.state.profile ? this._renderProfile() : "loading"}
                </div>
            </div>       
        )
    }
}

export default Aside;