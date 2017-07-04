import * as React from 'react';
export default class AddTodoForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        let input;
        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    this.props.onSubmit(input.value);
                    input.value = '';
                }}>
                    <input ref={node => {
                        input = node;
                    }} />
                    <button type='submit'>Add Todo</button>
                </form>
            </div>
        );
    }
}