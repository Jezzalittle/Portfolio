import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi,
} from "@/components/ui/carousel";
import { Card, Chip, Divider } from "@nextui-org/react";
import { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { animate, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import projects from "../data/projects.json";

export default function Projects() {
	const projectsData = projects.projects;

	const [index, setIndex] = useState(0);

	const handleClick = (index: number) => () => {
		animateFade(() => {
			if (api) {
				plugin.current.stop();
				api.scrollTo(index, true);
			}
			setIndex(index);
			setFocused(!isFocused);
		});
	};

	//Animation
	const [isFocused, setFocused] = useState(false);

	type OnFinishedFadeoutFunction = () => void;

	async function animateFade(onFinished: OnFinishedFadeoutFunction) {
		const title = document.getElementById("project-card-title");
		const text = document.getElementById("project-card-text");

		const animation = animate([title, text], { opacity: 0 }, { duration: 0.6 });
		animation.then(() => {
			animate([title, text], { opacity: 1 }, { duration: 0.6 });
			onFinished();
		});
	}

	//Carousel
	const [api, setApi] = useState<CarouselApi>();
	const plugin = useRef(AutoScroll({ playOnInit: true, speed: 1 }));

	useEffect(() => {
		if (!api) {
			return;
		}

		api.on(
			"select",
			(emblaApi: EmblaCarouselType, eventName: EmblaEventType) => {
				animateFade(() => {
					setIndex(emblaApi.selectedScrollSnap);
				});
			}
		);

		api.on(
			"resize",
			(emblaApi: EmblaCarouselType, eventName: EmblaEventType) => {
				if (plugin) {
					isFocused ? plugin.current.stop() : plugin.current.play();
				}
			}
		);
	}, [api, isFocused, plugin]);

	//Youtube cover
	const [calcWidth, setCalcWidth] = useState(0);
	const [playing, setPlaying] = useState(false);

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
		const viewportHeight = windowDimensions.height;
		const aspectRatio = 16 / 9;
		if (windowDimensions.width < viewportHeight * aspectRatio) {
			const newCalcWidth = viewportHeight * aspectRatio;
			setCalcWidth(newCalcWidth);
		} else {
			setCalcWidth(windowDimensions.width);
		}
		setPlaying(true);
		handleResize();
	}, [windowDimensions.width, windowDimensions.height]);

	return (
		<div
			id="Projects"
			className="h-dvh flex w-screen flex-col content-center items-center bg-raisin-black "
		>
			<h1 className="m-4 font-['Times'] text-5xl font-bold text-custom-2 md:text-7xl">
				PROJECTS
			</h1>
			<Divider />
			<div className="my-16 flex w-[90%] flex-col items-center gap-y-20">
				<div className="mx-auto grid max-h-[80%] w-fit grid-cols-[2fr_6fr] gap-x-14">
					<Card
						className="h-full border-3 border-custom-2 bg-raisin-black"
						shadow="lg"
						classNames={{ header: "justify-center" }}
					>
						<motion.div id="project-card-title">
							<div className="m-3 auto-rows-auto">
								<h1 className="h-auto pr-4 align-middle font-['Times'] text-5xl font-bold text-custom-2 ">
									{projectsData[index].name}
								</h1>
							</div>
						</motion.div>
						<Divider className="auto-rows-min" />
						<motion.div id="project-card-text">
							<div className="mb-3 ml-3 mr-3 auto-rows-auto pt-4">
								<p
									className="h-auto overflow-hidden font-serif text-2xl font-medium text-custom-2"
									dangerouslySetInnerHTML={{ __html: projectsData[index].text }}
								></p>
							</div>
						</motion.div>
					</Card>
					{calcWidth && (
						<div>
							<Carousel
								opts={{
									align: "start",
									loop: true,
									watchDrag: false,
								}}
								setApi={setApi}
								plugins={[plugin.current]}
								className="h-[66vh] w-full"
								id="carousel"
							>
								<CarouselContent className="-ml-14 h-full">
									{projectsData.map((data, index) => (
										<CarouselItem
											onPointerDown={handleClick(index)}
											key={index}
											className={
												!isFocused
													? "relative basis-2/5 cursor-pointer pl-14"
													: "relative cursor-pointer pl-14"
											}
										>
											<Card
												className=" h-full  bg-transparent "
												shadow="lg"
												onPointerDown={() => {}}
											>
												{data.type == "video" && (
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
														width={!isFocused ? calcWidth : "100%"}
														height={"100%"}
														url={data.videoLink}
														playing={api && api.slidesInView().includes(index)}
														muted={true}
														loop={true}
														config={{
															file: {
																attributes: {
																	style: {
																		width: "100%",
																		height: "100%",
																		objectFit: "cover",
																	},
																},
															},
														}}
													/>
												)}
												{data.type == "gif" && (
													<img
														className={
															!isFocused
																? "h-full w-full object-cover"
																: "h-full w-full object-fill"
														}
														width={"100%"}
														height={"100%"}
														src={data.videoLink}
													/>
												)}
											</Card>
											<div className=" absolute inset-0 flex h-full w-full flex-col-reverse">
												<div className="basis-[5%] pl-14">
													{projectsData[index].tags.map((tag, tagIndex) => (
														<Chip
															variant="shadow"
															className="ml-1"
															radius="sm"
															size="md"
															classNames={{
																base: " border-1 border-custom-2 bg-raisin-black/70",
																content: "text-custom-2 text-base font-serif",
															}}
															key={tagIndex}
														>
															{tag}
														</Chip>
													))}
												</div>
												<div className="pb-1 pl-14">
													<div className="">
														<h1 className="ml-1 h-auto pr-4 align-middle font-['Times'] text-2xl font-bold text-custom-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
															{projectsData[index].name}
														</h1>
													</div>
												</div>
											</div>
										</CarouselItem>
									))}
								</CarouselContent>
							</Carousel>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
