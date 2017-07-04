import * as React from 'react';

export default class Link extends React.Component<{ active: boolean, children: any, onClick: Function }, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        if (this.props.active) {
            return <span>{this.props.children}</span>;
        }

        return (
            <a href='#'
                onClick={e => {
                    e.preventDefault();
                    this.props.onClick();
                }}>
                {this.props.children}
            </a>
        );
    }
}
