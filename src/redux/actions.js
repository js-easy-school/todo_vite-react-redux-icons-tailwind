import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, MAKE_COMPLETED, MAKE_INCOMPLETE, FILTER_TODOS, MAKE_ALL_COMPLETED, UPDATE_SEARCH_TERM } from "./actionTypes"

export const addTodo = (text) => ({
	type: ADD_TODO,
	payload: {text}
})

export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	payload: {id}
})

export const removeTodo = (id) => ({
	type: REMOVE_TODO,
	payload: {id}
})

export const makeCompleted = (id) => ({
	type: MAKE_COMPLETED,
	payload: {id}
})

export const makeIncomplete = (id) => ({
	type: MAKE_INCOMPLETE,
	payload: {id}
})

export const filterTodos = (filter) => ({
	type: FILTER_TODOS,
	payload: {filter}
})

export const makeAllCompleted = () => ({
	type: MAKE_ALL_COMPLETED,
})

export const updateSearchTerm = (searchTerm) => ({
	type: UPDATE_SEARCH_TERM,
	payload: {searchTerm}
})