import axios from "axios";

export default class ApiService {

    static BASE_URL = "http://localhost:9001";

    // static async registerSchool(registration){
    //     const response = await fetch(`${this.BASE_URL}/school/add`,{
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(registration)
    //     });
    // }

    static async registerSchool(registration)  {
        const response = await axios.post(`${this.BASE_URL}/school/add`, registration)
            return response.data;
    }

    static async getAllSchools(){
        const response = await axios.get(`${this.BASE_URL}/school/all`);
        return response.data;
    }

    static async getSchooolById(id){
        const response = await axios.get(`${this.BASE_URL}/school/get-room-by-id/${id}`);
        return response.data;
    }

    // room api servgice

    static async addClassRoom(name, totalStudents, id){
        const response = await axios.post(`${this.BASE_URL}/class/add-class?name=${name}&totalStudents=${totalStudents}&id=${id}`);
        return response.data;
    }


}