import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import TodoItem from "./TodoItem"

type Props = {}

const TodoList = (props: Props) => {
	const todoList = useSelector((state: RootState) => state.todos)

	if (!todoList.length) return <h4>No todos.</h4>

	return (
		<div className="todo-list">
			{todoList.map((todo, index) => (
				<TodoItem key={index} todo={todo} />
			))}
		</div>
	)
}

export default TodoList

