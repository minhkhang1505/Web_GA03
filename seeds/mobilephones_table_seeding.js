/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("mobilephones").del();
	await knex("mobilephones").insert([
		{
			name: "iPhone 14 Pro Max",
			price: 999,
			imageurl: "https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/06/05/my-project.png",
			detail: `$$
      iPhone 14 Pro Max. Capture incredible detail with a 48MP Main camera. Experience iPhone in a whole new way with Dynamic Island and Always-On display. And get peace of mind with groundbreaking safety features.
      Key Features
      6.7-inch Super Retina XDR display1 featuring Always-On and ProMotion
      Dynamic Island, a magical new way to interact with iPhone
      48MP Main camera for up to 4x greater resolution
      Cinematic mode now in 4K Dolby Vision up to 30 fps
      Vital safety features—Emergency SOS via satellite2 and Crash Detection
      Action mode for smooth, steady, handheld videos
      All-day battery life and up to 29 hours of video playback3
      A16 Bionic, the ultimate smartphone chip. Superfast 5G cellular4
      Industry-leading durability features with Ceramic Shield and water resistance5
      iOS 16 offers even more ways to personalize, communicate, and share6
      Legal
      The display has rounded corners. When measured as a rectangle, the screen is 6.69 inches diagonally. Actual viewable area is less.
      Emergency SOS via satellite is available in November 2022. Service is included for free for two years with the activation of any iPhone 14 model. Connection and response times vary based on location, site conditions, and other factors. See apple.com/iphone-14 or apple.com/iphone-14-pro for more information.
      Data plan required. 5G is available in select markets and through select carriers. Speeds vary based on site conditions and carrier. For details on 5G support, contact your carrier and see apple.com/iphone/cellular.
      iPhone 14 Pro Max is splash, water, and dust resistant and was tested under controlled laboratory conditions with a rating of IP68 under IEC standard 60529 (maximum depth of 6 meters up to 30 minutes). Splash, water, and dust resistance are not permanent conditions. Resistance might decrease as a result of normal wear. Do not attempt to charge a wet iPhone; refer to the user guide for cleaning and drying instructions. Liquid damage not covered under warranty.
      Some features may not be available for all countries or all areas.
      $$`,
		},
	]);
};
