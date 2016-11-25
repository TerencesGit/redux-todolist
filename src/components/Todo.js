import React, { PropTypes } from 'react'

const Todo = ({ onClick, complented, text }) => (
	<li onClick={onClick} 
			style={{textDecoraion: completed ? 'line-through' : 'none'}}
	>
		{{text}}
	</li>
)

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}

export default Todo