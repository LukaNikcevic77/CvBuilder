import React, {useState} from "react";

function EducationalExperience() {

    const [scriptSchool, setscriptSchool] = useState('');
    const [scriptStudy, setscriptStudy] = useState('');
    const [scriptDegree, setscriptDegree] = useState('');

    return {
        scriptSchool,
        scriptStudy,
        scriptDegree,
        renderEducationalExperience: (
                <>
                 <form className="formAlign">
                <label className="Label">Input your school name here:</label>
                <input type="text" id="" onChange={e => setscriptSchool(e.target.value)}/>
                <label className="Label">Input your study type here:</label>
                <input type="text"  id="" onChange={e => setscriptStudy(e.target.value)} />
                <label className="Label">Input your degree here:</label>
                <input type="text" id="" onChange={e => setscriptDegree(e.target.value)}/>
            </form>

                </>
        )
    }



}
export default EducationalExperience;