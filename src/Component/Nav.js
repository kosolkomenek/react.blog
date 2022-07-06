import { useState } from 'react'
import {NavLink, Link} from 'react-router-dom'
import {styled} from 'styled-components'

export default function Nav() {
    return (
<div>
    <ul>
        <NavLink exact activeClassName="active" to="/">
            <li>
                Home
            </li>
        </NavLink>
        <NavLink activeClassName="active" to="/about">
            <li>
                About
            </li>
        </NavLink>
        <NavLink  activeClassName="active" to="/contact">
            <li>
                Contact
            </li>
        </NavLink>
    </ul>
</div>
    )
}