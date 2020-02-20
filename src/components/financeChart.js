import React from 'react'

function FinanceChart({company_name,market_price,trade_volume,market_cap_rank,listed_stocks,target_price,best,worst,per_fn,eps_fn}){
    return(
        <tr>
            <td>{company_name}</td>
            <td>{market_price}</td>
            <td>{trade_volume}</td>
            <td>{market_cap_rank}</td>
            <td>{listed_stocks}</td>
            <td>{target_price}</td>
            <td>{best}</td>
            <td>{worst}</td>
            <td>{per_fn}</td>
            <td>{eps_fn}</td>
        </tr>
        
    )
}

export default FinanceChart;