import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import "./App.css";
import SideBar from "./Component/SideBar";
import Main from "./Component/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import YourLibrary from "./Component/YourLibrary";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Container fluid>
                    <Row>
                        <Col className="col-2">
                            <SideBar />
                        </Col>
                        <Col className="col-12 col-md-9 offset-md-3 mainPage">
                            <Main />
                            <Routes>
                                <Route path="/library" element={<YourLibrary />} />
                            </Routes>
                        </Col>
                    </Row>
                </Container>
            </BrowserRouter>
        </div>
    );
}

export default App;
