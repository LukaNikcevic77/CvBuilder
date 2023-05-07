import React, {useState} from "react";

function GetGeneralInfo(){

    const[scriptName, setscriptName] = useState('');
    const[scriptEmail, setscriptEmail] = useState('');
    const[scriptPhone, setscriptPhone] = useState('');

    

    return { 
        scriptName,
        scriptEmail,
        scriptPhone,

        renderGeneralInfo: (
        <>
            <form className="formAlign">
                <label className="Label">Input your name here:</label>
                <input type="text" id="" onChange={e => setscriptName(e.target.value)}/>
                <label className="Label">Input your email here:</label>
                <input type="email"  id="" onChange={e => setscriptEmail(e.target.value)} />
                <label className="Label">Input your phone here:</label>
                <input type="tel" id="" onChange={e => setscriptPhone(e.target.value)}/>
            </form>
        </>
        
        
    )}



}

export default GetGeneralInfo;