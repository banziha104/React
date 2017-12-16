import React from 'react';

/*props가 들어갈 자리에 {title,children} 으로 대체 가능*/
const Container = ({title,children}) => {
    return (
        <div>
            <h1>{title}</h1>
            <div>
                {children /*다음에 오는 컴포넌트를 넣을 수 있음*/}
            </div>
        </div>
    );
};
export default Container;
