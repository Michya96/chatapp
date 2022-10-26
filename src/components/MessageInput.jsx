import React from "react";
import { useState } from "react";

const MessageInput = ({ onSubmit, onChange, text }) => {
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					className="form-control"
					placeholder="Type your message"
					value={text}
					onChange={onChange}
				/>
			</form>
		</div>
	);
};

export default MessageInput;
