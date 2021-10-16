import axios from "axios";

const rootUrl = "http://localhost:3001/v1/user";
const loginUrl = `${rootUrl}/login`;
const userProfileUrl = `${rootUrl} `;
const logoutUrl = `${rootUrl}/logout`;

export const userLogin = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(loginUrl, formData);

      resolve(result.data);

      if (result.data.status === "success") {
        sessionStorage.setItem("accessJWT", result.data.accessJWT);
        localStorage.setItem(
          "crmSite",
          JSON.stringify({ refreshJWT: result.data.refreshJWT })
        );
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const getUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");

      if (!accessJWT) {
        reject("Token not found.");
      }

      const result = await axios.get(userProfileUrl, {
        headers: {
          Authorization: accessJWT,
        },
      });

      resolve(result.data);
    } catch (error) {
      reject(error.message);
    }
  });
};

export const userLogout = async () => {
  try {
    await axios.delete(logoutUrl, {
      header: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    });
  } catch (error) {
    console.log(error);
  }
};
