import { useState } from "react";
import { useLocation } from "react-router-dom";
import ApiService from "../../service/ApiService";

const AddClass = () => {

    const location = useLocation();
    const {id} = location.state || {}
    // const {name} = location.state || {}
    const schoolName = location.state.name;

    const [className, setClassName] = useState("");
    const [totalStudents, setTotalStudent] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const handleChange = (e) => {
        const {name, value} = e.target;
        if(name === "className"){
            setClassName(value);
        }else if( name === "totalStudents"){
            setTotalStudent(value);
        }
        //console.log(className+" "+totalStudents+" -"+id)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await ApiService.addClassRoom(className, totalStudents, id);
            if(response.statusCode === 200){
                setClassName("");
                setTotalStudent("");
                setSuccessMessage("Class Added Successfully");
                setTimeout( () => {
                    setSuccessMessage("")
                }, 3000 );
            }else{
                setErrorMessage("Server error:"+response.message);
                setTimeout( () => {
                    setErrorMessage("")
                }, 3000 );
            }
        }catch(error){
            setErrorMessage("Failed");
            setTimeout( () => {
                setErrorMessage("")
            }, 3000 );            
        }
        

    }

    return(
        <div>
            <h2>{schoolName}</h2> <br></br>
            <p style={{color:"green"}}>{successMessage}</p>
            <p style={{color:"red"}}>{errorMessage}</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Enter Name:</label> <br></br>
                    <input type="text" name="className" value={className} onChange={handleChange} required/> <br></br>
                </div>
                <div className="form-group">
                    <label>Total Students:</label><br></br>
                <input type="text" name="totalStudents" value={totalStudents} onChange={handleChange} required/><br></br>
                </div>
                <button type="submit">Add Class</button>
            </form>

        </div>
    );
}

export default AddClass;