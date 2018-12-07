import React, { Component } from 'react'

class movie extends Component {

    static async getInitialProps (req) {
        console.log(req.query.id)
        return {
            name : "Homestay"
        }
    }

    render () {
        return (
            <div>
                Movie Page : {this.props.name}
            </div>
        )
    }
}

export default movie