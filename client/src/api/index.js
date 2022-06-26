import axios from "axios";

export const BASE_URL = "http://localhost:5000";


const apiAxios = async (api_uri, method = 'GET', body = null) => {
  const user = JSON.parse(localStorage.getItem("user"))
  try {
    const response = await axios({
      method,
      headers: {
        Authorization: user.authToken,
        user_id: user.userId
      },
      url: api_uri?.startsWith('https') ? api_uri : `${BASE_URL}${api_uri}`,
      data: body,
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default apiAxios;
