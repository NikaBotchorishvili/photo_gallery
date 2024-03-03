const PopupSkeleton = () => {
	return (
		<article className="overflow-visible p-5 rounded-md fixed top-[100px] left-1/2 -translate-x-1/2 w-dvw sm:w-[90dvw] md:w-[70dvw] bg-white shadow-md ">
			<div className="flex flex-col gap-y-5">
				<div className="bg-main animate-loading h-[70dvh] mx-auto w-[70%]"></div>
				<div className="flex gap-x-10 text-main">
					<h3 className="flex flex-col gap-y-1 justify-center">
						<div className="w-[60px] h-[20px] bg-main animate-loading">
							Likes:
						</div>
						<div className="w-[20px] h-[15px] bg-main animate-loading mx-auto"></div>
					</h3>
					<h3 className="flex flex-col gap-y-1 justify-center">
						<div className="w-[60px] h-[20px] bg-main animate-loading">
							Views:
						</div>
						<div className="w-[20px] h-[15px] bg-main animate-loading mx-auto"></div>
					</h3>
				</div>
				<p className="flex flex-col gap-2">
					<span className="w-[120px] h-[15px] bg-main animate-loading"></span>
					<span className="w-[90px] h-[15px] bg-main animate-loading"></span>
				</p>
			</div>
		</article>
	);
};

export default PopupSkeleton;
