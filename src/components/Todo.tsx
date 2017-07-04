import * as React from 'react';

export default class Todo extends React.Component<{ completed: boolean, text: string, onClick: any }, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <li
                onClick={this.props.onClick}
                style={{ textDecoration: this.props.completed ? 'line-through' : 'none'}}>
                {this.props.text}
            </li>
        );
    }
}