import React from "react"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import "./App.css"

type Props = {}

const App = (props: Props) => {
	return (
		<main>
			<section>
				<h3>My Redux Todo List</h3>
				<AddTodo />
				<hr />
				<TodoList />
			</section>
		</main>
	)
}

export default App

