import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function Intro() {
	return (
		<div className="grid h-[40rem] w-screen place-items-center bg-cambridge-blue">
			<motion.div
				className="h-[60%] w-[60%]"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
			>
				<Card
					isHoverable
					isBlurred
					className="border-none hover:bg-raisin-black/70 dark:bg-raisin-black/50"
					classNames={{ header: "justify-center" }}
				>
					<CardHeader>
						<h1 className="mb-1 text-center text-4xl font-bold text-pale-dogwood md:mb-3 md:text-7xl">
							ABOUT ME
						</h1>
					</CardHeader>
					<Divider />
					<CardBody className="h-52 place-content-center">
						<p className="px-10 text-justify align-middle text-base font-medium text-pale-dogwood md:text-xl">
							Jeremy Little is a professional programmer based in Melbourne who
							co founded ManaTea Pty Ltd and also works as an IT Support
							Engineer at Kinrossfarm. he is proficient in C++ and C# but has
							experience with Java, JavaScript, VB, HTML/CSS, Python and SQL
						</p>
					</CardBody>
				</Card>
			</motion.div>
		</div>
	);
}
