import React, {useState} from "react";

function Cv(props) {

    return(

        <div className='CvBuilt'>
                <h1 className="bigText">Name: </h1>
                <p className="smalltext">{props.data.name}</p>
                <h1 className="bigText">Email: </h1>
                <p className="smalltext">{props.data.email}</p>
                <h1 className="bigText">Phone: </h1>
                <p className="smalltext">{props.data.phone}</p>
                <h1 className="bigText">School name: </h1>
                <p className="smalltext">{props.data.school}</p>
                <h1 className="bigText">Study: </h1>
                <p className="smalltext">{props.data.study}</p>
                <h1 className="bigText">Degree type: </h1>
                <p className="smalltext">{props.data.degree}</p>
                <h1 className="bigText">Company name: </h1>
                <p className="smalltext">{props.data.companyName}</p>
                <h1 className="bigText">Position: </h1>
                <p className="smalltext">{props.data.position}</p>
                <h1 className="bigText">Years of experience: </h1>
                <p className="smalltext">{props.data.yearsOfWork}</p>
        </div>
    )

}

export default Cv;