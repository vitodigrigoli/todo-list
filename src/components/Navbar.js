import React, {useContext} from 'react'
import {ThemeContext} from "./context";
import Button from "./Button";

function Navbar(props){

	const theme = useContext( ThemeContext )
	const getClassNav = theme => theme === 'light' ? 'is-light' : 'is-dark'
	const getClassTitle = theme => theme === 'light' ? 'has-text-black' : 'has-text-white'

	return(
		<div className={` navbar ${getClassNav(theme.value)}`} role="navigation" aria-label="main navigation">
				<div className={`navbar__title`}>
					<h1 className={`title has-text-weight-bold ${getClassTitle(theme.value)}`}>TODO LIST</h1>
				</div>
			<div className={`Navbar__button`}>
				<Button/>
			</div>
		</div>
	)
}

export default Navbar
