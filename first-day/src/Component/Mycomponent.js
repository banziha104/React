import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        job : '개발자'
    }
    static propTypes = {
        name : PropTypes.string,
        job : PropTypes.string,
        favoriteNumber : PropTypes.number.isRequired
    }
    render() {
        const {name, job} = this.props;
        return (
            <div>
                <div>
                    안녕하세요 제 이름은 {name}
                    제 직업은 {job}입니다
                </div>
            </div>
        );
    }
}

MyComponent.propTypes = {};

export default MyComponent;
