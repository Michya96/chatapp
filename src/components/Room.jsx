import React from "react";

const Room = ({ name, setRoom, room }) => {
	return (
		<div
			onClick={() => setRoom(name)}
			className={room === name ? "room-active" : "room"}
		>
			{name}
		</div>
	);
};

export default Room;
