import React from "react";
import Room from "./Room";

const Rooms = ({ room, setRoom }) => {
	return (
		<div className="rooms-container">
			<Room room={room} setRoom={setRoom} name="Room 1" />
			<Room room={room} setRoom={setRoom} name="Room 2" />
			<Room room={room} setRoom={setRoom} name="Room 3" />
		</div>
	);
};

export default Rooms;
