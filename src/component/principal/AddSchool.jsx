import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";

const AddSchool = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        principal: '',
        photoUrl: '',
        address: '',
        email: '',
        password: ''
    });

    const[errorMessage, setErrorMessage] = useState('');
    const[successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const validateForm = () => {
        const {name, principal, photoUrl, address, email, password} = formData;
        if(!name || !principal || !photoUrl || !address || !email || !password){
            return false;
        }
        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!validateForm()){
            setErrorMessage('Please Fill all the fileds');
            setTimeout(() => setErrorMessage(''), 5000);
            return;
        }
        try{
            const response = await ApiService.registerSchool(formData);

            if(response.statusCode === 200){
                setFormData({
                    name: '',
                    principal: '',
                    photoUrl: '',
                    address: '',
                    email: '',
                    password: ''
                });
                setSuccessMessage('School Registered Successfully');
                setTimeout(()=> {
                    setSuccessMessage('');
                    navigate('/home');
                }, 3000);
            }
        }
        catch(error){
            setErrorMessage(error.response?.data?.message || error.message);
            setTimeout(() => setErrorMessage(''), 3000);
        }
        finally{

        }
    }


    return(
        <div className="auth-container">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
           
        <h2>School Registration</h2>

        

        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>School Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required/>
            </div>
            <div className="form-group">
                <label>Principal Name:</label>
                <input type="text" name="principal" value={formData.principal} onChange={handleInputChange} required/>
            </div>
            <div className="form-group">
                <label>School URL:</label>
                <input type="url" name="photoUrl" value={formData.photoUrl} onChange={handleInputChange} required/>
            </div>
            <div className="form-group">
                <label>School Address:</label>
                <textarea type="text" name="address" value={formData.address} onChange={handleInputChange} required/>
            </div>
            <div className="form-group">
                <label>School Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required/>
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} required/>
            </div>
            <button type="submit">Register School</button>
            
        </form>

        </div>
    );
}

export default AddSchool;



















