import { useParams } from "react-router-dom";

const Any = () => {
     const { anything } = useParams();
     return <h1>Params are: {anything}</h1>;
}

export default Any