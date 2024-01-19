import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GET_ROCK, getDataAction } from "../Redux/actions";
import { useEffect, useState } from "react";

const Rock = (props) => {
    const dispatch = useDispatch();
    const artist = useSelector((state) => state.rock.results);
    const [artistToDisplay, setArtistToDisplay] = useState([]);

    useEffect(() => {
        dispatch(getDataAction(props.artist, GET_ROCK));
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
                                <Col key={index} className="text-center">
                                    <img className="img-fluid" src={songInfo.album.cover_medium} alt="track" />
                                    <p>
                                        Track:
                                        {songInfo.title.length < 16
                                            ? songInfo.title
                                            : songInfo.title.substring(0, 16)}{" "}
                                        <br />
                                        Artist: {songInfo.artist.name}
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
