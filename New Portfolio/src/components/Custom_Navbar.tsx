import { Link, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";

export default function Custom_Navbar() {
	return (
		<Navbar
			maxWidth="lg"
			classNames={{ wrapper: "justify-center " }}
			className="fixed"
		>
			<NavbarContent justify="center">
				<NavbarItem>
					<Link
						className="cursor-pointer font-serif text-pale-dogwood drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
						onClick={() =>
							document.getElementById("About")?.scrollIntoView({
								behavior: "smooth",
								block: "center",
								inline: "center",
							})
						}
					>
						About
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						className="cursor-pointer font-serif text-pale-dogwood drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
						onClick={() =>
							document.getElementById("Projects")?.scrollIntoView({
								behavior: "smooth",
								block: "center",
								inline: "center",
							})
						}
					>
						Projects
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						className="cursor-pointer font-serif text-pale-dogwood drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
						onClick={() =>
							document.getElementById("Contact")?.scrollIntoView({
								behavior: "smooth",
								block: "center",
								inline: "center",
							})
						}
					>
						Contact
					</Link>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
