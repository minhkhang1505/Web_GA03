/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("televisions").del();
	await knex("televisions").insert([
		{
			name: "Samsung QLED 8K",
			price: 2999,
			imageurl: "https://images.samsung.com/is/image/samsung/p6pim/at/qe85qn900btxxn/gallery/at-qled-tv-qe85qn900btxxn-front-black-533043096?$650_519_PNG$",
			detail: `$$
      Samsung QLED 8K TV with stunning picture quality and immersive sound.
      Key Features
      8K resolution for incredible detail
      Quantum HDR for enhanced contrast
      Smart TV features with voice control
      $$`,
		},
		{
			name: "LG OLED 4K",
			price: 1999,
			imageurl: "https://i.ebayimg.com/images/g/xz4AAOSwr~ZmxX6e/s-l1600.webp",
			detail: `$$
      LG OLED 4K TV with perfect blacks and stunning colors.
      Key Features
      4K resolution with OLED technology
      Dolby Vision and Dolby Atmos
      Smart TV with AI ThinQ
      $$`,
		},
	]);
};
