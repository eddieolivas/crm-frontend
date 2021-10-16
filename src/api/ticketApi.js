import axios from "axios";

export const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3001/v1/ticket", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVkZGllQGNocnlzYWxpc3dlYmRldmVsb3BtZW50LmNvbSIsImlhdCI6MTYzNDE0NDQ1MSwiZXhwIjoxNjM0MTQ1MzUxfQ.mi4_ucl7H1RlI9OsM6z5mgC2hPrG4ANqOH47YA9IImY",
        },
      });

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
