import React, { Component } from 'react';
import { connect } from 'react-redux';

class Card extends Component {

    render() {
        return (
            <div className="container">


                {       /*    {this.props.movies && this.props.movies.filter(el => el.name.toLowerCase().includes(this.props.input.toLowerCase().trim()) && el.rating <= this.props.star).map(el => {
        
        */}


                {this.props.movies && this.props.movies.filter(el => el.name.toLowerCase()).map(el => {


                    return (
                        <div className="movie-card">
                            <p className="movie-name">{el.name}</p>
                            <p className="movie-rating">{"".padEnd(el.rating, "⭐")}</p>
                            <img className="movie-img" src={el.img} />
                            <button onClick={() => {this.props.edit(el.id, this.props.movies) }}>Edit</button>
                            <span onClick={() => {this.props.more(el.id, this.props) }}>More</span>

                        </div>
                    )
                })}
            </div>);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        edit: (id, movie) => {
   
            let name = prompt("name")
            let rating = prompt("rating")
            let img = prompt("img")
          
      
            let NewMovie=movie.filter(el=>el.id!==id).concat({name:name,img:img,rating:rating})
        dispatch({type:"EDIT_MOVIE",value:NewMovie})
    
        
        },

        more: (id, props) => {
            dispatch({ type: 'GET_ID', id: id })
            setTimeout(() => { props.history.push("/description") }, 1500)

        }



    }
}

const mapStateToProps=(state) => {
    return {
        movies:state.ListMoviesReducers
    }
  
}



export default connect(mapStateToProps, mapDispatchToProps)(Card);

