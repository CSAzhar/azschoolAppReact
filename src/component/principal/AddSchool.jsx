import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    return(
        <div className="auth-container">
        {/* {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>} */}
            <h2>School Registration</h2>
            
            
        </div>
    );
}

export default AddSchool;