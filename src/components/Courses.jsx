import {Link, Outlet, NavLink} from 'react-router-dom'

const Courses = () => {
  return (
    <>
      <h1 className="m-4">Course List</h1>
      <NavLink
        className="m-2 p-2"
        to={"/courses/frontend"}
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "green" : "black",
            color: isActive ? "white" : "white",
          };
        }}
      >
        <span className="px-2 py-3">Front End</span>
      </NavLink>
      <NavLink
        className="m-2 p-2"
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "green" : "black",
            color: isActive ? "white" : "white",
          };
        }}
        to="/courses/backend"
      >
        <span className="px-2 py-3">Back End</span>
      </NavLink>
      <Outlet />
    </>
  );
};
export default Courses;
