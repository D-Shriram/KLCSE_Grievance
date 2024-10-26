import React, { useEffect, useState } from 'react';
import phone from '../images/telephone.png';
import email from '../images/email.png';
import address from '../images/address.png';

const Myprofile = () => {
    const [userData, setUserData] = useState();

    const callAboutPage = async () => {
        try {
            const res = await fetch("/myprofile", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.err);
                throw error;
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        callAboutPage();
    }, []);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@400;600&display=swap');

                // body {
                //     background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
                //     font-family: 'Poppins', sans-serif;
                //     color: #333;
                //     margin: 0;
                //     padding: 0;
                // }

                // h1, h2, h3, h4 {
                //     font-family: 'Pacifico', cursive;
                //     color: #333;
                // }

                h1 {
                    font-size: 3em;
                    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
                    color: #ff0000;
                    //color: #ff6363;
                }

                h2, h3, h4 {
                    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
                    color: #4a90e2;
                }

                span {
                    color: #ff0000;
                }

                .text-uppercase {
                    letter-spacing: 2px;
                    color: #ff0000;
                    font-weight: 600;
                }

                hr {
                    border: 2px solid #ff85ff;
                    border-radius: 5px;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
                    margin: 20px 0;
                }

                table {
                    width: 100%;
                    background: #f3e5f5;
                    color: #333;
                    border-radius: 10px;
                    border-collapse: collapse;
                    overflow: hidden;
                    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
                    margin-top: 20px;
                }

                table th, table td {
                    padding: 15px;
                    text-align: left;
                    font-size:1em;
                    color: #333;
                }

                table th {
                    background: linear-gradient(135deg, #f78ca0 0%, #ff0000 100%);
                    color: #fff;
                    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
                }

                table td {
                    background: #fff;
                    color: #333;
                    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
                }

                table tr {
                    transition: transform 0.2s ease-in-out;
                }

                table tr:hover {
                    transform: scale(1.02);
                    background-color: #f9f9f9;
                }

                .maintext {
                    color: #ff3e6c;
                    font-size: 1.5em;
                    text-align: center;
                    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
                    margin-top: 20px;
                }

                button, input {
                    padding: 10px 20px;
                    border: none;
                    border-radius: 25px;
                    background-color: #ff9478;
                    color: #fff;
                    font-size: 1.2em;
                    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease-in-out;
                }

                input {
                    background-color: #fff;
                    color: #333;
                }

                button:hover, input:hover {
                    background-color: #ff6f61;
                    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
                    transform: translateY(-5px);
                }

                input::placeholder {
                    color: #888;
                }

                input:focus {
                    outline: none;
                    border-color: #3498db;
                }

                .mx-4 {
                    margin: 2rem;
                }

                .text-center {
                    text-align: center;
                }

                .my-2 {
                    margin: 1rem 0;
                }

                p {
                    font-size: 1.2em;
                    color: #555;
                    text-align: center;
                }

                a {
                    color: #ff6b6b;
                    text-decoration: none;
                }

                a:hover {
                    text-decoration: underline;
                }
            `}</style>
            
            {userData ? (
                <div className="mx-4">
                    <h1 className='text-center my-2'>My Profile</h1>
                    <hr />
                    <form method="GET">
                        <h3 className="text-uppercase" style={{"textDecoration":"underline"}}>Personal Information</h3>
                        <h2>Name: <span>{userData.name}</span></h2>
                        <h3>Address: {userData.address}</h3>
                        <h3>Year: {userData.year}</h3>
                        <br></br>
                        <h3 className="text-uppercase" style={{"textDecoration":"underline"}}>Contact Information</h3>
                        <h4>Phone: {userData.phone}</h4>
                        <h4>Email: {userData.email}</h4>
                        <br></br>
                        <h3 className="text-uppercase" style={{"textDecoration":"underline"}}>Grievances</h3>
                        <br />
                        <table className="table-dark">
                            <tr>
                                <th>Serial No.</th>
                                <th>Date</th>
                                <th>Department</th>
                                <th>Grievance</th>
                                <th>Status</th>
                                <th>Feedback</th>
                            </tr>
                            {userData.grievances.map((cval, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{cval.date}</td>
                                    <td>{cval.dept}</td>
                                    <td>{cval.grievance}</td>
                                    <td>{cval.status}</td>
                                    <td>{cval.feedback}</td>
                                </tr>
                            ))}
                        </table>
                        <br />
                    </form>
                </div>
            ) : (
                <p className='maintext'>Unable to load data. Try to refresh or relogin.</p>
            )}
        </>
    );
}

export default Myprofile;
