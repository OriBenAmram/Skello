import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// FUNCTIONS

// CMPS

// SERVICES

class _BoardPage extends Component {

    render() {
        return (
            <section className='board-page'>
                <h1>BoardPage</h1>
            </section>
        )
    }
}

function mapStateToProps({ userModule }) {
    return {
        // user: userModule.user,
    }
}

const mapDispatchToProps = {
    
};

export const BoardPage = connect(mapStateToProps, mapDispatchToProps)(_BoardPage)


