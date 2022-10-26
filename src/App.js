import "./App.css";
import Rooms from "./components/Rooms";
import MessageInput from "./components/MessageInput";
import { useEffect, useState } from "react";
import axios from "axios";
import ChatArea from "./components/ChatArea";
import io from "socket.io-client";
import LoginForm from "./components/LoginForm";

const socket = io();
function App() {
	const [messages, setMessages] = useState();
	const [text, setText] = useState("");
	const [user, setUser] = useState("");
	const [room, setRoom] = useState("Room 1");

	socket.on("write_message", (message, receivedUser, room) => {
		messages
			? setMessages([
					...messages,
					{ author: receivedUser, message, date: Date.now(), room },
			  ])
			: setMessages({ author: receivedUser, message, date: Date.now(), room });
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const textCopy = text;
		// console.log("messages ", messages);
		socket.emit("send_message", textCopy, user, room);
		// setMessages([...messages, { message: textCopy }]);
		axios.post(process.env.API_URL, {
			author: user,
			message: textCopy,
			room: room,
		});
		setText("");
	};
	async function fetchData() {
		const result = await axios.get(process.env.API_URL);
		setMessages(result.data);
	}

	useEffect(() => {
		fetchData();
	}, []);
	const handleChange = (event) => {
		setText(event.target.value);
	};
	if (user === "")
		return (
			<div className="h-100 d-flex justify-content-center align-items-center">
				<LoginForm user={user} setUser={setUser} />
			</div>
		);
	return (
		<div className="main-container">
			<Rooms room={room} setRoom={setRoom} />
			<div className="chat-container">
				<div className="top-bar">
					<h1>{room}</h1>
				</div>
				<div className="messages">
					<ChatArea room={room} user={user} messages={messages} />
				</div>
				<div className="message-bar">
					<MessageInput
						onChange={handleChange}
						onSubmit={handleSubmit}
						text={text}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
