import axios from "axios";

const rootUrl = "http://54.177.57.249:3001/v1";

// Action for getting all ticket data
export const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(rootUrl + "/ticket", {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

// Action for replying to a single ticket
export const getTicketById = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(rootUrl + "/ticket/" + _id, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

// Action for replying to a single ticket
export const updateReplyTicket = (_id, messageObject) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.put(
        rootUrl + "/ticket/" + _id,
        messageObject,
        {
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
          },
        }
      );

      resolve(result.data);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

// Action for replying to a single ticket
export const updateCloseTicket = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.patch(
        rootUrl + "/ticket/close-ticket/" + _id,
        {},
        {
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
          },
        }
      );

      resolve(result.data);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

// Action for adding a new ticket
export const createNewTicket = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(rootUrl + "/ticket", formData, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });

      resolve(result.data);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
