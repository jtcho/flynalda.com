/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

exports.index = function(req, res) {
	res.json({
		//JUNGLE TOUR
		jungletour: {
			name: 'Aqua Fun: Jungle Tour',
			blurb: [
				'Ride two passenger speedboats through the lagoon mangroves!',
				'Anyone can drive this speedboat, no license or age requirement!',
				'Snorkel at a nearby reef, clean gear provided!'
			],
			map: 2,
			images:6,
			location: 'Across from the Omni Hotel',
			price: ['US $70 + Dock Fee US $10 = $80 (Door-Price)'],
			duration: '2 hours 30 minutes',
			//
			extraKeys: ['departuresched', 'returntimes', 'reservations'],
			departuresched: {
				title: 'Departure Schedule',
				value: [
					'9:30 AM',
					'12:00 PM',
					'2:30 PM'
				],
				type: 1
			},
			returntimes: {
				title: 'Expected Return Time',
				value: [
					'12:00 PM',
					'2:30 PM',
					'5:00 PM'
				],
				type: 1
			},
			reservations: {
				title: 'Place Reservations Here',
				value: 'http://www.aquafun.com.mx/Default.aspx',
				type: 3
			}
		},
		//ISLA MUJERES TOUR
		islamujeres: {
			name: 'Isla Mujeres Tour',
			blurb: [
				'Get a taste of Mexican Culture!',
				'Casually unwind with a panoramic view of the Caribbean (just a few km off the Mexican coast.'
			],
			map: 4,
			images:6,
			location: 'Playa Tortugas',
			price: ['US $80 + Dock Fee US $10 = $90 (Door-Price/Special Charter Rates if Group Size > 13'],
			duration: '7 hours 30 minutes',
			//
			extraKeys: ['departuresched', 'returntime', 'reservations', 'contact'],
			departuresched: {
				title: 'Departure Time',
				value: '9:30 AM',
				type: 2
			},
			returntime: {
				title: 'Expected Return Time',
				value: '5:00 PM',
				type: 2
			},
			reservations: {
				title: 'Reservations',
				value: 'http://www.sambacatamaranes.com',
				type: 3
			},
			contact: {
				title: 'Contact',
				value: 'mailto:operadorasamba@hotmail.com',
				type: 3
			}
		},
		//MARINA KM RESTAURANT/TOUR
		marina: {
			name: 'Marina Km 19.5 Restaurant & Tours by Captain Joe',
			blurb: [
				'A local Mexican restaurant famous for their delicious shrimp burgers and tacos',
				'Student friendly price range',
				'Comes with the opportunity to try one of Cancun\'s signature marine activities, lagoon fishing!'
			],
			desc: 'Captain Joe, the owner of the restaurant, takes you around the lagoon on his boat and shows you the prime fishing spots.You are guaranteed to catch a fish, be it red snapper, dog snapper, barracuda, or chak chik!',
			map: 1,
			images:6,
			location: 'Next to GR Caribe Cancun',
			price: [
				'Food: US $20 - 25 (Avg. + Tip)',
				'Fishing: $100/hr (Negotiable to $85/hr) + $4/fish cooked ~ $280 Total'
			],
			duration: '3 hours',
			//Extra stuff here.
			extraKeys: ['pros', 'capacity', 'departuresched'],
			pros: {
				title: 'Pros/Cons',
				value: [
					'(+) You can bring your catches and have them cooked and served at the restaurant!',
					'(-) The catch: Boat rental fees are $100/hour. Cooking your fish at the restaurant will also cost extra $4 per.',
					'(+) The cost of this activity doesn\'t depend on the number of people, so it is highly recommended for large groups! The cost is fixed on the hourly rental rate of the fishing boat.'
				],
				type: 1
			},
			capacity: {
				title: 'Boat Capacity',
				value: '1-10 people',
				type: 2
			},
			departuresched: {
				title: 'Departure Schedule',
				value: '7:00 AM (Time is dependent on the condition of the weather & Two day advanced notice required)',
				type: 2
			}
		},
		//NAVIOS RESTAURANT
		navios: {
			name: 'NAVIOS',
			blurb: [
				'A quality Mexican restaurant.',
				'Famous for one of the BEST sunset views in the area.',
				'Specialties: their tuna and octopus dishes are particular sublime (but so are the other dishes!)'
			],
			map: 2,
			images:7,
			location: 'GR Caribe Cancun, next to 19.5 km',
			price: ['Food + Drinks: US $45-50 (Avg. + Tip)']
		},
		mextreme: {
			name: 'Mextreme',
			blurb: [
				'An authentic Mexican restaurant.',
				'Recommended for those who prefer meat to fish.',
				'Best known for its grills, this restaurant serves various types of meat: beef, pork, lamb, and chicken.',
				'Generous portion sizes - One grill dish can easily serve three people.',
				'A \"Student-Friendly\" restaurant with relatively low prices and large quantities.',
				'Due to its location next to all the hot clubs in downtown Cancun, Mextreme is the perfect place to dine before a night of partying!'
			],
			map: 3,
			images:3,
			location: 'Cancun Clipper Club, behind La Vaquita',
			price: ['Food + Drinks: US $45-50 (Avg. + Tip)']
		},
		city: {
			name: 'The City',
			blurb: [
				'Hosted MTV\'s live spring-break party marathons in the past!',
				'Invited major internal DJs (See website for details.)',
				'Impressive foam parties!',
				'Special events hosted every Friday.'
			],
			map: 3,
			images:5,
			location: 'Next to Cancun Clipper Club',
			price:['$75 (Door-Price)'],
			extraKeys:['reservations'],
			reservations: {
				title: 'Reservations and Additional Info Here',
				value: 'http://thecitycancun.com',
				type: 3
			}
		},
		cocobongo: {
			name: 'Coco Bongo',
			blurb: [
				'Alcohol + Amazing Music + Unforgettable Performances = The Epitome of a Cancun nightclub experience!'
			],
			map: 3,
			images:3,
			location: 'Next to Cancun Clipper Club',
			price: ['$70 (Standing: Door-Price)', '$140 (VIP: Door-Price)'],
			extraKeys: ['tips', 'reservations'],
			tips: {
				title: '',
				value: [
					'Tip: Want to maximize your fun? Make sure to pregame! It\'s often difficult to get drinks at Coco Bongo due to its popularity.',
					'Bonus Tip: You may be tempted to get a VIP table. Our advice? Not worth it. We hardly stayed at our table!' 
				],
				type: 1
			},
			reservations: {
				title: 'Reservations and Additional Info Here',
				value: 'http://cocobongo.com.mx',
				type: 3
			}
		}
	});
};