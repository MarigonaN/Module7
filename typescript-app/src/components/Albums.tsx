import React, { Component } from 'react'


import { HeaderProps } from '../types/types'

interface AlbumState {
    data?: [],
    searchedMusic: any [],
   
  }

class  Albums extends  React.Component<AlbumState> {

    state: AlbumState = {
        data :  [],
        searchedMusic: [], 
      
      }
      componentDidMount () {
       fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=ac/dc",  {
         "method": "GET",
         "headers": {
             "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
             "x-rapidapi-key": "8275c582bamshd83a3179dd00459p19f0b2jsn94c889368579"
         }
     })
       .then((response) => response.json())
       .then((responseObject) =>
         this.setState({ searchedMusic: responseObject.data })
       );
      
      }
    render() {
        console.log(this.state.searchedMusic)
        return (
            <>
          
               <div className='row'>

       { this.state.searchedMusic.map(item => {
         return (
            <col  style={{marginBottom : '30px', display: 'flex',  flexDirection: 'column', alignItems: 'center', color: '#fff'}}>
                 <img alt='img' width='200px' src={item.album.cover_big} style={{borderRadius: '10px'}} className='cover'/>
                 <small className='mt-3'>{item.album.title}</small>


            </col>

)
           
        })}
                
              
               </div>
          
            
               </>
           )
    }
   
}

export default Albums