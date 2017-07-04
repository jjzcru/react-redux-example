import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            component: <div>loading</div>
        };
    }

    render() {
        return (this.state.component);
    }
}

ReactDOM.render(<App />, document.getElementById('app'));


