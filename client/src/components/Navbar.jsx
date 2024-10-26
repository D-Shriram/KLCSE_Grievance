// import React, {useContext} from 'react';
// // import 'bootstrap/dist/css/bootstrap.css';
// import { NavLink } from 'react-router-dom';
// import { UserContext } from '../App';

// const Navbar=()=>{
//   const {state,dispatch} = useContext(UserContext);
  
//   const RenderMenu=()=>{
//      if(state){
//        return(
//          <>
//       <NavLink className="nav-item nav-link active" to="/">Home </NavLink>
//       <NavLink className="nav-item nav-link" to="/grievance">Grievance</NavLink>
//       <NavLink className="nav-item nav-link" to="/about">About</NavLink>
//       <NavLink className="nav-item nav-link " to="/logout">Logout</NavLink>
//          </>
//        )
//      }else{
//        return(
//          <>
//          <NavLink className="nav-item nav-link active" to="/">Home </NavLink>
//          <NavLink className="nav-item nav-link" to="/grievance">Grievance</NavLink>
//          <NavLink className="nav-item nav-link" to="/about">About</NavLink>
//          <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
//          <NavLink className="nav-item nav-link " to="/signup">Signup</NavLink>
//          </>
//        )
//      }
//   }
//    return(
//        <>
//        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> */}

//        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#e32636' }}>
//        <NavLink className="navbar-brand" to="/">Grievance Portal</NavLink>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" 
//   data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" 
//   aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//     <div className="navbar-nav ml-auto">
//     <RenderMenu />
//     </div>
//   </div>
// </nav>
//        </>
//    )
// };

// export default Navbar;












// // Navbar.jsx
// import React, { useContext, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import { UserContext } from '../App';

// const Navbar = () => {
//   const { state, dispatch } = useContext(UserContext);

//   // On initial load, check if the user is logged in from localStorage
//   useEffect(() => {
//     const loggedIn = localStorage.getItem("user");
//     if (loggedIn) {
//       dispatch({ type: "USER", payload: true });
//     }
//   }, [dispatch]);

//   const RenderMenu = () => {
//     if (state) {
//       return (
//         <>
//           <NavLink className="nav-item nav-link active" to="/">Home </NavLink>
//           <NavLink className="nav-item nav-link" to="/grievance">Grievance</NavLink>
//           <NavLink className="nav-item nav-link" to="/about">About</NavLink>
//           <NavLink className="nav-item nav-link" to="/logout">Logout</NavLink>
//         </>
//       );
//     } else {
//       return (
//         <>
//           <NavLink className="nav-item nav-link active" to="/">Home </NavLink>
//           <NavLink className="nav-item nav-link" to="/grievance">Grievance</NavLink>
//           <NavLink className="nav-item nav-link" to="/about">About</NavLink>
//           <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
//           <NavLink className="nav-item nav-link" to="/signup">Signup</NavLink>
//         </>
//       );
//     }
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#e32636' }}>
//         <NavLink className="navbar-brand" to="/">Grievance Portal</NavLink>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" 
//           data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" 
//           aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div className="navbar-nav ml-auto">
//             <RenderMenu />
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;







import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../App';

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  // On initial load, check if the user is logged in from localStorage
  useEffect(() => {
    const loggedIn = localStorage.getItem("user");
    if (loggedIn) {
      dispatch({ type: "USER", payload: true });
    }
  }, [dispatch]);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <NavLink className="nav-item nav-link active" to="/">Home</NavLink>
          <NavLink className="nav-item nav-link" to="/grievance">Grievance</NavLink>
          <NavLink className="nav-item nav-link" to="/myprofile">My Profile</NavLink>
          <NavLink className="nav-item nav-link" to="/logout">Logout</NavLink>
        </>
      );
    } else {
      return (
        <>
          <NavLink className="nav-item nav-link active" to="/">Home</NavLink>
          {/* <NavLink className="nav-item nav-link" to="/grievance">Grievance</NavLink> */}
          <NavLink className="nav-item nav-link" to="/myprofile">My Profile</NavLink>
          <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
          <NavLink className="nav-item nav-link" to="/signup">Signup</NavLink>
        </>
      );
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css?family=Roboto:400,700|Playfair+Display:400,700&display=swap');

          body {
              font-family: 'Roboto', sans-serif;
          }

          .navbar-mainbg {
              background: linear-gradient(135deg, #2c2c2c, #434343); /* Metallic black effect */
              padding: 0;
              transition: background 0.3s ease;
          }

          .navbar-mainbg:hover {
              background: linear-gradient(135deg, #434343, #2c2c2c); /* Slightly different shade on hover */
          }

          .navbar-logo {
              padding: 15px;
              color: #fff;
              font-family: 'Playfair Display', serif; /* Fancy font */
              font-size: 24px;
          }

          .navbar-toggler {
              border: none;
          }

          .navbar-toggler-icon {
              background-image: url('data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path stroke="%23ffffff" stroke-width="2" d="M5 7h20M5 15h20M5 23h20"/></svg>');
          }

          .navbar-nav .nav-item .nav-link {
              color: rgba(255, 255, 255, 0.75);
              text-decoration: none;
              font-size: 15px;
              display: block;
              padding: 15px 20px;
              transition: color 0.3s ease;
              font-family: 'Roboto', sans-serif; /* Default font */
          }

          .navbar-nav .nav-item .nav-link.active {
              color: #fff;
              background-color: transparent;
          }

          .navbar-nav .nav-item .nav-link:hover {
              color: #e32636; /* Change color on hover */
              background-color: rgba(255, 255, 255, 0.1); /* Slight background color on hover */
          }

          @media (max-width: 991px) {
              .navbar-nav .nav-item .nav-link {
                  padding: 12px 30px;
              }
          }
        `}
      </style>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-mainbg">
        <NavLink className="navbar-brand navbar-logo" to="/">FOCUS Grievance</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <RenderMenu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
