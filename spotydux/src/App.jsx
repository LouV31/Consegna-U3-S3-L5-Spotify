import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import "./App.css";
import SideBar from "./Component/SideBar";
import Main from "./Component/Main";

function App() {
    return (
        <div className="App">
            <Container fluid>
                <Row>
                    <Col className="col-2">
                        <SideBar />
                    </Col>
                    <Col className="col-12 col-md-9 offset-md-3 mainPage">
                        <Main />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
