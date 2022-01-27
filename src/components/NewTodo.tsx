import React, {useRef} from "react";
import './NewTodo.css';

type newTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<newTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todosSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
    }

    return (
        <form onSubmit={todosSubmitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    )
}

export default NewTodo;