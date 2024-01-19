import { Container, Row, Col, Button } from "react-bootstrap";
import Gallery from "./Gallery";
import Rock from "./Rock";
import Pop from "./Pop";
import HipHop from "./HipHop";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Player from "./Player";
import { selectedSongAction, addLibraryAction } from "../Redux/actions";
import { Plus } from "react-bootstrap-icons";

const Main = () => {
    const searchResults = useSelector((state) => state.search.results);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(searchResults);
    });
    return (
        <>
            <Row>
                <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                    <a href="#">TRENDING</a>
                    <a href="#">PODCAST</a>
                    <a href="#">MOODS AND GENRES</a>
                    <a href="#">NEW RELEASES</a>
                    <a href="#">DISCOVER</a>
                </Col>
            </Row>

            <Row>
                <Col className="col-10">
                    {searchResults && (
                        <div id="searchResults">
                            <h2>Search Results</h2>
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                                {searchResults.map((songInfo, index) => (
                                    <Col
                                        key={index}
                                        className="text-center"
                                        onClick={() =>
                                            dispatch(
                                                selectedSongAction(
                                                    songInfo.title.substring(0, 16),
                                                    songInfo.album.cover_small,
                                                    songInfo.album.title
                                                )
                                            )
                                        }
                                    >
                                        <img className="img-fluid" src={songInfo.album.cover_medium} alt="track" />
                                        <p className="d-flex align-items-center justify-content-between">
                                            <span>
                                                Track:
                                                {songInfo.title.length < 16
                                                    ? songInfo.title
                                                    : songInfo.title.substring(0, 16)}{" "}
                                                <br />
                                                Artist: {songInfo.artist.name}
                                            </span>
                                            <Button
                                                className="text-white "
                                                variant="transparent"
                                                onClick={() =>
                                                    dispatch(
                                                        addLibraryAction(
                                                            songInfo.title.substring(0, 16),
                                                            songInfo.album.cover_small,
                                                            songInfo.album.id
                                                        )
                                                    )
                                                }
                                            >
                                                <Plus className="fs-3" />
                                            </Button>
                                        </p>
                                    </Col>
                                ))}
                            </div>
                        </div>
                    )}
                </Col>
            </Row>

            <Rock artist="la sad" sectionName="Rock" />
            <Pop artist="the kid laroi" sectionName="Pop" />
            <HipHop artist="drake" sectionName="Hip-Hop" />
            <Row>
                <Col className="col-10">
                    <Player />
                </Col>
            </Row>
        </>
    );
};
export default Main;
