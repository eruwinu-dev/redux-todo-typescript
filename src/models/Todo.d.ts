export interface TodoType {
	id: number
	title: string
	completed: boolea
}

export interface TodoStateType {
	todos: TodoType[]
	selectedTodoId: number | null
}

