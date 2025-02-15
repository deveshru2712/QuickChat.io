import { io, server } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;
  try {
  } catch (error) {
    console.log(`Error in send message controller: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Unable to get send message",
    });
  }
};

export const getMessage = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;
  try {
  } catch (error) {
    console.log(`Error in get message controller: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Unable to fetch message",
    });
  }
};
