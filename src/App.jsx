import React, {useState} from "react";
import GetGeneralInfo from '../components/GeneralInfo';
import EducationalExperience from "../components/EducationalExperience";
import WorkExperience from "../components/WorkExperience";
import Cv from "../components/DisplayingData";
function App(){

  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [school, setSchool] = useState('');
  const [study, setStudy] = useState('');
  const [degree, setDegree] = useState('');

  const[companyName, setCompanyName] = useState('');
  const[position, setPosition] = useState('');
  const[yearsOfWork, setYearsOfWork] = useState('');

  const {renderGeneralInfo, scriptName, scriptEmail, scriptPhone} = GetGeneralInfo()
  const {renderEducationalExperience, scriptSchool, scriptStudy, scriptDegree} = EducationalExperience();
  const {renderWorkExperience, scriptComapnyName, scriptPosition, scriptYearsOfWork} = WorkExperience();
  let data={name: name, email: email, phone: phone, school: school, study: study, degree: degree, companyName: companyName, position: position, yearsOfWork: yearsOfWork} 
  const handleSubmit = (e) => {

    e.preventDefault();
    setName(scriptName);
    setEmail(scriptEmail);
    setPhone(scriptPhone);
    setSchool(scriptSchool);
    setStudy(scriptStudy);
    setDegree(scriptDegree);
    setCompanyName(scriptComapnyName);
    setPosition(scriptPosition);
    setYearsOfWork(scriptYearsOfWork);

    
  }
  
  

      return(
        <>
        
        <form onSubmit={handleSubmit}>
        <h1 className="bigText">Hello world!</h1>
        {renderGeneralInfo}
        
        {renderEducationalExperience}
        
        {renderWorkExperience}
        
          <button type="submit" className="bigText buttons">Submit</button>
        </form>
        <Cv data={data}/>
        
        </>
      )
}

export default App;