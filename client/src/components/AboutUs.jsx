// import React from 'react';
// import './AboutUs.css'; // Import the CSS file


// const AboutUs = () => {
//   return (
//     <div className="aboutus-container">
//       <h1 className="title">About Us</h1>
//       <div className="focus-section">
//         <h2>Focus - Resolvance</h2>
//         <p>We are proud to present our sub-wing, Resolvance, which specializes in solving critical issues and managing challenging situations within the student body. Our team of problem-solvers is dedicated to enhancing the university environment.</p>
//       </div>

//       <div className="cards-section">
//         {/* HOD Cards */}
//         <div className="cards-container">
//           <h3>HODs of Our Branch</h3>

//           <div className="card animated-card">
//             <img src="../images/hodh.png" alt="HOD-H" className="card-img" />
//             <h4>Dr. A Senthil</h4>
//             <p>Head of Computer Science(Honors) Department</p>
//           </div>

//           <div className="card animated-card">
//             <img src="path_to_hod_image_1" alt="HOD-R" className="card-img" />
//             <h4>Dr.T Pavan Kumar</h4>
//             <p>Head of Computer Science(Regulars) Department</p>
//           </div>
//         </div>

//         {/* Professor In-Charge Card */}
//         <div className="cards-container">
//           <h3>Professor In-Charge</h3>
//           <div className="card animated-card">
//             <img src="../images/hod-h.png" alt="Professor Incharge" className="card-img" />
//             <h4>Dr. T Santhi Sri</h4>
//             <p>Professor in Charge of Resolvance</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory for redirection
import './AboutUs.css'; // Import the corresponding CSS file for animations
import hodh from '../images/hodh.jpeg';
import hodr from '../images/hodr.jpeg';
import profincharge from '../images/profincharge.jpg';
import dean from '../images/dean.jpeg';

const AboutUs = () => {
    const history = useHistory();

    // Authentication check
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('user'); // Example: Check if user info is in localStorage

        if (!isAuthenticated) {
            history.push('/login'); // Redirect to login page if not authenticated
        }
    }, [history]);

    return (
        <div className="about-us">
            <h1 className="heading">About Focus - Resolvance</h1>
            <p className="intro">
                Focus - Resolvance is a sub-wing within Focus, responsible for tackling challenges, problem-solving, 
                and resolving conflicts across the student body. Here’s more about the people who lead and drive Resolvance:
            </p>

            <ul className="resolvance-points">
                <li>⚡ Engages actively with students to understand their issues.</li>
                <li>💡 Focuses on quick and effective problem resolution.</li>
                <li>🤝 Collaborates with university administration to enhance the student experience.</li>
                <li>🚀 Leads innovative initiatives for improvement across campus.</li>
                <li>🔍 Provides transparency in the grievance resolution process.</li>
            </ul>

            {/* Leadby Section */}
            <h2 className="section-heading">Leadby</h2>
            <div className="card-container">
                <div className="card">
                    <img src={dean} alt="Dean Academics" />
                    <h3>Addl. Dean of Academics</h3>
                    <p>Dr. HariKiran Vege</p>
                </div>
            </div>

            {/* HODs Section */}
            <h2 className="section-heading">HODs of Our Branch</h2>
            <div className="card-container">
                <div className="card">
                    <img src={hodh} alt="HOD A Senthil" />
                    <h3>HOD (Honours)</h3>
                    <p>Dr. A Senthil</p>
                </div>
                <div className="card">
                    <img src={hodr} alt="HOD T Pavan Kumar" />
                    <h3>HOD (Regulars)</h3>
                    <p>Dr. T Pavan Kumar</p>
                </div>
            </div>

            {/* Professor Incharge Section */}
            <h2 className="section-heading">Mentor</h2>
            <div className="card-container">
                <div className="card">
                    <img src={profincharge} alt="Prof Incharge" />
                    <h3>Deputy HOD Student Affairs</h3>
                    <p>T Santhi Sri</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
