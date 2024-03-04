import React from "react";
import serviceImage from "../assets/service.png";

function ServiceSection() {
	return (
		<div
			className="grid items-center py-24 grid-col-1 lg:grid-cols-2 gap-x-6 md:gap-x-16 lg:items-start"
			id="service"
		>
			<div className="hidden lg:block">
				<img src={serviceImage} alt="ImageError" className="" />
			</div>
			<div className="space-y-10">
				<div className="space-y-4">
					<div className="flex items-center gap-x-5">
						<div className="bg-primary-100">
							<p className="text-primary-600 font-semibold text-[16px] md:text-[20px]">
								OUR SERVICE
							</p>
						</div>
						<hr className="bg-primary-600 h-[3px] w-44" />
					</div>
					<h1 className="font-semibold text-[36px] md:text-[48px] w-[400px] md:w-[600px] text-center md:text-start">
						Our Services Can Help You Grow Your Investments and Wealth
					</h1>
				</div>
				<div className="space-y-6">
					<p className="text-text_color-700 text-[20px]">
						When you choose Nishan, you not only get exceptional products but
						also outstanding service. We are committed to providing you with an
						unparalleled experience from start to finish. Our service is
						characterized by:{" "}
					</p>
					<div className="flex flex-col space-y-4">
						<div className="flex flex-col justify-between md:flex-row gap-y-5">
							<div className="flex items-center gap-x-4">
								<div className="bg-primary-600/40 w-[39px] h-[39px] rounded-md"></div>
								<p className="text-2xl text-text_color-800">
									Quality Craftsmanship
								</p>
							</div>
							<div className="flex items-center gap-x-4">
								<div className="bg-primary-600/40 w-[39px] h-[39px] rounded-md"></div>
								<p className="text-2xl text-text_color-800">
									Timeless Elegance
								</p>
							</div>
						</div>
						<div className="flex flex-col justify-between md:flex-row gap-y-5">
							<div className="flex items-center gap-x-4">
								<div className="bg-primary-600/40 w-[39px] h-[39px] rounded-md"></div>
								<p className="text-2xl text-text_color-800">
									Comfort and Durability
								</p>
							</div>
							<div className="flex items-center gap-x-4">
								<div className="bg-primary-600/40 w-[39px] h-[39px] rounded-md"></div>
								<p className="text-2xl text-text_color-800">
									Personalized Touch
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ServiceSection;
