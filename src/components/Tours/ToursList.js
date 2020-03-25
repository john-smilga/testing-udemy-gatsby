import React, { Component } from 'react'
import Tour from './Tour'
export default class ToursList extends Component {
    state = {
        tours:[],
        sortedTours:[]
    }
componentDidMount(){
    this.setState({
        tours:this.props.tours.edges,
        sortedTours:this.props.tours.edges
    })
}

    render() {
        return (
            <>
               
               {this.state.sortedTours.map(({node})=>{
                   return <Tour tourDatas={node} Key={node.contentful_id}/>
               })}
               
            </>
        )
    }
}
