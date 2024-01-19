import { useSelector, useDispatch } from "react-redux";
const YourLibrary = () => {
    const library = useSelector((state) => state.library.library);
    if (library.length !== 0) {
        console.log(library);
    }
    return (
        <ul>
            <li className="d-flex">
                <img src="#" />
                <p>Titolo</p>
            </li>
        </ul>
    );
};
export default YourLibrary;
