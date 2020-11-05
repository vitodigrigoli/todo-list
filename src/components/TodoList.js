import React from 'react'
import Todo from "./Todo";

function TodoList(props){
	const todos = props.data

	return(
		<section className="section columns is-multiline">
			{
				todos.map( todo =>
					<Todo
						key={todo.id}
						id={todo.id}
						title={todo.title}
						description={todo.description}
						priority={todo.priority}
						handleRemove={props.handleRemove}
						data={todo}
					/>
				)
			}
		</section>
	)

}

export default TodoList