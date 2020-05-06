import React from 'react'

const FollowerSpotlight = props => {

    return (
        <div className='followersSpotlightContainer'>
            {props.followers.map( person => {
                return ( 
                    <div className='followersSpotlight' key={person.id}>
                        <img className='followersSpotlightImg' src={person.avatar_url} alt={person.login} />
                        <h6>{person.login}</h6>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowerSpotlight