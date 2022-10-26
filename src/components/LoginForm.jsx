import React, { useState } from "react";
import axios from "axios";
const LoginForm = ({ user, setUser, authenticated, setAuthenticated }) => {
	const [inputValue, setInputValue] = useState("");
	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault();
				const result = await axios.get(
					"https://michya96-messages-api.herokuapp.com/"
				);
				if (inputValue) await setUser(inputValue);
				setInputValue("");
				console.log(user);
			}}
		>
			<div className="mb-3">
				<label className="form-label" htmlFor="usernameInput">
					Name
				</label>
				<input
					className="form-control"
					type="text"
					placeholder="username"
					value={inputValue}
					id="usernameInput"
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<div className="form-text">
					Username must be between 3 and 18 characters
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</div>
		</form>
	);
};

export default LoginForm;
