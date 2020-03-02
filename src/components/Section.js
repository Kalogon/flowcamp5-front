import React, { Component } from 'react';
import './Section.css'

class Section extends Component{

    state={}

    componentDidMount(){
        this._getKospi();
    }

    _getKospi= async()=>{
        const kospi = await this._callKospi()
        console.log(kospi);
        this.setState({
            kospi:kospi
        })
        console.log(this.state)
    }

    _callKospi = ()=>{
        return fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
        .then(res=> {
            return res.json()
        })
        .then(json=> {
            return json.data.movies
        })
        .catch(err=>{
            console.log(err)
        })
    }

    _renderKospi = ()=>{
        console.log("1")
        console.log(this.state.kospi);
        const movies = this.state.kospi.map((movie) =>{
          return (
              <img src="https://ssl.pstatic.net/imgfinance/chart/sise/siseMainKOSPI.png?sid=1582736951208"></img>
          ) 
        });
        return movies;
    }

    render(){
        return(
            <div id="section">
                <img src="https://ssl.pstatic.net/imgfinance/chart/mobile/area/month3/KOSPI_end.png"></img>
            </div>
        )
    }
}

export default Section;