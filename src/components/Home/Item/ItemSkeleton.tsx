const ItemSkeleton = () => {
	return (
		<li className="flex shadow-xl rounded-md flex-col gap-4 py-6 w-[300px]">
			<div className=" h-[250px] w-full bg-gray-300 animate-loading"></div>
			<h3 className="px-5 flex flex-col gap-y-2 text-lg text-main tracking-wider">
				<div className="w-full bg-gray-300 animate-loading h-[15px]"></div>
				<div className="w-full bg-gray-300 animate-loading h-[15px]"></div>
				<div className="w-[40%] bg-gray-300 animate-loading h-[15px]"></div>
			</h3>
		</li>
	);
};

export default ItemSkeleton;
