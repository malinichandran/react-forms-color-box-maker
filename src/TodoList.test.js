import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from "./TodoList";

function addTodo(todoList, task="Finish task"){
    const taskInput = todoList.getByLabelText("Task to be added!");
    fireEvent.change(taskInput, {target:{value:task}});
    const button = todoList.getByText("Add a new task!");
    fireEvent.click(button);
}

it("renders without crashing", function(){
    render(<TodoList/>);
});

it("matches snapshot", function(){
    const { asFragment } = render(<TodoList/>);
    expect(asFragment()).toMatchSnapshot();
});

//no todos added
it("can add a new todo", function(){
    const todoList = render(<TodoList/>);
    expect(todoList.queryByText("X")).not.toBeInTheDocument();
    addTodo(todoList);

//add a todo
const removeButton = todoList.getByText("X");
expect(removeButton).toBeInTheDocument();


});

it("can remove a box", function(){
    const todoList = render(<TodoList/>);
    addTodo(todoList);

    const removeButton = todoList.getByText("X");
    fireEvent.click(removeButton);
    
})