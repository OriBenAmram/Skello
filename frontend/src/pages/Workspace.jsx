import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// FUNCTIONS

// CMPS

// SERVICES

class _Workspace extends Component {

    render() {
        return (
            <section className='workspace-page'>
                <section className='left-side-bar-container'>
                    
                </section>
                <h1>WorkSpace</h1>
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

export const Workspace = connect(mapStateToProps, mapDispatchToProps)(_Workspace)


