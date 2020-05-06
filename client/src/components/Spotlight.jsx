import React from 'react'

const Spotlight = props => {


    return (
        <div className='spotlight'>
            <img className='spotlightImg' src={props.userData.avatar_url} alt={props.userData.name}/>
            <div className='spotlightInfo'>
                <h5>{props.userData.name}</h5>
                <h6>{props.userData.location}</h6>
                <h6>Repos: {props.userData.public_repos}</h6>
            </div> 
        </div>
    )
}

export default Spotlight