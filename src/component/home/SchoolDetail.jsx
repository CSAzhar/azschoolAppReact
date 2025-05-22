import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApiService from "../../service/ApiService";

const SchoolDetail = () => {

    const {id} = useParams();
    const [school, setSchool] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [classList, setClassList] = useState([]);

    useEffect( () => {
        const fetchSchool = async () => {
            try {
                const data = await ApiService.getSchooolById(id);
                setSchool(data.school);
                setClassList(data.school.classRooms);
                console.log(school.name);
            } catch (error) {
                setError("Failed to fetch school details");
            }

        };
        fetchSchool();
    }, [id]);

    const handleAddClass = () => {
        navigate('/addclass', {
            state: {
                id: id,
                name: school.name
            }
        });
    }

    return(

        <div className="school-detail">

            <div className="add-school-detail">
                <button onClick={handleAddClass}>Add Classes</button>
            </div>

            <div className="school-details">
                <img src={school.photoUrl} alt={school.name} />
                <h2>{school.name}</h2>
                <p>{school.address}</p>
            </div>

             <h2>Class Rooms</h2>
             <ul>
                
                {classList.map((cls) => (
                    <li key={cls.id}>
                        <strong>{cls.name}</strong> - {cls.totalStudents} students
                    </li>
                ))}
            </ul>

    </div>

    );
}

export default SchoolDetail;