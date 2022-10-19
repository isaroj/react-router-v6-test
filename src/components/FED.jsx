
import  {useNavigate} from 'react-router-dom'
const FED = () => {
   
    const navigate = useNavigate()

  return (
    <>
      <h1>Welcome to FED course</h1>
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
      </ul>
      <button 
      onClick={() => {
        navigate('/checkout', {state: '10000'})
      }}
      className="p-2 m-2 btn btn-primary">Buy Now</button>
    </>
  );
};

export default FED;
