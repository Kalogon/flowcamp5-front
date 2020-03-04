import React,{Component} from 'react'
import NavBar from '../components/NavBar';
import Aside from '../components/Aside'
import './ViewMore.css'
import { getToken, getUser } from '../authentication';
import { history } from '../History';
import { Line } from 'react-chartjs-2';
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
                company_name:this.props.location.state["company_name"],
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
                company_name:this.props.location.state["company_name"],
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

        let temp1 = this.props.location.state["market_price"]
        let temp2 = this.props.location.state["trade_volume"]
        let data_price = this.props.location.state["market_price"]

        
    
        const data = {
            labels: ['9:00', '9:10', '9:20', '9:30', '9:40', '9:50', '9:60', 
            '10:00', '10:10', '10:20', '10:30', '10:40', '10:50',
            '11:00', '11:10', '11:20', '11:30', '11:40', '11:50',
            '12:00', '12:10', '12:20', '12:30', '12:40', '12:50',
            '1:00', '1:10', '1:20', '1:30', '1:40', '1:50',
            '2:00', '2:10', '2:20', '2:30', '2:40', '2:50',
            '3:00', '3:10', '3:20', '3:30'],
            datasets: [
              {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: data_price.map(function(d){
                    console.log(Number(d.replace(",","")))
                    return Number(d.replace(",",""))
                })
              }
            ]
        };
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
                                <Line ref="chart" data={data} />
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
                                        <td>{this.props.location.state["market_price"][temp1.length-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>거래량</td>
                                        <td>{this.props.location.state["trade_volume"][temp2.length-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>시가총액순위</td>
                                        <td>{this.props.location.state["market_cap_rank"][temp2.length-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>상장주식수</td>
                                        <td>{this.props.location.state["listed_stocks"][temp2.length-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>액면가</td>
                                        <td>{this.props.location.state["face_value"][temp2.length-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>매매단위</td>
                                        <td>{this.props.location.state["trading_unit"][temp2.length-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>외국인한도주식수</td>
                                        <td>{this.props.location.state["foreigner_stock_limit"][temp2.length-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>외국인보유주식수</td>
                                        <td>{this.props.location.state["foreigner_stock_possession"][temp2.length-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>외국인소진율</td>
                                        <td>{this.props.location.state["foreigner_exhaustion_rate"][temp2.length-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>투자의견</td>
                                        <td>{this.props.location.state["investing_opinion"][temp2.length-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>목표주가</td>
                                        <td>{this.props.location.state["target_price"][temp2.length-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>52주최고</td>
                                        <td>{this.props.location.state["best"][temp2.length-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>52주최저</td>
                                        <td>{this.props.location.state["worst"][temp2.length-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>per_fn</td>
                                        <td>{this.props.location.state["per_fn"][temp2.length-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>eps_fn</td>
                                        <td>{this.props.location.state["eps_fn"][temp2.length-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>per_expect</td>
                                        <td>{this.props.location.state["per_expect"][temp2.length-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>eps_expect</td>
                                        <td>{this.props.location.state["eps_expect"][temp2.length-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>bps</td>
                                        <td>{this.props.location.state["bps"][temp2.length-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>배당수익률</td>
                                        <td>{this.props.location.state["dividend_yield"][temp2.length-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>동일업종per</td>
                                        <td>{this.props.location.state["same_industry_per"][temp2.length-1]}</td>
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