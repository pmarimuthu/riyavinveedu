module.exports = {
	title: 'Riyavinveedu',
	description: 'Cooking made simple and yummy!',
	ga: '', // 'UA-124245419-1',
	serviceWorker: true,
	head: [
		["meta", { name: "theme-color", content: "#3eaf7c" }],
		["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
		["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],

		["meta", { name: "google-site-verification", content: "7fd3yiYT5jVaAzkZvIuoPFu8KVczB3V4Vno23L50FuI" }],
		['link', { rel: 'icon', href: '/hero.png' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
	],

	locales: {
		'/': { lang: 'en-US' },
		'/tamil/': { lang: 'ta-IN' }
	},

	themeConfig: {
		lastUpdated: true,
		nav: [
			{ text: "AboutUs", link: "/about/aboutus" },
			{ text: "Cooking", link: "/cooking/" },
			{ text: "Art & Craft", link: "/artandcraft/" },
		],

		sidebar: [
			'/',
			{
				title: 'About',
				children: [
					'/about/aboutus'
				]
			},
			{
				title: 'Cooking',
				children: [
					'/cooking/cook1',
					'/cooking/cook2',
					'/cooking/cook3'
				]
			},
			{
				title: 'Art & Craft',
				children: [
					'/artandcraft/art1',
					'/artandcraft/craft1'
				]
			}
		]

	}
}

