import React, {useContext} from 'react'
import {ThemeContext} from "./context";
import Button from "./Button";

function Navbar(props){

	const theme = useContext( ThemeContext )
	const getClassNav = theme => theme === 'light' ? 'is-light' : 'is-dark'
	const getClassTitle = theme => theme === 'light' ? 'has-text-black' : 'has-text-white'

	return(
		<nav className={`navbar is-align-items-center py-3 ${getClassNav(theme.value)}`} role="navigation" aria-label="main navigation">
			<div className="container">
				<div className={`navbar-brand`}>
					<h1 className={`title has-text-weight-bold ${getClassTitle(theme.value)}`}>TODO LIST</h1>
				</div>
				<div className="navbar-menu">
					<div className="navbar-end">
						<div className="navbar-item">
							<Button/>
						</div>
					</div>
				</div>
			</div>

		</nav>
	)
}

export default Navbar
