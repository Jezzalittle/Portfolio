import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";

function Contact() {
	return (
		<div
			id="Contact"
			className="relative flex h-[40rem] w-full flex-col items-center justify-center gap-10 rounded-md bg-neutral-950 antialiased"
		>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				className="mx-auto max-w-2xl"
			>
				<h1 className="relative z-10 font-['Times'] font-bold text-custom-1 md:text-6xl">
					CONTACT ME
				</h1>
			</motion.div>
			<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
				<Button
					color="primary"
					variant="bordered"
					className="z-10 cursor-pointer font-serif text-custom-1"
					onPress={() => window.open("mailto:jezzalittle@gmail.com")}
				>
					Email
				</Button>
			</motion.div>
			<BackgroundBeams />
		</div>
	);
}

export default Contact;
