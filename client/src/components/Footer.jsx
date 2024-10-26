// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="footer-07">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-12 text-center">
//             <h2 className="footer-heading">
//               <NavLink to="/" className="logo">Grievance Portal</NavLink>
//             </h2>
//             <p className="menu">
//               <NavLink to="/">Home</NavLink>
//               <NavLink to="/grievance">Grievance</NavLink>
//               <NavLink to="/about">About</NavLink>
//               <NavLink to="/blog">Blog</NavLink>
//               <NavLink to="/contact">Contact</NavLink>
//             </p>
//             <ul className="ftco-footer-social p-0">
//               <li className="ftco-animate">
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="Twitter">
//                   <span className="ion-logo-twitter"></span>
//                 </a>
//               </li>
//               <li className="ftco-animate">
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="Facebook">
//                   <span className="ion-logo-facebook"></span>
//                 </a>
//               </li>
//               <li className="ftco-animate">
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="Instagram">
//                   <span className="ion-logo-instagram"></span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="row mt-5">
//           <div className="col-md-12 text-center">
//             <p className="copyright">
//               Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with 
//               <i className="ion-ios-heart" aria-hidden="true"></i> by 
//               <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib.com</a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;







// import React from 'react';

// const Footer = () => {
//   return (
//     <footer style={styles.footer}>
//       <div style={styles.container}>
//         <div style={styles.rowCenter}>
//           <div style={styles.textCenter}>
//             <h2 style={styles.footerHeading}>
//               <a href="/" style={styles.logo}>Grievance Portal</a>
//             </h2>
//             <p style={styles.menu}>
//               <a href="/" style={styles.menuLink}>Home</a>
//               <a href="/register" style={styles.menuLink}>Register</a>
//               <a href="/login" style={styles.menuLink}>Login</a>
//               <a href="/about" style={styles.menuLink}>About</a>
//               <a href="/contact" style={styles.menuLink}>Contact</a>
//             </p>
//             <ul style={styles.socialIcons}>
//               <li style={styles.socialIcon}><a href="#" title="Twitter"><span className="ion-logo-twitter" style={styles.icon}></span></a></li>
//               <li style={styles.socialIcon}><a href="#" title="Facebook"><span className="ion-logo-facebook" style={styles.icon}></span></a></li>
//               <li style={styles.socialIcon}><a href="#" title="Instagram"><span className="ion-logo-instagram" style={styles.icon}></span></a></li>
//             </ul>
//           </div>
//         </div>
//         <div style={styles.rowMarginTop}>
//           <div style={styles.textCenter}>
//             <p style={styles.copyright}>
//               Copyright &copy; {new Date().getFullYear()} All rights reserved | 
//               FOCUS Grievance  
//             </p>
//             <p>
//             Designed <i className="ion-ios-heart" aria-hidden="true" style={styles.heartIcon}></i> by Shriram
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// const styles = {
//   footer: {
//     backgroundColor: '#1d1d1d',
//     color: '#ffffff',
//     padding: '40px 0',
//     fontFamily: 'Poppins, sans-serif',
//   },
//   container: {
//     maxWidth: '1170px',
//     margin: '0 auto',
//   },
//   rowCenter: {
//     display: 'flex',
//     justifyContent: 'center',
//   },
//   textCenter: {
//     textAlign: 'center',
//   },
//   footerHeading: {
//     fontSize: '24px',
//     marginBottom: '20px',
//     color: '#ffffff',
//   },
//   logo: {
//     color: '#ffffff',
//     textDecoration: 'none',
//     fontWeight: '700',
//   },
//   menu: {
//     marginBottom: '20px',
//   },
//   menuLink: {
//     color: '#ffffff',
//     textDecoration: 'none',
//     margin: '0 15px',
//     fontSize: '14px',
//   },
//   socialIcons: {
//     listStyleType: 'none',
//     padding: '0',
//     display: 'flex',
//     justifyContent: 'center',
//     marginBottom: '40px',
//   },
//   socialIcon: {
//     margin: '0 10px',
//   },
//   icon: {
//     fontSize: '20px',
//     color: '#7CFC00',
//   },
//   rowMarginTop: {
//     marginTop: '40px',
//   },
//   copyright: {
//     fontSize: '13px',
//     color: '#aaa',
//   },
//   heartIcon: {
//     color: '#FF6347',
//   },
// };

// export default Footer;





import React, { useState, useEffect } from 'react';

const Footer = () => {
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate checking login status (In practice, replace with actual logic)
  useEffect(() => {
    const user = localStorage.getItem('user'); // Assume user info is stored in localStorage
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.rowCenter}>
          <div style={styles.textCenter}>
            <h2 style={styles.footerHeading}>
              <a href="/" style={styles.logo}>FOCUS Grievance</a>
            </h2>
            <p style={styles.menu}>
              <a href="/" style={styles.menuLink}>Home</a>
              <a href="/grievance" style={styles.menuLink}>Grievance</a>
              <a href="/aboutus" style={styles.menuLink}>About Us</a>

              {/* Conditional rendering based on login status */}
              {isLoggedIn ? (
                <a href="/logout" style={styles.menuLink}>Logout</a>
              ) : (
                <>
                  <a href="/login" style={styles.menuLink}>Login</a>
                  <a href="/register" style={styles.menuLink}>Register</a>
                </>
              )}
            </p>
            <ul style={styles.socialIcons}>
              <li style={styles.socialIcon}><a href="#" title="Twitter"><span className="ion-logo-twitter" style={styles.icon}></span></a></li>
              <li style={styles.socialIcon}><a href="#" title="Facebook"><span className="ion-logo-facebook" style={styles.icon}></span></a></li>
              <li style={styles.socialIcon}><a href="#" title="Instagram"><span className="ion-logo-instagram" style={styles.icon}></span></a></li>
            </ul>
          </div>
        </div>
        <div style={styles.rowMarginTop}>
          <div style={styles.textCenter}>
          <p style={styles.copyright}>
               Copyright &copy; {new Date().getFullYear()} All rights reserved | 
               FOCUS Grievance  
             </p>
             <p>
             Designed <i className="ion-ios-heart" aria-hidden="true" style={styles.heartIcon}></i> by Shriram
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1d1d1d',
    color: '#ffffff',
    padding: '40px 0',
    fontFamily: 'Poppins, sans-serif',
  },
  container: {
    maxWidth: '1170px',
    margin: '0 auto',
  },
  rowCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  footerHeading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#ffffff',
  },
  logo: {
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: '700',
  },
  menu: {
    marginBottom: '20px',
  },
  menuLink: {
    color: '#ffffff',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '14px',
  },
  socialIcons: {
    listStyleType: 'none',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '40px',
  },
  socialIcon: {
    margin: '0 10px',
  },
  icon: {
    fontSize: '20px',
    color: '#7CFC00',
  },
  rowMarginTop: {
    marginTop: '40px',
  },
  copyright: {
    fontSize: '13px',
    color: '#aaa',
  },
  heartIcon: {
    color: '#FF6347',
  },
};

export default Footer;
