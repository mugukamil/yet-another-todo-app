import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
    <div className="text-center">
        <Link className="btn btn-sm" to='/'>All</Link>
        <Link className="btn btn-sm" to='/active'>Active</Link>
        <Link className="btn btn-sm" to='/completed'>Completed</Link>
    </div>
)