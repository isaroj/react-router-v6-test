import {useLocation} from 'react-router-dom'

const Checkout = () => {
    debugger
    const location = useLocation()
  return (
    <>
      <h1>Checkout Page</h1>
      <h2>Your total cart value is {location.state}</h2>
      <h3>Dummy received {location.state}</h3>
    </>
  );
};

export default Checkout;
