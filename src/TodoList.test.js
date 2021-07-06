import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from "./TodoList";

function addTodo(todoList, task="Finish task"){
    const taskInput = todoList.getByLabelText("task");
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
    expect(t)
})