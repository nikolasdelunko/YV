import axios from "axios";

export const registerUser = (data) =>
  axios.post("http://localhost:3009/users", data);
export const getUserByToken = () => axios("http://localhost:3009/users");

// export const logout = (token) =>
//   axios.post(
//     "http://localhost:3009/users",
//     {
//       //...data
//     },
//     {
//       headers: {
//         Authorization: `auth-token ${token}`,
//       },
//     }
//   );

	export const loginUser = (data) =>
  axios.post("http://localhost:3009/users/login", data);
// export const loginUser = (data) => {
//   const options = {
//     method: "POST",
//     headers: { "content-type": "application/x-www-form-urlencoded" },
//     data: qs.stringify(data),
//     url,
//   };
//   return axios(options);
// };
