import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// {company_name,market_price,trade_volume,market_cap_rank,listed_stocks,target_price,best,worst,per_fn,eps_fn}
class FinanceChart extends Component{
    
    render(){
        let temp1 = this.props.market_price
        let temp2 = this.props.trade_volume
        const style = {
            color:"blue"
        }
        if(temp1.length == 1){
            style.color = "blue"
        }
        else if(Number(this.props.market_price[temp1.length-1].replace(",",""))-Number(this.props.market_price[temp1.length-2].replace(",",""))<0){
            style.color = "red"
        }
        
        return(
            <tr>
                <td><Link to={{
                    pathname: "/viewMore",
                    state: {
                        company_name:this.props.company_name,
                        market_price: this.props.market_price,
                        market_price_all: this.props.market_price_all,
                        trade_volume: this.props.trade_volume,
                        market_cap_rank : this.props.market_cap_rank,
                        listed_stocks :this.props.listed_stocks,
                        face_value: this.props.face_value,
                        trading_unit: this.props.trading_unit,
                        foreigner_stock_limit: this.props.foreigner_stock_limit,
                        foreigner_stock_possession: this.props.foreigner_stock_possession,
                        foreigner_exhaustion_rate: this.props.foreigner_exhaustion_rate,
                        investing_opinion: this.props.investing_opinion,
                        target_price: this.props.target_price,
                        best: this.props.best,
                        worst: this.props.worst,
                        per_fn: this.props.per_fn,
                        eps_fn: this.props.eps_fn,
                        per_expect: this.props.per_expect,
                        eps_expect: this.props.eps_expect,
                        bps: this.props.bps,
                        dividend_yield:this.props.dividend_yield,
                        same_industry_per: this.props.same_industry_per,
                    }
                }}>{this.props.company_name}</Link></td>
                <td>
                    <div style={style}>{this.props.market_price[temp1.length-1]}</div>
                </td>
                <td>
                    <div>{Number(this.props.market_price[temp1.length-1].replace(",",""))-Number(this.props.market_price[0].replace(",",""))}</div>
                </td>
                <td>{this.props.trade_volume[temp2.length-1]}</td>
                <td>{this.props.market_cap_rank[temp2.length-1]}</td>
                <td>{this.props.listed_stocks[temp2.length-1]}</td>
                <td>{this.props.target_price[temp2.length-1]}</td>
                <td>{this.props.best[temp2.length-1]}</td>
                <td>{this.props.worst[temp2.length-1]}</td>
                <td>{this.props.per_fn[temp2.length-1]}</td>
                <td>{this.props.eps_fn[temp2.length-1]}</td>
            </tr>

        )
    }
    
}

export default FinanceChart;