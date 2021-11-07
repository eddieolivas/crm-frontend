import axios from "axios";

const rootUrl = "http://localhost:3001/v1/";
const loginUrl = `${rootUrl}user/login`;
const userProfileUrl = `${rootUrl}user`;
const logoutUrl = `${rootUrl}user/logout`;
const getTokenURL = `${rootUrl}tokens`;
const verifyUrl = `${userProfileUrl}/verify`;
const resetPassUrl = `${userProfileUrl}/reset-password`;

export const registerNewUser = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(userProfileUrl, formData);

      if (result.data.status === "success") {
        console.log(result.data);
        resolve(result.data);
      }

      reject(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const verifyUser = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.patch(verifyUrl, formData);

      resolve(result.data);
      console.log(result.data);
      if (result.data.status === "success") {
        resolve(result.data);
      }

      reject(result.data);
    } catch (error) {
      reject({ status: "error", message: error.message });
    }
  });
};

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
      headers: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getNewAccessJWT = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { refreshJWT } = JSON.parse(localStorage.getItem("crmSite"));

      !refreshJWT && reject("Token not found.");

      const result = await axios.get(getTokenURL, {
        headers: {
          Authorization: refreshJWT,
        },
      });

      if (result.data.status === "success") {
        sessionStorage.setItem("accessJWT", result.data.accessJWT);
      }

      resolve(true);
    } catch (error) {
      if (error.message === "Request failed with status code 403") {
        localStorage.removeItem("crmSite");
      }
      reject(false);
    }
  });
};

export const requestOtp = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(resetPassUrl, { email });

      if (data.status === "success") {
        resolve(data);
      }

      reject({ status: "error", message: data.message });
    } catch (error) {
      reject({ status: "error", message: error.message });
    }
  });
};

export const resetPassword = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.patch(resetPassUrl, formData);

      if (data.status === "success") {
        resolve(data);
      }

      reject({ status: "error", message: data.message });
    } catch (error) {
      reject({ status: "error", message: error.message });
    }
  });
};
