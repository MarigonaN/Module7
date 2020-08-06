import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface DetailComponentOwnProps {
  tracks: string[]
}

type AllTheProps = RouteComponentProps & DetailComponentOwnProps

class DetailComponent extends React.Component<AllTheProps> {



//   const fetchTracks = (id) => {
    
//     fetch('https://deezerdevs-deezer.p.rapidapi.com/album/' + id, {
//         "method": "GET",
//                 "headers": {
//                     "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
//                     "x-rapidapi-key": "8275c582bamshd83a3179dd00459p19f0b2jsn94c889368579"
//                 }
//     })
//     .then(result => result.json())
    
//     .then(data => {

//         this.setState({ tracks : data })
       
//     })
//  }

  render() {
    return <div>


    </div>
  }
}

export default DetailComponent