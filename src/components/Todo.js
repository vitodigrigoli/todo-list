import React, {useContext} from 'react'
import {ThemeContext} from "./context";

function Todo(props){

	const theme = useContext( ThemeContext )
	const todo = props.data

	const getClassCard = theme => theme === 'light'? 'has-background-light' : 'has-background-dark'
	const getClassText = theme => theme === 'light'? 'has-text-dark' : 'has-text-light'
	const getPriority = () => {
		switch ( props.priority ){
			case 'high':
				return 'has-text-danger'
			case 'normal':
				return 'has-text-warning'
			default:
				return 'has-text-success'
		}

	}
	return(
		<div className="column is-3 ">
			<div className={`card ${getClassCard(theme.value)}`}>
				<header className="card-header ">
					<div className="card-header-icon">
					  <span className="icon">
					    <i className={`fas fa-circle ${getPriority()}`}/>
					  </span>
					</div>
					<p className={`card-header-title ${getClassText(theme.value)}`}>
						{props.title}
					</p>
					<div className="card-header-icon " onClick={() => props.handleRemove(todo)}>
              <i className="fas fa-times has-text-danger"/>
            </div>
				</header>
				<div className="card-content">
					<div className={`content ${getClassText(theme.value)}`}>
						<p>{props.description}</p>
					</div>
				</div>

			</div>
		</div>

	)
}

export default Todo