import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GET_POP, addLibraryAction, getDataAction, selectedSongAction } from "../Redux/actions";
import { useEffect, useState } from "react";
import { Plus } from "react-bootstrap-icons";

const Rock = (props) => {
    const dispatch = useDispatch();
    const artist = useSelector((state) => state.pop.results);
    const [artistToDisplay, setArtistToDisplay] = useState([]);

    useEffect(() => {
        dispatch(getDataAction(props.artist, GET_POP));
    }, []);

    /*  if (artist) {
        console.log(artistToDisplay);
    } */

    return (
        <Row>
            <Col className="col-10">
                {artist && (
                    <div id="rock">
                        <h2>{props.sectionName}</h2>
                        <div
                            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                            id="rockSection"
                        >
                            {artist.slice(0, 4).map((songInfo, index) => (
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
    );
};

export default Rock;
