import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent3 extends Component {
    state = {
        lastname : '',
        firstname : '',
        names : []
    };

    handleChange = (e) =>{
        const { name , vaule} = e.target;
        this.setState({
            [name] : value
        });
        // e.persist(); //이벤트는 이벤트가 발생할때만 할 수있음
        // console.log(e);
        // console.log(e.target.name, e.target.value);
    };
    handleKeyPress = (e)=>{ // 엔터키의 입력
        if(e.key === 'Enter') this.handleClick();
    };

    handleClick = () =>{
        const  {lastname , firstname, names} = this.state;
        this.setState({
            lastname : '',
            firstname : '',
            names: [...names,'{$lastname} {$firstname}']
            // names : names.concat('{$lastname} {$firstname}')
        })
        // names.push("") // 안됨.
    };
    render() {
        const  {handleChange,handleKeyPress} = this;
        const  {lastname , firstname, names} = this.state;
        return (
            <div>
                <input
                    name="lastname"
                    placeholder="성"
                    onChange={handleChange}
                    value={lastname}/>
                <input
                    name="firstname"
                    placeholder="이름"
                    onChange={handleChange}
                    value={firstname}/>
                <button >등록</button>
                <h2>{lastname} {firstname}</h2>
                <h2>{names.join(', ')}</h2>
                {
                    names.map((name, i)=><h2 key={i}>{name}</h2>) //두번쨰 파라미터는 인덱스가 들어감
                }
            </div>
        );
    }
}

export default MyComponent3;
