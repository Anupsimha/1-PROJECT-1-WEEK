import Message from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
    try {
        const { sender, receiver, message } = req.body; // Fixed spelling

        if (!sender || !receiver || !message) {
            return res.status(400).json({ message: "All Fields are Required" });
        }

        const newMessage = await Message.create({ sender, receiver, message }); // Fixed here too

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in messageController:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getMessages = async (req, res) => {
    try {
        const { sender, receiver } = req.query;

        const messages = await Message.find({
            $or: [
                { sender, receiver },
                { sender: receiver, receiver: sender },
            ],
        }).sort({ timestamp: 1 });

        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};