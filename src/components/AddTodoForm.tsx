import * as React from 'react';
export default class AddTodoForm extends React.Component<any, any> {
    private input;
    constructor(props: any) {
        super(props);

        this.addTodo = this.addTodo.bind(this);
        this.inputNode = this.inputNode.bind(this);
    }

    private addTodo(event) {
        event.preventDefault();
        if (!this.input.value.trim()) {
            return;
        }
        this.props.onSubmit(this.input.value);
        this.input.value = '';
    }

    private inputNode(node) {
        this.input = node;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addTodo}>
                    <input ref={this.inputNode} />
                    <button type='submit'>Add Todo</button>
                </form>
            </div>
        );
    }
}