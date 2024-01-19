import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import next from "../Assets/playerbuttons/next.png";
import play from "../Assets/playerbuttons/play.png";
import prev from "../Assets/playerbuttons/prev.png";
import repeat from "../Assets/playerbuttons/repeat.png";
import shuffle from "../Assets/playerbuttons/shuffle.png";

const Player = () => {
    const selectedSong = useSelector((state) => state.selected.song);
    if (selectedSong !== "") {
        console.log(selectedSong);
    }
    return (
        <Container fluid className="fixed-bottom bg-container pt-1">
            <Row className="h-100">
                <Col lg={10} className="offset-lg-2 ">
                    <Row className="h-100 justify-content-center align-items-center">
                        <Col className="col-3"></Col>
                        <Col xs={6} className="playerControls">
                            <div className="d-flex">
                                <a href="#">
                                    <img src={next} alt="shuffle" />
                                </a>
                                <a href="#">
                                    <img src={play} alt="prev" />
                                </a>
                                <a href="#">
                                    <img src={prev} alt="play" />
                                </a>
                                <a href="#">
                                    <img src={repeat} alt="next" />
                                </a>
                                <a href="#">
                                    <img src={shuffle} alt="repeat" />
                                </a>
                            </div>
                            <div className="progress mt-3">
                                <ProgressBar now={60} label="60%" />
                            </div>
                        </Col>
                        <Col className="col-3 ">
                            <div className="d-flex">
                                <img src={selectedSong.albumCover} style={{ width: "60px" }} />
                                <div className="d-flex flex-column align-items-center justify-content-center ms-3">
                                    <p className="mb-0 p-0">{selectedSong.songTitle}</p>
                                    <p className="mb-0 p-0 fw-normal">{selectedSong.albumTitle}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};
export default Player;
