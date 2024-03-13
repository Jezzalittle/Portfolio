import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function About() {
	return (
		<div
			id="About"
			className="grid h-[40rem] w-screen place-items-center bg-cambridge-blue"
		>
			<motion.div
				className="h-[50%] w-[70%]"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
			>
				<Card
					isHoverable
					isBlurred
					className="h-full border-none font-['Times'] hover:bg-raisin-black/70 dark:bg-raisin-black/50"
					classNames={{ header: "justify-center" }}
				>
					<CardHeader>
						<h1 className="mb-1 text-center text-4xl font-bold text-pale-dogwood md:text-7xl">
							ABOUT ME
						</h1>
					</CardHeader>
					<Divider />
					<CardBody className="h-[60%] place-content-center">
						<h2 className="px-10 text-justify align-middle font-serif text-base font-bold tracking-tight text-pale-dogwood md:text-xl ">
							Hi, I'm Jeremy Little!&#128075;
						</h2>
						<p className="font-sm px-10 text-justify align-middle font-serif text-xs tracking-tight text-pale-dogwood md:text-xl">
							I'm a passionate game developer and programmer based in Melbourne,
							Australia. With over 3 years of professional programming
							experience. My core skills lie in Unity3d, C# and C++. However,
							I'm also experience in a variety of other languages, including
							Java, JavaScript, VB.NET, React, HTML/CSS, Python, and SQL. This
							allows me to tackle diverse programming challenges and contribute
							effectively across different projects. In essence, I'm a highly
							motivated developer with a love for playing and creating games.
						</p>
					</CardBody>
				</Card>
			</motion.div>
		</div>
	);
}
