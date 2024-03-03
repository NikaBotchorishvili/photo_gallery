import { Link } from "react-router-dom";

const Header: React.FC = () => {
	return (
		<header className="flex justify-between items-center w-[90dvw] mx-auto py-5">
			<h1 className="text-3xl text-main font-bold">Photo Gallery</h1>

			<nav>
				<ul className="flex gap-x-6">
					<li className="">
						<Link className="text-xl" to={"/"}>
							Home
						</Link>
					</li>
					<li>
						<Link className="text-xl" to={"/history"}>
							History
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
