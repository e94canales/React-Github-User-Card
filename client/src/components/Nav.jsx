import React from 'react'

const Nav = props => {

    return (
        <nav>
            <h1>GitMe</h1>
            <form onSubmit={props.submitHandler}>
                <input placeholder='Search' type='text' name='search' value={props.searchValue} onChange={props.inputHandler}></input>
            </form>
        </nav>
    )
}

export default Nav