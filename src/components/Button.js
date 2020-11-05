import React, {useContext} from 'react'
import {ThemeContext} from "./context";

function Button(props){

	const theme = useContext( ThemeContext )

	const getClassButton = theme => theme === 'light'? 'is-dark' : 'is-white'
	const getClassText = theme => theme === 'light'? 'Dark' : 'Light'
	const getClassIcon = theme => theme === 'light'? 'fa-moon' : 'fa-sun'
	return(
		<button className={`button ${getClassButton(theme.value)} is-light`} onClick={theme.update}>
			<span className="icon is-small">
        <i className={`fas ${getClassIcon(theme.value)}`}/>
      </span>
			<strong>{getClassText(theme.value)} mode</strong>
		</button>
	)
}

export default Button