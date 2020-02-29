import React,{Component} from 'react'
import NavBar from '../components/NavBar';
import Aside from '../components/Aside'
import './ViewMore.css'
import { getToken, getUser } from '../authentication';
import { history } from '../History';

class ViewMore extends Component{

    constructor(props) {
        super(props);
        this.state = {
          amount:0
        };
    }

    state = {}

    _requestBuy= ()=>{
        return fetch("http://kong.sparcs.org:37289/api/user/buy",{
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "x-access-token": getToken()
            },
            credentials: 'same-origin',
            // SameSite: 'None',
            // Secure: 'true',
            // mode:'no-cors',
            method: "POST",
            body: JSON.stringify({
                username:getUser().username,
                company_name:this.props.location.state["company_name"][0],
                amount: this.state.amount
            })
        })
        .then(res=> {
            return res.json()
        })
    }

    _buy= async ()=>{
        const receivedCode = await this._requestBuy();
        console.log("code")
        console.log(receivedCode)
        if(receivedCode["code"]=="success"){
            history.push("/buy")
        }
        else{
            console.log("망함")
        }
    }

    _requestSell= ()=>{
        return fetch("http://kong.sparcs.org:37289/api/user/sell",{
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "x-access-token": getToken()
            },
            credentials: 'same-origin',
            // SameSite: 'None',
            // Secure: 'true',
            // mode:'no-cors',
            method: "POST",
            body: JSON.stringify({
                username:getUser().username,
                company_name:this.props.location.state["company_name"][0],
                amount: this.state.amount
            })
        })
        .then(res=> {
            return res.json()
        })
    }

    _sell= async ()=>{
        const receivedCode = await this._requestSell();
        console.log("code")
        console.log(receivedCode)
        if(receivedCode["code"]=="success"){
            history.push("/sell")
        }
        else{
            console.log("망함")
        }
    }

    _handlebuyandsellChange= (e)=>{
        this.setState({amount:e.target.value})
    }


    render(){
        console.log(this.props.location.state["company_name"])
        return(
            <div id="content">
                <NavBar></NavBar>

                <div id="section">
                    {this.props.location.state["company_name"]}<br></br>
                    {this.props.location.state["market_price"]}<br></br>
                    {this.props.location.state["market_price_all"]}<br></br>
                    {this.props.location.state["trade_volume"]}<br></br>
                    {this.props.location.state["market_cap_rank"]}<br></br>
                    {this.props.location.state["listed_stocks"]}<br></br>
                    {this.props.location.state["face_value"]}<br></br>
                    {this.props.location.state["trading_unit"]}<br></br>
                    {this.props.location.state["foreigner_stock_limit"]}<br></br>
                    {this.props.location.state["foreigner_stock_possession"]}<br></br>
                    {this.props.location.state["foreigner_exhaustion_rate"]}<br></br>
                    {this.props.location.state["investing_opinion"]}<br></br>
                    {this.props.location.state["target_price"]}<br></br>
                    {this.props.location.state["best"]}<br></br>
                    {this.props.location.state["worst"]}<br></br>
                    {this.props.location.state["per_fn"]}<br></br>
                    {this.props.location.state["eps_fn"]}<br></br>
                    {this.props.location.state["per_krx"]}<br></br>
                    {this.props.location.state["eps_krx"]}<br></br>
                    {this.props.location.state["per_expect"]}<br></br>
                    {this.props.location.state["eps_expect"]}<br></br>
                    {this.props.location.state["pbr"]}<br></br>
                    {this.props.location.state["bps"]}<br></br>
                    {this.props.location.state["dividend_yield"]}<br></br>
                    {this.props.location.state["same_industry_per"]}<br></br>
                </div>
                <input type ="number" onChange={this._handlebuyandsellChange}></input>
                <button onClick={this._buy} type="button">buy
                </button>
                <button onClick={this._sell} type="button">sell
                </button>
                <Aside></Aside>
            </div>
        )
    }
}

export default ViewMore