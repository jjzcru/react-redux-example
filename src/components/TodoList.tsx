import * as React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component<{ todos: Array<{ id: number, completed: boolean, text: string }>, onTodoClick: any }, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.todos.map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo}
                        onClick={() => this.props.onTodoClick(todo.id)}
                    />
                )}
            </ul>
        );
    }
}