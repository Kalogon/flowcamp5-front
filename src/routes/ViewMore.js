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
    

    componentDidMount(){
        console.log("제발")
        this._getChart()
        .then(()=>{
            let company_name = this.props.location.state["company_name"]
            // let chart = 

            this.state.chart.map((finance)=>{
                if(finance["company_name"]==company_name){
                    this.setState({
                        data_price: finance["market_price"],
                        trade_volume: finance["trade_volume"],
                        market_cap_rank : finance["market_cap_rank"],
                        listed_stocks :finance["listed_stocks"],
                        face_value: finance["face_value"],
                        trading_unit: finance["trading_unit"],
                        foreigner_stock_limit: finance["foreigner_stock_limit"],
                        foreigner_stock_possession: finance["foreigner_stock_possession"],
                        foreigner_exhaustion_rate: finance["foreigner_exhaustion_rate"],
                        investing_opinion: finance["investing_opinion"],
                        target_price: finance["target_price"],
                        best: finance["best"],
                        worst: finance["worst"],
                        per_fn: finance["per_fn"],
                        eps_fn: finance["eps_fn"],
                        per_expect: finance["per_expect"],
                        eps_expect: finance["eps_expect"],
                        bps: finance["bps"],
                        dividend_yield: finance["dividend_yield"],
                        same_industry_per: finance["same_industry_per"],
                        length1: finance["market_price"].length,
                        length2: finance["trade_volume"].length
                    })
                }
                return finance
            })
        })
        
        setInterval(()=>{
            this._getChart()
            .then(()=>{
                let company_name = this.props.location.state["company_name"]
                // let chart = 
    
                this.state.chart.map((finance)=>{
                    if(finance["company_name"]==company_name){
                        this.setState({
                            data_price: finance["market_price"],
                            trade_volume: finance["trade_volume"],
                            market_cap_rank : finance["market_cap_rank"],
                            listed_stocks :finance["listed_stocks"],
                            face_value: finance["face_value"],
                            trading_unit: finance["trading_unit"],
                            foreigner_stock_limit: finance["foreigner_stock_limit"],
                            foreigner_stock_possession: finance["foreigner_stock_possession"],
                            foreigner_exhaustion_rate: finance["foreigner_exhaustion_rate"],
                            investing_opinion: finance["investing_opinion"],
                            target_price: finance["target_price"],
                            best: finance["best"],
                            worst: finance["worst"],
                            per_fn: finance["per_fn"],
                            eps_fn: finance["eps_fn"],
                            per_expect: finance["per_expect"],
                            eps_expect: finance["eps_expect"],
                            bps: finance["bps"],
                            dividend_yield: finance["dividend_yield"],
                            same_industry_per: finance["same_industry_per"],
                            length1: finance["market_price"].length,
                            length2: finance["trade_volume"].length
                        })
                    }
                    return finance
                })
            })
            
        },20000)
        
    }

    _getChart= async()=>{
        const chart = await this._callChart()
        console.log(chart);
        this.setState({
          chart:chart
        })
    }
  
    _callChart = ()=>{
        return fetch("http://kong.sparcs.org:37289/api/user/finances",{
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "x-access-token": getToken()
            },
            method: "POST",
            body: JSON.stringify({
                username:getUser().username
            }),
        })
        .then(res=> {
            return res.json()
        })
        .then(json=> {
            return json.finances
        })
        .catch(err=>{
            console.log(err)
        })
    }  




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
        let temp1 = this.state.data_price
        this.setState({amount:e.target.value})
        document.getElementById("tot").innerHTML = Number(temp1[temp1.length-1].replace(",",""))*e.target.value
    }


    render(){    
        const data = {
            labels: ['9:00', '9:05', '9:10', '9:15', '9:20', '9:25', '9:30', '9:35', '9:40', '9:45', '9:50', '9:55', 
            '10:00', '10:05', '10:10', '10:15', '10:20', '10:25', '10:30', '10:35', '10:40', '10:45', '10:50', '10:55',
            '11:00', '11:05', '11:10', '11:15', '11:20', '11:25', '11:30', '11:35', '11:40', '11:45', '11:50', '11:55',
            '12:00', '12:05', '12:10', '12:15', '12:20', '12:25', '12:30', '12:35', '12:40', '12:45', '12:50', '12:55', 
            '1:00', '1:05', '1:10', '1:15', '1:20', '1:25', '1:30', '1:35', '1:40', '1:45', '1:50', '1:55',
            '2:00', '2:05', '2:10', '2:15', '2:20', '2:25', '2:30', '2:35', '2:40', '2:45', '2:50', '2:55',
            '3:00', '3:05', '3:10', '3:15', '3:20', '3:25', '3:30'],
            datasets: [
              {
                label: '오늘의 주식동향',
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
                data: this.state.data_price ? this.state.data_price.map(function(d){
                    return Number(d.replace(",",""))
                }) : this.props.location.state["market_price"].map(function(d){
                    return Number(d.replace(",",""))
                })
              }
            ]
        };


        const style = {
            color:"blue"
        }
        // if(temp1.this.state.length == 1){
        //     style.color = "blue"
        // }
        // else if(Number(this.props.market_price[temp1.this.state.length-1].replace(",",""))-Number(this.props.market_price[temp1.this.state.length-2].replace(",",""))<0){
        //     style.color = "red"
        // }

        console.log("state")
        console.log(this.state)

        return(
            <div id="container-fluid">
                <NavBar></NavBar>
                <div className="col-xs-2">
                    <Aside></Aside>
                </div>

                {this.state.data_price ? 
                <div className="col-xs-10">
                    <br></br>
                    <div class="card card-default">
                        <div class="card-header">{this.props.location.state["company_name"]}</div>
                        <div class="card-body card-6-6">
                            <div class="card-left">
                                <br></br>
                                <br></br>
                                <Line ref="chart" data={data} />
                                <br></br>
                                <br></br>
                                <div className="panel panel-default bs">
                                    <div class="panel-heading">매수/매도</div>
                                    <table className="table bs">
                                        <tr>
                                            <td>총 가격</td>
                                            <td><div id="tot"></div></td>
                                            <td className="bs" rowSpan="3">
                                                <form className="form-group bs">
                                                    <button onClick={this._buy} type="button" className="btn btn-default bs">buy</button>
                                                    <br/>
                                                    <button onClick={this._sell} type="button" className="btn btn-default bs">sell</button> 
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>현재가</td>
                                            <td><span style={style}>{this.state.data_price[this.state.length1-1]}</span></td>
                                        </tr>
                                        <tr>
                                            <td>수량</td>
                                            <td><input type ="number" onChange={this._handlebuyandsellChange}></input></td>
                                        </tr>
                                    </table>
                                    
                                </div>
                               
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
                                        <td><div style={style}>{this.state.data_price[this.state.length1-1]}</div></td>
                                    </tr>
                                    <tr>
                                        <td>전일비</td>
                                        <td>{Number(this.state.data_price[this.state.length1-1].replace(",",""))-Number(this.state.data_price[0].replace(",",""))}</td>
                                    </tr>
                                    <tr>
                                        <td>거래량</td>
                                        <td>{this.state.trade_volume[this.state.length2-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>시가총액순위</td>
                                        <td>{this.state.market_cap_rank[this.state.length2-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>상장주식수</td>
                                        <td>{this.state.listed_stocks[this.state.length2-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>액면가</td>
                                        <td>{this.state.face_value[this.state.length2-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>매매단위</td>
                                        <td>{this.state.trading_unit[this.state.length2-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>외국인한도주식수</td>
                                        <td>{this.state.foreigner_stock_limit[this.state.length2-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>외국인보유주식수</td>
                                        <td>{this.state.foreigner_stock_possession[this.state.length2-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>외국인소진율</td>
                                        <td>{this.state.foreigner_exhaustion_rate[this.state.length2-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>투자의견</td>
                                        <td>{this.state.investing_opinion[this.state.length2-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>목표주가</td>
                                        <td>{this.state.target_price[this.state.length2-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>52주최고</td>
                                        <td>{this.state.best[this.state.length2-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>52주최저</td>
                                        <td>{this.state.worst[this.state.length2-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>per_fn</td>
                                        <td>{this.state.per_fn[this.state.length2-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>eps_fn</td>
                                        <td>{this.state.eps_fn[this.state.length2-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>per_expect</td>
                                        <td>{this.state.per_expect[this.state.length2-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>eps_expect</td>
                                        <td>{this.state.eps_expect[this.state.length2-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>bps</td>
                                        <td>{this.state.bps[this.state.length2-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>배당수익률</td>
                                        <td>{this.state.dividend_yield[this.state.length2-1]}</td>
                                    </tr>
                                    <tr>
                                        <td>동일업종per</td>
                                        <td>{this.state.same_industry_per[this.state.length2-1]}</td>
                                    </tr>

                                           
                                </table>
                            </div>
                        </div>
                        
                
                    </div>
                </div>

                </div> : 
                <div className="col-xs-10">
                    <div class="wrap">
                        <img id="loading-image" src="https://t1.daumcdn.net/cfile/tistory/2137C3335785AC9B11" alt="loading..." />
                    </div>
                </div>}
                
                

                
            </div>
        )
    }
}

export default ViewMore