import React, { Component } from 'react'
import { updateStateWithAlbums, albumsAvailable } from "../redux/actions"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

class Albums extends Component {

    state = {
        albums: []
    }
    componentDidMount = () => {
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        .then(jsonResponse => {
            if(jsonResponse.length > 0) {
                this.props.updateStateWithAlbums(jsonResponse)
            }else{
                this.props.albumsAvailable(false)
            }
        })
        .catch((error) => {
            console.log(error)
            this.props.albumsAvailable(false)
        })
    }

    render() {
        console.log("Albums", this.state.albums)
        return (
            <div>
                <h1>This is our Album Page: </h1><br/>
                {console.log("Render", this.props.isAlbumsAvailable)}
                <h1>{this.props.isAlbumsAvailable === true ? "See Below for All Albums" : "No Album available"}</h1><br/>
                <Link to="/about">Go to About Page</Link>

                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>TITLE</td>
                            <td>USER ID</td>
                        </tr>
                    </thead>
                    <tbody>
                       {this.props.albums.map(album => {
                           return(
                                <tr key={album.id}>
                                    <td>{album.id}</td>
                                    <td>{album.title}</td>
                                    <td>{album.userId}</td>
                                </tr>
                            )
                           
                       })}
                        
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("State", state.albums)
    return {
        albums: state.albums,
        isAlbumsAvailable: state.albumsAvailable
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateStateWithAlbums: (data) => dispatch(updateStateWithAlbums(data)),
        albumsAvailable: (value) => dispatch(albumsAvailable(value))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Albums)