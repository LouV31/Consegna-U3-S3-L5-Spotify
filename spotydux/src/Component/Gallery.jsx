/* import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GET_HIPHOP, GET_POP, GET_ROCK, getDataAction } from "../Redux/actions";
import { useEffect, useState } from "react";

const Gallery = (props) => {
    const dispatch = useDispatch();
    const artist = {};
    props.artist === "la sad"
        ? useSelector((state) => state.rock.results)
        : props.artist === "the kid laroi"
        ? useSelector((state) => state.pop.results)
        : props.artist === "drake"
        ? useSelector((state) => state.hiphop.results)
        : null;

    useEffect(() => {
        if (props.artist === "la sad") {
            dispatch(getDataAction(props.artist, GET_ROCK));
        } else if (props.artist === "the kid laroi") {
            dispatch(getDataAction(props.artist, GET_POP));
        } else {
            dispatch(getDataAction(props.artist, GET_HIPHOP));
        }
    }, []);



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
                                        Track: <br />
                                        Artist:
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

export default Gallery;
 */
