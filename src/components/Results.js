import React from 'react'
import { connect } from 'react-redux'

const Results = props => (
    <div className="container results">
        <ul>
        {
            ['page1', 'page2', 'page3'].map((e) => {
                return (
                    <div key={e}>
                        <li>
                            <b>{e}</b>
                            {'  '}
                            <span>{JSON.stringify(props.forms[e])}</span>
                        </li>
                    </div>
                )
            })
        }
        </ul>
    </div>
)

function mapStateToProps(state) {
    return {
        forms: state.wizForms
    }
}

export default connect(mapStateToProps)(Results)



