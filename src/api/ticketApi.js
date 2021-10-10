import axios from "axios";

export const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3001/v1/ticket", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVkZGllQGNocnlzYWxpc3dlYmRldmVsb3BtZW50LmNvbSIsImlhdCI6MTYzMzkwMjU1NSwiZXhwIjoxNjMzOTAzNDU1fQ.arpzhogKifqvCVpJiWpnntcKS8cTLR3P7l4_P62TeZU",
        },
      });

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
