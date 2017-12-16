import React, {Component} from 'react'; // 리액트
import './App.css'
import MyComponent from './Component/MyComponent3'
import Container from "./FunComponent";
class App extends Component {
    render() {
        return(
                <Container title = "Welcome">
                    <MyComponent/>
                </Container>

        );
    }
}
export default App;
