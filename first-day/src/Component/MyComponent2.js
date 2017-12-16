import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    state = {
        number : 0
    };
    handleClick(){
        this.state.number = this.state.number + 1
    }
    render() {
        const { number } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={this.handleClick().bind(this)}>aaa</button>
            </div>
        );
    }
}

/*<button onClick={()=>{this.setState({number: number+1})}}>클릭좀</button>*/
MyComponent.propTypes = {};

export default MyComponent;
