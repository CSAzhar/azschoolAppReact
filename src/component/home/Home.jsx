import { useEffect, useState } from "react";
import ApiService from "../../service/ApiService";
import { Link } from "react-router-dom";

const Home = () => {
  const [schools, setSchools] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const data = await ApiService.getAllSchools();
        setSchools(data.schoolList);
      } catch (error) {
        setError("Failed to load schools.");
      }
    };
    fetchSchools();
  }, []);

  return (
    <div className="home-container">
      <h1 className="portalHomeHeading">WELCOME TO OUR SCHOOL PORTAL</h1>
      {error && <p className="error">{error}</p>}

      <div className="card-container">
       
        {schools.map( (sch) => (
          <Link
            to={`/schooldetail/${sch.id}`}
            key={sch.id}
            className=""
            style={{textDecoration: "none", color: "inherit"}}
          >
            <div key={sch.id} className="school-card">
              <img src={sch.photoUrl} alt={sch.name} />
              <h2>{sch.name}</h2>
              <p>{sch.address}</p>
          </div>
          </Link>
        ) )}

        {/* {schools.map((school) => (
          <div key={school.id} className="school-card">
            <img src={school.photoUrl} alt={school.name} />
            <h2>{school.name}</h2>
            <p>{school.address}</p>
          </div>
        ))} */}

      </div>

    </div>
  );
};

export default Home;
