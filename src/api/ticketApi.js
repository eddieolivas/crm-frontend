import axios from "axios";

export const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3001/v1/ticket", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVkZGllQGNocnlzYWxpc3dlYmRldmVsb3BtZW50LmNvbSIsImlhdCI6MTYzMzk3MTAxMywiZXhwIjoxNjMzOTcxOTEzfQ.VTHdmSa4MyaFzw0l29_-7W_1xGPRuPogbkeGONto4rY",
        },
      });

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
