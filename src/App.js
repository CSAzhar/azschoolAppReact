import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/common/Header';
import Footer from './component/common/Footer';
import Home from './component/home/Home';
import AddSchool from './component/principal/AddSchool';
import SchoolDetail from './component/home/SchoolDetail';
import AddClass from './component/principal/AddClass';

function App() {
  return (
    <div className="App">

        <BrowserRouter>
          <Header />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/addschool" element={<AddSchool />}/>
                <Route path="schooldetail/:id" element={<SchoolDetail />}/>
                <Route path="addclass" element={<AddClass />}/>
              </Routes>
            </div>
          <Footer />
        </BrowserRouter>
      
    </div>
  );
}


export default App;
