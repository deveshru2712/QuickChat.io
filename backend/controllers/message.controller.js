import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

import { io, getReceiverId } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  const { id } = req.params;
  const senderId = req.userId;
  try {
    const { messageBody } = req.body;

    //this will get the receiverId
    const receiverId = getReceiverId(id);

    if (!receiverId) {
      res.status(404).message({
        success: false,
        message: "user not found🥲",
      });
    }

    //find if the an previous conversation exist
    let conversation = await Conversation.findOne({
      participants: { $all: [userId, id] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, id],
      });

      const message = await Message.create({
        to: id,
        from: senderId,
        content: messageBody,
      });
    }

    const newMessage = await Message.create({
      to: id,
      from: senderId,
      content: messageBody,
    });

    // we are storing message into the conversation only reference

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    //this is going to send the message privately

    io.to(receiverId).emit("privateMessage", newMessage);
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
  const senderId = req.userId;
  try {
    if (!id) {
      throw new Error("User not found");
    }

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, id] },
    }).populate("messages");

    if (!conversation) {
      res.status(200).json([]);
    }

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log(`Error in get message controller: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Unable to fetch message",
    });
  }
};
