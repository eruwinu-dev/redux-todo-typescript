import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TodoType, TodoStateType } from "../models/Todo"

const initialState: TodoStateType = {
	todos: [],
	selectedTodoId: null,
}

const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: {
			reducer: (state, action: PayloadAction<TodoType>) => {
				const newTodos = [...state.todos, action.payload]
				state.todos = newTodos
			},
			prepare: (title: string) => ({
				payload: {
					id: Math.floor(Math.random() * 1e4),
					title,
					completed: false,
				},
			}),
		},
		deleteTodo: {
			reducer: (state, action: PayloadAction<number>) => {
				const newTodos: TodoType[] = state.todos.filter((todo) => todo.id !== action.payload)
				state.todos = newTodos
			},
			prepare: (id: number) => ({
				payload: id,
			}),
		},
		toggleTodo: {
			reducer: (state, action: PayloadAction<number>) => {
				const newTodos: TodoType[] = state.todos.map((todo: TodoType) =>
					todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
				)
				state.todos = newTodos
			},
			prepare: (id: number) => ({
				payload: id,
			}),
		},
		selectTodo: {
			reducer: (state, action: PayloadAction<number | null>) => {
				state.selectedTodoId = action.payload
			},
			prepare: (id: number | null) => ({
				payload: id,
			}),
		},
		editTodo: {
			reducer: (state, action: PayloadAction<string>) => {
				const newTodos: TodoType[] = state.todos.map((todo: TodoType) =>
					todo.id === state.selectedTodoId ? { ...todo, title: action.payload } : todo
				)
				state.todos = newTodos
				state.selectedTodoId = null
			},
			prepare: (title: string) => ({
				payload: title,
			}),
		},
	},
})

export const { addTodo, deleteTodo, toggleTodo, selectTodo, editTodo } = todoSlice.actions
export default todoSlice.reducer

