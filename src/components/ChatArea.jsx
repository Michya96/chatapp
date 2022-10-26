import React from "react";
const ChatArea = ({ messages, user, room }) => {
	const filteredMessages = messages.filter((e) => e.room === room);
	const renderMessage = (message, user) => {
		if (message.author === user) {
			return (
				<div className="own-message" key={message._id}>
					<h5>
						{message.author} | {message.date} | {message.room}
					</h5>
					{message.message}
				</div>
			);
		}
		return (
			<div className="message" key={message._id}>
				<h5>
					{message.author} | {message.date} | {message.room}
				</h5>
				{message.message}
			</div>
		);
	};
	return filteredMessages.map((message) => renderMessage(message, user));
};

export default ChatArea;
