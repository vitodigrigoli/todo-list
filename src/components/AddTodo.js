import React, {useContext} from 'react'
import {ThemeContext} from "./context";

function AddTodo(props){

	const theme = useContext(ThemeContext)

	const getClassForm = theme => theme === 'light'? 'has-background-light' : 'has-background-dark'
	const getClassText = theme => theme === 'light'? 'has-text-dark' : 'has-text-light'
	const getClassButton = theme => theme === 'light'? 'is-light' : 'is-dark'

	return(
		<div className={`column is-6`}>
			<h3 className={`title ${getClassText(theme.value)}`}>Add new To Do</h3>
			<form className="form" onSubmit={props.handleSubmit}>
				<div className="field">
					<label className={`label ${getClassText(theme.value)}`}>Title</label>
					<div className="control">
						<input
							className={`input ${getClassText(theme.value)} ${getClassForm(theme.value)}`}
							type="text"
							name="title"
							value={props.data.title}
							onChange={props.handleChange}/>
					</div>
				</div>

				<div className="field my-5">
					<label className={`label ${getClassText(theme.value)}`}>Description</label>
					<div className="control">
						<textarea
							className={`textarea ${getClassText(theme.value)} ${getClassForm(theme.value)}`}
							name="description"
							value={props.data.description}
							onChange={props.handleChange}/>
					</div>
				</div>

				<div className="field my-5">
					<label className={`label ${getClassText(theme.value)}`}>Priority</label>
					<div className="control">
						<div className="select">
							<select
								name="priority"
								className={`${getClassText(theme.value)} ${getClassForm(theme.value)}`}
								value={props.data.priority}
								onChange={props.handleChange}
							>
								<option value="high">High</option>
								<option value="normal">Normal</option>
								<option value="low">Low</option>
							</select>
						</div>
					</div>
				</div>

				<div className="field is-grouped my-5">
					<div className="control">
						<button className="button is-primary" type="submit">Submit</button>
					</div>
					<div className="control">
						<button className={`button ${getClassButton(theme.value)} is-inverted" type="button" onClick={props.handleReset}`}>Cancel</button>
					</div>
				</div>
			</form>
		</div>



	)
}

export default AddTodo