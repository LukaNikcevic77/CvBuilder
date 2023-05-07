import React, {useState} from "react";

function WorkExperience(){

    const [scriptComapnyName, setscriptCompanyName] = useState('');
    const [scriptPosition, setscriptPosition] = useState('');
    const [scriptYearsOfWork, setscriptYearsOfWork] = useState('');

    return {
        scriptComapnyName,
        scriptPosition,
        scriptYearsOfWork,
        renderWorkExperience : (
            <>
            <form className="formAlign">
                <label className="Label">Input your company name here:</label>
                <input type="text" id="" onChange={e => setscriptCompanyName(e.target.value)}/>
                <label className="Label">Input your position type here:</label>
                <input type="text"  id="" onChange={e => setscriptPosition(e.target.value)} />
                <label className="Label">Input your years of experience here:</label>
                <input type="text" id="" onChange={e => setscriptYearsOfWork(e.target.value)}/>
            </form>
            </>
        )
    }
}

export default WorkExperience;