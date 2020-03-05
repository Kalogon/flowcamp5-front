import React, { Component } from 'react';

class Section extends Component{
    render(){
        return(
            <div id="section">
                <br></br>
                <div class="card card-default">
                <div class="card-header">코스피,코스닥 지수</div>
                <div class="card-body card-6-6">
                    <div class="card-left">
                        <img src="https://ssl.pstatic.net/imgfinance/chart/mobile/area/month3/KOSPI_end.png"></img>
                    </div>
                    <div class="card-right">
                        <img src="https://ssl.pstatic.net/imgfinance/chart/mobile/area/month3/KOSDAQ_end.png"></img>
                    </div>
                    <div className="card-caption">aaa</div>
                </div>
                <div class="card-body">
                    <p>왼쪽은 최근 3개월 이내의 코스피 지수의 변화이고 오른쪽은 코스닥 지수의 변화이다.</p>
                </div>
              
                </div>
                
            </div>
        )
    }
}

export default Section;