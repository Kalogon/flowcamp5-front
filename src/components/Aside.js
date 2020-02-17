import React, {Component} from 'react';
import './Aside.css';

class Aside extends Component{
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
                    <ul>
                        <li>name</li>
                        <li>email</li>
                        <li>money</li>
                    </ul>
                </div>
                <div class="tab_item">
                    <h1>finance</h1>
                    <ul>
                        <li>삼성전자</li>
                        <li>본엔젤스</li>
                        <li>펍지</li>
                    </ul>
                </div>
            </div>       
        )
    }
}

export default Aside;