import React, { Component } from "react";
import John from "../Images/happy.jpg";

const Events = () => {
	return (
		<div className="py-5 text-center m-5" id="service">
			<p class="display-4 text-center my-5 font-weight-bold title">
				<text className="px-lg-5">Whats the occassion?</text>
			</p>
			<div className="my-5">
				<div className="row mt-5 mx-lg-5">
					<div className="col-lg-4 event-img">
						<img src={John} className="w-100" alt="" />
					</div>
					<div className="col-lg-8 text-left">
						<p className="h2 mt-5">Weddings</p>
						<p className="text-muted lead">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
							repellat vitae possimus accusantium ad exercitationem quisquam?
							Explicabo officiis, ex, aut illum alias magnam dolorum ipsum earum
							architecto, possimus saepe eaque. Voluptate modi numquam in beatae
							aspernatur, asperiores ad enim maxime deleniti illo quasi itaque
							pariatur corrupti doloribus animi autem iure harum molestiae,
							optio reprehenderit, quod ipsam hic debitis quia. Inventore!
						</p>
					</div>
				</div>
				<div className="row mt-5 mx-lg-5">
					<div className="col-lg-8 text-left order-last order-lg-first">
						<p className="h2 mt-5">Corprate Events</p>
						<p className="text-muted lead">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
							repellat vitae possimus accusantium ad exercitationem quisquam?
							Explicabo officiis, ex, aut illum alias magnam dolorum ipsum earum
							architecto, possimus saepe eaque. Voluptate modi numquam in beatae
							aspernatur, asperiores ad enim maxime deleniti illo quasi itaque
							pariatur corrupti doloribus animi autem iure harum molestiae,
							optio reprehenderit, quod ipsam hic debitis quia. Inventore!
						</p>
					</div>
					<div className="col-lg-4 event-img order-first order-lg-last">
						<img src={John} className="w-100" alt="" />
					</div>
				</div>
				<div className="row mt-5 mx-lg-5">
					<div className="col-lg-4 event-img">
						<img src={John} className="w-100" alt="" />
					</div>
					<div className="col-lg-8 text-left">
						<p className="h2 mt-5">Traditional Events</p>
						<p className="text-muted lead">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
							repellat vitae possimus accusantium ad exercitationem quisquam?
							Explicabo officiis, ex, aut illum alias magnam dolorum ipsum earum
							architecto, possimus saepe eaque. Voluptate modi numquam in beatae
							aspernatur, asperiores ad enim maxime deleniti illo quasi itaque
							pariatur corrupti doloribus animi autem iure harum molestiae,
							optio reprehenderit, quod ipsam hic debitis quia. Inventore!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Events;
