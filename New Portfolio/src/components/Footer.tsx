import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

function Footer() {
	return (
		<div className="flex h-[6vh] flex-col justify-center bg-pale-dogwood">
			<div className="flex w-full flex-row justify-center gap-3">
				<motion.div
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
				>
					<SocialIcon target="_blank" url="https://github.com/Jezzalittle" />
				</motion.div>
				<motion.div
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.05 }}
				>
					<SocialIcon
						target="_blank"
						url="https://www.twitter.com/JezzaLittle"
					/>
				</motion.div>
				<motion.div
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.1 }}
				>
					<SocialIcon
						target="_blank"
						url="https://www.linkedin.com/in/jeremy-little-53024b10a/"
					/>
				</motion.div>
			</div>
		</div>
	);
}

export default Footer;
