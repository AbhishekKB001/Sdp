export const CATEGORIES = [
  'All',
  'SuperSport',
  'Adventure',
  'Cruiser',
  'Naked',
  'Touring',
  'Electric'
];

export const BRANDS = [
  'All',
  'Yamaha',
  'Kawasaki',
  'Ducati',
  'BMW',
  'Royal Enfield',
  'KTM',
  'Honda',
  'Harley-Davidson',
  'Triumph',
  'Zero',
  'Ultraviolette'
];

export const BIKES_DATA = [
  {
    id: 'ducati-panigale-v4-s',
    name: 'Ducati Panigale V4 S',
    brand: 'Ducati',
    category: 'SuperSport',
    priceUSD: 31995,
    priceINR: 3348000,
    badge: 'Track Weapon',
    rating: 4.9,
    reviewsCount: 142,
    tagline: 'The pinnacle of Italian superbike racing pedigree and adrenaline.',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80',
    description: `The Ducati Panigale V4 S represents the absolute cutting edge of track-focused supersport engineering. Powered by the legendary 1,103cc Desmosedici Stradale 90° V4 engine directly derived from MotoGP, this machine produces an astonishing 215.5 horsepower at 13,000 RPM. Equipped with Öhlins Smart EC 2.0 electronically controlled suspension, forged aluminum Marchesini wheels, and Brembo Stylema calipers, it delivers surgical precision on both circuit apexes and twisting mountain passes.

The aerodynamic package features dual biplane winglets that generate up to 37 kg of downforce at 300 km/h, anchoring the front wheel during high-speed blasts and heavy braking zones. The comprehensive 6-axis Bosch IMU electronics suite manages traction control, slide control, wheelie control, engine brake control, and power launch.`,
    specs: {
      engine: '1,103cc Desmosedici Stradale 90° V4, Counter-Rotating Crankshaft',
      power: '215.5 HP @ 13,000 RPM',
      torque: '123.6 Nm @ 9,500 RPM',
      topSpeed: '299+ km/h (186+ mph)',
      acceleration: '0-100 km/h in 2.8s',
      mileage: '13 km/l (30.6 mpg)',
      fuelCapacity: '17.0 L (4.49 gal)',
      weight: '195.5 kg (431 lbs) Kerb',
      seatHeight: '850 mm (33.5 in)',
      gearbox: '6-speed with Ducati Quick Shift (DQS) Up/Down EVO 2',
      brakes: 'Dual 330mm semi-floating discs, Brembo Stylema Monobloc 4-piston calipers'
    },
    features: [
      'MotoGP-derived Desmosedici Stradale 90° V4 Engine',
      'Öhlins Smart EC 2.0 Electronic Suspension',
      'Forged Marchesini 3-spoke Light Alloy Wheels',
      'Aerodynamic Biplane Winglets for 37kg Downforce',
      'Full 5-inch TFT Dashboard with Track EVO mode',
      'Cornering ABS EVO & Ducati Slide Control (DSC)'
    ],
    colors: [
      { name: 'Ducati Red', hex: '#DC2626' },
      { name: 'Winter Test Matte Black', hex: '#1F2937' }
    ],
    pros: [
      'Savage MotoGP engine sound and relentless high-RPM acceleration',
      'Benchmark electronics and cornering stability',
      'Top-tier Öhlins electronic suspension and Brembo Stylema brakes'
    ],
    cons: [
      'Very aggressive riding triangle not suited for heavy traffic commute',
      'Radiator produces noticeable heat in slow city speeds'
    ]
  },
  {
    id: 'bmw-s-1000-rr',
    name: 'BMW S 1000 RR',
    brand: 'BMW',
    category: 'SuperSport',
    priceUSD: 18295,
    priceINR: 2075000,
    badge: 'ShiftCam Icon',
    rating: 4.8,
    reviewsCount: 210,
    tagline: 'German precision perfection equipped with revolutionary ShiftCam variable valves.',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80',
    description: `The BMW S 1000 RR revolutionized the liter-bike class upon arrival and continues to set the benchmark for track performance and daily usability. At its heart lies a water/oil-cooled 4-cylinder 4-stroke in-line 999cc engine with BMW ShiftCam technology, which varies the valve timing and valve lift on the intake side. This yields monstrous mid-range torque without sacrificing ferocious top-end power of 205 horsepower.

With standard composite aerodynamic winglets, the front tire is glued to the tarmac under intense acceleration. Dynamic Traction Control (DTC), Dynamic Damping Control (DDC), Hill Start Control, and Pro riding modes ensure the rider maintains absolute mastery in every weather condition.`,
    specs: {
      engine: '999cc Water/Oil-Cooled 4-Cylinder In-Line, BMW ShiftCam',
      power: '205 HP @ 13,000 RPM',
      torque: '113 Nm @ 11,000 RPM',
      topSpeed: '303 km/h (188 mph)',
      acceleration: '0-100 km/h in 3.1s',
      mileage: '15.6 km/l (36.7 mpg)',
      fuelCapacity: '16.5 L (4.36 gal)',
      weight: '197 kg (434 lbs) Kerb',
      seatHeight: '824 mm (32.4 in)',
      gearbox: '6-speed constant mesh with Shift Assistant Pro',
      brakes: 'Twin disc 320mm, 4-piston radial caliper, BMW Motorrad Race ABS'
    },
    features: [
      'BMW ShiftCam Variable Valve Timing System',
      'Aerodynamic M Winglets generating downforce',
      '6.5-inch TFT Connectivity display with lean-angle recorder',
      'Brake Slide Assist and Slip Slide Control',
      'Launch Control & Pit Lane Limiter',
      'M Lightweight Battery and optimized ergonomics'
    ],
    colors: [
      { name: 'Black Storm Metallic', hex: '#111827' },
      { name: 'Light White / M Motorsport', hex: '#3B82F6' },
      { name: 'Passion Red', hex: '#EF4444' }
    ],
    pros: [
      'Incredible linear power delivery thanks to ShiftCam valvetrain',
      'Remarkably comfortable ergonomics for a pure liter supersport',
      'Intuitive 6.5" TFT display and rider aid customizability'
    ],
    cons: [
      'Desirable options (M Package, DDC suspension) raise the price significantly',
      'Factory exhaust note is muted by stringent Euro 5 catalytic converters'
    ]
  },
  {
    id: 'kawasaki-ninja-zx-10r',
    name: 'Kawasaki Ninja ZX-10R',
    brand: 'Kawasaki',
    category: 'SuperSport',
    priceUSD: 17799,
    priceINR: 1679000,
    badge: 'WSBK Champion',
    rating: 4.8,
    reviewsCount: 188,
    tagline: 'World Superbike Championship winning DNA built to dominate the timing sheets.',
    image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1000&q=80',
    description: `Developed directly alongside the Kawasaki Racing Team that claimed six consecutive WorldSBK crowns with Jonathan Rea, the Ninja ZX-10R is pure race craft. Its 998cc liquid-cooled in-line four pushes out 203 PS (213 PS with Ram-Air intake) with titanium valves and finger-follower valve actuation.

The front aerodynamic cowl integrates winglets directly into the chassis structure rather than bolting them onto fairing panels, generating 17% more front downforce while decreasing drag. Showa Balance Free Front Forks (BFF) and Showa BFRC lite rear shock provide competition-grade hydraulic response.`,
    specs: {
      engine: '998cc Liquid-Cooled 4-Stroke In-Line Four, DOHC 16-Valve',
      power: '203 PS @ 13,200 RPM (213 PS with Ram-Air)',
      torque: '114.9 Nm @ 11,400 RPM',
      topSpeed: '299 km/h (186 mph)',
      acceleration: '0-100 km/h in 2.9s',
      mileage: '14.5 km/l (34 mpg)',
      fuelCapacity: '17.0 L (4.5 gal)',
      weight: '207 kg (456 lbs) Kerb',
      seatHeight: '835 mm (32.9 in)',
      gearbox: '6-speed cassette-type with KQS Bi-directional Quickshifter',
      brakes: 'Dual 330mm Brembo semi-floating discs, Brembo M50 monoblocs'
    },
    features: [
      'Integrated Aerodynamic Fairing Winglets',
      'Showa Balance Free Front Fork (BFF) & BFRC Lite Shock',
      'Brembo M50 Monobloc Radial Brakes',
      'Kawasaki Cornering Management Function (KCMF)',
      'Electronic Cruise Control & Launch Control (KLCM)',
      '4.3-inch Full Color TFT with Rideology App connectivity'
    ],
    colors: [
      { name: 'Lime Green / Ebony (KRT Edition)', hex: '#22C55E' },
      { name: 'Metallic Matte Graphenesteel Gray', hex: '#4B5563' }
    ],
    pros: [
      'Best value-for-money liter-class superbike in the market',
      'Sublime front-end feel and braking feedback from Showa BFF suspension',
      'Integrated cruise control for relaxed highway transfers between track days'
    ],
    cons: [
      'Taller gearing makes 1st gear very tall for city traffic',
      'Display screen is smaller than European competitors'
    ]
  },
  {
    id: 'yamaha-yzf-r15-v4',
    name: 'Yamaha YZF-R15 V4',
    brand: 'Yamaha',
    category: 'SuperSport',
    priceUSD: 2499,
    priceINR: 182000,
    badge: 'Best Seller',
    rating: 4.7,
    reviewsCount: 954,
    tagline: 'The undisputed entry-level supersport king with R1-inspired styling & VVA tech.',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1000&q=80',
    description: `The Yamaha YZF-R15 V4 is widely considered the best motorcycle for aspiring sportbike riders to master proper body positioning, cornering lines, and rev-matching. Borrowing radical aesthetic cues directly from Yamaha's MotoGP YZR-M1 and flagship YZF-R1, it features a central M-duct LED projector headlight with twin LED daytime running position lamps.

It is powered by a high-tech 155cc liquid-cooled SOHC 4-valve engine equipped with Yamaha's Variable Valve Actuation (VVA) system. VVA seamlessly switches between two intake cam lobes at 7,400 RPM, providing smooth low-end torque for city commuting and screaming high-RPM top-end punch right up to its 10,000 RPM redline.`,
    specs: {
      engine: '155cc Liquid-Cooled SOHC 4-Valve with Variable Valve Actuation (VVA)',
      power: '18.4 PS @ 10,000 RPM',
      torque: '14.2 Nm @ 7,500 RPM',
      topSpeed: '140 km/h (87 mph)',
      acceleration: '0-100 km/h in 10.1s',
      mileage: '45-50 km/l (105-117 mpg)',
      fuelCapacity: '11.0 L (2.9 gal)',
      weight: '142 kg (313 lbs) Kerb',
      seatHeight: '815 mm (32.1 in)',
      gearbox: '6-speed with Assist & Slipper Clutch and Quick Shifter (Up)',
      brakes: '282mm Front Disc, 220mm Rear Disc with Dual-Channel ABS'
    },
    features: [
      'Variable Valve Actuation (VVA) for dual power bands',
      'Golden Upside-Down (USD) Telescopic Front Forks',
      'Deltabox Frame for razor-sharp handling rigidity',
      'Standard Traction Control System (TCS)',
      'Quick Shifter for seamless clutchless upshifts',
      'Y-Connect Bluetooth App connectivity with fuel log and call alerts'
    ],
    colors: [
      { name: 'Racing Blue', hex: '#1D4ED8' },
      { name: 'Metallic Red', hex: '#B91C1C' },
      { name: 'Dark Knight Matte Black', hex: '#18181B' },
      { name: 'Vivid Magenta Metallic', hex: '#A21CAF' }
    ],
    pros: [
      'Phenomenal fuel economy (45+ km/l) with true supersport performance',
      'Deltabox chassis provides unrivaled cornering stability in its displacement class',
      'Includes premium features like USD forks, Quickshifter, and Traction Control'
    ],
    cons: [
      'Aggressive clip-on handlebar posture puts weight on wrists over long tours',
      'Pillion seat is compact and perched high'
    ]
  },
  {
    id: 'bmw-r-1250-gs-adventure',
    name: 'BMW R 1250 GS Adventure',
    brand: 'BMW',
    category: 'Adventure',
    priceUSD: 20345,
    priceINR: 2250000,
    badge: 'Globe Trotter',
    rating: 4.9,
    reviewsCount: 340,
    tagline: 'The undisputed ruler of global overland expeditions, continents, and deserts.',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80',
    description: `When adventurers envision crossing continents from Alaska to Tierra del Fuego or traversing the Silk Road, the BMW R 1250 GS Adventure is the legendary machine they choose. Its iconic horizontally-opposed twin-cylinder Boxer engine delivers 136 horsepower with 143 Nm of torque, keeping the center of gravity low despite its commanding physical presence.

With an enormous 30-liter (7.9 gallon) aluminum fuel tank, cross-spoke wheels, full crash protection bars, and BMW Dynamic ESA electronic suspension that automatically adjusts preload and damping in real-time, the GSA will power through sand dunes, river crossings, and endless highways with absolute composure.`,
    specs: {
      engine: '1,254cc Air/Liquid-Cooled 2-Cylinder 4-Stroke Boxer with ShiftCam',
      power: '136 HP @ 7,750 RPM',
      torque: '143 Nm @ 6,250 RPM',
      topSpeed: '205 km/h (127 mph)',
      acceleration: '0-100 km/h in 3.6s',
      mileage: '21 km/l (49.5 mpg)',
      fuelCapacity: '30.0 L (7.9 gal)',
      weight: '268 kg (591 lbs) Kerb',
      seatHeight: '890 / 910 mm (35.0 / 35.8 in)',
      gearbox: '6-speed helical synchromesh, shaft drive, anti-hopping clutch',
      brakes: 'Twin 305mm discs, 4-piston radial calipers, BMW Motorrad Integral ABS Pro'
    },
    features: [
      'Massive 30-Liter Long-Range Aluminum Fuel Tank',
      'BMW ShiftCam Variable Camshaft Timing Technology',
      'Maintenance-Free Enclosed Shaft Drive',
      'Dynamic ESA Electronic Suspension with Automatic Load Leveling',
      'BMW Motorrad Integral ABS Pro and Dynamic Brake Control',
      'Full LED Adaptive Headlight with Swiveling Cornering Light'
    ],
    colors: [
      { name: 'Rallye Style (Light White / Racing Blue / Racing Red)', hex: '#2563EB' },
      { name: 'Triple Black', hex: '#111827' },
      { name: 'Ice Grey', hex: '#9CA3AF' }
    ],
    pros: [
      'Incredible 550+ km (340+ mile) riding range on a single tank',
      'Boxer engine provides low center of gravity and low-end tractor torque',
      'Superb wind protection and all-day passenger comfort'
    ],
    cons: [
      'Substantial 268 kg weight requires experience when maneuvering at slow speeds',
      'Tall seat height (890mm) can challenge shorter riders'
    ]
  },
  {
    id: 'royal-enfield-himalayan-450',
    name: 'Royal Enfield Himalayan 450',
    brand: 'Royal Enfield',
    category: 'Adventure',
    priceUSD: 5799,
    priceINR: 285000,
    badge: 'Pure Explorer',
    rating: 4.8,
    reviewsCount: 520,
    tagline: 'Born in the Himalayas. Built with the revolutionary liquid-cooled Sherpa 450 engine.',
    image: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1000&q=80',
    description: `The all-new Royal Enfield Himalayan 450 marks a historic technological leap for the legendary marque. Replacing the beloved long-stroke LS410, it is powered by Royal Enfield's first ever liquid-cooled engine: the Sherpa 450. Generating 40 horsepower and 40 Nm of torque with an integrated ride-by-wire system, it delivers robust low-end climbing power and relaxed 120 km/h highway cruising.

Built on an all-new twin-spar tubular steel chassis with 43mm Showa upside-down front forks and 200mm of wheel travel at both ends, the Himalayan 450 glides over rocks, riverbeds, and broken asphalt. It features the world's first round TFT navigation console powered directly by full-map Google Maps integration.`,
    specs: {
      engine: '452cc Liquid-Cooled Single Cylinder, DOHC 4-Valves (Sherpa 450)',
      power: '40.02 PS @ 8,000 RPM',
      torque: '40 Nm @ 5,500 RPM',
      topSpeed: '155 km/h (96 mph)',
      acceleration: '0-100 km/h in 6.4s',
      mileage: '30-33 km/l (70-77 mpg)',
      fuelCapacity: '17.0 L (4.5 gal)',
      weight: '196 kg (432 lbs) Kerb',
      seatHeight: '825 mm (adjustable to 845 mm)',
      gearbox: '6-speed with Assist & Slipper Clutch',
      brakes: '320mm Front Disc, 270mm Rear Disc with Switchable Dual-Channel ABS'
    },
    features: [
      'Sherpa 450 Liquid-Cooled DOHC High-Performance Engine',
      '4-inch Round Full Color Tripper TFT with Full Google Maps Integration',
      'Showa 43mm USD Front Forks with 200mm Travel',
      '21-inch Front and 17-inch Rear Spoke Wheels',
      'Switchable Rear ABS for off-road slide control',
      'Ride-by-Wire with Eco & Performance Riding Modes'
    ],
    colors: [
      { name: 'Hanle Black with Gold Rims', hex: '#B45309' },
      { name: 'Kamet White', hex: '#E5E7EB' },
      { name: 'Kaza Brown', hex: '#78350F' },
      { name: 'Slate Poppy Blue', hex: '#0284C7' }
    ],
    pros: [
      'Superb suspension compliance over brutal terrain and potholes',
      'Industry-leading Google Maps full navigation on round TFT',
      'Accessible seat height with comfortable standing ergonomics'
    ],
    cons: [
      'Tubed spoke wheels on base variants (tubeless available on select exports/options)',
      'Engine has a slight buzz in upper RPM range'
    ]
  },
  {
    id: 'ktm-390-adventure',
    name: 'KTM 390 Adventure',
    brand: 'KTM',
    category: 'Adventure',
    priceUSD: 7399,
    priceINR: 338000,
    badge: 'Ready to Race',
    rating: 4.7,
    reviewsCount: 380,
    tagline: 'Lightweight rally DNA packed with cornering ABS, WP Apex suspension and quickshifter.',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80',
    description: `Inspired by KTM's legendary 19-time Dakar Rally victories, the KTM 390 Adventure is an agile, multi-tool motorcycle for riders who refuse to stop when the asphalt ends. Built around the punchy 373cc liquid-cooled single-cylinder powerhouse, it produces 43.5 horsepower with a lightweight trellis chassis derived from the Dakar 450 Rally bike.

It features adjustable WP APEX suspension (compression and rebound adjustable at the front fork, preload and rebound at the rear), lean-angle sensitive Motorcycle Traction Control (MTC), Cornering ABS with specialized Offroad ABS mode, and an optional Quickshifter+ for clutchless shifts.`,
    specs: {
      engine: '373.2cc Single Cylinder 4-Stroke Liquid-Cooled, DOHC 4-Valve',
      power: '43.5 PS @ 9,000 RPM',
      torque: '37 Nm @ 7,000 RPM',
      topSpeed: '165 km/h (102 mph)',
      acceleration: '0-100 km/h in 5.8s',
      mileage: '28-30 km/l (66-70 mpg)',
      fuelCapacity: '14.5 L (3.8 gal)',
      weight: '172 kg (379 lbs) Dry / 177 kg Kerb',
      seatHeight: '855 mm (33.6 in)',
      gearbox: '6-speed with PASC Slipper Clutch & Quickshifter+ option',
      brakes: 'ByBre 320mm front disc, 230mm rear disc, Bosch 9.1MP Cornering ABS'
    },
    features: [
      'WP APEX 43mm Inverted Forks with Rebound & Compression Damping',
      'Lean-Angle Sensitive Motorcycle Traction Control (MTC)',
      'Offroad ABS mode disengaging rear wheel ABS for slide control',
      'Full Color 5-inch TFT display with KTM MY RIDE navigation',
      'Sturdy steel trellis frame with removable subframe',
      'Tapered aluminum handlebars with handguards standard'
    ],
    colors: [
      { name: 'KTM Electronic Orange', hex: '#EA580C' },
      { name: 'Dark Galvano Black', hex: '#1F2937' }
    ],
    pros: [
      'Class-leading electronics suite including cornering ABS and traction control',
      'Fully adjustable WP Apex suspension setup on latest versions',
      'Very light and flickable on gravel fire roads and city traffic'
    ],
    cons: [
      'High 855mm seat height can intimidate beginner riders',
      'Engine prefers to be revved above 4,000 RPM to avoid stalling'
    ]
  },
  {
    id: 'royal-enfield-classic-350',
    name: 'Royal Enfield Classic 350',
    brand: 'Royal Enfield',
    category: 'Cruiser',
    priceUSD: 4599,
    priceINR: 193000,
    badge: 'Timeless Legend',
    rating: 4.8,
    reviewsCount: 1450,
    tagline: 'The timeless silhouette of British-Indian motorcycling heritage with ultra-smooth J-Platform.',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80',
    description: `The Royal Enfield Classic 350 is more than a motorcycle; it is an enduring cultural phenomenon. Reimagined with the modern J-series single-cylinder engine, it eliminates the harsh vibrations of older generations while preserving the cherished, rhythmic exhaust "thump" that has enchanted riders across generations.

Its teardrop fuel tank, hand-painted pinstripes, iconic casquette headlamp with tiger eyes, and sprung solo saddle evoke 1950s post-war British motorcycling. The new twin downtube spine chassis provides remarkable straight-line stability and composed cornering manners, making it a joy for relaxed weekend cruising.`,
    specs: {
      engine: '349cc Single Cylinder 4-Stroke Air-Oil Cooled, SOHC (J-Series)',
      power: '20.2 BHP @ 6,100 RPM',
      torque: '27 Nm @ 4,000 RPM',
      topSpeed: '115 km/h (71 mph)',
      acceleration: '0-100 km/h in 14.5s',
      mileage: '36-40 km/l (85-94 mpg)',
      fuelCapacity: '13.0 L (3.43 gal)',
      weight: '195 kg (430 lbs) Kerb',
      seatHeight: '805 mm (31.7 in)',
      gearbox: '5-speed constant mesh with wet multi-plate clutch',
      brakes: '300mm front disc, 270mm rear disc with Dual-Channel ABS'
    },
    features: [
      'Smooth J-Series Engine with Primary Balancer Shaft',
      'Authentic Vintage Teardrop Tank & Casquette Headlamp',
      'Optional Tripper Navigation Pod powered by Google',
      'Plush, thickly cushioned saddle with sprung rider seat design',
      'Dual Downtube Spine Frame engineered by Harris Performance',
      'Rotary style switchgear evoking vintage aircraft dials'
    ],
    colors: [
      { name: 'Halcyon Green', hex: '#166534' },
      { name: 'Chrome Red', hex: '#DC2626' },
      { name: 'Stealth Black', hex: '#18181B' },
      { name: 'Signals Marsh Grey', hex: '#6B7280' }
    ],
    pros: [
      'Silky smooth engine feel with zero annoying handlebar vibrations',
      'Timeless vintage aesthetic that turns heads everywhere',
      'Relaxed, upright ergonomics perfect for calm cruising'
    ],
    cons: [
      'Modest top speed of ~115 km/h not built for high-speed highway sprints',
      'Relatively heavy 195 kg weight for a 350cc motorcycle'
    ]
  },
  {
    id: 'harley-davidson-fat-boy-114',
    name: 'Harley-Davidson Fat Boy 114',
    brand: 'Harley-Davidson',
    category: 'Cruiser',
    priceUSD: 20199,
    priceINR: 2569000,
    badge: 'American Muscle',
    rating: 4.8,
    reviewsCount: 165,
    tagline: 'The original fat-custom icon with steamroller stance and Milwaukee-Eight 114 V-Twin power.',
    image: 'https://images.unsplash.com/photo-1558980664-3a031cf67ea8?auto=format&fit=crop&w=1000&q=80',
    description: `Ever since Arnold Schwarzenegger famously jumped it into the Los Angeles drainage canals in Terminator 2: Judgment Day, the Harley-Davidson Fat Boy has defined the aggressive, wide-shouldered custom cruiser archetype. The modern Fat Boy 114 elevates that legend with brilliant satin-chrome finishes and Lakester solid cast aluminum disc wheels.

Beneath the sculpted tank lies the muscular Milwaukee-Eight 114 V-Twin (1,868cc) churning out 155 Nm of tire-shredding torque at just 3,250 RPM. Wrapped with a massive 240mm rear tire and a 160mm front tire, it looks like a heavyweight prizefighter on two wheels while offering surprisingly agile handling thanks to the modern Softail chassis.`,
    specs: {
      engine: '1,868cc (114 cu in) Milwaukee-Eight 114 V-Twin, Pushrod 4-Valves/Cyl',
      power: '94 HP @ 5,020 RPM',
      torque: '155 Nm @ 3,250 RPM',
      topSpeed: '175 km/h (109 mph)',
      acceleration: '0-100 km/h in 4.3s',
      mileage: '18 km/l (42 mpg)',
      fuelCapacity: '18.9 L (5.0 gal)',
      weight: '317 kg (699 lbs) In Running Order',
      seatHeight: '675 mm (26.6 in)',
      gearbox: '6-speed Cruise Drive transmission, belt final drive',
      brakes: '4-piston fixed front caliper, 2-piston floating rear with ABS'
    },
    features: [
      'Milwaukee-Eight 114 V-Twin Engine with Iconic Exhaust Rumble',
      'Solid Cast Lakester Aluminum Disc Wheels (Front 160mm, Rear 240mm)',
      'Brilliant Satin Chrome Finishes across powertrain and nacelle',
      'Modern Softail Frame with hidden rear monoshock',
      'Signature LED Headlight with halo running lamp',
      'Ultra-Low 675mm Seat Height for confident flat-footing'
    ],
    colors: [
      { name: 'Vivid Black', hex: '#0A0A0A' },
      { name: 'Billiard Gray', hex: '#6B7280' },
      { name: 'Red Rock & Vivid Black', hex: '#991B1B' }
    ],
    pros: [
      'Massive curb appeal and unmatched presence on the road',
      'Tremendous low-end torque from the 1,868cc Milwaukee-Eight engine',
      'Ultra-low center of gravity and stable highway cruising'
    ],
    cons: [
      'Solid wheels can catch sudden highway crosswinds',
      'Floorboards scrape at moderate lean angles in sharp corners'
    ]
  },
  {
    id: 'triumph-bonneville-bobber',
    name: 'Triumph Bonneville Bobber',
    brand: 'Triumph',
    category: 'Cruiser',
    priceUSD: 14095,
    priceINR: 1225000,
    badge: 'Modern Classic',
    rating: 4.9,
    reviewsCount: 130,
    tagline: 'Stripped-down British elegance with authentic bobber lines and High Torque 1200cc twin.',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80',
    description: `The Triumph Bonneville Bobber is a masterclass in modern custom styling. Featuring a floating aluminum single seat pan, hardtail look with a hidden monoshock under the saddle, wide flat bars, and minimal bodywork, it captures the raw essence of American and British garage customs.

Beneath the classic finned exterior beats a modern 1,200cc liquid-cooled parallel-twin engine with dedicated Bobber tune, delivering 106 Nm of torque low in the rev range. Brembo front calipers, Showa 47mm cartridge forks, Road & Rain riding modes, and switchable traction control prove that classic aesthetics can coexist with modern engineering.`,
    specs: {
      engine: '1,200cc Liquid-Cooled 8-Valve SOHC 270° Crank Angle Parallel-Twin',
      power: '78 PS (76.9 HP) @ 6,100 RPM',
      torque: '106 Nm @ 4,000 RPM',
      topSpeed: '180 km/h (112 mph)',
      acceleration: '0-100 km/h in 3.9s',
      mileage: '21.7 km/l (51 mpg)',
      fuelCapacity: '12.0 L (3.2 gal)',
      weight: '251 kg (553 lbs) Wet',
      seatHeight: '690 mm (adjustable forward/back)',
      gearbox: '6-speed with Torque-Assist Slipper Clutch',
      brakes: 'Twin 310mm discs with Brembo 2-piston sliding calipers, ABS'
    },
    features: [
      'Innovative Adjustable Floating Aluminum Solo Seat',
      'Hidden Monoshock Rear Suspension for Authentic Hardtail Look',
      'High-Torque 1200cc Parallel Twin with 270° firing interval',
      'High-Spec Brembo Front Brakes & Showa 47mm Cartridge Forks',
      'Full LED Lighting with Signature DRL Headlight',
      'Cruise Control with single-button operation'
    ],
    colors: [
      { name: 'Jet Black', hex: '#000000' },
      { name: 'Cordovan Red', hex: '#7F1D1D' },
      { name: 'Matte Storm Grey / Matte Ironstone', hex: '#4B5563' }
    ],
    pros: [
      'Exquisite attention to detail, premium machining, and hidden wiring',
      'Gutsy, bass-heavy exhaust note straight from the twin slash-cut pipes',
      'Surprisingly nimble and planted handling for a bobber cruiser'
    ],
    cons: [
      'Strictly a single-seater (solo saddle only, no pillion setup without custom subframe)',
      '12-liter tank requires frequent fuel stops on long road trips'
    ]
  },
  {
    id: 'ktm-390-duke',
    name: 'KTM 390 Duke',
    brand: 'KTM',
    category: 'Naked',
    priceUSD: 6299,
    priceINR: 310000,
    badge: 'Corner Rocket',
    rating: 4.8,
    reviewsCount: 640,
    tagline: 'The sharpest naked hooligan on the street. Light, hyper-responsive, and unhinged.',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80',
    description: `Known affectionately worldwide as the "Corner Rocket," the KTM 390 Duke is the quintessential street fighter for carve-happy riders. Built around a redesigned 399cc LC4c engine producing 46 horsepower, the new generation delivers stronger low-end grunt, crisp throttle response, and a longer wheel travel chassis.

Equipped with 5-step adjustable WP APEX front forks and an offset rear monoshock mounted to an all-new curved die-cast aluminum swingarm, this naked bike flicks into apexes with zero hesitation. Track Mode includes Launch Control and lean-angle sensitive Cornering ABS with Supermoto mode.`,
    specs: {
      engine: '398.7cc Single-Cylinder 4-Stroke Liquid-Cooled, DOHC (LC4c)',
      power: '46 PS (45.3 HP) @ 8,500 RPM',
      torque: '39 Nm @ 6,500 RPM',
      topSpeed: '170 km/h (106 mph)',
      acceleration: '0-100 km/h in 5.4s',
      mileage: '28 km/l (66 mpg)',
      fuelCapacity: '15.0 L (3.96 gal)',
      weight: '168 kg (370 lbs) Dry / 173 kg Kerb',
      seatHeight: '800 mm or 820 mm (adjustable)',
      gearbox: '6-speed with PASC Slipper Clutch & Quickshifter+ dual-direction',
      brakes: '320mm front disc with radial 4-piston caliper, Cornering ABS'
    },
    features: [
      'Next-Gen 399cc LC4c High-Output Single-Cylinder Engine',
      'WP APEX 43mm Open Cartridge USD Forks with Compression & Rebound Adjustment',
      'Cornering ABS and Supermoto ABS mode (disables rear ABS for drifting)',
      'Launch Control for lightning-quick standing starts',
      '5-inch TFT Display with Dark Mode, Bluetooth & Turn-by-Turn Navigation',
      'Aggressive Predator LED Headlamp with integrated daytime running light'
    ],
    colors: [
      { name: 'Electronic Orange Metallic', hex: '#EA580C' },
      { name: 'Atlantic Blue', hex: '#1D4ED8' }
    ],
    pros: [
      'Incredible power-to-weight ratio makes it unmatched in twisties and traffic',
      'Adjustable suspension and launch control rarely found in this segment',
      'Supermoto ABS mode provides endless track and stunt fun'
    ],
    cons: [
      'Single-cylinder engine character is high-strung, not meant for laid-back cruising',
      'Wind blast at speeds above 120 km/h due to naked streetfighter design'
    ]
  },
  {
    id: 'yamaha-mt-09-sp',
    name: 'Yamaha MT-09 SP',
    brand: 'Yamaha',
    category: 'Naked',
    priceUSD: 12299,
    priceINR: 1180000,
    badge: 'Dark Side of Japan',
    rating: 4.9,
    reviewsCount: 220,
    tagline: 'The CP3 crossplane triple masterpiece with Öhlins rear shock and KYB forks.',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80',
    description: `The Yamaha MT-09 SP is the premium apex of Yamaha's acclaimed Hyper Naked lineage. At its core is the intoxicating 890cc CP3 crossplane inline 3-cylinder engine, renowned for its addictive intake howl, punchy bottom-end shove, and thrilling rev-happy demeanor.

The SP version upgrades handling to world-class standards with fully adjustable KYB front forks with DLC coating and an Öhlins remote-reservoir rear shock. An R1-derived 6-axis IMU governs Lean-Sensitive Traction Control, Slide Control, Front Wheel Lift Control, and Brake Control. Cruise control and Yamaha's Quick Shift System (QSS) round out a package that is equally thrilling on track or city streets.`,
    specs: {
      engine: '890cc Liquid-Cooled 4-Stroke DOHC 4-Valve Crossplane Inline-3 (CP3)',
      power: '119 PS (117.3 HP) @ 10,000 RPM',
      torque: '93 Nm @ 7,000 RPM',
      topSpeed: '245 km/h (152 mph)',
      acceleration: '0-100 km/h in 3.2s',
      mileage: '20 km/l (47 mpg)',
      fuelCapacity: '14.0 L (3.7 gal)',
      weight: '190 kg (419 lbs) Wet',
      seatHeight: '825 mm (32.5 in)',
      gearbox: '6-speed with Assist & Slipper clutch and 3rd-Gen Quickshifter',
      brakes: 'Dual 298mm discs with Brembo radial master cylinder & Advics calipers'
    },
    features: [
      '890cc CP3 Crossplane Triple with Unmistakable Exhaust Roar',
      'Öhlins Fully-Adjustable Rear Shock with Remote Preload Adjuster',
      'Premium DLC-Coated 41mm KYB Inverted Front Forks',
      'R1-Derived 6-Axis Inertial Measurement Unit (IMU)',
      '5-inch Full Color TFT with 4 selectable display themes',
      'Electronic Cruise Control and Smart Key ignition system'
    ],
    colors: [
      { name: 'Silver Blu Carbon (R1M Inspired)', hex: '#3B82F6' },
      { name: 'Tech Black', hex: '#111827' }
    ],
    pros: [
      'CP3 3-cylinder engine is widely considered one of the best road motorcycle engines ever built',
      'Öhlins and KYB suspension transforms mid-corner bump handling',
      'Upright and comfortable ergonomics for day-to-day thrills'
    ],
    cons: [
      'Polarizing robotic headlight styling',
      'Small 14-liter fuel tank limits long touring stints'
    ]
  },
  {
    id: 'honda-gold-wing-tour',
    name: 'Honda Gold Wing Tour DCT',
    brand: 'Honda',
    category: 'Touring',
    priceUSD: 29700,
    priceINR: 3990000,
    badge: 'Luxury Sovereign',
    rating: 4.9,
    reviewsCount: 115,
    tagline: 'The ultimate luxury touring motorcycle with horizontally-opposed 6-cylinder engine & airbag.',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80',
    description: `For over four decades, the Honda Gold Wing has reigned supreme as the gold standard of transcontinental two-wheeled luxury. Driven by a turbine-smooth 1,833cc horizontally-opposed 6-cylinder engine, it delivers endless low-rpm thrust with virtually zero vibration. 

Coupled to Honda's third-generation 7-speed Dual Clutch Transmission (DCT) with Walking Mode and reverse gear, low-speed parking lot maneuvers with 385 kg are effortless. The Gold Wing features Apple CarPlay and Android Auto on a 7-inch TFT, a 61-liter top trunk that holds two full-face modular helmets, electronically adjustable windshield, heated seats/grips, and the motorcycle industry's only factory production rider airbag.`,
    specs: {
      engine: '1,833cc Liquid-Cooled Horizontally-Opposed 6-Cylinder SOHC 24-Valve',
      power: '126 HP @ 5,500 RPM',
      torque: '170 Nm @ 4,500 RPM',
      topSpeed: '180 km/h (112 mph) Electronically Governed',
      acceleration: '0-100 km/h in 3.9s',
      mileage: '17.8 km/l (42 mpg)',
      fuelCapacity: '21.1 L (5.57 gal)',
      weight: '385 kg (848 lbs) Kerb',
      seatHeight: '745 mm (29.3 in)',
      gearbox: '7-speed Dual Clutch Transmission (DCT) with Reverse & Walking Mode',
      brakes: 'Dual 320mm front discs with 6-piston calipers, D-CBS with ABS'
    },
    features: [
      'Turbine-Smooth 1,833cc Flat-6 Engine',
      '7-Speed Dual Clutch Transmission (DCT) with Walking & Reverse Mode',
      'World-First Production Motorcycle Airbag Safety System',
      'Double Wishbone Front Suspension isolating handlebars from road shock',
      '7-inch Full-Color TFT with Apple CarPlay & Android Auto integration',
      'Heated Seats, Heated Grips, and Electronically Adjustable Windscreen'
    ],
    colors: [
      { name: 'Candy Ardent Red', hex: '#991B1B' },
      { name: 'Pearl Glare White', hex: '#F9FAFB' },
      { name: 'Gunmetal Black Metallic', hex: '#1F2937' }
    ],
    pros: [
      'Unsurpassed long-distance touring comfort for rider and passenger',
      'Double-wishbone front suspension glides over road imperfections like a magic carpet',
      'DCT transmission removes clutch fatigue entirely in bumper-to-bumper or mountain passes'
    ],
    cons: [
      'Massive curb weight makes it unsuited for narrow urban alleys',
      'Premium price point matches luxury automobiles'
    ]
  },
  {
    id: 'zero-srf',
    name: 'Zero SR/F Electric',
    brand: 'Zero',
    category: 'Electric',
    priceUSD: 20495,
    priceINR: 1950000,
    badge: '100% Torque Instant',
    rating: 4.7,
    reviewsCount: 92,
    tagline: 'Silent, ferocious electric streetfighter producing 190 Nm of instant torque.',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80',
    description: `The Zero SR/F redefines electric performance motorcycling. Stripping away the clutch, gearbox, heat, and oil maintenance of combustion motorcycles, it connects your wrist directly to the Z-Force 75-10 permanent magnet AC motor. The result is an explosive, uninterrupted 190 Nm of torque available from zero RPM.

Equipped with a 17.3 kWh Z-Force lithium-ion battery, the SR/F delivers up to 301 km (187 miles) of city range. Bosch Advanced Motorcycle Stability Control (MSC) coordinates with the Cypher III+ operating system to ensure stability under hard acceleration and regenerative braking. With 6 kW Rapid Charger options, it recharges from 20% to 80% in just 60 minutes.`,
    specs: {
      engine: 'Z-Force 75-10 Enhanced Thermal Efficiency Passive Air-Cooled AC Motor',
      power: '113 HP (84 kW) @ 5,000 RPM',
      torque: '190 Nm (140 ft-lb) Instant from 0 RPM',
      topSpeed: '200 km/h (124 mph)',
      acceleration: '0-100 km/h in 3.3s',
      mileage: '301 km City / 187 km Highway (187 / 116 miles)',
      fuelCapacity: '17.3 kWh Z-Force Li-Ion Intelligent Battery Pack',
      weight: '227 kg (500 lbs) Kerb',
      seatHeight: '787 mm (31.0 in)',
      gearbox: 'Clutchless Direct Drive with Carbon-Fiber Reinforced Belt',
      brakes: 'Dual 320mm discs, J.Juan 4-piston radial monobloc calipers, Bosch MSC'
    },
    features: [
      'Instant 190 Nm Electric Torque with No Clutch and No Shifting',
      '17.3 kWh Long-Range Z-Force Battery Pack',
      'Cypher III+ Operating System with Over-The-Air (OTA) Updates',
      'Bosch Motorcycle Stability Control (Cornering ABS & Traction Control)',
      'Adjustable Regenerative Braking levels via App and Switchgear',
      'Showa 43mm Big Piston Separate Function Forks (SFF-BP)'
    ],
    colors: [
      { name: 'Asphalt Black', hex: '#111827' },
      { name: 'Riviera Blue', hex: '#0284C7' }
    ],
    pros: [
      'Silent, stealth speed with instant, brutal passing power',
      'Near-zero routine maintenance (no engine oil, filters, spark plugs, or clutch plates)',
      'Very low running cost per mile compared to gasoline super-nakeds'
    ],
    cons: [
      'Highway range diminishes at sustained speeds above 110 km/h',
      'Requires access to Level 2 charging infrastructure for fast top-ups on road trips'
    ]
  },
  {
    id: 'ultraviolette-f77-mach2',
    name: 'Ultraviolette F77 Mach 2',
    brand: 'Ultraviolette',
    category: 'Electric',
    priceUSD: 4999,
    priceINR: 299000,
    badge: 'Aviation Spec',
    rating: 4.8,
    reviewsCount: 310,
    tagline: 'Futuristic electric fighter jet on wheels. 323 km IDC range and ballistic styling.',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80',
    description: `Designed and engineered with aerospace design philosophies, the Ultraviolette F77 Mach 2 is India's flagship electric sport motorcycle gaining worldwide recognition. Its aerodynamic fairing encloses a massive 10.3 kWh SRB7 lithium-ion battery pack with IP67 waterproofing and aviation-grade structural aluminum framing.

With 40.2 horsepower and 100 Nm of wheel-spinning torque, it bolts from 0-60 km/h in 2.8 seconds and tops out at 155 km/h. The Mach 2 introduces 10 levels of Dynamic Regenerative Braking, 4 levels of Traction Control, Delta Watch collision defense, and LTE-connected Violette A.I. telemetry.`,
    specs: {
      engine: 'Permanent Magnet Synchronous Motor (PMSM), Liquid-Cooled Controller',
      power: '40.2 HP (30 kW)',
      torque: '100 Nm Instant Torque',
      topSpeed: '155 km/h (96 mph)',
      acceleration: '0-100 km/h in 7.7s (0-60 in 2.8s)',
      mileage: '323 km IDC Certified Range',
      fuelCapacity: '10.3 kWh SRB7 Aluminum Cased Battery Pack',
      weight: '207 kg (456 lbs) Kerb',
      seatHeight: '800 mm (31.5 in)',
      gearbox: 'Direct Drive, Single Speed',
      brakes: '320mm Front Disc, 230mm Rear Disc with Bosch Dual-Channel ABS'
    },
    features: [
      'Aero-Derived Fighter Jet Bodywork with Hidden Front Fork Cowls',
      '10.3 kWh High-Density Lithium-Ion Battery Pack with 8-Year Warranty',
      '10-Level Dynamic Regenerative Braking System with Switchgear Controls',
      'Violette A.I. with 4G LTE Telemetry, Geo-fencing & Crash Alerts',
      '3 Ride Modes: Glide, Combat, and Ballistic',
      'Custom 5-inch TFT Dashboard with Flight-Style Interface'
    ],
    colors: [
      { name: 'Plasma Red', hex: '#DC2626' },
      { name: 'Aviation White / Shadow', hex: '#F3F4F6' },
      { name: 'Stealth Grey', hex: '#374151' },
      { name: 'Cosmic Black', hex: '#0F172A' }
    ],
    pros: [
      'Show-stopping futuristic appearance that looks like a concept bike in production',
      'Class-leading 323 km certified range on the Recon / Mach 2 variant',
      'Exceptional structural build quality and battery enclosure safety'
    ],
    cons: [
      'Firm sport suspension setup optimized for smooth tarmac rather than bad potholes',
      'Pillion comfort is limited due to minimalist aerodynamic tail'
    ]
  },
  {
    id: 'kawasaki-ninja-400',
    name: 'Kawasaki Ninja 400',
    brand: 'Kawasaki',
    category: 'SuperSport',
    priceUSD: 5699,
    priceINR: 524000,
    badge: 'Lightweight Screamer',
    rating: 4.8,
    reviewsCount: 420,
    tagline: 'The gold standard lightweight twin supersport. Featherweight agility meets 45 HP punch.',
    image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1000&q=80',
    description: `The Kawasaki Ninja 400 is the beloved hero of track-day enthusiasts, club racers, and street riders alike. Weighing in at only 168 kg wet, its lightweight steel trellis frame pairs with a lively 399cc parallel-twin engine producing 45 horsepower and 38 Nm of torque.

The Ninja 400 strikes an ideal balance between sport riding ergonomics and everyday street practicality. Its clip-on handlebars are mounted above the triple clamp, reducing wrist strain while retaining crisp turn-in responsiveness. An assist & slipper clutch reduces lever effort by 20% and prevents rear-wheel hop during aggressive downshifts.`,
    specs: {
      engine: '399cc Liquid-Cooled Parallel Twin 4-Stroke, DOHC 8-Valve',
      power: '45 PS (44.3 HP) @ 10,000 RPM',
      torque: '38 Nm @ 8,000 RPM',
      topSpeed: '188 km/h (117 mph)',
      acceleration: '0-100 km/h in 4.9s',
      mileage: '24-26 km/l (56-61 mpg)',
      fuelCapacity: '14.0 L (3.7 gal)',
      weight: '168 kg (370 lbs) Wet',
      seatHeight: '785 mm (30.9 in)',
      gearbox: '6-speed with Assist & Slipper Clutch',
      brakes: '310mm semi-floating petal front disc, Nissin calipers with ABS'
    },
    features: [
      'Smooth High-Revving 399cc Parallel-Twin Engine',
      'Lightweight Trellis Frame inspired by the Ninja H2',
      'Assist and Slipper Clutch for ultra-light lever pull',
      'Class-Leading 310mm Front Petal Brake Disc with Nissin ABS',
      'Low 785mm seat height accessible to riders of all statures',
      'Dual LED headlights and taillight with signature Ninja styling'
    ],
    colors: [
      { name: 'Lime Green / Ebony (KRT Edition)', hex: '#22C55E' },
      { name: 'Metallic Carbon Grey', hex: '#374151' }
    ],
    pros: [
      'Incredible lightweight agility makes it forgiving for beginners and lethal in twisties for pros',
      'Comfortable upright clip-ons make it usable as a daily commuter',
      'Smooth, predictable parallel twin power delivery'
    ],
    cons: [
      'Conventional right-side-up 41mm forks rather than USD forks',
      'Analog-digital gauge cluster feels dated compared to modern full TFTs'
    ]
  }
];
