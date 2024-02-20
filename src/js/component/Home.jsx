// import React from "react";
// import Form from "./form";

// //create your first component
// const Home = () => {
// 	return (
// 		<><Form/></>
// 		);
// };

// export default Home;

import React from "react";
import Task from "./task";







//create your first component
const Home = () => {
	return (
		<div className="container-fluid bg-dark" style={{height: "700px"}}>
			<Task/>
		</div>
	);
};

export default Home;