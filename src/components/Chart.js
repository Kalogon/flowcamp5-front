import React, { Component, Image } from 'react';
import './Chart.css'
import '../components/financeChart'

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
      const finances = this.state.chart.map((finance) =>{
        return (
            <div>
                {finance.market_price}
            </div>
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
            <th>전일비</th>
            <th>등락률</th>
            <th>거래량</th>
            <th>시가</th>
            <th>고가</th>
            <th>저가</th>
            <th>PER</th>
            <th>EPS</th>
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
