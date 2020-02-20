import React, { Component, Image } from 'react';
import './Chart.css'
import FinanceChart from '../components/financeChart'

class Chart extends Component{
    
  state = {}

  componentDidMount(){
    this._getChart();
  }

  _getChart= async()=>{
      const chart = await this._callChart()
      console.log(chart);
      this.setState({
        chart:chart
      })
      console.log(this.state)
  }

  _callChart = ()=>{
      return fetch("http://kong.sparcs.org:37289/finances")
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

  _renderChart = ()=>{
      console.log("1")
      console.log(this.state.chart);
      const finances = this.state.chart.map((finance,index) =>{
        return (
            <FinanceChart
              company_name={finance.company_name}
              market_price={finance.market_price}
              trade_volume={finance.trade_volume}
              market_cap_rank={finance.market_cap_rank}
              listed_stocks={finance.listed_stocks}
              target_price={finance.target_price}
              best={finance.best}
              worst={finance.worst}
              per_fn={finance.per_fn}
              eps_fn={finance.eps_fn}
              key={index}
            />
        ) 
      });
      return finances;
  }


  render(){
    return(
      <div id="section">
        <table border="1">
          <tr>
            <th>기업이름</th>
            <th>현재가</th>
            <th>거래량</th>
            <th>시가총액순위</th>
            <th>상장주식수</th>
            <th>목표주가</th>
            <th>52주 최고</th>
            <th>52주 최저</th>
            <th>PER_fn</th>
            <th>EPS_fn</th>
          </tr>
          {this.state.chart ? this._renderChart() : 
          <tr>
            <td>Data1</td>
            <td>Data2</td>
            <td>Data3</td>
            <td>Data4</td>
            <td>Data5</td>
            <td>Data6</td>
            <td>Data7</td>
            <td>Data8</td>
            <td>Data9</td>
            <td>Data10</td>
          </tr>}
          
        </table>
      </div>
    );
  }
}

export default Chart;
