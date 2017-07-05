import * as React from 'react';
import FilterLink from '../containers/FilterLink';

export default class Footer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <p>
                Show:
                {' '}
                <FilterLink filter='SHOW_ALL'>
                    All
                </FilterLink>
                {', '}
                <FilterLink filter='SHOW_ACTIVE'>
                    Active
                </FilterLink>
                {', '}
                <FilterLink filter='SHOW_COMPLETED'>
                    Completed
                </FilterLink>
            </p>
        );
    }
}