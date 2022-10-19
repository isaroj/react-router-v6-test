import { useNavigate, Link } from "react-router-dom";

const BED = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Welcome to BED course</h1>
      <ul>
        <li>Java</li>
        <li>Springboot</li>
        <li>MySql</li>
      </ul>
      <button
        onClick={() => {
          navigate("/checkout", { state: "20000" });
        }}
        className="p-2 m-2 btn btn-primary"
      >
        Buy Now
      </button>
      <Link to="/checkout" state="999"> dummy check</Link>

    </>
  );
};

export default BED;
