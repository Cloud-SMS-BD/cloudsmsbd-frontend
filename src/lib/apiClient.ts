import axios from "axios";


const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true,
});

// apiClient.interceptors.request.use(async (config) => {

//   if (session) {
//     config.headers.Authorization = `Bearer ${session.accessToken}`;
//   }
//   return config;
// });
// // 401 then logout
// apiClient.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response?.status === 401) {
//       await destroySession();
//     }
//     return Promise.reject(error);
//   }
// );

export default apiClient;
