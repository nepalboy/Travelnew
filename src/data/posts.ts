export interface GalleryItem {
    url: string;
    type: 'image' | 'video';
    caption?: string;
    location?: string;
    date?: string;
}

export interface Post {
    id: string;
    title: string;
    date: string;
    content: string;
    image: string;
    tags: string[];
    location: string;
    gallery?: (string | GalleryItem)[];
}

export const posts: Post[] = [
    {
        id: 'aconcagua-expedition-andes',
        title: "Trip to Aconcagua [22,841 ft].",
        date: 'Dec 25, 2025 - Jan 17, 2026',
        content: `
### The Giants of the Earth: Himalayas vs. Andes
Mountain ranges are the world's most dramatic storytellers, each with a unique personality forged over millions of years. Having grown up in the shadow of the **Himalayas**, I am accustomed to their soaring, jagged peaks and the deep, spiritual significance they hold. The Himalayas are the "young" giants—steep, vertical, and dominated by the world's highest 8,000-meter peaks. They are often characterized by lush green valleys that transition sharply into walls of ice and rock.

In contrast, the **Andes** of South America—where **Aconcagua** reigns supreme—offer a different kind of majesty. Spanning the entire length of the continent, the Andes are the longest continental mountain range in the world. They feel older, more expansive, and rugged in a way that is hauntingly beautiful. While the Himalayas are defined by their sheer verticality, the Andes often present vast, high-altitude plateaus and a landscape that is arid and colorful, shifting from dusty ochres to brilliant snowy whites. Exploring the Andes is like stepping into a different chapter of Earth's history—one where the scale is just as grand, but the rhythm is entirely its own.

Argentina is a land of dramatic contrasts, from the vibrant tango halls of Buenos Aires to the rugged, windswept wilderness of Patagonia. However, for a mountaineer, the ultimate pilgrimage leads to the Central Andes, home to **Mt. Aconcagua**. Standing at 6,962 meters (22,841 feet), it is the highest peak in the Western Hemisphere and the second highest of the Seven Summits.

Our journey began in **Mendoza [2,493 ft]**, the undisputed wine capital of Argentina. Nestled in a high-altitude desert oasis, Mendoza is a city defined by its ingenious irrigation system—a network of open canals (acequias) that channel Andean meltwater. Life here follows the rhythm of the mountains: a midday siesta to escape the heat, followed by late-night dinners where a glass of world-class Malbec is almost mandatory.

![Mendoza Streets](/Travelnew/images/journal/journal_218456cddb4390389cfd75cb2dd9c567.jpeg)
![Mendoza Trees](/Travelnew/images/journal/journal_4041784bb75344ab221f3b79925d40ef.jpeg)

### The Vacas Valley Challenge: Grit and Determination
Climbing Aconcagua via the Vacas Valley is a serious undertaking that requires excellent physical conditioning and mental grit. While the route is non-technical, the extreme altitude (summit oxygen is only 40% of sea level) and the fierce **Viento Blanco** (White Wind) make for a low success rate of only **30-40%**. It is a grueling test of endurance, far more demanding than peaks like Kilimanjaro.

---

### December 25-28 - Departure & Arrival in Mendoza [2,493 ft]
The journey began with a transit through Houston and Santiago before finally arriving in Mendoza. We spent our first days in the city checking gear, securing permits ($730 cash!), and soaking in the lush greenery and massive old trees of the city.

![Dining in Houston](/Travelnew/images/journal/journal_1ea9ee2fd1fe5a47aee212fed8301d0b.jpeg)
![Andes View from Plane](/Travelnew/images/journal/journal_103155bb06ef8f0be66db11add038c6a.jpeg)

---

### December 29 - Mendoza to Los Penitentes [8,940 ft]
We left the comfort of the hotel for the mountains. After a briefing and final permit checks, we drove toward Penitentes. We prepared our duffel bags for the mules—the high-altitude porters of the Andes—and spent the night in a dormitory, the last real beds we'd see for weeks.

![Expedition Gear](/Travelnew/images/journal/journal_3f146fbb363fa3c7b80c8d776ec41bb7.jpeg)

---

### December 30 - Trek to Pampa de Leñas [9,186 ft]
The expedition officially moved into Aconcagua Provincial Park. We trekked for about 6 hours (7.9 miles) along the Vacas river to our first camp, Pampa de Leñas. Setting up our own tents for the first time, we began the slow process of acclimatization.

![Base in Penitentes](/Travelnew/images/journal/journal_2e8f7bde477ab403b1d20d9cb586c46c.jpeg)
![Trail Paperwork](/Travelnew/images/journal/journal_2a2ebd88be0400696f125c3fbc97dbf0.jpeg)
![Wildflowers](/Travelnew/images/journal/journal_e4aba7f0ea2e8345a117152abb94d2bc.jpeg)

---

### December 31 - The Walk to Casa de Piedra [10,662 ft]
A beautiful but long hike followed the river deeper into the valley. This day offered our first dramatic view of Aconcagua's massive peak from the Vacas side. We spent New Year's Eve in the shadow of the stone sentinel, celebrating with a quiet dinner at 10,662 feet.

![River Trail](/Travelnew/images/journal/journal_395375bb2a91a5cf0e14de387882083c.jpeg)
![Valley Slopes](/Travelnew/images/journal/journal_10f7b9698a8a469a3aaf959be32d9da5.jpeg)
![Aconcagua Reveal](/Travelnew/images/journal/journal_c31be75031e1e2865a942cd729742da9.jpeg)

---

### January 1-4 - Reaching Plaza Argentina Base Camp [13,780 ft]
To reach Plaza Argentina, we had to cross a freezing cold glacial river—a sharp wake-up call for our feet! We settled into the base camp for four nights. These days were a mix of recovery, health checks with the Base Camp Doctor, and "load carries" to Camp 1 to help our bodies adjust to the thin air.

![The Big Valley](/Travelnew/images/journal/journal_2893e3b080bd9ecdf70af1b55d6bad15.jpeg)
![Plaza Argentina](/Travelnew/images/journal/journal_3a50b6fa6f1a5295c8f805576d83b371.jpeg)
![Glacial Stream](/Travelnew/images/journal/journal_3d400931c2b005b707a2c5dc4f236968.jpeg)
![Ice Formations](/Travelnew/images/journal/journal_5be8ce507305fd1d72303231eaf62e9e.jpeg)

---

### January 5-9 - The High Camps: From Camp 1 to Camp 2 [18,044 ft]
We moved higher to Camp 1 (16,240 ft) and then to Camp 2, known as Upper Guanacos (18,044 ft). The weather turned fierce, bringing a snowstorm that dumped two feet of powder. At -20°C, survival depends on gear and spirit. We used the downtime for intensive crampon training, learning to move safely on the fresh ice.

![Snowstorm Camp](/Travelnew/images/journal/journal_760a2d883e768e2c87cb0f4c0f34c775.jpeg)
![Andes Panorama](/Travelnew/images/journal/journal_8c91bab98ecb0d8f4c9705541cfb608c.jpeg)
![White World](/Travelnew/images/journal/journal_affbccc7fad58fb5d75a13fd64fbc043.jpeg)
![Crampon Training](/Travelnew/images/journal/journal_2309e784bf92d8c42e9ebdf9d49f0565.jpeg)

---

### January 10-11 - Cólera Camp & The Summit Push [Up to 22,841 ft]
We reached Camp 3, Cólera (19,685 ft), perched on the Normal Route. The summit push began at 3:00 AM under a surreal canopy of stars. We pushed through extreme cold and thin air, reaching the "Cave" before the final ascent through the Canaleta. However, safety is the priority. At just 500 meters from the top, poor conditions forced us to descend. The mountain had spoken.

![Summit Slopes](/Travelnew/images/journal/journal_380bf46d246383d5afad7faed29638ae.jpeg)
![Turning Back](/Travelnew/images/journal/journal_47f107d9df505ae28ae68ca2659848ba.jpeg)
![High View](/Travelnew/images/journal/journal_52db77b2148c14e855f2246b33eec686.jpeg)
![Descent to Safety](/Travelnew/images/journal/journal_989bdc5eb0299088495bae02e0ec8993.jpeg)

---

### January 12-16 - Descent to Plaza de Mulas and Return [14,402 ft]
We descended the Normal Route to Plaza de Mulas Base Camp for a well-earned shower and celebration. A final 25km hike through Horcones brought us back to civilization. Leaving Mendoza and South America, I felt immense gratitude. The summit remains for another day, but the journey was a triumph in itself.

![Farewell Mendoza](/Travelnew/images/journal/journal_463f6906d5bbfb4b15e9100f59058eaf.jpeg)
![Santiago Transit](/Travelnew/images/journal/journal_7cdac55b07f2313d328c126a601faa21.jpeg)
![Home Soil](/Travelnew/images/journal/journal_44315d3d472b41cf481ed204f74d1d4e.jpeg)
`,
        image: '/Travelnew/images/journal/journal_52db77b2148c14e855f2246b33eec686.jpeg',
        tags: ["Aconcagua", "Andes", "Expedition", "Trekking"],
        location: 'Aconcagua, Argentina',
        gallery: [
            { url: "/Travelnew/images/gallery/gallery_04308252_5157_4ee8_adb2_6f9ceb8a3c01.jpg", type: "image", location: "Aconcagua Expedition", caption: "Expedition Readiness - Aconcagua" },
            { url: "/Travelnew/images/gallery/gallery_0571dc5f_b78a_4534_942b_5af2731bf331.jpg", type: "image", location: "Aconcagua Expedition", caption: "Stunning Andes Landscape" },
            { url: "/Travelnew/images/gallery/gallery_05e14e00_50aa_49cd_9005_3d7c333dc5a2.jpg", type: "image", location: "Aconcagua Expedition", caption: "Vivid Mountain Colors" },
            { url: "/Travelnew/images/gallery/gallery_07af79ca_3784_401a_8bde_9ed8a8fff009.jpg", type: "image", location: "Aconcagua Expedition", caption: "High Altitude Wilderness" },
            { url: "/Travelnew/images/gallery/gallery_0a6dc9a6_425b_4ac1_aa38_47d55283fcf9.mp4", type: "video", location: "Aconcagua Expedition", caption: "Mountain Atmosphere" },
            { url: "/Travelnew/images/gallery/gallery_0db21334_a1e1_4d0b_b348_af1ef2b3d7d0.jpg", type: "image", location: "Aconcagua Expedition", caption: "Trek Details" },
            { url: "/Travelnew/images/gallery/gallery_175ebdc5_de4a_493f_9336_99cf770499b6.jpg", type: "image", location: "Aconcagua Expedition", caption: "Andean Sky" },
            { url: "/Travelnew/images/gallery/gallery_1767296744549512.jpg", type: "image", location: "Aconcagua Expedition", caption: "On the Trail" },
            { url: "/Travelnew/images/gallery/gallery_1768431597214184.jpg", type: "image", location: "Aconcagua Expedition", caption: "Expedition Moment" },
            { url: "/Travelnew/images/gallery/gallery_1768433774367452.jpg", type: "image", location: "Aconcagua Expedition", caption: "Trail Perspective" },
            { url: "/Travelnew/images/gallery/gallery_1a755b66_73d2_4c20_b8d0_6468e47d06d0.mp4", type: "video", location: "Aconcagua Expedition", caption: "Moving Through the Andes" },
            { url: "/Travelnew/images/gallery/gallery_1f23deb7_21fb_4e47_ba79_7084f6b4c125.jpg", type: "image", location: "Aconcagua Expedition", caption: "High Elevation Serenity" },
            { url: "/Travelnew/images/gallery/gallery_1f7b9edc_eb5f_496d_969b_7630bff4d1b8.jpg", type: "image", location: "Aconcagua Expedition", caption: "Mountain Textures" },
            { url: "/Travelnew/images/gallery/gallery_238f4c1c_ef97_437f_ac35_cea335eb6a53.jpg", type: "image", location: "Aconcagua Expedition", caption: "Rugged Terrain" },
            { url: "/Travelnew/images/gallery/gallery_269daef7_a4b7_4444_a18c_225154328ab7.jpg", type: "image", location: "Aconcagua Expedition", caption: "Expedition Details" },
            { url: "/Travelnew/images/gallery/gallery_2987074b_3272_4209_a3e8_c7d27859084e.jpg", type: "image", location: "Aconcagua Expedition", caption: "Vast Horizons" },
            { url: "/Travelnew/images/gallery/gallery_2ca0a796_6d88_4843_a64a_f3acf356fd0d.jpg", type: "image", location: "Aconcagua Expedition", caption: "Trail Side" },
            { url: "/Travelnew/images/gallery/gallery_30c904b3_d394_4b0c_a899_adde6dd9a47d.jpg", type: "image", location: "Aconcagua Expedition", caption: "Camp Life" },
            { url: "/Travelnew/images/gallery/gallery_3199d1e5_91c4_4cc5_ac31_0405029a7e5e.mp4", type: "video", location: "Aconcagua Expedition", caption: "Life at Altitude" },
            { url: "/Travelnew/images/gallery/gallery_32bfe984_6bb4_483d_8d71_eaed04296870.jpg", type: "image", location: "Aconcagua Expedition", caption: "Summit Bound" },
            { url: "/Travelnew/images/gallery/gallery_34c86146_9cb9_429d_a088_c5bebdd676c6.jpg", type: "image", location: "Aconcagua Expedition", caption: "Mountain Majesty" },
            { url: "/Travelnew/images/gallery/gallery_40427dca_f9a4_42e9_9cd5_73bd62ededdf.jpg", type: "image", location: "Aconcagua Expedition", caption: "Ice and Rock" },
            { url: "/Travelnew/images/gallery/gallery_40e64c8f_5539_4912_9c58_8ef2240f0e6b.jpg", type: "image", location: "Aconcagua Expedition", caption: "High Camp Perspective" },
            { url: "/Travelnew/images/gallery/gallery_41b537a1_aa9f_4c3a_818b_ea0d19e50c19.jpg", type: "image", location: "Aconcagua Expedition", caption: "Trail Reflections" },
            { url: "/Travelnew/images/gallery/gallery_41edddaa_05a8_4b23_a9ca_048ffa7395a6.jpg", type: "image", location: "Aconcagua Expedition", caption: "Morning Light" },
            { url: "/Travelnew/images/gallery/gallery_48b2538f_991e_4991_821e_ef36ccb09f65.jpg", type: "image", location: "Aconcagua Expedition", caption: "Summit Slopes" },
            { url: "/Travelnew/images/gallery/gallery_4fdfcf5e_18df_4385_9a72_74e0098af18a.mp4", type: "video", location: "Aconcagua Expedition", caption: "Summit Ambience" },
            { url: "/Travelnew/images/gallery/gallery_51b001ed_9fdf_4f2e_b428_bdaa1a024f2f.jpg", type: "image", location: "Aconcagua Expedition", caption: "Extreme Weather" },
            { url: "/Travelnew/images/gallery/gallery_545fa8d4_34ce_4de4_986f_26d7b018ca0e.jpg", type: "image", location: "Aconcagua Expedition", caption: "High Altitude Camp" },
            { url: "/Travelnew/images/gallery/gallery_555c1cb2_cdb6_41ab_8985_8b38656bc25c.jpg", type: "image", location: "Aconcagua Expedition", caption: "Expedition Gear" },
            { url: "/Travelnew/images/gallery/gallery_5fa08d68_a1a1_4b53_9fd8_5c8ded5d93a4.jpg", type: "image", location: "Aconcagua Expedition", caption: "White World" },
            { url: "/Travelnew/images/gallery/gallery_6421197b_e574_4b4a_8328_c4779d540e73.jpg", type: "image", location: "Aconcagua Expedition", caption: "Andean Glaciers" },
            { url: "/Travelnew/images/gallery/gallery_67ace38d_6c0e_422b_a435_fab5ae75788b.jpg", type: "image", location: "Aconcagua Expedition", caption: "Scaling the Stone Sentinel" },
            { url: "/Travelnew/images/gallery/gallery_697f22dc_5576_4365_900f_f7de874a000c.jpg", type: "image", location: "Aconcagua Expedition", caption: "Ridge Views" },
            { url: "/Travelnew/images/gallery/gallery_6ff33f3a_5d0d_45ae_8a25_2027b00f7b42.mp4", type: "video", location: "Aconcagua Expedition", caption: "Summit Push Memories" },
            { url: "/Travelnew/images/gallery/gallery_71e01745_dd3c_4797_807f_6041531205e7.jpg", type: "image", location: "Aconcagua Expedition", caption: "Evening Glow" },
            { url: "/Travelnew/images/gallery/gallery_7363ecdf_b550_4fd0_8c08_72bae4407262.jpg", type: "image", location: "Aconcagua Expedition", caption: "Expedition Persistence" },
            { url: "/Travelnew/images/gallery/gallery_745c536d_c841_42b6_ac09_a4ac4e3d1def.jpg", type: "image", location: "Aconcagua Expedition", caption: "Trail Markings" },
            { url: "/Travelnew/images/gallery/gallery_74a45683_d4f5_4270_9b3e_601545a5a7e7.jpg", type: "image", location: "Aconcagua Expedition", caption: "Base Camp Morning" },
            { url: "/Travelnew/images/gallery/gallery_77aa915b_48c3_41e5_ac25_819305749c25.jpg", type: "image", location: "Aconcagua Expedition", caption: "High Sky" },
            { url: "/Travelnew/images/gallery/gallery_80cf3288_8ecd_4fdf_85b4_f93b722752a1.jpg", type: "image", location: "Aconcagua Expedition", caption: "Climbers Path" },
            { url: "/Travelnew/images/gallery/gallery_825f7e80_6b4f_4142_8c2c_a8d4a3d7dd6a.jpg", type: "image", location: "Aconcagua Expedition", caption: "The Canaleta" },
            { url: "/Travelnew/images/gallery/gallery_886bdd65_adf4_45ce_adf9_2f05056314ba.mp4", type: "video", location: "Aconcagua Expedition", caption: "Mountain Spirits" },
            { url: "/Travelnew/images/gallery/gallery_898aaa58_4896_400f_a561_afdcfd0e7344.jpg", type: "image", location: "Aconcagua Expedition", caption: "Return Journey" },
            { url: "/Travelnew/images/gallery/gallery_8c48cf86_e56d_467a_a501_244f5150c694.jpg", type: "image", location: "Aconcagua Expedition", caption: "Farewell Aconcagua" },
            { url: "/Travelnew/images/gallery/gallery_f4b32ac7_7b6d_49ff_b9e6_21a8c12be8b1.mp4", type: "video", location: "Aconcagua Expedition", caption: "Vacas Valley Wind" },
            { url: "/Travelnew/images/gallery/gallery_img_4609.mov", type: "video", location: "Aconcagua Expedition", caption: "Base Camp 2 (Polar)" },
            { url: "/Travelnew/images/gallery/gallery_img_4936.mov", type: "video", location: "Aconcagua Expedition", caption: "Cólera Camp Views" },
            { url: "/Travelnew/images/gallery/gallery_img_4938.mov", type: "video", location: "Aconcagua Expedition", caption: "Summit Morning" }
        ]
    },
    {
        id: 'shakira-concert-san-diego',
        title: 'Shakira Shakes Snapdragon: An Unforgettable Night in San Diego!',
        date: 'June 27, 2025',
        content: `Leaving Rancho Penasquitos at 7:30 PM, it was a long-awaited moment. I was counting the day. It's been a while since I bought a ticket. Shakira for me is an icon of humanity, a divine success, an empathy, a sport, human civilization and a unity in the polarized world. It's more than dance and songs!
Every second counts as you fall down and you feel like you are in the phantom of space where nothing really exist and your mind doesn't have time to think anything else...`,
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCfwyTWz2IZiQrTsI8ZXmOcaLy1qxnxRpX1yYaMqI9HWRLvowlhITBhOw93zYPTNcmMYoC1g3Yt_hcukq7LqDfixrUzgt4Ht-Qm6ORej6Lrj8e2UCRPHU-wz60kI5cKshn_zgic9u3dzF1h1wae1yq3FCllF5y7ZcZQbWnbdggxv0c7xuigqyORw/w300-h400/IMG_3280.JPEG',
        tags: ['Concert', 'Music', 'San Diego'],
        location: 'San Diego, CA'
    },
    {
        id: 'hiking-kilimanjaro',
        title: 'Hiking Kilimanjaro, the roof of Africa',
        date: 'May 18, 2025',
        content: `“Jambo Jambo Bwana Habari Gani Nzuri Sana Wageni MwakariBishwa Kilimanjaro” - Kilimanjaro song
"Oh, the sheer variety of Kilimanjaro's terrain! It's like stepping through different worlds on a single mountain...`,
        image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcOdgrNratZDgXqn6MfCsMopcCNVsJOISnfijo7MV1IMK6OFXACj32egHGEjj9xZbeKN0soMPUliFG9n47Q733WHO-55ARytS0rJ7HiHwyo50QkUXVrVanNl90Uxp81FyG8KK3LbA?key=RG9KWpZ8wPjWWIcXoGdZIEc4',
        tags: ['Hiking', 'Adventure', 'Africa'],
        location: 'Tanzania'
    },
    {
        id: 'hiking-mt-whitney',
        title: 'Hiking Mt. Whitney 2024',
        date: 'December 14, 2024',
        content: `Sep 11, 2024 Onion Valley Camp Ground (9600 ft) - Day 01
Today marks the beginning of our adventure...`,
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgv4IzpVjl0RlQ0Qp4xwquMoz7jLrokwOW02O1GILIVQsQWeutgGMwU4htUvyDo7f6dFaYcvTZ0JJlVEeeRA40aMSRgCDwwiV7OknUR5rLbb_nb2jTlTtsa_kWUdeo0Nwlqo25jBcoWyU_evy_5UyR2tDeR0S1dbhxb1yJCAr8vbXtoIUH-vkYdwQ/w640-h480/IMG_1312.HEIC',
        tags: ['Hiking', 'California', 'USA'],
        location: 'California, USA'
    },
    {
        id: 'skydiving-san-diego',
        title: "Sky Diving in San Diego, California",
        date: 'December 26, 2021',
        content: `
### Taking the Leap: My Skydiving Adventure

It was the decision that I took at the end of the year, December of 2021. I had always wanted skydiving after seeing cool Hollywood television series growing up in Nepal. I searched Google, did some basic research on safety, and figured out that it's 0.003 casualties per 1000 jumps—safer than a car crash or many other daily activities.

I bought a package for $393 at a place in Jamul, CA. The cost of the video and photos was literally equal to the cost of the jump itself, but for a lifetime experience, I was determined.

#### The Experience
The most nerve-wracking part wasn't the jump itself, but signing the hundreds of pages of liability waivers. "We don’t cover this, we are not liable for this"—that part was more scary than jumping from 13,000 feet!

Met my instructor, Chris, a middle-aged veteran. When I told him I served in the Nepalese Army for 9 years, the bond became even closer. 

#### The Freefall
The first 15 seconds were incredibly fast. Every second counts as you fall—you feel like you're in a "phantom of space" where nothing else exists. It was like being in the *real* metaverse, not a digital fantasy, but a raw, physical experience of existence.

![Skydiving View](https://images.unsplash.com/photo-1521312905814-710f63841987?q=80&w=2070&auto=format&fit=crop)
`,
        image: 'https://images.unsplash.com/photo-1521312905814-710f63841987?q=80&w=2070&auto=format&fit=crop',
        tags: ["Skydiving", "Adventure", "California", "San Diego"],
        location: 'Jamul, San Diego, CA'
    },
    {
        id: 'paragliding-pokhara',
        title: "Paragliding in Pokhara: Soaring Over the Himalayas",
        date: 'May 29, 2017',
        content: `
### Dancing with the Clouds in Pokhara

Pokhara is arguably the best place in the world for paragliding, and for good reason. Nestled at the foot of the Annapurna range, it offers stable thermals and views that are simply unparalleled.

#### The Take-off from Sarangkot
Our journey started with a drive up to Sarangkot. As we stood at the take-off point, the entire Annapurna massif was laid out before us—Machhapuchhre (Fishtail), Annapurna South, and Hiunchuli.

#### Soaring High
Once in the air, the silence is what hits you first. You're no longer a spectator of the landscape; you're a part of it. Below us, the emerald waters of Phewa Lake shimmered in the sun, and the city of Pokhara looked like a miniature model.

The experience of soaring alongside hawks and eagles, with the white peaks of the Himalayas as your backdrop, is something that stays with you forever. It's the ultimate way to experience the cultural and natural diversity of Nepal from a completely different perspective.

![Paragliding Pokhara](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRU9Nf-vGysb3GPtagMYdmBRQnzwshOXwAGxYKQvN30BxbT9_ph6tXUwYC-TizEAwjVozgEZ4xOt5dXOs7c_1tniZa-R7FvO_59H9hp8dZ3ARfiiGtx9cdqI7cXwYSbgYUUJbI/s640/G0040132.JPG)
`,
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRU9Nf-vGysb3GPtagMYdmBRQnzwshOXwAGxYKQvN30BxbT9_ph6tXUwYC-TizEAwjVozgEZ4xOt5dXOs7c_1tniZa-R7FvO_59H9hp8dZ3ARfiiGtx9cdqI7cXwYSbgYUUJbI/s640/G0040132.JPG',
        tags: ["Paragliding", "Adventure", "Nepal", "Himalayas", "Pokhara"],
        location: 'Pokhara, Nepal'
    },
    {
        id: 'traveling-in-himalayas',
        title: 'Traveling in Himalayas : Experiencing cultural and natural diversity of Nepal',
        date: 'May 29, 2017',
        content: `The trail looks truly natural and aesthetically pleasant...`,
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRU9Nf-vGysb3GPtagMYdmBRQnzwshOXwAGxYKQvN30BxbT9_ph6tXUwYC-TizEAwjVozgEZ4xOt5dXOs7c_1tniZa-R7FvO_59H9hp8dZ3ARfiiGtx9cdqI7cXwYSbgYUUJbI/s640/G0040132.JPG',
        tags: ['Travel', 'Nepal', 'Himalayas'],
        location: 'Nepal'
    },
    {
        id: 'life-in-nanjing',
        title: 'Life in Nanjing, China for a Month',
        date: 'October 06, 2006',
        content: `It was a beautiful evening in the month of June 2006, when I was nominated for a 10-month professional computing course in China...`,
        image: 'https://photos1.blogger.com/blogger/4585/3941/200/IMGP0124.jpg',
        tags: ['Travel', 'China', 'Culture'],
        location: 'Nanjing, China'
    }
];
