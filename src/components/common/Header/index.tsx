import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
	const location = useLocation();
	return (
		<header className="flex justify-between items-center w-[90dvw] mx-auto py-5">
			<h1 className="text-2xl md:text-3xl text-main font-bold">
				<Link to="/">Photo Gallery</Link>
			</h1>

			<nav>
				<ul className="flex gap-x-6">
					<li className="">
						<Link
							className={`text-xl text-main ${
								location.pathname === "/" && "underline"
							} `}
							to={"/"}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							className={`text-xl text-main ${
								location.pathname === "/history" && "underline"
							} `}
							to={"/history"}
						>
							History
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
