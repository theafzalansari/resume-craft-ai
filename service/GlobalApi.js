import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_STRAPI_API_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
    },
});

const CreateNewResume = (data) => {
    return axiosClient.post("/user-resumes", data);
};

const GetUserResume = (userEmail) => {
    return axiosClient.get("/user-resumes?filters[userEmail][$eq]="+userEmail);
}

const UpdateResumeDetail = (id, data) => {
    return axiosClient.put("/user-resumes/" + id, data);
}

const GetResumeById = (id) => {
    return axiosClient.get(`/user-resumes/${id}?populate=*`);
};

const DeleteResume = (id) => {
    return axiosClient.delete(`/user-resumes/${id}`);
}


export default {
    CreateNewResume,
    GetUserResume,
    UpdateResumeDetail,
    GetResumeById,
    DeleteResume
};