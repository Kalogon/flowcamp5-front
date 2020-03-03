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
        if(receivedCode["code"]==="success"){
            history.push("/buy")
        }
        else{
            history.push("/buy")
            alert('buy fail!');
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
        if(receivedCode["code"]==="success"){
            history.push("/sell")
        }
        else{
            history.push("/sell")
            alert("sell fail")
            console.log("망함")
        }
    }

    _handlebuyandsellChange= (e)=>{
        this.setState({amount:e.target.value})
    }


    render(){
        console.log(this.props.location.state["company_name"])
        return(
            <div id="container-fluid">
                <NavBar></NavBar>
                <div className="col-xs-2">
                    <Aside></Aside>
                </div>


                <div className="col-xs-10">
                    <br></br>
                    <div class="card card-default">
                        <div class="card-header">{this.props.location.state["company_name"]}</div>
                        <div class="card-body card-6-6">
                            <div class="card-left">
                                <img src="https://ssl.pstatic.net/imgfinance/chart/mobile/area/month3/KOSPI_end.png"></img>
                                <br></br>
                                <br></br>
                                <form className="form-group">
                                    <input type ="number" onChange={this._handlebuyandsellChange}></input>
                                    &nbsp;
                                    &nbsp;
                                    <button onClick={this._buy} type="button" className="btn btn-default">buy
                                    </button>
                                    <button onClick={this._sell} type="button" className="btn btn-default">sell
                                    </button> 
                                </form>
                                
                               
                            </div>
                            <div class="card-right">
                            <div className="panel panel-default">
                                <div class="panel-heading">상세정보</div>
                                <table className="table">
                                    <tr>
                                        <th>지표</th>
                                        <th>값</th>
                                    </tr>
                                    <tr>
                                        <td>현재가</td>
                                        <td>{this.props.location.state["market_price"][0]}</td>
                                    </tr>
                                    <tr>
                                        <td>거래량</td>
                                        <td>{this.props.location.state["trade_volume"][0]}</td>
                                    </tr>
                                    <tr>
                                        <td>시가총액순위</td>
                                        <td>{this.props.location.state["market_cap_rank"][0]}</td>
                                    </tr>
                                    <tr>
                                        <td>상장주식수</td>
                                        <td>{this.props.location.state["listed_stocks"][0]}</td>
                                    </tr>
                                    <tr>
                                        <td>액면가</td>
                                        <td>{this.props.location.state["face_value"][0]}</td>
                                    </tr>
                                    <tr>
                                        <td>매매단위</td>
                                        <td>{this.props.location.state["trading_unit"][0]}</td>
                                    </tr>
                                    <tr>
                                        <td>외국인한도주식수</td>
                                        <td>{this.props.location.state["foreigner_stock_limit"][0]}</td>
                                    </tr>
                                    <tr>
                                        <td>외국인보유주식수</td>
                                        <td>{this.props.location.state["foreigner_stock_possession"][0]}</td>
                                    </tr>
                                    <tr>
                                        <td>외국인소진율</td>
                                        <td>{this.props.location.state["foreigner_exhaustion_rate"][0]}</td>
                                    </tr>
                                    <tr>
                                        <td>투자의견</td>
                                        <td>{this.props.location.state["investing_opinion"][0]}</td>
                                    </tr>
                                    <tr>
                                        <td>목표주가</td>
                                        <td>{this.props.location.state["target_price"][0]}</td>
                                    </tr>
                                    <tr>
                                        <td>52주최고</td>
                                        <td>{this.props.location.state["best"][0]}</td>
                                    </tr>
                                    <tr>
                                        <td>52주최저</td>
                                        <td>{this.props.location.state["worst"][0]}</td>
                                    </tr>
                                    <tr>
                                        <td>per_fn</td>
                                        <td>{this.props.location.state["per_fn"][0]}</td>
                                    </tr>
                                    <tr>
                                        <td>eps_fn</td>
                                        <td>{this.props.location.state["eps_fn"][0]}</td>
                                    </tr>
                                    <tr>
                                        <td>per_krx</td>
                                        <td>{this.props.location.state["per_krx"][0]}</td>
                                    </tr>
                                    <tr>
                                        <td>eps_krx</td>
                                        <td>{this.props.location.state["eps_krx"][0]}</td>
                                    </tr>
                                    <tr>
                                        <td>per_expect</td>
                                        <td>{this.props.location.state["per_expect"][0]}</td>
                                    </tr>
                                    <tr>
                                        <td>eps_expect</td>
                                        <td>{this.props.location.state["eps_expect"][0]}</td>
                                    </tr>
                                    <tr>
                                        <td>pbr</td>
                                        <td>{this.props.location.state["pbr"][0]}</td>
                                    </tr>
                                    <tr>
                                        <td>bps</td>
                                        <td>{this.props.location.state["bps"][0]}</td>
                                    </tr>
                                    <tr>
                                        <td>배당수익률</td>
                                        <td>{this.props.location.state["dividend_yield"][0]}</td>
                                    </tr>
                                    <tr>
                                        <td>동일업종per</td>
                                        <td>{this.props.location.state["same_industry_per"][0]}</td>
                                    </tr>

                                           
                                </table>
                            </div>
                        </div>
                        
                
                    </div>
                </div>
                

                </div>
                
            </div>
        )
    }
}

export default ViewMore