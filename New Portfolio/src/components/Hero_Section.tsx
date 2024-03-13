/* eslint-disable */
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

function Hero_Section() {
	//Youtube cover
	const [calcHeight, setCalcHeight] = useState(0);
	const [calcWidth, setCalcWidth] = useState(0);

	const [windowDimensions, setWindowDimensions] = useState({
		width: 0,
		height: 0,
	});

	const handleResize = () => {
		setWindowDimensions({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		// Cleanup
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		const aspectRatio = 16 / 9;
		const width = windowDimensions.width / 16;
		const height = windowDimensions.height / 9;
		setCalcWidth(windowDimensions.width);
		setCalcHeight(windowDimensions.height);

		if (width < height) {
			setCalcHeight(windowDimensions.height);
			setCalcWidth(windowDimensions.height * aspectRatio);
		} else if (width > height) {
			setCalcHeight(windowDimensions.width * aspectRatio);
			setCalcWidth(windowDimensions.width);
		}
		handleResize();
	}, [windowDimensions.width, windowDimensions.height]);

	return (
		<div className="relative h-screen w-screen flex-initial flex-shrink">
			<div className="absolute inset-x-0 top-[25%] z-10 ">
				<h1 className=" text-center font-['Times'] text-7xl font-bold tracking-tight text-pale-dogwood drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] xl:text-8xl 2xl:text-9xl">
					JEREMY LITTLE
				</h1>
			</div>
			<ReactPlayer
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					objectFit: "cover",
					zIndex: -20,
					opacity: 1,
				}}
				width={calcWidth}
				height={calcHeight}
				url={
					"https://www.youtube.com/embed/jLw3bmj7fD4?si=ZS_Q-SeikJuiCJwQ&vq=hd1080"
				}
				playing={true}
				muted={true}
				loop={true}
			/>
		</div>
	);
}

export default Hero_Section;
