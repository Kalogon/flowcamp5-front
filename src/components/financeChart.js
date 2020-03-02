import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// {company_name,market_price,trade_volume,market_cap_rank,listed_stocks,target_price,best,worst,per_fn,eps_fn}
class FinanceChart extends Component{
    render(){
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
                        per_krx:this.props.per_krx,
                        eps_krx: this.props.eps_krx,
                        per_expect: this.props.per_expect,
                        eps_expect: this.props.eps_expect,
                        pbr: this.props.pbr,
                        bps: this.props.bps,
                        dividend_yield:this.props.dividend_yield,
                        same_industry_per: this.props.same_industry_per,
                    }
                }}>{this.props.company_name[0]}</Link></td>
                <td>{this.props.market_price[0]}</td>
                <td>{this.props.trade_volume[0]}</td>
                <td>{this.props.market_cap_rank[0]}</td>
                <td>{this.props.listed_stocks[0]}</td>
                <td>{this.props.target_price[0]}</td>
                <td>{this.props.best[0]}</td>
                <td>{this.props.worst[0]}</td>
                <td>{this.props.per_fn[0]}</td>
                <td>{this.props.eps_fn[0]}</td>
            </tr>
            
        )
    }
    
}

export default FinanceChart;