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

The air, still carrying the faint chill of a receding night, hummed with anticipation as the clock nudged 7:30 PM. Leaving the familiar, tree-lined streets of Rancho Peñasquitos, it wasn't just another Friday evening to commute south. This was a moment long awaited, a threshold we were finally crossing, promising an adventure that stretched beyond the horizon and into the wild embrace of the unknown of euphoria.

Attending so many games and events in Snapdragon stadium, I knew about the traffic of San Diego, driving south in 163 and taking the exit of east friars road. Never ever use the 15, if you are going to the Snapdragon for events. I've been to Snapdragon Stadium a lot, I know the San Diego traffic pretty well, You should definitely avoid I-15 when going to events at Snapdragon Stadium.

Wow. Just, wow. My ears are still ringing (in the best way possible!) and I'm still buzzing from the incredible Shakira concert last night at Snapdragon Stadium in San Diego. What a show!

Shakira truly brought her A-game for the "Las Mujeres Ya No Lloran" World Tour. The energy in the stadium was absolutely electric from the moment she stepped on stage. I mean, from the first beat, everyone was on their feet, singing along to every word and dancing. The beautiful steps of the Latin dance and song reverberate not only with Latin fans but equally with me although I don’t understand the Beauty of Spanish languages.

The stage production was phenomenal in three contexts - the voice of Shakira, the dance and the stage environments. The environment and stage are the juxtaposition of light, sounds, 3D animation and display. I certainly believe that AI has been used, her voice was just as powerful and captivating live as it is on her albums. And those hips? They definitely don't lie! It was amazing to see her iconic moves in person. I learned how to shake the hips!

We were in Section A1, Row 27, Seat 24 (and Row 28, Seat 24), and the view was fantastic. When she started in the beginning, Shakira was merely 10 ft away from me. Being able to experience that kind of proximity with thousands of other fans was truly something special.

And then started……... .Waka Waka and San Diego FC in the top of the MLS western conference was a blast for me and the fans. And whenever wherever……the fun continues, and you sweat like hell, but you never stop.

Many of the dance moves are rooted deep into the Latin dances and it was so good to experience that. However, some of the bits were very identical to the one done by Nepathya - Nepali legend band and also something related to the local music of Kathmandu valley and Shiva’s Tandav dance. It might be a coincidence, but I feel the mix of all eastern and western music and dances.

If you ever get the chance to see Shakira live, do it! You won't regret it. What a night to remember! I will definitely go again if she is back.`,
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCfwyTWz2IZiQrTsI8ZXmOcaLy1qxnxRpX1yYaMqI9HWRLvowlhITBhOw93zYPTNcmMYoC1g3Yt_hcukq7LqDfixrUzgt4Ht-Qm6ORej6Lrj8e2UCRPHU-wz60kI5cKshn_zgic9u3dzF1h1wae1yq3FCllF5y7ZcZQbWnbdggxv0c7xuigqyORw/w300-h400/IMG_3280.JPEG',
        tags: ['Concert', 'Music', 'San Diego'],
        location: 'San Diego, CA'
    },
{
        id: 'hiking-kilimanjaro',
        title: 'Hiking Kilimanjaro, the roof of Africa',
        date: 'May 18, 2025',
        content: `“Jambo Jambo Bwana Habari Gani Nzuri Sana Wageni MwakariBishwa Kilimanjaro” - Kilimanjaro song

"Oh, the sheer variety of Kilimanjaro's terrain! It's like stepping through different worlds on a single mountain. You begin in the warmth of an equatorial setting at the base, where life bustles, but as you climb, the journey takes you into a completely different realm – the stark, icy conditions of an Arctic summit. Imagine that! Five distinct zones greet you: the welcoming Lower Slopes, lush and vibrant; the misty, mysterious Rainforest, where the air is thick with humidity; the Moorland, with its dramatic shift from sun-baked days to chilling nights; the rugged Alpine Forest, all rock and scree; and then, the final, awe-inspiring Arctic zone, where the cold bites deep and the wind whispers secrets of the summit. It's a truly remarkable place where nature shows off its incredible diversity.

My own adventure began with a series of long flights. Leaving sunny San Diego for a quick hop to Minneapolis, I was then off on an overnight journey to Amsterdam’s Schiphol Airport. Finally, another long haul took me to Kilimanjaro, Tanzania.

After lunch, it was about four hour drive from Arusha that took us to the Lemosho Gate (7,550 ft / 2,300m), located on the western side of Kilimanjaro. We registered at the gate and entered Kilimanjaro Park, beginning one of the least trodden routes compared to the "standard" lines of ascent.

In approximately three hours, we reached camp in the forest at Mti Mkubwa, otherwise known as Big Tree Camp, at 9,186 ft / 2,800m. That first night on the mountain was something else! I could hear the roars of beautiful black and white monkeys echoing through the night. It felt like I was truly immersed in the wild.

The Crater rim has been massively eroded over time by weather and volcanic action. Today we'll get our first close views of Kibo - the central volcanic cone and literally "the Roof of Africa". The walk was approximately 6 hours before reaching the camp at 11,480 ft / 3,500m.

I remember just staring, completely mesmerized, realizing that this wasn't just another mountain; it was something truly special. It looks pretty flat on the top. I can see some snow on the top. After breakfast, we continue to hike east across the Shira Plateau past the Shira Cathedral (12,470 ft / 3,880 m), towards Shira Two Camp.

Day 5 took us from Shira Two Camp to Baranco Camp (12,795 ft / 3,900 m). We reached the Lava Tower, way up at over 15,000 feet. Then came the slow descent to Baranco, surrounded by an incredible landscape where the southern ice fields started to become clearer and clearer.

Day 6: Baranco Camp to Karanga Camp (13,300 feet / 4,050m). Our first challenge was the infamous Baranco Wall, 984 ft / 300m high. It looked terrifying but the trail wound its way up nicely.

Day 7: Karanga Camp to Kosovo Camp (16,010 feet / 4,880m). We headed steadily upward to the high camp of Kosovo. The air is noticeably thin now. We woke at approximately 11:30 PM for the summit.

Day 8: Kosovo Camp to Uhuru Peak (19,340 feet / 5,896m). With head-torches for several hours until the sun rose, we aimed to reach Stella Point. From Stella Point, we continued for approximately one hour more until we reached Uhuru Peak, the summit of Kilimanjaro! We reached the top at 8:53 in the morning.

That last morning was bittersweet. Saying 'kwaheri' – goodbye – to the porters was emotional. The hike down to Mweka Gate took about four hours. I met some truly incredible people from Brazil, the US, New Zealand... and of course our amazing team of fifty from Tanzania. Thank you, everyone!`,
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
        id: 'hiking-to-everest-base-camp',
        title: 'Hiking to Everest Base Camp',
        date: 'December 31, 2023',
        content: `When I decided to go to the Everest base camp in early 2023,
It was full of excitement and a euphoria. Although, born and raised in Nepal, with the country of majestic Himalayas including Mt. Everest, I have never been to
the northern part of the country where mountain rules the human’s imagination, where passion meets the euphoria and nature shows the complexities, human has never imagined. Himalayas were calling me far from away this time and I was ready for the caravan.

April 01, 2023. We started the trip. It was long flight to
Kathmandu – The capital of Nepal. It was more than 25 hours flight with couple
of hours starting from San Diego to transit in New York City and Doha. Doha’s airport was amazing with
trails of footballs all over the place, the hangover of the football world cup.
We were traveling to the opposite part of the earth and yes, it was almost mid
night there when we flew from San Diego at 9:25. When we landed in the
Kathmandu international airport, the chaos of mismanagement was depressing but feelings of excitement were unhinged. After staying in the Kathmandu, Nepal for couple of days, we headed
towards the Everest base camp.

Day 01: April 06, 2023. We reserved a jeep from Kathmandu to
Manthali, a rural town in a valley with 1640 ft altitude in the eastern side of Kathmandu.
It was four hours’ drive passing through the rides and small villages with
agricultural land. We stayed at freedom hotel, which was good and ate nice
dinner. We can also see the small, tiny airport from where we will be flying to Lukla, the world's most dangerous airport.

> [

![Photo](/Travelnew/images/blogspot/blogspot_b2260118228568a9.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKzs2Paj4s4n_ELxVbKb849uvJMIvS2btS4Z63hCB7dBdiCO3lZwBmcdNb94eOooZNB32R909EYGcVDNEYajMymv9r4RU4KSRnMkwrhkzGDkZcKSX-p8HwulHWnED7XjppxFhYC8WMqtWQLUKeC_wpNotqDU5vpN_e1tUyIvXAxNhIcY0J1wZc-g/s2048/IMG_2478.jpeg)

On the Way to Manthali, Ramechap

Day02: April 07, 2023.We had a flight with Tara airlines. Something the airlines did and unexpectedly our
flight was early in the morning. There was a single air hostess in the airplane
and half of the airplane had a cargo. The small twin Otter plan flew up in the
sky and with the feelings of it touching the ridges of the mountain, we finally
landed in the Lukla, the world’s most dangerous airport in the world. There is
no way that plane can stop when taking off from the airport, the runway is too short. Search the YouTube
and look some videos.

[

![Photo](/Travelnew/images/blogspot/blogspot_5c3f7c79b471173f.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibLBTRjitpkSa7vksYEzgoKgoDEWpcbEMFbZ3WWB5Up1JUvEuLP8yCaqrdh9yDhrX6QQCPempej4VfJUWbhNA4RTq7Fuq5sk9L30SDyVAhk9drhMasTV1lbKbQOmRXs4gu4ODgesS7FpIt5QZ5RdFwtwfeVKqg33otSKIWmHpT419Sws_cnjIVgg/s2048/IMG_2514.jpeg)

Tara airlines - half passenger half cargo! what's going on ?

[

![Photo](/Travelnew/images/blogspot/blogspot_c9a5f9561409fc14.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFG4UA9E-O8Jt66b2NDt7iHbQTcPrmlreS57URJaJKyCwlp1BoFM5hvcnfWdRywI3lZs78oYrNqFbn1GL74DPK8UUSePjstmgnSX7-x0uBxhyphenhyphen01JWUAvFrzj7RzG-Dw4kWo0VOdlxbYBqfUPBr0eEwV-yzH0RdWxK_55xi2-nPpH-9lBpX65tamQ/s2048/IMG_2526.jpeg)

World's most dangerous airport, Lukla Airport, Nepal

[Watch video](https://www.blogger.com/video.g?token=AD6v5dyXDhBPhhHZuqj2Q-f9JzqckdVZhBgGYsABI67qlT40umiF0_2OJPioOy_V0Jfoo7yaQ6WRYm5yDxI)

As we start to walk higher in the mountains from Lukla,
Rhododendron, Dzo, mule, yak rule in the higher altitude, glad they are well trained and give you the pass when you met them. We found hikers from
all over the world, Thailand, France, Singapore, German and also met a Tunisian
French surgeon. We stayed at Phakding, a
small mountainous village. The Team is ready!

[

![Photo](/Travelnew/images/blogspot/blogspot_8c08f863185f2865.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4V63Gu1jsQ0u6xl6gGmrqTujgk5-iOpElBgg4oxgWufD8ftd8gQyFkcRy6RVFDI8ntt58mQ1ugr8CPfCiVRcRL63Ijb5E7Zx9Y24Y6aqoVwjQHcpFc9Lynnay-3yGfg_4lo80b0H1hDY5ssEWlRmuC8Ywc7lxrWeoF_kGItN-XNr0orFlxrEMiQ/s2048/IMG_2576.jpeg)

      Happy Dogs of Lukla

[

![Photo](/Travelnew/images/blogspot/blogspot_958b83a059936f49.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEim6yR7yUK7fFQFKGEom78jEohitYaEuhmWGJFA5VqCdVypZItq_h8QuygqwnfbsG1mBW7V98UemS0ZOE0vkqmj9QTvXebQP6c64S9NE6-HtlGL8Ln0837obeGHQQL731RVuoCsYrJoqeJYkiRGRpK2S_Pc-_tC64_ng0vq94-tjnIJSC5FQsQMWA/s2048/IMG_2579.jpeg)

In the way to Namche Bazaar, Rhododendron flower.

[

![Photo](/Travelnew/images/blogspot/blogspot_0001348ca37a7c39.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhcX000QaHsvEC1X4tHbqNjg5miimadnTb0PBROey75yGi-fEwoaQy1sr7xVXN8kvv7eD8huqtfaKq3M0kBN5L3V3SgyD8iXCw53vO4Awo0OzmMC54YJ9jmBVFoXWqMOwyrMe_AxD3MWIHPfZkzKVPc9bhMwu9YjOONO07ML75CPhA-cwecbmKCw/s2048/IMG_2622.jpeg)

Day 03-05: April 08, 2023. It was a nice trip from Phakding
to Namche Bazaar, a harsh mountain and many suspension bridges. For the sake of
altitude sickness, we stayed in Namche Bazaar for acclimatization.

Sagarmatha National Park, Namche Bazaar

[

![Photo](/Travelnew/images/blogspot/blogspot_dd931100ba64a88e.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXQs9fzz-ySiEXC54ZHca9MiXyB__uev6A-ogG3j-2HZ7l1h-PoXGxvimhz9KBeYstDn5h7MN11yLS3G2M6yfuwfTQD06P322HnO37ADZY_mpn-vcMOb9d3HLtyKFrAu5YK-h0D3RKljyAi6zDwOoQre893rLbRMR3ZPzNDIC879VKJpGQSwSM6Q/s2048/IMG_2651.jpeg)

Day 05: April 11, 2023. We went to viewpoint which was
12,100 ft. Story of Sherpa, Tamang and
Rai – three ethnicities that rules therural Himalayas, was interesting to learn on how
each ethnicities tried to control the upper Himalayas. Most Sherpas are businessperson
in Namche, and Sherpas are also trainers for mountaineering although our guide was
a sherpa. There was old airport on the top of the Namche Bazaar. We met people
from Australia, Cambodia, Switzerland and India. Rai’s are working on almost
every hotelin Lukla. Even with newest democracy and secular country, equity
and equality remain at horizon. We also met a PL/I programmer from Germany, who
spent most of his time in IBM and Siemens writing assembler. Finally, after six
hours we arrived at Pangboche at 2:00 PM.

On the way to Pangboche from Namche Bazaar.

[

![Photo](/Travelnew/images/blogspot/blogspot_3052be6867b086d7.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_k24bQTwDxwx5cHt_g8_aAH8DBhtSvQvaH28XdluV0wXx7S2YZuSphvxRSrAlwsRyrCEI_FPGHKkS7juKDIsnNU1rJoMseLyR2byp75SIf-K6W2JlYX9rtQebqkrNW8g1-ibHvAs4sfMd4fgPnXvcREs1ZYhh_XPpgacJiSXBvvKZTrL02GhxHA/s2048/IMG_2662.jpeg)

[

![Photo](/Travelnew/images/blogspot/blogspot_ae6beef9f1f53735.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkXKzCEIYgJO-iAZVUlkDJFvWA0WZzg3-bbdG-cG730-8TOiUvX4g2gT65e6vF0PFiU47W1Q3WdCi0XC1pG85KxVEtFUDd1UFuVSwGksTuyqFMJH-aMgd17GdNdYZVKENqZi61KIgBxRLeKBdw-D7c1AdNmUskJWd6ZhKiRcJENUty01O_Ua96dg/s2048/IMG_2670.jpeg)

[

![Photo](/Travelnew/images/blogspot/blogspot_42e383d75daf049f.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiITbcCuLF2Nm6tFYH9Mjg2S1vHEoVJpgvPbh9h-97S36xI8eIYR5ZWH1HtvuSSSLfEZJ7iE2vnj8jkeqEcVfkK_RUFcDk6Zvl7xBAqpZ864oGjtS1O4nTNeLa_gSBkjVpsuQjSEZyBvcZrWuv6W2sr5jEpLuTHVWg1Nx-PU6Tz4LwB3VzqIjSyA/s2048/IMG_2727.jpeg)

Day 06: April 11, 2023 , the next we reached a Dingboche,
small town of twenty-thirty lodges. We also went to the French bakery café –
which was really nice. We met people
from all over the world in the lodge to name; Israel, England , Germany ,
French.

Dingboche

[

![Photo](/Travelnew/images/blogspot/blogspot_08eebeb0a522c077.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDNuIilLYpnng9HDMPAgaQiUvgUvT3dy1UfIHB6CVz1xLsDjIWiX5BsNiFKPmRhIgA2d3dA2cIG881wCwcGFDh-jbx7-arAi4HWnyIiw7QF7_Cybx5YoTebCnulcZaM57LsVRdeBE8PEzezTM8nli2q3z9vdzfFwBGKVv9ZLFBj7DC4oYyh_9aLA/s2048/IMG_2790.jpeg)

Day 07: April 12. We had breakfast at hotel mother earth, lobuche.
Drink hot chocolate at the world’s highest bakery café in the elevation of 4930
meter, met folks from Colombia. The next day we will reach at the Everest base
camp. My heart was pounding a bit when I was sleeping, it was an oxygen issue,
or something related with altitude sickness. Nevertheless, I didn’t have to
take the altitude sickness medicine. It was also a sad day because on that day
in the year 2023, three sherpas lost their life in Khumbhu Ice fall.

On the way to Lobuche

[

![Photo](/Travelnew/images/blogspot/blogspot_d0f06117cbc0661f.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3wKjtSDgVOtqf5pX0KwIrNP1Gu30N_-aCZRcDupYQESnNCoOBCDmf78pG6PxYJKsVj8H4PVSGLQwcUwJ3ZBc99cMfmoOi7Sx2zpJODfR6BQ0j0eBkNBYdtr9O-fnmhyphenhyphenC2c3fF2DkXpDLeO1nUVlH0IoRQFif4mbhE9z5j0khL1UCTooqLy-d6wA/s2048/IMG_2831.jpeg)

Worlds highest bakery cafe

[

![Photo](/Travelnew/images/blogspot/blogspot_5d64ea33ce0fe347.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjORIyALDvUNSEqpLXqANKW07YuFwiPs9Nrv2hujnQV-P3hd8PcdJv5mYFiEbKX8ns99NC51ioIn7OSjnebrbm21qCM-8iN9FwqY9p5_cQTS75WMyKnLP5w-T0J2Sx9vXHTXOYjFtUs_KzUhlX-DNu-vhwx-Cib8FRuihT_nE_XU3rRxKd8Rqz1-Q/s2048/IMG_2851.jpeg)

Day 08: April 13 As
the altitude goes higher and higher, the cost of food increases exponentially. You
even have to pay for a flask of hot water and charging the phone about 5$ each.
Source of electricity is the solar panels which are not so efficient in the
high Himalayas. One thing I was surprised was the huge number of hikers coming
from the Asian countries and how things both culture and economy is changing in
that part of the world. Nevertheless,median age of hikers skewed in 50s.

[

![Photo](/Travelnew/images/blogspot/blogspot_926d3474d9b84893.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgyID45ZEYlP6G67wROk8mHTvjeMnu74xRwiDyXmhjPJK2e8mBHNfRHsixACbr9ksav0AQDp-pY5jiwYa1o23ivZiVRV5izKNfrW91WgVPLSE5APxCS3kYQZSKGq1oSpjsiMnVIpVkeJk1l5SFkLmbWtVFDL0Aa94bU7ddRyV-oPyPy_2pJtrFLw/s2048/IMG_2880.jpeg)

Day 08 : April 13: We left for Gorakshep at 6:35, the final destination
from where we can climb Kalapatthar and go to the Everest base camp. We reached
Gorakshep at 9:00 am. The helicopters fly every seconds – sometimes for
evacuation, often to support logistics to the climbers. We can see the tent
all over the places in the Everest Base Camp. We ate at the highest altitude restaurant
– 5190m. The same day we went to the Everest base camp, take some cool pictures
and call it a day. It took an hour thirty minutes to reach the base camp. The
big, majestic stone was amazing.

way to Gorakshep

[

![Photo](/Travelnew/images/blogspot/blogspot_e19fd3b64268ed5e.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6Rew06oA6zKkPdOQoaRtVJhX-nM10Qq_tW5b8wMy_6QIPM2TIFFdiVE-JZOAPPQEDLuJQ6DTTrAznm6hyphenhyphenjBwk83T77gJLZhgXTE8nXaCIrW__YRo7TNpnoKmH69HHyk_-WNFqn8-WdKxjeOr2e6f-p7yzgG0ZHg-FbRGpw_X2O_sUyA1yGUF2ug/s2048/IMG_2901.jpeg)

Way to Everest Base Camp

[

![Photo](/Travelnew/images/blogspot/blogspot_6bbbbdf85d9549f2.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUOtFc9H47Lm-1CBQ9uSULaTCTG-sviUleIAalOf6FYMAZfdpOAhRw3ifTK6t56uJinnZDCooQY7LZRc_zAqM85aapEKda-1zn4WosBexTYX5V4ikfMK6iQWv6jxIbqvAK1OmoIEldMfoK4mVg57WKU-G37jS48Duu5W6WKmtLBjNOuydfzyJjrA/s2048/IMG_2905.jpeg)

The final stretch way to Everest Base Camp

[Watch video](https://www.blogger.com/video.g?token=AD6v5dzTy8CEw33eGuQmqfF3z6usBdplEaiBst_wKezzfYIlqWZDSybEXTpbGcXwzpwS9jcKmwwejZSSJLw)

Finally, Everest Base Camp , April 13, 2023

[

![Photo](/Travelnew/images/blogspot/blogspot_9bc90c22a7083205.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8FbMrIU4pssvCktcvH5cnbcoqA14bUj-ZgxC10w5sZv5TzV79JmKyGXPrNoEMsZ9IJWGRKhZsdQHn9ISGuhFYEOozHf74wPcJvng5NsLgM4LZzlsV1ZkvIGEW0W_kEnMrdEku4ukO0VGkKQModH3YI9zrFaXKVN-JA-KbAA52xoZqXCXGeOTlNw/s2048/IMG_2924.jpeg)

Happy Face

[

![Photo](/Travelnew/images/blogspot/blogspot_51caad4cedd8e4cc.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTRvM7F7JVP50WwM9oxu-N52WEXr3A_EnleNv50H35A27qOLgucCCIAeNqqoUh5Xu1Qh6zWpKH_njyvB35ohzL2x4oiPaVN2txEgSs-6tfaqvixQBPl7chodICVqB6RsdgL0-2kWe7QRPo2d1kK2ya2GZbUdVjeIReTz8gumAu9l4NTT-HytMA9g/s2048/IMG_2925.jpeg)

Day 09 : April 14 We woke up at 330 am in the morning and make
our way to the “Kala Pathar” – black stone, although we met couple of people on
the ways,but we were the first one to climb the Kala Pathar. It took 1hr 30m to reach the top ofthe KalaPathar. We also met a girl from Czech
Republic. There was a majestic view that you can see from Kala Pathar and Kala
Pathar was 18519 ft, which is higher than Everest base camp, 17598 ft.

Mt. Everest from Kala Pathar.

[

![Photo](/Travelnew/images/blogspot/blogspot_c6f224dec36d3e03.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLPXeC0eCyKj74q4M-pyyBKTQqwuH0Ium8f6-m52IgewffdRjvJESWRWHFjYZli8JuCnSejdCOb2otNF_gZGabfNavxUesB_HmGDQzWdm1YZkT0U3mkwT7ViDmOFb5HuCRD6PU8OET38pguAVp5hMWVpUpe59oZ9qfCauwmgT8exlJOGqG_EUmIw/s2048/IMG_2956.jpeg)

Day 10: April 15 The new day began, and we are going down
from today, glad we accomplished, it was a difficult hike, but we are going
down. We arrived in Pangboche, it took about eight hours. We will be heading to Namche tomorrow. We are racing against the time.

Day 11: April 16, we headed towards the Namche. It was really
easy going down but still it was beautiful and amazing. There were about 12
people in the room ready to eat dinner every day and there is always a furnace
in the center of the room and wooden logs.

Day 12: April 17. We headed towards the Lukla from Namche Bazaar,
still the hike is all about going down, meeting yaks, Dzo and mule along the
way and passing through the suspension bridge. Wondering about these himalayas and when I am going back again. Sometimes you see somebody
working in potatoes field. I bought few bracelets and two T-shirts. Everybody looks happy slept in a very nice
room adjoining to the Lukla airport. Next day
we fly to the Ramechap from Lukla, the
world's most dangerous airport and we were back to the Kathmandu, the capital of
Nepal

What an amazing trip, I would love to do it again. Thank you Jeweltrek.com and our Sherpa Rinzi for making this
trip wonderful.`,
        image: '/Travelnew/images/blogspot/blogspot_b2260118228568a9.jpeg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'trip-to-catalina-island',
        title: 'Trip to Catalina Island',
        date: 'December 29, 2022',
        content: `12/24/2022-12/27/2022

It was a beautiful day on December 24, the Chrismas eve and we headed towards the Catalina Island. It was an hour drive from San Diego to Dana point and one hour fifteen minutes via catalina express west in pacific ocean. The Dana point itself was great place to explore with beautiful ports and lavish restaurants. It was easy to get a parking pass and park nearby in the parking lot after you pay parking fee.

[

![Photo](/Travelnew/images/blogspot/blogspot_1f0beea434a68c03.jpg)_by_Sentinel-2,_2019-03-30.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfqN4fOAsM4KI35skRsBIOlP-Qh3RP3tqYvJy8SrT6bq3cdrfy-6M2LtwTdcuNhSGxhXU25XUNjckHRdmOFMNPxM96BKc_StJKILg9U_SEGCA0VmxW9Dyej7s1HnryK1qpw8uMxDS2ZZdrPJekOwpukZq7pHJDK2a6Zb1H7jJlRDguXV9OY2E/s3390/Santa_Catalina_Island_(California)_by_Sentinel-2,_2019-03-30.jpg)

Santa Catalina, one of California’s Channel Islands, lies southwest of Los Angeles. It's known for its wildlife, dive sites and Mt. Orizaba, its highest peak with altitude of the 2097 ft. The resort town of Two Harbors lies to the north. To the south, in the city of Avalon, palm trees and cabanas line Descanso Beach. Avalon’s circular, art deco Catalina Casino is a cultural center with a movie theater, ballroom and museum.

Catalina express leaves the Dana point at 2:45 PM and its an hour and 25 minutes ride. Dana point is an hour drive from north county, San Diego. The island is 22mi (35km) long and 8mi (13km) across at its greatest width. The Catalina Island is about 30 miles from Dana Point.

[

![Photo](/Travelnew/images/blogspot/blogspot_014439904f960455.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDOfLuqw97WwIKanszl2G740O0J482WM5fforj2J5kg15QfV1NvgHdTrZaVnvt7Ajbn3R7yEDZzifGgGiAiZGmQqf6EGXf8kbuJKub1LPLwcoLsdqubaRqVYsDCzTYHC9m9W-oGQWrqJF1YfGTtTUny1YrfvyTHrJyOk1FuSy6lrsPZ_HSLQ8/s2048/IMG_1800.JPEG)

[

![Photo](/Travelnew/images/blogspot/blogspot_e421cee48197141f.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEHplmWghC3KvjJdbPvPSvD-xyZZrkV2smADlJu8wvg4B71lgacBEVxsQ0yNTr37Xj9VLJC8Ri3mCeXXjz0k0KSNlNP5HjBbL60S3IVKYl198RJ2IvUod_Mt_t7oyWtB85Do6K5p3nq_Dg3AMYKkKx5ETwfktzGybl1vlkXA6LtFh5PGsgiLQ/s2048/IMG_1809.JPEG)

In the pacific ocean , way to catalina island. It was a nice blue water and cool breeze. Drinking hot chocolate and watching seamless and endless ocean was not only fun but shows the beautiful nature in the water. I remember the whale watching trip I had at San Diego couple of years back, and trip in south-china sea at Shenzen in the year 2007.

[

![Photo](/Travelnew/images/blogspot/blogspot_f969f9e7adfb53a8.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjON9ESsIhaDufAETwdeB-GTjX0QAim9cb5WP1a-S0TXLMfn7fRksJ4ZWIFOZ3EEl8L7LakrnnuWL_XAwpJeh7V-hej2yXUkVl4w0NnsvVBNbfBGRhCWVZaSoMMqpy0QwnQ9Igq3zc4VJ0wb6G6WEJ7iQjNqaCa-UQUV-T7F4W9MsDod3jiAKI/s2048/IMG_1821.JPEG)

The golf cart is the main vehicle in the island for transportation that has about 4000 people. I love the concept of using golf around the Island as it conserve the environment. There are about 100 cars (my guess) When we reached the island, we took the taxi to go to the hamilton cove, the home for next three days.

[

![Photo](/Travelnew/images/blogspot/blogspot_09944ddf39650f50.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4miE71SxHTx3suRB-kTEZfBNEaelg8lsfypZdJNOFXE5INtk7bikgvk0oyRG_HkXrcrowXAAXsquV1BiEIVLclJij_oBmTSG8mCUky5Lhf3coFoJnrY_6Uas_gIF4UYAea25Fx45BF1NSZUeVfXo_BeBX_5inZZo463fLXT8WRHTVmr0qwQY/s2048/IMG_1814.JPEG)

Bison Tour: The Bison were brought to the catalina island in 1924 for shooing the movie, the vanishing american. Bison became the dominating animal in the island ruling widely in the north west side of the island. Its fun to have a bison tour where you will navigate the north west and west of the island where Bison rules and see the beautiful nature. There are currently about 100-200 Bisons ruling the Catalina Island. The trip take you to north west of the Catalina Island and further towards north west, where you can see the Los Angeles in the clear day. We also saw the amazing dwarf fox - they were really small whose ancestors are huge in the mainland.

[

![Photo](/Travelnew/images/blogspot/blogspot_6a7d4ca034cae7cc.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilP3-dtcv_so3WvB0Kuzn2iXBbG15VzTQsmkG_xXI67iyk2ghYWY8EWVEXXKw9MfK2kH-_WXSlXxdkArhninVAOlQ4QGkLtPq3wRDQvrORS3VAOc_eo_72ScmzwBKvMmb6XHj2R2cxyNlYgCffuwPgk5NYqFpKVpy4bkj1KKVJ_ud2xl84Zfg/s2048/IMG_1857.JPEG)

[

![Photo](/Travelnew/images/blogspot/blogspot_ee02fa48253bd596.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhiVH5_tibdfUotMw_quRD8NRLeAkvmTTZ5TUt3Uw59qoNp8LJI9kWiEpnuJ_LQZmgMic0KfifbKeO-93HFPkl4DP8t_jifGlFlQQadOgPqvMH1mzhUqOruPAUzo3KUhtY395W7xWntbMsFAUPlZA-CevcjxeyKbXOLexniol_6W1HD8Tj-8Dk/s2048/IMG_1865.JPEG)

[

![Photo](/Travelnew/images/blogspot/blogspot_ee2c60ebb55529d9.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVf__BnsaQCHGRISlss1Dr7062pYuaId5HiRswewt5qbrb91746tN3YAy1v0Xq6CgQ39NUUZ0B8O5d-n6-MFvxH5sciWQQcANzcGPoFTsqgHAVx2SZJV8iMj6eIqObuFI-11q9shQinib5g71o1-InQVzkCvJ1HOvOvVUvxk-hxxe3hyWOaP0/s2048/IMG_1869.JPEG)

Bison ruling the Catalina Island.

Zipline Trip. Zipline was fun from the top of the mountain ( so called ). I met the same driver who was driving hummer for the Bison Tour. The guy has a good history of the Catalina Island and talks about fire on 1915 when Island was half destroyed develo. He also talks about casino which is literally a ball room and the history of tiles manufacturing in Catalina Island and how Bison were introduced in the Island. The second part of the zipline was pretty long and exciting. It didn't excite me much although you can see the pacific ocean and it was long when you are ziplining. I had similiar experience of zipline in The Big Island, Hawai.

Parasailing. This was totally a new experience for me. I find it very much fun and exciting as you put your safety belt and the captain start to let the rope go ahead with parachute. It will go upto 400 ft above high , you will see the tiny boat, long rope and the port of Catalina Island. I find it very safe and relaxing on the top of the pacific ocean in Parasailing.

[Watch video](https://www.blogger.com/video.g?token=AD6v5dxNbWZosyPJqv12p7aivFXdY4M_WpQ3Shpqg6w2WcB05Pje2E7t0h-l4-yOzKbn2fKw95CI893cZeg)

Glass bottom boat - fish watching trip. This is an almost an hour trip where you have opportunity to see thousands of the fishes from the bottom of the ship. Its amazing to see so many types of fishes and different types of living things below the ocean. Its very exciting trip that mesmerizes the complexity associated with the nature and how things are working perfectly, amidst of the natural complexities.

[

![Photo](/Travelnew/images/blogspot/blogspot_bc1455c2c4bc6ae6.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcSkMTstvKDzC4jzMiPOHLLRRRcUXCXSt_aYPAFieXh-9IHU6XgHAwhYtKgXIla1gw_ZP1nezD38MSRiSeU5adSd3LAWq56QqjB1F_gMojG7_dT5X8skroewUNfh38HLoIuoR3lwf1yc5KAhHdWNNlzrL2j1j8liOkIxVQRBhzVWB3YwFaXqs/s2048/IMG_1942.JPEG)

[

![Photo](/Travelnew/images/blogspot/blogspot_4de68f2dedd3837c.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg35EtuBmkDDEBdBxdMkyhb1uBcHzv4FYV7QK-EhfA2LAhqr5mbFssl4Y09tdWEaYatTAtnkWbxpO6JIHC5deQTTxJIzK2D2W8OupYw4kJr9HzUNd-6B51xhZDTKaLfL_LCFvLE9p6rzzdVvIuKmymm6iyU44f43mFtwNykJ5hwqqzp5yAZeb8/s2048/IMG_1925.JPEG)

Food. Food was amazing in the Island , we tried few different types of food but sea food is dominating in the Island. It was usually very busy and hard to find the restaurant in the chrismas eve and christmas day.

[

![Photo](/Travelnew/images/blogspot/blogspot_f5477601739bbdd6.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXbi3i9-P2NrNVByQ3C8EeNn9X4brURZGlWTOmTFg29CNURFTF5xufezXiqRVV0YvbfKeo4rCujnRCvIPcK998wigTs5urc0cyYEETy9aLu4yrAcXXJQSs5QZmW5YXPfHb4hSzAMmhQo1Jd4TicYaNK-G9yxKq6eafT774QAS9C7T_knNl0SM/s2048/IMG_1901.JPEG)

Downtown catalina island

This was an amazing trip and I vow to return to Catalina Island in the future in this decade. The things remaining in my bucket list are day hike, submarine boat trip, trip to two harbor city, museum trip and botanical garden trip.`,
        image: '/Travelnew/images/blogspot/blogspot_1f0beea434a68c03.jpg',
        tags: ["Blog"],
        location: ''
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

![Skydiving View](https://blogger.googleusercontent.com/img/a/AVvXsEiKz3pgnnyhkQrLBYm7PjHZqQAZIjhXiihp9tIMvasXbK_Py0BQzYfXm_PTfr8r93Qe5goQn7iJ9Q8c8QtIDOWMDhLSyZm3lig4G2_L6iHdBvmgDVK3k4dlhNteK80k0OxVOCTW9h0tuEvGOo1ICcOvfjv9IvTtBK1cjr0u9R_uFZxQzA6_5lA=s3840)
`,
        image: 'https://blogger.googleusercontent.com/img/a/AVvXsEiKz3pgnnyhkQrLBYm7PjHZqQAZIjhXiihp9tIMvasXbK_Py0BQzYfXm_PTfr8r93Qe5goQn7iJ9Q8c8QtIDOWMDhLSyZm3lig4G2_L6iHdBvmgDVK3k4dlhNteK80k0OxVOCTW9h0tuEvGOo1ICcOvfjv9IvTtBK1cjr0u9R_uFZxQzA6_5lA=s3840',
        tags: ["Skydiving", "Adventure", "California", "San Diego"],
        location: 'Jamul, San Diego, CA'
    },
{
        id: 'southern-california-hike-to-palomar-mountain-6138-ft',
        title: 'Southern California : Hike to Palomar Mountain ( 6138 ft)',
        date: 'April 18, 2021',
        content: `It was a beautiful day on April 11, 2021, I have decided to hike to Mt. Palomar, 6138 Ft in altitude. We decided to park the car in the 95/76 intersection (33.32953375294505, -117.16200644173152) and do the car pooling. It was about 1 hr 40m from the northern part of San Diego. We drove the curvy road after many years and passed the small town of Pala and Pauma valley. You can see the beautiful ridges of mountains stack one over another upto far away in horizon. THis is something I saw after years ( although I saw the long ridges in the hike I did at bridges to nowhere a couple of weeks back ).

I felt like I was in Nagarkot, - Nagarkot is a village in central Nepal, at the rim of the Kathmandu Valley. It’s known for its views of the Himalayas, including Mount Everest to the northeast, which are especially striking at sunrise and sunset.

The curvy road passes through the two big casino mansions that look like giant concrete in the middle of nowhere. As we start to gain altitude with curvy and snaky roads, we can see the beautiful view of the valley with 360 degree magnificence. It was green and beautiful. More importantly I started to feel that there were different kinds of birds in Mt. Palomar. As we reached the top and paid the parking fee of $10 and entered the parking lot , we realized that it's worth any dollar amount you paid. You see the breathtaking view from the parking lot ( see below)

![Photo](/Travelnew/images/blogspot/blogspot_05985ac3468a3422.jpg)

The picture has a breathtaking view. Although it's only 6138 ft, the picture shows that you are in very high altitude, possibly more than 10,000 ft. I may have experience like that because it's been a while since I have been to this altitude. Because of the air quality or the marine layer we cannot exactly see the ridges on the further south towards the San Diego and west towards the Oceanside.

![Photo](/Travelnew/images/blogspot/blogspot_0ff9e231a182d34e.jpg)

The park has a lot of spaces for picnic areas and very old ( about 400 years) old legendary tree guards you when you have your lunch - how exciting is that ? The bench looks very old and rusty, part of it built from concrete but shows its antiquities and the firmness that it continues to offer. Did you feel it ?

Oh, ya look at the legendary tree below. How can I believe that I have been to so many places all over the world and yet, I am going to die and this cedar tree has seen the generations and generations of human kind including the british monarchy ( sad to see Philip death and loss of the legend of british monarchy)

There were many trails mostly short ranging from 0.5 to 1.6 miles. However, you can make circles and spaghetti around it and spend your entire day hiking up and down Mt. palomar.

![Photo](/Travelnew/images/blogspot/blogspot_a77099659cd4a518.jpg)

There were more than thirteen trails mostly ranging from 0.5 to 1.6 miles. However, you can make circles and spaghetti around it and spend your entire day hiking up and down in Mt. palomar. The nature is so beautiful with a lot of water streams and ponds. Also, I felt like there were a lot of birds chirping all the time on the trail and welcoming you with their beautiful voices. As it was time to mate, I felt like birds were singing and dancing all over the place.

![Photo](/Travelnew/images/blogspot/blogspot_69432aa6c7fd67bd.png)

The trails were not so crowded, you can meet hikers here and there but it was calm, peaceful and the tranquility you feel in the tributaries of your mind. It was the feeling of nature so deep inside you, it kept on going further deep and immersed, both physically and mentally in the conundrum of nature, for lopsided well-beings with unselfish devotions.

We took the rounded trails, - scott cabin, chimney, thunder spring and cedar trail making the bigger oval. When we reached the Doane pond, it was very beautiful. There were ducks swimming in the water, kids were playing and some folks were enjoying the fishing and the tranquility of nature. It was very quiet as we lay down, relaxed for a while and saw the blue sky.

![Photo](/Travelnew/images/blogspot/blogspot_5d925c657dbfb7ce.jpg)

Finally, we can see woodpecker's hole all over the forest in trail, it's amazing how such a small bird can create patterns in both dead and live trees to survive.

![Photo](/Travelnew/images/blogspot/blogspot_1dbfc052ae0d15ba.png)

I really want to go this trail again as we missed going to the Boucher Lookout as most of things were closed because we are still leaving in the COVID era. [ Part II will be coming soon in future.]`,
        image: '/Travelnew/images/blogspot/blogspot_05985ac3468a3422.jpg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'a-lifetime-volunteering-opportunity-at-petco-covid-vaccinati',
        title: 'A lifetime volunteering opportunity at Petco COVID vaccination site',
        date: 'March 21, 2021',
        content: `It was the climax of COVID pandemic in early 2021 but the light was in the tunnel. The two vaccines moderna and pfizer were already in the market and the challenge across the world is how to administer and manage the supply chain of these vaccines beside the manufacturing and production challenges. Astrazeneca was added later in the list but the US decided to give those vaccines to the neighboring countries Canada and Mexico. In the city of San Diego, UC San Diego Health was leading the effort of vaccination in the San Diego Area with multiple major sites and a super station at Petco park. More importantly, it was one of the biggest vaccination sites in the world with 120 people being administered vaccines parallely at any time inside the patient car. Where in the world can this happen ? It's only in the United States of America.

[

![Photo](/Travelnew/images/blogspot/blogspot_e6cf78cd33469bd4.png)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjewUHPzOCOZNqfsKsI4pAWIN4-9ZTv_TMAAyisHGzxwg5YnQZvay3mEJTWG8sfYM4j2NgDO9CMIiX88XnjFd_y_55w61qWMpMNw1Hb3ZmKoA0ES_VjEC2BsaDLUcVhtSc2KxWP/s179/download+%25282%2529.png)

I remember doing full time volunteering for a day in the year 2014 to train grade eight students on economics at Allen Village School on November 05 at Kansas City.It was quite an experience, to manage students of middle school , without the class teacher the day would have been terrible. However it was a great memorable experience. I ended up learning economics101 from volunteering and understood how the school system works in the US. Even if you learn simple things in volunteering, that will make my day.

It was more than six years I did volunteering and I was really excited for this COVID volunteering because it was historical in nature both locally and globally. The good news was I was already vaccinated and my manager was really motivating us to do the volunteering. I quickly applied online for the scriber position and was approved in the next couple of days. They do a strong background check before allowing any volunteers in the site. Glad I learned an Epic, an electronic medical record (EMR) system in a few clicks, only the vaccination administration module.

As I arrived at 8:00 am in the morning of friday, 12th of february. It was super easy to park as they have top floors of MTS buildings for the parking. I went to the registration team and they assigned me to one of the lots - D4.

[

![Photo](/Travelnew/images/blogspot/blogspot_16e3857d15c7e53b.png)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj43krpf1-ofvRorN9PhBySg36I7CqIdMUspiXiGBbxLQMHHaANIYTqSx5zzNsS0gZHHkDf-VpbberzY85NdUMcVD995t6s7EKhmk1HvS6MROj1E0JuVmiNd0MdZlpOQs7bIjVh/s179/download+%25284%2529.png)

As I was a scriber, I had the opportunity to engage with patients and ask for their identity card and enter their personal information into the medical record system with vaccines lot number and a patient personal information. Every patient I worked with was very excited to give their identity card and receive their vaccination card back from me when they had a vaccine. That piece of information was like a treasure, the way people were putting the vaccination cards inside their purse.I saw a whole lot of different identity cards from passports to driving licenses to other state cards and a veteran card. People were inherently calm but excited and scared from inside.

As the people pulled up their car inside the tents to line up for the vaccination, I can see people are excited with full of hopes in their eyes. I feel like the work I did was self-fulfilling, helping people to fight with the COVID pandemic. It was a constant flow of people with hopes and excitement.I didn't realize that it was already lunch time. They provided a turkey sandwich which was really good and I appreciate the sponsor who sponsored that food for us.

[

![Photo](/Travelnew/images/blogspot/blogspot_f351a3fe22ed9646.png)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRYVeTQI9tsbqXVslS8zVgs89cRZIV92Cjq20C7g1C8JIP-PotI7nLK1r1TDT74q-df5dEaeyHLYeOE2BwHykBgFWXMuQa96wPlkikideXwv_4EE_cf9_ToifyeO_XF0QJWooT/s179/download.png)

The other half day was a very busy day too. I didn’t realize it was 6:30 and It's time to leave. Still there were lines and people were coming. I thanked everyone and was also thankful to me and headed towards the parking lot. I have never worked like that, standing for ten hours. I feel so good. I specially saluted healthcare workers who were working round the clock for the vaccination putting their and families life at risk.

When driving home back, I thought when in life time you will get this opportunity to heal so many people at a time as a computer engineer? This was definitely a moment, I will never forget this in my life.`,
        image: '/Travelnew/images/blogspot/blogspot_e6cf78cd33469bd4.png',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'trip-to-portland-oregon-a-mixed-feelings-of-euphoria-and-des',
        title: 'Trip to Portland, Oregon - A mixed feelings of euphoria and despair',
        date: 'October 7, 2018',
        content: `NOV 12 - NOV 15 , 2017

Welcome to the Portland, Oregon where mountains meet the Pacific. America's one of the finest city with sustainability ingrained in the genetics and the liberalism hyped for generations to generation, unequivocally as most liberal cities, the homelessness thrives! - what went wrong? The hippie's culture.

The green bike trail in the middle of the road to the public transportation, Portland has well excelled in the sustainability and progressive thinking.Portland, Oregon’s largest city, sits on the Columbia and Willamette rivers, in the shadow of snow-capped Mount Hood. It’s known for its parks, bridges and bicycle paths, as well as for its eco-friendliness and its microbreweries and coffeehouses. Iconic Washington Park encompasses sites from the formal Japanese Garden to Oregon Zoo and its railway. The city hosts thriving art, theater, and music scenes.

[

![Photo](/Travelnew/images/blogspot/blogspot_6388fa80fefc68da.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhga__ipS6xlhRUpQNXvBe1LJ0rO4AH8VR1dqqnQS68S8Dn1gFhxdnNw7fVzQ5hCUoGrg9YN_yDCSd8pKzvJkb_t5N6IrWcyCEcsBXbsWLsyU9mJFBNfsrlyWNQuHXAmQXeDv83/s1600/97E32DCC-35D3-4F67-9918-9532873F17C6.jpeg)

The food carts were really good as people lined up to buy. We tried theEgyptian food cart and the Thai food cart another day.

Roaming around the Whiskey Library was fun as it showed the art of arranging the whiskey and bartender has to constantly bring the ladder to fulfill the dreams of the customer. We stayed at Hilton Embassy Suites.

[

![Photo](/Travelnew/images/blogspot/blogspot_dee3ac2d4abd7c5e.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTHl87OC4jzmDd7L49Hl9zr9SmoY5WcUZKyBGZ4cOtIgMQSO3qVwcGWpn3iyIg0sVHQGOYx1FrdrHwZ9-SeA_fmkM0nnx3UdG2Rat4Hw6aiEx-r9_u_mcdimmTPJlFX9Fbxx6E/s1600/33EAE824-377C-45A5-B6BC-A1B024E7FA6B.jpeg)

The most amazing part was the meeting of two women who are originally from Nepal and working in the hotel. As I was taking my breakfast, I feel the vibe of Nepalese language and there we are talking in no-time. what is the chance of meeting any Nepalese in the US? The probability looms at 160,000 /327,375,909 at the very small number.

0.0004887348

[You can search for any mathematical expression, using functions such as: sin, cos, sqrt, etc. You can find a complete list of functions here.](https://support.google.com/websearch/answer/3284611?hl=en)

Rad

Deg

x!

Inv

sin

ln

π

cos

log

e

tan

√

Ans

EXP

xy

(

)

%

AC

7

8

9

÷

4

5

6

×

1

2

3

−

0

.

=

+

We also went to the Urban farmer, the country-chic restaurant in the 8th-floor atrium of the Nines hotel.

People were really amazing and nice in Portland.

The other day, we went to Darslam - the Iraqi food restaurant that has nice lentil soup.

And yes, - people have beards...Is Portland the bear capital of the country? and ...It rains in Portland, it rained all three days.

Will definitely love to go to Oregon again in the future, great people, amazing food, great city and the heart of sustainability and yes I miss beautiful trees and rain.

[

![Photo](/Travelnew/images/blogspot/blogspot_41bd0d8b1bc9dca1.jpeg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQYr8eMvcsYbUqVjPnsfLAKemNcYM0ygl4CBQG-Aqq1LVtbk4romjzra27k2xJqZMsH2b4ppbav5yb29X3K0raAsNZfRAecexjz6No_zBijs_sA_QixzaU_2S-qErOwLhnvaVA/s1600/8F5CFE83-EFA1-47A4-A4BD-F25BB009EF0E.jpeg)

**References:**

https://www.orbitz.com/blog/2015/09/things-to-do-in-portland-the-beard-capital-of-america/`,
        image: '/Travelnew/images/blogspot/blogspot_6388fa80fefc68da.jpeg',
        tags: ["Portland"],
        location: ''
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
        content: `The trail looks truly natural and aesthetically pleasant. The indispensable sage to hike and feel the himalayas surmounts by the superiority of nature and the cultural depth of the region. Experiencing the diverse landscapes from lush valleys to high altitude passes is a journey of a lifetime.`,
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRU9Nf-vGysb3GPtagMYdmBRQnzwshOXwAGxYKQvN30BxbT9_ph6tXUwYC-TizEAwjVozgEZ4xOt5dXOs7c_1tniZa-R7FvO_59H9hp8dZ3ARfiiGtx9cdqI7cXwYSbgYUUJbI/s640/G0040132.JPG',
        tags: ['Travel', 'Nepal', 'Himalayas'],
        location: 'Nepal'
    },
{
        id: 'hiking-anza-borrego-desert-state-park',
        title: 'Hiking Anza-Borrego Desert State Park',
        date: 'April 1, 2017',
        content: `Hiking Anza-Borrego Desert State Park

**
**

It was early morning on March 18, 2017 when David, Mariya and myself decided to hike on Anza Borego Desert, 94 miles north east from San Diego. It has been quite foggy morning for last couple of weeks as the day temperature rises on San Diego . With the rise in temperature in pacific, water evaporates and marine layer explodes across few miles west from pacific coast. It’ s quite an experience like back in Nepal during November to March where it’s foggy and chilly but feel of freshness in the air.

[

![Photo](/Travelnew/images/blogspot/blogspot_c6dca6d15d2ebb4f.png)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSWSZDKt54_Fjt4Gz3vWMJzYavhe_dq8EYoCDfYpf9rqmlmQpwa2PQXeJhTzQl5gaiDdd2evCgfHD4LwMyNmnSOJqq9k3VfjFIDOllE5vW9_Gk7c7XWEk3YFOoMHslNBK4O-70/s1600/map.png)

**
**

I had never hiked in a desert but was quite excited when David says that we are going to Anza Borego national park. I didn’t know where we were heading to hike until I jumped in his car. I was so desperate to hike, the other day, I said to David , I am ready - even without knowing where we were heading.

Driving through the misty and foggy san diego morning towards the Julian was fun. The morning was fresh and chilling, - a san diego chills on between 50-60 Fahrenheit . As we drive further north west, the sun looks beautiful and the beautiful day was in horizon. What a  beautiful day as we pass the San Diego and head towards the Julian. As we reach the Julian, the fog was gone. The day look awesome, cattles were grazing and people were flocking towards Borego National Park. How could NPR be so wrong ?

**
**

Anza Borrego Desert State Park (ABDSP) is a state park located within the Colorado Desert of southern California, United States. The park takes its name from 18th century Spanish explorer Juan Bautista de Anza and borrego, the Spanish word for bighorn sheep.[1] With 600,000 acres (240,000 ha) that includes one-fifth of San Diego County, ABDSP is the largest state park in California and, after New York's Adirondack Park, the second largest in the contiguous United States. The park occupies eastern San Diego County and reaches into Imperial and Riverside counties, enveloping two communities: Borrego Springs (home of the park headquarters) and Shelter Valley [source : wikipedia]

[

![Photo](/Travelnew/images/blogspot/blogspot_4b8b706915875e72.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDT3IpjUkZ7CIkuDPjtK0tM1P0VPSony9auCOEZJXuQq7Vp73RkQ1-uoBBIkXlzjR-RtKGd_s9kJxykhMW_2VldG9sJg1lF7uwcAh-FMpB0GNzF7f9gx9CCoMSiGTfEaAkfmBG/s1600/IMG_4219%255B1%255D.JPG)

**
**

I was listening other day on NPR how difficult it was to park and how beautiful the desert looks after super bloom that happened in 2003 last time. After nearly two hours we reached the Anza-Borrego, one part of the road reminded of curvy road back in the mountains of Nepal.The altitude was decreasing as we enter the desert, I had ear pain.

**
**

[

![Photo](/Travelnew/images/blogspot/blogspot_028f719498c2ae34.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUCMYP7_ZEKS44AGFDEgEX-jSVfoyqC8BKVi4iqxwGJjiTd_N3wGsjIkUXMIqrrKLlElvuPraT0HSLRYk2WMcXQfr0UjNRnwTn0J_w6IIAZSBv998m-kAVITWXqQ5rNBfBICxX/s1600/IMG_4208%255B1%255D.JPG)

Due to the large amount of visitors to Borrego Springs, cellular data may not be available and we realized that our cell phone is literally dead for communication and for maps.The cars were all over the road. The hard work of law enforcement agencies were clearly visible as they try to manage the traffic. Before we started to walk, I drink water and ate a piece of cheese. That was really good cheese, and probably gave me the energy for the rest of the  trail.

**
**

[

![Photo](/Travelnew/images/blogspot/blogspot_4de55a2095d5acf2.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6A9UI4aLFBnbCbUi2Qi95FtmZZgEn0PwYyWUkKE9Mbb1IIU_jQTMaseY2YnGJHzMQCkcSnWWJjiEysgSSM7lQQBCW5_aIyC2IWv028S9Epp8ag3C5SMpoPsYyVZDiERSNx0iK/s1600/IMG_4214%255B1%255D.JPG)

**
**

I saw the lizards for the first time, didn’t saw any rattlesnake. Missed the butterfly. The flowers were everywhere popping out of the different cactus. We met all types of hikers from young to old , from states to international. People were really enjoying the day in the middle of the desert.

[

![Photo](/Travelnew/images/blogspot/blogspot_6a2fa23c3597262b.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzcO5xgahluzPxMW07zd_B61aqrZElIDQs2kD1EP0pLDGooFyuPnPXxtrJvT5fSS6pJhEntlvaMnBZduZyXL9r5nhHnkN_wH34woddSFm-eH7D8ZyU-xTYPOR4V1tqme1xKatC/s1600/IMG_4203%255B1%255D.JPG)

**
**

As we climb the mountain - not truly a hill-station though, we saw different types of flowers blooming across the desert.After reaching the peak, we realized that we were hiking on the different trail and  we are not going to see the water fall. But  believe me, it was beautiful and was still in the right part of the Geography. Never mind, it was beautiful and awesome, the only thing we were missing in the desert were birds.

[

![Photo](/Travelnew/images/blogspot/blogspot_f911598c5d84c5da.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgsoK8b7_CAYYc2AnPE_SSnykNZ4PRb3AqPfRDmAgXcRI6xuIzJ000DfsN4zsNOxlu-7aAx4mkt5KGOU966gacJXbli3BdK6gGTLBs7Da2qUf0QEZqe_LBV09KRSqGfXnaavkO/s1600/IMG_4205%255B1%255D.JPG)

**
**
**
**
**
**

**The second spot was slot. We had to drive further down. I had never been to slot but was quite an experience to imagine about flooding in slot when it rains. As we walk in the slot, we saw the layered rocks and soils stacked up in multiple layers, often resemble as an art that have endless boundaries.It makes you feel to go back to the history when the rock started to settle. Oh ya! We really miss Geologist in our team who can explain the GEOG101 to us.**

**[

![Photo](/Travelnew/images/blogspot/blogspot_ae496d699c097f27.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHtTnh2Anz9IAYaJiuaR_DCRFkTCj6UItDM8g9hrW7P58rUrDmf1yTnssMel9Ye77v57CIRY3JikKtoFXzzk2LeUm-Sfvmc3cUVA132HRD1c7Z9s23g8NnK0t51vACvGMudLxZ/s1600/IMG_4223%255B1%255D.JPG)**

**
**

**
**

As we were driving back, It is always fun to stop-by in Julian and eat pie’s and ice-cream. I realized that it was almost a ten miles hike and I really enjoyed it. Really excited for the another one soon.

Interesting story...you can observe the super bloom from space Yaay!

http://www.sfgate.com/outdoors/article/See-Anza-Borrego-s-super-bloom-from-space-11050549.php#photo-12569603

Ref:

 https://www.hikespeak.com/ca-desert/anza-borrego-desert-state-park/

**
**

[

![Photo](/Travelnew/images/blogspot/blogspot_b8f998902a19a761.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDfsoJm2SaVK6NXsxX-IDwNhsZMrp-DCqlrTs_3JbeNUkkcTqM43HyDOSQ5y70C6DDN3woFIlIUdfgLrpj7OBfDCurZeKdWAr4puArCFnGqwLpIReUzoTeZH4bi-DB6Ljmc-_g/s1600/IMG_4215%255B1%255D.JPG)`,
        image: '/Travelnew/images/blogspot/blogspot_c6dca6d15d2ebb4f.png',
        tags: ["Blog"],
        location: ''
    },
{
        id: '2015-conundrum-of-nature',
        title: '2015 - Conundrum of Nature',
        date: 'June 5, 2016',
        content: `**Flashback:**

**I**t was on early February I knew that I am moving to San Diego. When I started to share my new destiny , many people were not only amazed , but shocked and jealous. Poor me,I even don't know what it means to me as i was driven by the immigration chaos , that hunted me for some time. Living in the small cities and small towns in mid west as a student and a professional were only the experiences I had in US. I had never been to San Diego but that's where I am living eternally now.

" San Diego is a city on the Pacific coast of California known for
its beaches, parks and warm climate. Immense Balboa Park is the site of
the world-famous San Diego Zoo, as well as numerous art galleries,
artist studios, museums and gardens. A deep harbor is home to a large
active naval fleet, with the USS Midway, an
aircraft-carrier-turned-museum, open to the public"( encyclopedia). Interestingly if you drive around 20-30 minutes , you will reach so called Mountains -(weird, expecting more ramification of the word Mountain or wondering about the relativity the word ), Desert and the beautiful beaches, the conundrum of nature that not only brings the excitement but also brings the chaos and deeper questions on the epistemology of Geography - at least for a person like me who have little knowledge on history and geography. With the unique position in the Geography, from equator and west facing pacific ocean, Southern California's weather can only be compared to the handful of cities in the world.

When I arrived in San Diego in last week of February 2015, The cold was gone, nothing compared to heartland of America, Kansas City. What really amazed me was not only the beaches that I never had opportunity to grow with - (Nepal is a land locked Country) but mostly the terrains of up and downs resonates what I used to see back in Nepal from my bed room. I was totally surprised to see the different floras that are similar to Nepal's terrain from Eucalyptus to Pine Trees and the beautiful flowers across the cities and highways.It is phenomenal to be the part of this beautiful nature.

The word Mountain in Southern California is pretty funny and skewed - not only in the altitude but also the lack of floras and faunas. Although I was pretty uncomfortable on using the word mountains in the beginning because mountains have a notion of snow capped mountains with thousands of meters in altitude, snow capped all year. I prefer to use the word hill stations.

Hiking in San Diego surrounding is fun. Point Loma is one of the favorite place where I have been many times. Cowles mountain is another beautiful hike from where you can see the Mexico , bay area and pacific. Hiking around the Torrey Pine beach is awesome as you see the beautiful beaches, blue ocean and insanely crazy surfers.

As the beaches expands more than 70 miles in San Diego County, Its always fascinating to go to the beaches - without hassles of parking and crowds.

[

![Photo](/Travelnew/images/blogspot/blogspot_26446feb487e131d.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKtqR5lv0-NWgPTQ2KOn3MFA7_AZXaopqC_znaEJ2O_8GwyU4h9grAuyCIRQDiLK5Wr1icq_Nc1RcTFU8IgSpEa3S-sRtaVrGSfQ3lOgLzh6rifjuIojDXdKrFZegYj4GTCPuu/s1600/my.jpg)

During the year 2015, I had great opportunity to roam around the city, taste different foods - I would have never thought of , and hike many places. I am blessed to have this wonderful moments . Some of the restaurant I love were Sardina, Sushiya, Mimi and Koreans.

Its been more than a year , I am living in San Diego and life has never been so adventurous and full of joy with nature and awesome weather. What about your experience?`,
        image: '/Travelnew/images/blogspot/blogspot_26446feb487e131d.jpg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'road-trip-kansas-city-to-san-diego-in-nutshell',
        title: 'Road Trip - Kansas City to San Diego in Nutshell',
        date: 'March 22, 2015',
        content: `Traveling all the way from the Geographic Mean of United States to the south west city , San Diego was really exciting and fun. I had traveled to Acadia National Park couple of years back on 2009 and it just look so amazing when I see the map that I have been to North Eastern City to South Western City. It was so phenomenal to experience the scale effect of this country when I compare to Nepal which is just a size of Colorado.

I was very much occupied with I-70 route when I realized that I am moving to San Diego for a new job, traveling Colorado,Utah, Arizona, Nevada and finally to California. I decided to take this route to experience the natural beauty of these states instead of another route down to Oklahoma and New Mexico. Ah , I traveled more than 1700 miles. That is almost equal to three times distance from east of Nepal to West of Nepal.

![Photo](/Travelnew/images/blogspot/blogspot_9f81c7b3771b1661.png)

US - Source Google Map

**Day 1: **I left Kansas City in early morning and started to drive west. As I started to head west, the terrain looks cunningly flat, the ranches and fields across the flat land was clearly showing how big this country is. For the first time, I saw the military barracks and some helicopters in the central United States, It was just different feelings for me because as I used to move across the Nepal's terrain, the strategic place would have been always occupied by the Nepalese Army. I never saw that in the United States. Another amazing fact was how much money have been spent for the windmills and alternative energy in the western part of the Kansas. Although the alternative energy whether its a solar energy or windmills or tidal energy , is gaining consensus among the scientific communities, business and the government as a sustainable energy source, the aesthetic looks of these big towers looks like monsters on the middle of the earth and controlling the entire universe. The monotonous rotation of three rotors that are 120 degrees apart make it seamlessly connected but scary on how these thousands of rotors rotate seamlessly in the middle of the nowhere. This clearly shows the nature is far beautiful than what human imposed on top of it.

Finally, I landed into small city just west of Denver, the George Town which is 6,000 Ft in altitude. As i looked from the window of my hotel, it lies in between the two big mountains and looks phenomenally beautiful. The chain stations located along the high-way was showing how difficult and cold the winter will be across the Colorado , and particularly Denver area but the terrain and beautiful mountains keeps pushing me on the fantasy of Nepal's mountains and hill stations.

**Day 2:**The other day as I moved further west in I-70 and pass through the cow dung fields, it was nothing but big gigantic mountains and rock formations in the Utah. I am not a Geologist but i am pretty sure many of them have spent seamless night studying and doing epimestic studies of these giant rocky mountains. As we pass the Fishlake National Forest and move further towards I-15 South. The I-15 passes through the narrow corridor of the Arizona where the mountains meets with humanity, those mountains resemblance more like what we used to have in Nepal. It was phenomenal, it was beautiful, it was gorgeous , It was awesome. Finally , I arrived at beautiful place called Baker at California. someone in the hotel was greeting with me " welcome to California ". Ah! I remembered the Hotel California by Eagles. I just realized how beautiful that song is and how beautiful the California is.

**Day 3: **As I wake up early in the morning, for the first time in my life after so many years, I saw hill stations from my bed room. Wow! is it Nepal - I was wondering about it forever but soon realized that its time to move further south towards San Diego. Black Crow was there, seeing the crow after so many days was hilarious. After driving for more than four hours, passing the west of Los Angeles further to the south, the San Diego county looks very beautiful with green fields. Finally , I realized that I am in the beautiful place in the world. San Diego was saying to me " Welcome to your new home, ;) " , I said " Thank you!" The flowers all around the places, I can see most of the flowers and plants that I see back in Nepal, twenty minutes drive will take me to the beautiful beaches, 25 minutes drive will take me to the mountains like Cowles and 30 minutes drive will take me to the desert. Its really fortunate to live in the diverse intersection of Geography and wonderful weather you cherish every moment in your life. San Diego welcomes you ;)

**
**`,
        image: '/Travelnew/images/blogspot/blogspot_9f81c7b3771b1661.png',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'lawrence-in-nutshell',
        title: 'Lawrence in Nutshell',
        date: 'July 14, 2013',
        content: `<!--
  @page { margin: 0.79in }
  P { margin-bottom: 0.08in }
 -->

Lawrence, Kansas is a small beautiful
town in the western outskirt of Kansas City and 245 miles east from
Geographic Center of US, Lebanon, Kansas.  The sixth largest city in
the state of Kansas with the population about 90,000, the double size
of Carbondale, IL. It was probably the worst time of the year to be
at Kansas in the early January of 2013. It was my first job!

The iconic legendary of basketball,
Naismith and University of Kansas makes Lawrence, the beautiful
University town.   The downtown  spans across north to south  that
looks  ancient in the flanks of Massachusset street. The  Indian
Palace at MA, the Chinese buffet at 23rd street , Chillis
at Iowa street along with dozens of restaurants in the downtown
street makes the place lively to eat and amazes the culinary interest
of the resident of Lawrence.The 23rd west street drives
all the way towards the beautiful national park and a majestic
Clinton lake.

The other day we explored one of the
downtown bar of lawrence where the young students were chilling in
the weekend. Like most university towns, the crowd is young and vibe
, the town looks inherently sporty with each bars and restaurants
showing the legacy of the town, the basketball.

The other remarkable day in lawrence KS
was watching the young students show in the of public schools of
Kansas. It was a truly artistic  performance of kids.  We also
visited Kansas City, that lies in the border of Missouri and Kansas
city looks even more amazing and intrinsically antique. With the
horses and chariot to ride,the city looks like an ancient european
town.

However, the geography  makes the
Kansas inherently flat. The shrubs along with small trees and the
flat land makes the place, aesthetically different and away from
nature. The gigantic clinton lake and the national park gives some
natural feelings.  After living two years in Carbondale , IL where I
was seeing lot of greenish and  water bodies -Lakes, I missed nature
a lot beside missing the majestic himalayas and terrains of
Kathmandu, Nepal

The trip to Humboldt Kansas to visit my
niece used to be fantastic open-wide roads with few traffic passing
by. As you move more towards the south, the land is even more flat
and you feel you are leaving the nature further away, perhaps miles
and miles away.

Th company was small and perhaps the
historic in a sense that it was my first job in US. My manager was
absolutely awesome guy. The team was excellent.  However, I decided to
move to the Louisville , KY after living for  in Lawrence, KS for 150
days. I knew it was little early but I have to move on in search of
destiny – sometimes you never know that and the fate of time will
decide about your decision. Thanks Lawrence, KS, you showed me the
way ;) and the same L is hunting me again.......Louisville now. I am
excited with the greeneries of Louisville!!,  I know the lust for
Kentucky Fried Chicken will never remain the same. See me in
Louisville, KY!`,
        image: '/Travelnew/images/blogspot/placeholder.svg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'reminiscent-of-carbondale-11-12-and-inspiring-five-l',
        title: 'Reminiscent of Carbondale 11/12 and Inspiring : Five L',
        date: 'January 6, 2013',
        content: `January 5, 2013

[
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKH_RChGfyOzmZAHZM5ACrmTqpY_PFxJ-EkoGBuHUjOSOGgOFow6LQLH6apq1Ld-CP0XFOwBCd3aqXQIS8R5Xq4-u1oMDNdSy5gqyZ_VfbbIc9mLqROBG609tQJ6141vW-c3W_/s1600/DSC03524.JPG)

Its been almost three weeks after my
graduation. Graduating again after ten years!! After applying for more than 150  job applications, I
started getting opportunities to have phone interviews. I had more
than thirty interviews, each of them lasting almost an hour, and more than dozen were in queues. Four of them
were for on site interviews.

[

![Photo](/Travelnew/images/blogspot/blogspot_51f503d98390820d.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjkqxr06z69gQxkhyphenhyphenQQ86L3sTeFsIcpz4bZf01iUT2NGsNCpkcetWbDnSFRwfo69Sj59V3ESJjDYd8-UbLwJRzDLwM61xY6gqqdnCABT0A0vlfWCpXC-yWayGCu2ddVUEK3njN/s1600/DSC03530.JPG)

December 15, 2012, Carbondale, SIUC

 All those on-site job interviews
coincidentally started with loving – L.  Alphabets in  Laramie,
Lawrence, Louisville, Little Rock and St. Louis. That was a co-incidence. I don't think I did biased sampling or any statistician can  figure out the degree of uncertainty
of other places and correlation among these L.I used first in first out (FIFO) queue the fundamental queuing theory , I accepted the offer.................., yes!! I have my first job offer and I  have
decided to move to Lawrence, Kansas, one of
the best ten college town in nation,. I am excited
and thrilled to move to start my first job after a long grad school.

[

![Photo](/Travelnew/images/blogspot/blogspot_37065e3c8865284d.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCHVt4loXUWIwVfvF_m9D6RMcSyvQS-8QUFnwxj709Le6NByN93GxRrvDZuo1VYmgnO47kgd_JXBSAI63R3zU1b7vlGFcF8z02tUtUy901BIssfaXQ0ZwD0JAJD-yv6sy99W_y/s1600/DSC02993.JPG)

way to Kansas, few months earlier...!

It was so painful for me to cancel  all
other four interviews of the next weeks. They have already booked the
planes and hotels. But I just wanted to be honest and I liked the small
team and the office environment  that specialized on knowledge
management, I got it in the first shot. I was unemployed for four
days !! Gosh! It was a holiday that slugged the hiring manager's
spirit. On numbers, I will be unemployed for 13 days.

[

![Photo](/Travelnew/images/blogspot/blogspot_c9ca079b670b8720.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsmjvPFIJy4pbzanuusI70VLzXg9PkfL-ZOPyPLqH1BVdg-iZA-SNUEVkUymx_3sFUuf2HWHS7TFT9yEdK3liMOZJLavXLw0HvosjfJDnNkXf2DeEXJHFhL1hYeZcE8uQFzvh_/s1600/DSC03679.JPG)

Evergreen Terrace , after a heavy snow fall!!

The academic journey was over on
December 15. I remember every days I spent at Carbondale for last 784
days (This is not an absolute measure...), Numbers are just a numbers. I will be missing Carbondale more than ever. Few weeks back to release the stress, I went
to watch a movie This is 40, paul and leslie's wonderful settings
navigated me towards a ten years ahead of my life. It was so
much of great inner feelings yet cunningly fishy and too much of romantic drama. Oh ! I started
getting scared  of future. Hmm...who invented time ? Stop the clock forever and see...This is 19.

EGIS labs, the clock tower, Evergreen
Terrace Park, The Reservoir , PK's , Hanger 9, the train;s sound at
midnight ', Dancing in Cali's, the university lake,Morris Library, soccer
ground, rec-center, …......my poor bike are some of entities that
I will be remembering in my tributaries forever. I will miss all of you
and all of my friends who were always helpful to me. I am always with
you, those memories will always encircled around the tangent that passes through the grey matter of my life everyday.The spirit of graduation day and strong sense of
confidence that I got from the SIU really helped me to mold  my
personal and professional goals. I salute all of them who were part
of it and helped me in this transition.

[

![Photo](/Travelnew/images/blogspot/blogspot_74e204114ed1d211.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFtq6yUwbn4179cTQDZMY84tT6oH268lnVnfXFmxpa2uGn48qIHt4vqRL7Q6g38hvzrFgAUe0mOckvNCoAJHmmgIEpnR9pwXIQFX3UXLXstCiB8MCJBCdGym6QRFdAL3rGm2Kl/s1600/DSC03699.JPG)

My poor bike, Carbondale, IL December, 2012

Some mind-boggling memories were:
Grassy Lake trip, Kentucky Cadiz Trip,  Garden of Gods, SSA, Getting Lost in Little
Grand Canyon, Alto Pass,  winery-trip, berry picking, cultural show,
dipawoli night, Giant City, driving to new york,the last new year
dance at NJ , Trip to Kentucky, Scuba Diving, Summer Concerts,
chalking for SSA, Julie's Sustainable Class, Hexmoor Agent Based Modeling Class, Creation museum trip to Kentucy with SSA folks, and other endless happenings at Carbondale, you all
are all part of me. Eric's insatiable quest of knowledge domain!, Something I always remember forever and appreciate.I miss you all!

More than eight inch of snows in
Carbondale was something I never saw in the last two years ( its very small number again...lol ), it was so
much fun to play with snow in the last week of stay at carbondale, we
walked all over the snow and enjoyed the kids skiing in their
boards in Carbondale reservoir.

Then driving here and there for a job
interviews were even more hectic and stressful. Now I am little bit
stressed with moving,  arranging the logistics, needs to pack off my
stuffs and move   ahead.

[

![Photo](/Travelnew/images/blogspot/blogspot_dabf14d09f282d60.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTa1mEw60T-fT-NAsGsKVgUSnSTnlzok-4kbd4VETN0r7XF-n3KyJSPeIo6Ri0PNg1aa9Yo1OGwYwnyVdzMJSsQZPwXPF0LbkPvFHuZp6QWgRGA2C6P9HHxgkaqWpRV9ktzgtl/s1600/DSC03199.JPG)

Yep...I am a Kansas boy now. Lawrence,
Kansas! Welcome to the America's top 10 college towns. I will be moving there this week. Oh! Ya at last, I went to watch a movie Jack Reacher! yesterday, I remember the words of Tom Cruise. Why the person serve military ?

1. To maintain the family tradition

2. To be a patriot

3. To get a job

4. To kill a people.

Let me add one more, I became military to be a pacifist! Here it ends the story of transition of being student and civilian for last two years.I will start my new blog living in “Lawrence
: Navigating 360 degrees”. And this will officially complete my
blog TRANSITION!!

I love you  and miss you Carbondale.

January 6 2013 Evergreen Terrace
Carbondale`,
        image: '/Travelnew/images/blogspot/blogspot_51f503d98390820d.jpg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'fall-of-2012-reinventing-myself',
        title: 'Fall of 2012:Reinventing Myself....',
        date: 'November 27, 2012',
        content: `![Photo](/Travelnew/images/blogspot/blogspot_12e23eba0dd1ea11.jpg)

 Light At The End of The Tunnel : source: vidomosti-ua.com

Time was moving faster than ever and the life is traversing through the continuum of metamorphosis, swinging like a virtuous cycle of weather in mid-west. The change would be inherently different and complete the transition to civilian life as a student at SIU for two years. It was a remarkable experience in terms of culture and academic career. Now, it’s less than 18 official days in Carbondale. The days were extremely busy, fast, and exciting with the last cycle of academic stress fading away faster than ever. Spending endless and seamless time in EGIS lab, wondering about the where I will be gone in next few weeks. Thinking about careers and interview cycles, and wondering about the spatial cubicle where I am going to fit.

The last six weeks has been like speeding a car in 500 miles per an hour in stress and enjoyment, the juxtaposition of life. The most fantastic and mind boggling lectures of Agent based modeling entrapped with the phenomenal articulation of Hexmoor that certainly has the royal blend of appreciation and motivation. The course navigates you in the extremes of two different sciences, the logics of metaphysics and knitty-gritty of computing systems intercoupled with natural adaptive systems. The phenomenal examples of social and natural science theories that have rich ingredients of agents and multi agents’ systems that human always envision of , compels researcher's on developing these complex adaptive systems by analyzing the microscopic behavior of natural agents.  Evidently, it became the best class I ever took at SIU and elsewhere in my life, leaving the intellectual residues inside my grey matter.

The volleyball and soccer games that rejuvenated the spirit of sportsmanship and helped to stretch our muscles and helped to feel the helm of nature. Irony to that, we had to limit our self to participation in matches without any glorious victory that we always dreamed of.  Nevertheless, it was fun while playing in a team, appreciating the sports and feelings the nice and beautiful weather, and lovely football ground of SIU near the Clock tower in Carbondale.

The sinusoidal wave of climate curve in mid-west and getting acclimatized with ups and down of nature. Intercoupled with the climate behavior, the climate of politics was also intertwined into grooves of concentric circles that have always been difficult to traverse. The global security issues that’s lingering for ages in middle east seems more escalated and triggered, the Libya and uprising of Arab Springs were a global political debate. The American presidential debate of Obama and Romney created the synergy of political wave in the multi facet dimensions of national, regional, and global scale inside and outside of America. The downfall of Obama in the first debate and the bouncing back in third presidential debate along with the grinning of Joe Biden has been ratified by the people of America. The lesson: we need better health care, education, jobs and immigration reform. Will Obama be able to keep these promises? - Without the help of republicans in congress! , his close allies and Americans. Good luck to president in solving the chaos of economic downturn, regional and global issues, and expectation of American dreams. The country has been highly polarized in the decades with red and blue. Obama’s most astounding address at 130 in the morning, the day he was reelected the president, was the foundations of ideologies that are sparkled in the mind of majority of Americans.

The other day, we spend endless hours talking about society, politics, imperialism and socialism. We know we are not going to change the world and I don’t want it either but it’s always fascinating when Eric, Diwas , and myself get together and  deeply indulged in  social science deemed in the false virtual hope by pretending like a social scientist and architect. It’s getting cold and I feel like I have to stop riding my bike but I felt like I love this bike more than everything else. The bike will be in craig-list soon!! Sorry dude…..! I am fanatically poor.

The job interviews were cunningly interesting in the beginning but used to be the same rhetoric of similar questions. It was fun to talk with many people and experience the interview processes. Some of them were very difficult and I realized I need to spend 6 hours credit course of mastering it. I am still in the process of getting a job but overwhelmingly excited and motivated because of these interviews. The first on-site interview was at St. Louis, and then I traveled to Little Rock for another interview and will be traveling to Denver next week. It was great experience and learning something out of the box in life.

The changing leaves at the Garden of Gods, the sediment rocks and the 360 degrees views of Shawnee national forest showed the glimpse of natural beauty of southern Illinois. The Indian Cultural night and my performance as a Maharashtra lad was fanatic if not utterly lunatic,- I don’t know anything about the culture and a dress that I was wearing that day. It was second experience in a year doing a stage performance in front of hundreds of people, thanks Carbondale you taught me that!

General David Patreaus fall down was shocking to me but it was a retrospect of masculine glitch. Nevertheless, the general will always be saluted for his long career in armed force and making the war strategies and doctrines. I still remember when consular officer asked me about whom really I admire? when I was interviewed for US visa in May 2008. Being a military officer, I gave him the solid snapshot of General Patreaus who was commanding the force in Iraq in 2008.

[

![Photo](/Travelnew/images/blogspot/blogspot_de5e9f0c9aebe0aa.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcn9wpX7eGj99Ym9KNI3eLZpD1wJthuCWmnOdlQjwgUFZkALs1sJD7gM8UVSokxFnP-8x8JYWH8IFTqMm922cdsYMvWKg6xxvs9dGyqcy_d-XwYpe4kCc1akva7y878Vyvhwht/s1600/DSC03508.JPG)

November 2012, Murphysboro, IL - Little Grand Canyon

Watching James Bond Sky fall, 23rd installment of Bond series at Carbondale mall was exhilarating experience although I like Pierce Brosnan than Daniel Craig. Surprisingly, this theatre was almost full for the first time in Carbondale. It was great experience to watch with so many peoples in the Theatres. I don't watch movies in Television or Laptops because I don't have a good one or maybe I love to watch with many people. Again, hiking at Little Grand Canyon for the last time of the year where we saw fallen leaves and beautiful scenic. It was an incredible experience.

Carbondale got deserted!! Oh I just realize it was Thanks Giving!  Week. Enjoy the holiday season and I look forward to spend wonderful time for next 18 days at Carbondale officially!..D+18`,
        image: '/Travelnew/images/blogspot/blogspot_12e23eba0dd1ea11.jpg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'the-change-summer-of-2012',
        title: 'The Change.....Summer of 2012',
        date: 'September 1, 2012',
        content: `[
](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5NWw5BlyXgnUK33ChJxBZO68Zhs4yy36JWE1NDxXqF2uG2ljNQUMGkWWJCOUI0bhxWnVzbdiiV-271f1S2dbp70xGBv4q9dFUTFuvYW-al6qE5CKUbTcg-0zNI0bg2I4JgAUy/s1600/DSC02937.JPG)

The
 long summer days were fading further away towards the end but were
naturally gorgeous. The temperature was crazy rises hundreds for a week
 and cools down little in a while, taking us to and fro in a natural
helm. The school and Carbondale looked utterly deserted. We made the way
 towards little grand canyon. The hiking in little grand canyon near
Murphysboro is one the nearest place where you can hike in Carbondale.
Although Its been couple of times but hiking has been passion and a
fashion, the ease outdoors that cost null but excitement and few Nat
bites.The trees looks warm and soft, gentle and calm. The brink of
physiological change induces the environment in the realm of natural
perfection with minimum faunas diversities.

[

![Photo](/Travelnew/images/blogspot/blogspot_07483f73f932b773.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5NWw5BlyXgnUK33ChJxBZO68Zhs4yy36JWE1NDxXqF2uG2ljNQUMGkWWJCOUI0bhxWnVzbdiiV-271f1S2dbp70xGBv4q9dFUTFuvYW-al6qE5CKUbTcg-0zNI0bg2I4JgAUy/s1600/DSC02937.JPG)

Grassy Lake, IL , 2012

I
 got lost in nature for a while every-time when running near campus
lake and evergreen terrace park, the environment endlessly takes us to
the realm of natural fantasy. I became more indulged with nature and get
 amazed each time seeing the beautiful terrain and landscape mesmerizing
 the mind for perennial utopia. The summer barbecue and momo’s
(dumpling) were a part of life as we were sandwiched between the
eastern and western culture. The gardening in the pleasant hill road
was not only a fun but was a place to know much more about farming of
larger community from all around the world and triggers to know about
the fertile soil and agricultural industry and organic farming.

Berry
 Picking in the farms of southern Illinois was another wonderful
experience. Traveling along the way of different wineries and vineyards
gives the glimpse of exotic adventure you can feel down in mid west.The
modernized and scientific agricultural system and berry picking was so
phenomenal that fresh berries from farm was sticked in the tongue
forever. As the wine testing begins and bartender starts to explains
the bits and bytes of wine, I get indulged with soda with cautiously
listening to the metaphor of wineries. As the miles picks up ball
seamlessly in one of those wineries west of Carbondale, we felt the
passion of miles and natural beauty of the place was simply the analogy
of each other. Earlier days eating the pies and German-menu restaurant
at Alto Pass and traveling along the Bald Knob Cross - the symbol of
peace with its aesthetic beauty sparks the imperialism of Christianity.

Watching
 the movie Dictator ,That’s my boy, The dark knight rises, Hangover part
 II, Ted , were great experience in a quiet theater in University mall.
 Then there was series of summer concert where you can dance, dance and
 dance , something that you can enjoy free in Carbondale and drink a
beer, be a part of the huge crowds in this University town.

Football
 and Volleyball mania were helping us for the physical and made the
sporty summer. Then three days in Kentucky trip was awesome, where we
had great barbecue ,roam around the beaches of land between the lakes.
The other week Grassy lake boating was fantastic beside the hook get
stucked down deep in the big log that was eventually pulled out. It was
so much fun when jumping in the middle of the lake! in the cool and warm
 fresh water.

Traveling
 all the way to Southern Kansas and Omaha was a great experience. The South-en Kansas looks amazingly dry and deserted with less floras and
faunas scared me of the rural America. Omaha was pretty nice city with
decent size and looks green and amazing with little ups and down of
terrain. Zoo in Omaha was fantastic where we can see the collections
from all over the world , more specifically, the aquarium was gorgeous.
However, i felt more pity towards most animal who are confined in a
small geographic space, leaving way there lee-way. I am comprehending
whether man could have saved the dinosaurs from the extinctions if we
had museum or It’s simply the human encroachment and imperialism. I
will think twice about visiting to zoo next time as it really hurt me
from inside.

Then
 other day we met a troubled woman in a bar when discussing the
philosophy of our life, and again meeting her co-incidentally in front
of ice-cream parlor was amazing experience.

Rock
 climbing in recreation center was fun and memorable experience. The
skillful way of doing things and learning about fundamental skills were
important rather than accomplishing a short goal of climbing that we
accomplished in no-time. The lecture of Agents by Dr. Henry, the best
lecture in my life was simply the abstraction of philosophy,
technology, and nature. It literally proved the natural systems are the
best system to portray any human achievements. The modeling of agents
and his articulation compels to comprehend forever. The meeting at SSA
after ages was refreshing and motivating with peoples sharing the box of
 same belief and ideology.The friday night as usual , Cali’s was
restructured ,and the Carbondale is wild and crazy again.

Dr.
 Schoof’s potluck program where Dr. Lant’s Fishery101 lecture was an art
 and craft of fishing, something i never understand why people are so
fond of it but motivated me for the quest of digging it deep down.
Finally, the fall has already started, the presidential campaign has gain momentum like hurricanes Isaac, Leslie etc. and would continue to have more impacts on national and international level.`,
        image: '/Travelnew/images/blogspot/blogspot_07483f73f932b773.jpg',
        tags: ["Blog"],
        location: ''
    },
{
        id: '2012-to-2069-the-game-of-number',
        title: '2012 to 2069 - The Game of Number',
        date: 'April 15, 2012',
        content: `When I pull the curtain of window in bedroom, the white snow
has already covered the ground. It was the first snow of the season. We were
about to leave for a trip of 2700 miles all the way to New York from Illinois. That
was one of my dreams to travel all the way from Midwest to east coast. We left
the Carbondale at 6:45 in the morning and passed through the Marion seeing the first
car pooled off. As we move further east towards Indianapolis and then Cleveland,
we saw couple of wreck. Amazingly we had to fix our watch when we enter the Eastern
Time zone. We decided to stay in Ohio.
The other morning, weather was pretty and sky was blue and clear, it looks
cunningly beautiful. The Pennsylvania looks endlessly gorgeous with high and low
ridges, the terrain looks amazingly unevenly plethora, I felt that was the
most beautiful state I ever had visited in US. As we move into the New Jersey,
It was already 3:00 PM, the traffic looks restless, giving us the flashback of
New York, the headquarter of the world.

The New York looks amazingly beautiful at least in the
aesthetic beauty, perhaps the most diverse conglomerate of man kind. The big mansion,
the bridges, the crowded peoples didn’t lured and enticed me as it looks recklessly
and chaotically fanatic. The scenery from the bridges of New York looks so
hilarious and yields us to rethink about the superb civilization of human
beings.

From Hoboken New Jersey, We look at the spectacular view of
New York City. The other day we took a ferry to Staten Island, perhaps that is
the only free things you can expect in the city like NY. New York metros looks
so much complicated but I remembered the metro in Beijing in 2007 that looks
more horrible and crowded. However, traveling through the metros in the big
cities is not appealing as it should be, you will be always leaving the life of
uncertainty if you are not a day to day commuter. We saw the financial capital
of the world, Wall Street, one of the worst tragedy of human civilization, the bases
of demolished twin tower. The city looks very vibe with plethora of diversity
and for me, a chaos of uncertainty. The people will gather in the new year-eve
celebration in Manhattan.

The other day we went to Co-Co Key water resort in Mt.
Laurel, NJ and had one of the best experiences in the life. It was so much fun
as we pass through the tunnel. The
Queens looks like a typical Indian city like Banaras where you have to think
whether you are in US or not, the diversity in queens and the environment in
queens look very uneven than typical cities of the United States. Perhaps,
being the land of immigrants and home of hundred of countries, Queens
represents the unique perception in New York City. It could be interesting to analyze
the dynamics of heterogeneous society for sociologist and cultural
anthropologist but for me it was obstructively pathetic.

The day was New Year eve. We decided to go for Dance Party
at 42 Route 46 in Wayne, NJ. I was so lucky to win two T-Shirts. That was the
great time, the excitement for New Year, the seeds of thoughts, the emotions of
present, and the inspiration for the future.

Finally, on the day of New Year 2012, we decided to travel
to Atlantic City, the city of casino in the east coast in the beach of Atlantic
Ocean. It was really a big co-incident that Pit Bull was in the ocean city, the
very day. Atlantic City looks calm in winter but again the city of passion and
fashion lures us. Although, it was not a summer time, city looks uniquely
blended.

I was so disappointed to see the casinos for the first time
in my life, I saw how humans are mechanized in front of
those tiny machines seamlessly for endless hours , the passion and indulgent of
an addiction. I played in casino for the first time, surprisingly; I was not so
excited although I won the first game.

Seeing the Atlantic Ocean for the first time was an exhilarating
experience. The sand was cold; the wind was chilling but the passion to see the
ocean for the first time was euphoric and tranquilizing.

The houses in the beach looks awesome, absolutely peculiar
and the sounds that you can hear in the early morning shows the life is same 24
hours a day, the clock keeps on ticking seamlessly. Later we traveled back to
Queens and ate in Indian Restaurant, the food was great. The other day we came
back seeing the wonderful ridges of Pennsylvania, stayed again in Ohio, finally
we were back at Carbondale. I felt good
and excited, to see my home for a year. It was such a wonderful trip for me
traveling more than 2700 miles and seeing the natural beauty and the
civilization of eastern US.

The school started again, the chilling weather was on the
door-way. School makes the life exciting but busy. Amazingly I never realized
that I was in the middle of the semester and the spring break is already over.
The Tornadoes hit badly in Harrisburg, which was only 50 miles away from
Carbondale. I felt sorry for the loss; the Midwest is prone to this
catastrophic weather. We never know the other one might be coming anywhere. As
the temperature goes off and the spring shows up with beautiful buds and leaves
in the plant, I realized that life is moving faster than ever and happy to
enjoy the wonderful weather outside. The international cultural show 2012 was
memorable experience for me.

Finally I am expecting for the summers very soon as the odd
weather become terrible, killing 5 peoples in the Oklahoma Tornadoes; back in
Nepal, people have just celebrated New Year 2069 – giving not only the glimpse
of 12 hours ahead but a feelings of 57 years ahead!! – Happy new year to all of
us, the numerical illusion of 2012 to 2069!!`,
        image: '/Travelnew/images/blogspot/placeholder.svg',
        tags: ["Blog"],
        location: ''
    },
{
        id: '24-7-365-days-cocktail-of-past-present-and-future',
        title: '24*7*365 days – Cocktail of Past, Present, and Future.',
        date: 'December 23, 2011',
        content: `The clock ticks seamlessly for 365 days. The beautiful greenery
are gone; trees are hibernating for the snow that might precipitate any time.
They look insanely naked, utterly natural, and blatantly transparent.The sun loves to hide, most of the time. I didn’t
realize that time is moving so intensely yet with subtle experiences, and
everlasting spatio-temporal memories, keeping myself in the verge of litmus
test. Nevertheless, the year 2011 has
been phenomenal for me. It’s been
exactly a year in Carbondale, and I remember vividly the white snow, when I arrived
here last year, the very same day. Paradoxically, the global myth of climate
change or the hoax that was always there which has never been noticed before, at
least invincible for the penguins marching in the poles, and perhaps, absence of snow in Carbondale. Personally, the military attire is
relinquishing, and fading away faster than ever, hopefully, good things are staying
forever.

As we walk around the Carbondale main-street, the downtown of
Carbondale, Friday nights seem to be extraordinarily and plethora in
enjoyment. The beautiful wind and midnight, PK’s and Fuss ball, Cali’s and the
DJ’s, are bitterly enough to get rid of the natural beauty ,and humans encroachment,
the dynamics and the vibrant Carbondale, at least on the Friday night.The Cali's has been wonderful place with dance music drumming our minds and souls , dragging our body to dance seamlessly.

Other day, we watched
the captain America, in school’s theater and figured out that it was one of the
worst movies I ever watched. It merely takes the advantage of veterans and inertia
of status-quo, molded for commercial ratification, absolutely fusses for me.
The temperament of erotic kiss, the notoriously masculine life of soldier was
not merely an extreme but coupled with hyped bio-technology that not only pushes
this world towards techno-human but inherently degrades the aesthetic value of environment.

I remembered the time in the Bangkok in the year 2004, an
art of striping! I remembered the movie Pretty Woman each time when we were in Desoto-the
club!, cultural shock again but resembles the beauty of woman shielded into the
gas chamber and the thin layer of vacuum that separates an individual with the realm
of reality, and makes you feel hyped, take you to the virtual eternal soul,
explicitly fenced by the gleaming and smoothing wax, that get excited for the
insane rein of masculinity.

The temperature began to drop sharply and we feel the
coldness of the winter knocking in the door, making you ready for the cold days
ahead. The football game was more than excitement than we were wondering; the
participation of Nepalese Team was really encouraging and playing for the first
time in a team and in a match was again another personal achievement for me. Also
we took a participation in table-tennis completion and as usual ended up with
nothing in our hand, but a sense of experience to play any sports in more professional,
and structured paradigm.

The other day, I went to Fredrick Town, the small country
town in the MO and was trying to portray as a cow-boy for a while, looking at
the farm house, and seeing the hay getting ready for the icy-winter. The
enjoyment and the fun, was certainly the ballooning of the feelings in early
teens when we used to watch the cow-boy movies. It was so much fun to learn
horse –ride, knowing little about the saddle and behavior of this wonderful animal,
yet it inherently pushes you to start the cow-boy life in rural area, with
a pacifist insignia in a mind. That was
one of the most subtle memories of the year 2011. Thanks to the wonderful
creatures and who cares them.

Again, We went to east of the Carbondale and watched
entire seamless united states as much as we can with our greedy eyes that want
to see everything far up to the horizon. It was a flat land yet I could see the
some ridges of the small so-called mountains. Being Geography major, it’s a shame
to me as I couldn’t locate east or west!

GIS student society was instrumental in starting the
different GIS related documentaries and we watched couple of them with Soda and
get amused with geo-spatial technologies having huge impact in our daily lives, technology is changing faster than ever and shaping our life
to understand it more vehemently and apply to solve the problems of the all
disciplines. Thanks President Amber, for the refreshment and
encouragement you showed up to start our club.

Playing Geo-caching was a noble idea for me, Thanks to
Nicholas. It was fun when we start to figure out the Geo-cache around our
school area and get excited to write the name of GIS society of SIUC in those
miniature log books. That was one of the exciting game I played.

The growth of SSA (Secular Student Alliance) at SIUC this
year has been instrumental in shaping the secular movement and sharing the
secular values to the larger community in the region. From five members to more
than 30 members, we are really excited to keep the spirit and momentum of our
movement. The death of Hitchens was really a big setback for the entire
community and around the globe. Some other day, we attended the in-house
concert in the university premises and get indulged into the phantom of music
in no-time.

In the outskirts of the Carbondale, neighborhood looks
beautiful and amusing, the houses and streets are decorated with lights and
garlands, waiting for the snow to come and flush away the bad memories forever ,
reviving the fresh hopes, expectations, motivations, and initiations, for the year 2012. The semester is over and the schools
looks completely deserted and is keenly waiting to revive its presence in the
year 2012. I am excited to travel 3000 miles to feel the New Year in New York and
Florida, next week, hopefully my last plan for the year 2011. Good bye 2011! and Happy New Year and
Holiday to all of you.`,
        image: '/Travelnew/images/blogspot/placeholder.svg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'fall-in-carbondale',
        title: 'Fall in Carbondale',
        date: 'October 10, 2011',
        content: `[

![Photo](/Travelnew/images/blogspot/blogspot_54367690e344e8b5.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSvhCgWchIHxsHCK3Qf0VAMqmUQNp3B8ehyphenhyphenI39s8qKdU8y_UjfcmuLYJ2-lb3tsD4cZB3T7zM2HwWOUnb393ci6llObBmkBEwYbRUgGDsleTFzPSFJ_jNJk-PTJ8V6fhq6Gf7C/s1600/DSC01019.JPG)

The Garden of Rocks, IL is a colossal pinnacle of rock that tranquilizes the thought far beyond the horizon. As we watched the Shawnee National Forest, we can feel ourselves in the foothill of Himalayas in front of us, mesmerizing the wonderful high cliffs and rocks with aesthetic beauty of the nature. The multi-color of leaves with the leaves falling apart and the changes in the weather symbolizes the analogy of life cycle of all the living things in this beautiful nature. We realized that the first fall in America has already started to emancipate vividly in our gray matter and it would be resided forever in the spatio-temporal facet. As we climb the rock and see the spectacular colorful forest, we were struggling hard to capture the images, inherently trying to be more natural than we are, thanks to the development in digital photography that helped to portray it endlessly and seamlessly in our electronic memory sticks. We were tired of capturing those endless images and we were being inherently insatiable and demanding to feel the nature.

The Trip to garden of gods was not only memorable in terms of peculiar natural beauty and aesthetic rocks but was also a phenomenal in the sense that we were able to dance and sing Nepali folk songs with delicious Nepali food. It was analogy to the picnic organized and barbecued dozens of times in the foothills of Nagarkot, Nepal, one of the most popular tourist destinations of Nepal, the reminiscent of my past! That has become the milestone of my life

.

Watching movie Hanger 2 was one of the fantastic moment in the auditorium of student center and the movie was not more than a typical Hollywood settings dominated by Bollywood story. It was fun to wash the residue of the long and hectic week with so much of laughter’s- the best medicine. Going to Pk’s bar is a typical Friday night schedule, intrigued with the rock bands and crowded environment has become the normal schedule.

The school looked inherently busy in the month of August. Students seem ubiquitously occupied with the books in their hand and the academic environment entices the learning and knowledge sharing environment in diverse society. I was so surprised and curious to see so many people in the school at this time of year that I never felt before watching the dynamics of peoples in front of the library and fanner hall simulating it with movie Matrix in the grids.

Riding the motorbike for the first time in US with Eric was not only fun but a subtle change that I was looking for even though I spend all my life riding a motorbike in Nepal. The fall was the most beautiful time of the year and the nature was giving a good company to enjoy the perennial beauty, both in vibes of physical beauty and spiritual feelings.

Nepalese Student Society (NSS) organized the barbecue and it was fun to feel the culinary skills of some of the Himalayan chef, the delicious food lasted inside us forever. The football game participation was not only fun but it was a co-incidence that we played a first game with India, our neighbor.

I was more confused, surprised, and amazed when I was unanimously nominated for the secretary of Nepalese Student Society that was something I never thought of. Ice-cream at Dairy queen in mid night was not a noble requirement to live a decent life in Carbondale but it was more memorable and something that we always enjoyed in the Carbondale main street. Dr. Schoof promotion party was not merely a formal place to talk much about our professional goals but it was a juxtaposition to share culture, ideas, perceptions all the way from east to west, north to south, and the 360 degrees of Geography and all through the spatial space. The Geog500 was typically a demanding course but it helped us to understand the diverse research paradigm that exists in the Geography Department and helped to know each other’s.

September eleven passed away leaving behind a decade long tragedy that reminded me how I was curiously watching the BBC in Nepal, one of the worst attack for the humanity and civilization that changed the political and economic dimension of the world.

Also, it was more interesting when I was proposed for the vice-president of GIS club. We visited the geospatial services department in the Morris library and get acquainted with activities over there. We were so surprised to see the different kinds of maps and satellite imagery that were backed up for so many decades. However, we were also bit disappointed as SIU’s GIS service has not been much emphasized and the need of digital maps and cartography infrastructure is the need of an hour. The other Saturday morning, we went to Marion for volunteering for the Crab Orchard, it was wonderful time cleaning the trash around the lake area and making the place beautiful and clean. The two antique beers we excavated were much more interesting and got surprised what peoples do when they got drunk!

It was so much fun in Cali’s, the Friday night passed in no-time leaving back the long weeks. Dashain Festival Celebration in Evergreen Terrace, and spending time with two boys of Chris was incredible experience to understand children’s psychology and temperament, taking me further away twenty years back in Katunje, Bhaktapur.

The change of the leaf is clear notion of the change that is inevitable, that we can feel and perceive and it’s the nature that will be driving us seamlessly, all we do is we follow the rut and trace it for our destiny. Good luck for the journey! And embrace the natural beauty of the fall in Carbondale.`,
        image: '/Travelnew/images/blogspot/blogspot_54367690e344e8b5.jpg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'the-summer-of-2011',
        title: 'The Summer of 2011',
        date: 'August 27, 2011',
        content: `[

![Photo](/Travelnew/images/blogspot/blogspot_46d255b8efc22ecb.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3uJ7LsqrouM210B9M8YRdEjfmVqZd8Mu64loykoS2uwbYP-3WgEBv1RqeN0xX38ovX_yXkLsy2Q4h4fri7H6-o8zr_DL1Hd_1yB5I0Sb6jF5r3SVJJPZZudLa7npzbu534a5B/s1600/DSC00315.JPG)

As  the sun gets more hotter and the days become muggy and humid, the life  in carbondale conspicuously irks in the mid-day of August. However,  the greenish environment and the schools dynamics with new students keeps the city  cunningly vibrant and beautiful, leaving back the spatio-temporal  memories of climate in the horizon.

I  was quite surprised and scared to see the hives of mosquitoes that were chasing me in the  garden in pleasant-hills, have never seen the mosquitoes chasing the humans like this  before - was a kind of scary like a bio-mutant fiction. The passion of  learning how to swim and some of the cultural shocks were common  phenomena that i came acquainted in the beginning.The other day I  went to hiking with Jay in Giant City, the eastern part of carbondale  and see how early inhabitants of carbondale -Nomads lived in the cave  hundred of years back.

The  commencement ceremony drives me to remember the time when i  graduated from Kathmandu University. Although the environment looks  pretty much different, nevertheless the goals remain unchanged. The new  graduates were excited after the achievement they made and were flanked and in vanguard of their friends, classmates and  educators. Couple of Nepali friends were graduated and we share the  happiness, success and prosperity for the days ahead. Good luck and Congratulation Salukis!!

Dr.  Carver’s Linux system Administration course was not only a tech-savvy  lecture but was a kind of philosophical in the sense that people knew  very little about open source , open thoughts, and freedom they can  enjoy in the computing environment. It was a humorous , interesting and  mind-blogging class i ever had in my life.

The  other day as I reached the department, Jennie was showing mom’s picture in  Daily Egyptian, I was a kind of surprised and shocked when  mom’s picture is in front page with caption “ Gardner’s from Root of Himalayas’, We  shared the happiness all the way from Carbondale to a half-way of  world, Nepal. Gardening is something that's always what mom wants and  she is fond of!, Finally she got her appreciation from DE.  Congratulation mom! for being celebrity.

The  other day we went to golf-training school in the eastern side of  Carbondale. I had realized that golf used to be the game of elites back in  Nepal and its not the same in US. Tried to make the few shots and missed  hitting the ball several times until Eric taught me some entry level  gizmos to catch up with. It helped me to wash-up my frustration and praise Tiger wood( although i suppose he is in pain!). It  was fun and excitement, and have never imagined the internal mechanics  and ingenuity needed to succeed.

The  summer concert in the school was one of the most exciting part of the  carbondale. From bands Space Capone to Fools of Rowan, there were no  words for excitement and fun, enjoying the music and dancing in the dusk. It was one of the most beautiful experience in the school in the humid days. The 2011 Sunset Concert series comes to an  end with performance by alternative rock/pop group Fools for Rowan.  “Burnt around the edges”, “Dead” Mullin’s  vocal, Aron's bass and Jordan’s drum was still vibrating in the ear-drums  and the vibe will be echoed inside the tributaries forever. As the bass  get inside the ear-drum, it travels all the way through heart and soul,  the physical body keeps on moving seamlessly, revamping and  reincarnating spirit with triumph of happiness, excitement and  enjoyment. Thank you guys! It was wonderful time. I loose couple of  pounds!

Eric  and I spend endless hours in Irish bar , taking about our dry ideologies  and thoughts. Sometimes i used to drink coke, Eric likes Beer. It used  to be all the way from social science to politics, from cartoons to  science fiction, from celebrities to Nature, and from quantum technology  to radio-active substances. As we see the world in mulch-facet and  multidimensional way, it was really a tough job for us to come with some  solid ideas to pacify our boiling thoughts.. It is seamlessly interdisciplinary that has a  discrete yet interrelated ideas and needs strong empirical  justification , far more than quantification. We were trying to mess up  sociology, economics, politics, international relations, nature, science  and more importantly philosophy. Our ideas are reinforced by the  susceptible and sustainable pillars of human, environmental and  scientific values.

Common  grounds has been the place for us to discuss the issues in free-time as  we end up in playing with chess and drinking smoothies. Sometimes we play  ping-pong in recreation center. Oh i learned how to swim! Yet I have to  testify my null hypothesis.

The  other day Eric taught me how to play poker! I love it, he made me  the gambler!..lol ;) No, that was my destiny..Oops..i should have been in Las Vegas. And one day we end  up in one of the so different house in carbondale, it was so scary and  different. I have never imagine life could be like this and people can  be insanely crazy! I was so scared , finally we made out of the place at  4 in the morning and went to Eric house to sleep. Those were creepy yet  scary Friday nights in carbondale in the hot summer days.

The  trip to Madison was fantastic. Oh.. i drove in the high-way for the  first time. It was fun but a kind of scary-fun, a juxtapose. I have no idea how  people can concentrate on driving like that. But i was more comfortable  when we were coming back.

We were lucky to attend reception ceremony of  Nepali couples and was more suprised to meet one of my friend from  Nepal. It was so amazing and suprising. World has been global place, you  are going to meet someone whom you know wherever you go. In fact, Kathmandu is small  and has the strong social and cultural foundations that links Nepali society perennially . We went to see House on The Rock , it was  fantastic place to see especially the infinite room, the kitchens and  the lavish house itself built on the top of the rock. Then we went to  see University of Wisconsin, Madison. Wow, the school looks great but i  feel carbondale is better in terms of natural environment. We walked  around the downtown madison, ate a pizza and took a bus to the  university apartment. The previous day, i was more suprised when one of the  guy acquainted with us and he asked about peace process in Nepal I felt like world is  keeping eyes wide open locally and globally.

The  scuba diving was one of the most exciting adventure i ever had in  carbondale and perhaps in my life. It was so much fun and interesting. At first i was scared as  i even dont know how to swim properly but when we submerged inside and  get assimiliated with artificial respiration system and appliances. It was so much to  see the fish underneath the water, it was completely a different and  exotic experiences. My instructor was awesome. I love it. Finally i have been in the surface of the earth for a long time, have fly entire world ! 360's, from East and West, and down to the earth couple of meters in Scuba! awesome experience...

As we go to PK almost every friday night, we just get crazy and listen to local band. The clock goes to 2 in no-time and the summer was running out!. The RSO fair was so much fun as many people get signed up in our RSO.

Finally,  the first meeting of graduate students kicked off in Brian’s house.  Thanks Brian for “Thesis-Mhessis” It was lot of fun and the fall semester starts. Its going to be busy days again, intrinsically busy this time!!

Enjoy the Fall and welcome back home Salukis.

P.S. ( As i am writing this blog, NYC is evacuated because of IRENE, please be cautious entire-east coaster's we are with you ;)`,
        image: '/Travelnew/images/blogspot/blogspot_46d255b8efc22ecb.jpg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'after-six-months',
        title: 'After Six Months....',
        date: 'June 24, 2011',
        content: `June 24, 2011

Carbondale, IL

The days have already started to creep, inherently long and dry, explicitly muggy and humid, life seem to freeze in the mid-day and waiting for more severe hot weather to experience. The hot weather has puffy effect in the life-style of an individual compelling them to stay inside office mansions or in an apartment. Nevertheless, days were extremely lousy most of the time but a kind of juxtapose culminated.

Trip of Kentucky to visit the biblical museum was not a noble idea proposed by Ben as we love to get indulged with atheism and secular humanism; however it was the decent idea to think the same from another facet of the cube, a metaphor for so hyped rapture. The trip was exciting when the Irene’s car got broke in the middle of highway, as we try to do drama of mechanic; the idea got flopped in no-time. Luckily, we were successful in reaching the workshop near-by with Eric’s calmness to drive, then got our car fixed and drive towards the museum. As we reach the museum, I was blatantly shocked by the comparison of Darwin’s Evolution Theory with God’s Evolution or Revolution Theory of seven days or whatever it is..!. We walked through the each of the chambers, passing through the devout Christian each time; it was an embarrassing and illogical findings and comparisons that severely lack empirical reasoning. The movie they show at last not only undermines the achievement of human-kind in science and technology but on top of it, it uses the animation technology to describe the Christian religion and refuses to anticipate the development of science and technology. Later, we move to see the some horses and strange animals that make us feel better and finally we move towards our way after having wonderful Dinner at Meditarean, Louiseville, seeing the huge Ohio River and make our way towards Carbondale, Illinois.

The other day, Ben, Irene, and I made the wonderful hiking experience at the little Grand Canyon. It was such a memorable experience as we lost the trail and we got freeze inside the swamp. The mosquito bites seamlessly and the bruises were all over our body, a kind of scary experience but fully interesting, thrilling and adventurous when we lost the trail and had to walk straight through forest to reach parking lot. As the Ben uses his compass compassionately, we were successful in making our way towards the parking lot and got surprised when we reach the place exactly from where we started it. It was lot of fun with so many bruises, at the end of the day, sleep was so strong and deep that I never realize it could be so beautiful and perfect unknowingly!!

The following day, we went to tear trail hiking. The hiking was very short but was memorable in a sense that we nearly got caught up by tornado when we were coming back. We got so surprised to see the power outage in the small town of Anna and sneak inside the rural ice-cream parlor to have strawberry ice-cream.

The other day, we end up in paddling boat in campus-lake and felt so sad when we saw couple of dead turtles floating in the water. Absolutely free-ride in US, never experienced something free like this!. The poor squirrel got fall from one of the tree near Campus Lake as we walking to the trail, it was staying standstill and we thought we have missed of the beautiful creature of this world. After waiting for a while, and getting disappointed about the pain of the innocent squirrel, I made the way towards it to see from near. Amazingly, squirrel ran away and head towards his/her home. Watching movie Panda in the theatre of University mall was another fun with full of laughter and amusement. It was after ages I have watched the movie like this but it was beyond my expectation and I enjoyed it so much.

Murphysboro Wine and Art Festival was so much fun with so many wine-stalls and music performed. I was so happy to see many peoples in the surrounding after a long time and it was amazing experienced as friends got drunk taking the sip of 36 different wines, they can taste! absolutely after paying the ticket price!

Band Perry performance in Herrin was one of the most wonderful moment I spend listening the live music in my life. With thousands of peoples and the beautiful weather, the chord of guitar looms far above the sky and echoes the ear-drums in the dawn. If I die young…., is a wonderful country side song sang by Band Perry, it just stretches further away very far away from this materialistic world making your tributaries in your mind relaxed.

Again, the sunset concert started this month and it was so excitement seeing another “Space Capone “band in the school. The chaos of coke and bear cans, the trash getting full in no time and crazy folks (including myself) dancing was so much fun, the indication of hot but beautiful moment of the year in door-step. It marks the end of six months in Carbondale, still inherently struggling hard to adapt in the academia and to enjoy free civilian life after a long military-service but the shadow is going farther away, melting faster than ever unknowingly.`,
        image: '/Travelnew/images/blogspot/placeholder.svg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'the-wind-moves-on',
        title: 'The Wind Moves On..........',
        date: 'May 14, 2011',
        content: `It was blatantly a horrifying and a thrilling experience when tornado was about to hit the Carbondale. As usual I used to hear the Tornado warning siren every Tuesday in the school and used to be curious of its importance and its existence in the beginning. The tornado passed through Carbondale that evening and It seems that peoples were so scared although I couldn’t realize what was going on as it swept away in the evening. It was an amazing and scary experience in the juxtaposition of inquisitiveness and fear as we get piled up inside our house and continue to check the website for the weather updates.

The school keeps on moving faster than before and I realized that everything is going to end soon, at least for a while. So there were lot of papers to write, many labs to finish and finals to take. One of the weeks was the busiest week for me in the Carbondale, I became cunningly busy. It was an enjoyment and make me feel that time is moving seamlessly and endlessly. There were couple of field visits in different parts of town for the sustainable development class and I really enjoyed the surrounding of the school. Chef Bill’s interesting lecture about making the dining hall sustainability, GMO’s to Laura’s briefing on Organic farming. It definitely aided to visualize multidimensional facet of an environmental problems and social responsibilities. Although, I had never taken any classes in Human Geography, I felt it was the best class I had ever taken in my life although the hopes for sustainability cripples and creeps in horizon despite of global awareness in climate change. The advancement in technology and green technology practices we are adhering shows some glistening hopes ahead in contributing towards the sustainability of environment.

Secular student’s alliance picnic on May 3rd at Giant City Park was fantastic. As we move our caravan towards the park, it was beautiful dawn and we missed the way at first and were traveling towards the cemetery. Barbecue experiences and playing golf for the first time were amazing retrospection that would never get evaporated. Lot of barbecue parties was happening in the vicinity of the Carbondale. The other day we went to Hanger 9 and It was wonderful experience listening country music. It was a great time to cool down the grey matter after hectic weekdays.

The other day I met one of the students from Iraq who would be studying Physics soon. It was a great time sharing each other’s experience about different facets of life. What are the barriers for non-English speaking students and how he is striving hard to make it work in short-time to start his PhD program? The park was a good place to explore the naturalism and It has already been my best friend to share the joy and happiness. As we used to walk through the bank of reservoirs, the strong wind splashes into the water and it makes the reservoir lively. The fish starts to pop up and the fishing rods are ready! I was flamboyantly trying to understand the people’s keen interest in fishing. I would continue to dig more.

The poster completion was incredibly interesting and I made first poster in my life. It was a kind of accomplishment for me and I realized what are the basic things that I really need to take care of to make the poster. The department’s fare-well program was inspirational and we were happy to share the achievements of so many members inside our department.

Finally the semester was over and I am looking forward to start my summer ;) I felt I survived!!! for 140 days in Carbondale. Enjoy the beautiful weather and a summer ;)`,
        image: '/Travelnew/images/blogspot/placeholder.svg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'after-100-days',
        title: 'After 100 Days',
        date: 'April 3, 2011',
        content: `It’s been more than hundred days now. Life keeps moving faster than before, conspicuously with the insignia of hope and ambitions flying higher and faster than ever. The school keeps on making me busy and I was moving vividly in the vicinity of indulgent philosophy towards the rationalism of religious neutrality, boasting myself away from the religious fascist and materialistic wilderness of surroundings.

I was busier in starting the local chapter of secular student alliance. It was exciting and challenging task as the school doesn’t have that society. We keep on posturing and chalking around the campuses, engaging ourselves for endless meeting to make it happen. The Newton fish we chalked in the school were fading away slowly but we were more excited when we realize that more baby newton fish started to cripple eventually. It was a big motivation and synergy for us. Although, we didn’t expect large chunk of students who were interested in our group yet we were firmly committed towards the presence of the organization which is going to be milestone of our movement.

The sustainable development lecture sound more interesting than before. As we watch the documentary Corporate – the hopes of sustainability were seamlessly at horizon and it was more than frustration, the ideal of ideality and the fictitious reality of environmentalist and green movement activists. The different buzz word really helped us to understand the multidimensional facet of sustainable practices yet looking around the capitalistic society, the receptions sounds inadvertently weak.

But the global impacts in the climate change is at alarming rate, the recent incident of leaking of radioactive elements at Fukoshima shows the havoc that is having a rippling affect throughout the globe in no-time, the worst nightmare for one of the leader in the sustainable technology and a big challenge to the environmental scientists, economists ,and political pundits. How the environmental ecology and catastrophe affect the social, economic and political equation?

The barbecue party, the cultural show and food festival was not merely a social event but it was the representation, collaboration, and cohesion among different countries to show up their food and cultural etiquettes in entirely a global arena. It was fun making the Momo whole evening – though I was not sure about how to make it ? It was merely breaking the tip of an iceberg and subsequently I learned a lot. Cultural and food festival were amazing. Thanks to the wonderful participation of many countries and especially our Nepalese counterparts for their amazing performance and showing the unity among diversity.

Retrospection of the last 100 days, there were environmental extremities that I encountered much with. As the silt and snowflakes fizzle away, it was exotic and adventurous event in freaking cold days. The last couple of weeks were extremely busy as the labs were infected with Trojans and viruses and that has to be cleaned with the strict protocols of IT department of school. It was long and tiring job but we were happy when the system was restored.

The weather was warming up and I could feel the heat coming far away. It was fun just walking in the park near-by and seeing the blue water in the reservoir where hundreds of ducks swims, laughs and smiles every day. The place where children play seamlessly, the environment where nature and human interaction was more natural than anywhere. It was just fun when seeing the matrix of the environmental entities and their actions envisioned in three-dimensional space. The worst thing about the park is all about fishing. I don’t understand how fishing could be such a great fun for the people. I would be exploring about it more in the days ahead.

The other day we went to watch the movie limitless directed by Neil Burger. Bradley Cooper role as a young guy who got introduced with drug that will unfold the potentiality of human mind. The movie was interesting to watch though it focuses more on materialistic empowerment rather than social and emotional manifestation an individual passes through with the sudden changes in body’s internal dynamics. The weird part of the movie was drinking the blood of human to inject a drug was not merely insane act but individual wish to survive till the last second.

As the spring was in our door-step I was busy in practicing and exploring new stuff I encountered in my life. The military attitude keeps on adherent and strong inside me and I have realized it will take some months if not years, if not decades to vaporize that has a deep legacy rooted inside.`,
        image: '/Travelnew/images/blogspot/placeholder.svg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'after-one-month',
        title: 'After One Month',
        date: 'February 4, 2011',
        content: `The change is inevitable. The change in life, the weather, the need, the perceptions and even ideologies changes with time although it has not been reflected so much inside and outside. It has been more than a month in Carbondale and still I am wondering about my past life and things I passed through. Each day is a new beginning for me with new sets of experiences and the life continues to be adventurous. The feelings of snowfall, walking in the snowflake, being a commuter in the university bus and just wondering in the middle of the class about my presence – being only the one international student in most of the classes were things that were happening so frequently and repetitively.

It is very usual for the temperature to go below the zero degree and life goes on even in extremes. We don’t feel it, people talks too much about weather and climate but again nothing is going to stop for the everyday business. The central heating system of the building won’t make you feel that the temperature is freezing outside.

I was lucky to get in touch with new friends and I have plenty of American friends. The assignments keep on bombarding and spoiling the precious time I am supposed to enjoy. The job has been so far very easy as my American friend is very friendly and she is teaching me so many things beside work. She is truly a friendly girl who has also been to India. She wants me to go to church with her some day. I am just trying to learn American perspectives in life, not trying to change the perception about religion that I have been adhering for long. Interestingly, there was first meeting of the secular humanist community and I took part in the meeting as I always dreamed of being member of larger community.

We went to the theatre in Carbondale to watch the Tourist. It was fun watching movies, it was not a big theatre but they were showing up many movies at a time. Going to the grocery every weekend has been part of the life. Buying online from Amazon has been something very easy and cheap. I was more excited when I got my first pay stub it made me feel that I am worthy somewhere globally and spatially – in geographic perspective. The other evening we had chance to watch another movie in the community center of our housing. The movie talks too much about Christianity but again it was a kind of new experience and had chance to meet many people’s from other part of the life.

Morris library and the recreation center were most amazing things of this school. When I went to the library for the first time, I was totally surprised, amazed and curious. It has so many resources and when you can reserve the book online it makes the life easier and feels how technology can help us to make our life beautiful. We often go to recreation center. Sometimes it’s fun to run in the track but most of the time we are playing badminton. It was beyond my imagination how these resources are made available to the students as I came from the resource crunched country.

The course sustainable development was really bringing lot of discussions and ideas among all of the participants. Most of the time, we were very busy working on assignments and reading papers. Truly, Sustainable Development really needs to be invented sustainably – still lacking fundamental and operational pedagogy to act somewhere in real world Sustainable development course was a course that needs lot of discussion and attention in the classroom. It really stimulates the intellectual debate and it makes me very busy as you have to read lot of materials. The other two courses are bit technical so it was not so difficult to adjust in the frequency.

Some of the interesting things have already happened, I didn’t know how to use the ATM Cards in McDonald, and the lady taught me. I am so grateful to her. Something very amazing thing happened when I went to student center on one of the chilling day; I saw that ATM machine was asking me for the next transaction? I was wondering what the heck this is. Then I clicked NO, then suddenly ATM card popped out from the machine, I was quickly looking for the lady who has just used that system. She was in the elevator down the way; I raise her hand and shouted. She realized that she missed it but was confused and nervous to use the elevator to come up that is going down. I signed her to come back from the other side of building. Finally, I got beautiful smile, she got her card. She must be from Asia Pacific.

Eating habit has been changed completely and I am wondering how it’s going to change after couple of months. So the changes are going on and on and I am just feeling and passing through it, some are very subtle, some are delicate, some are not coming back and some you feel that you can’t describe merely in words, it needs to be felt at the tributaries of your mind and its goes on and on…`,
        image: '/Travelnew/images/blogspot/placeholder.svg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'transition-i',
        title: 'Transition I',
        date: 'January 3, 2011',
        content: `[

![Photo](/Travelnew/images/blogspot/blogspot_586ffe95237b293d.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2-LGlxxmPR95wj4TWaBztAc0_kKEwBlI3MtvpaiM9TqzN97P9rc2OWDEWNfSt3CwNozKXM1RTyAyLm8I8rjFc2qsXS16yfYqJXRmKSNdaSH7T1mnGaQSEMYg_6UGvgJM42RbF/s1600/Picture+022.jpg)

**The Transition I**

Even after traveling thousands of miles, the transition continues. I was really worried abut my long and hectic travel as I have to travel more than thirty six hours. Traveling for the first time in plane was fun after that it has always been the pain in an ass. The military attire and flashback continue to rule me even after months away from the discharge. Nevertheless, I was excited, thrilled, and tempted to start the academic career and family reunion in the new environment. The worst part of the travel was I lost the wallet. It was an antique and I didn’t have the precious thing beside few dollars and driving license from Nepal.

As I reached the Carbondale, the temperature was freezing. The following day, it snowed. I was so lucky to feel the snow for the first time. We played with snow; it was fun and amazement for the first time. Since the university is closed till fourth of Jan, I was not able to finish administrative processing’s. We went to Wal-Mart, International Grocery and other stores in the town. Carbondale is the small university town 5 hours away south from cosmopolitan city, Chicago by train or bus.

Evergreen Terrace is the student housing for the students with family. I was glad to see mom and dad. Later Shashi , Katy and Ella joined. Kabita was stucked in NY for couple of days because of snowstorm. Finally she was able to fly to St. Louis.

All of us were together and we enjoyed eating nepali food in the family. It was fun and excitement. We also visited university premises although it was closed. I went to geography department, there were lot of postures and pictures. Later we went to one of the Japanese restauarant in the town and we tried Japanese food. The other day we went to theatre in university mall and watched tourist. It was fantastic movie. Since we don’t know much about this small city so it was fun going here and there without knowing where we are going.

I still remember the Nepal and my job vividly although it has been the past like the year 2010. All I need to do is to cherish the New Year 2011 as the transition continues. Carbondale is going to be my home forat leastnext two years.

Happy new year to all of you..`,
        image: '/Travelnew/images/blogspot/blogspot_586ffe95237b293d.jpg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'transition',
        title: 'TRANSITION',
        date: 'November 16, 2010',
        content: `[

![Photo](/Travelnew/images/blogspot/blogspot_a1b466ab9b31e0f3.gif)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNPcOyv6C-VsapocVm7WWRHUW5lGId7co2790v6ft5cDuu1efs-a9A_vAjbuBiCxKR2U1zk6l3QJSpjqmVWns2Mn9827dY9EUV-aO-QFHkV347wQo0DUOg6-bbz-x72B2wSCoXYA/s1600/myeye.gif)

After working for 3028 days in Nepalese Army, I am getting honorable discharge from the Military. It was my choice. I started the career in military at the time when the insurgency was at climax. I still remember the General lauding us during our appointment procession for showing devotion in Nepalese Army. At that time, it was Royal Nepalese Army. Now, it’s Nepalese Army, the tectonic shift in national politics. Presently the country is in transition and so am I.

Being armed force personnel throughout my careerin youthful days, Military not only taught me values of discipline, obedience and punctuality but also emphasize the leadership skills and truly military attires. Something I will never ever learn in other public institution of this country. I am just wondering how I will be able to make myself integrated into the civilian life. I have emphatically spent memorable and bitter days in military. I see the light in horizon and I just want to be a decent human-being wherever I go whatever I choose and whatever I do. The basic principle of my life remains unchanged and the reflection of military life would continue to shine with good qualities that persisted and molded inside me for years. The odd ones, I have decided to leave behind. Military career will certainly create the perennial impact throughout my personal and professional life.

The life during insurgency, current political stalemate and the jittered and crippling peace processare some of the burning issues that the country would never ever forget in her history. The issues of democraticisation and reorganization of Nepalese Army, the reorganization of state continue to linger for the years to come despite of much public and political awareness.

I was just wondering about the integration of Maoists combatants into society and now I feel the same of integrating and rehabilitating myself in the new paradigm; it would not only be a sooth challenge but it will envision me to create new vistas, dimensions, and perceptions for the survival in the new environment. The green uniform, the veterans, and military paradigm would remain into my grey matter no matter what I do in civilian life. When I see the military in the parade, the basic military instinct craved inside me will propel to salute them. When I hear the military playing the tune of national anthem, I will stay in attention. When I see the big generals in front of me, I would respect them with courtesy. When I see the peoples in blue helmet in UN missions, I will think about Army. When I see the president getting ready for president salute, I will be in attention. When there will be natural hazards, I would be thinking about military. When there is emergency situation in the country, I would remember my pathetic days in 2005. When there will be war, I won’t hesitate to act a war analyst. When peoples talk about national security, I will put glass in my eyes.

If I don’t shave for a day, I may be wondering about myself and ask “Am I all right”? If my hair starts to grow longer, I can’t wait to trim. If I am saying NO SIR, I start worrying too much. If I am late somewhere, I will think today the earth is revolving faster. I won’t hesitate to say Hey guys I was a former Major so please just stop teaching me the values of patriotism and nationalism.

These things seem to be very fundamental issues for most of the people’s but for the person who have spent considerable amount of time in the green uniform, it means a lot and it continues to be…

I don’t know how I will reshape my life and what’s going to happen after I quit the military but certainly and surely, I have learned a set of skills and military values that is tightly shielded inside me and it will take time for the smooth transition into civilian life.

Lastly , not the least I would like to thank and salute all the service man and woman in the green uniform who has done a marvelous job for this nation and for this country despite of limited resources; compromising their family and social life. Special thanks to all the personnel of my department who has helped me in a difficult situation of my life and has always been my source of inspiration, motivation and a spirit to work in collaboration for our common goals of peace and development. Salute for the every person in green uniform ….….!!`,
        image: '/Travelnew/images/blogspot/blogspot_a1b466ab9b31e0f3.gif',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'us-may-2009-reminiscent-of-past',
        title: 'US@May 2009 - Reminiscent of past',
        date: 'September 6, 2009',
        content: `**May 6, 2009 , Kathmandu**
 After traveling from all the way from Katmandu to St. Louis via Delhi-London-Dallas, it was exhilarating but a long and hectic flight with so many hassles of security checks and stop over. Delhi airport was crowded with many peoples lying in floors desperately waiting for their flight showing empathy of poor management of space by airport officials. We have to wait more than 7 hours to catch our connecting flights to Heathrow. It was wonderful moment when we start chatting with some of the Nepalese who were also bound to US but via different route.  Conversely, stranded passengers waiting for more than a day to leave for Libya was pathetic. I had a good time with new friend Prakash who was leaving to Baltimore.
 **May 7, 2009 Heathrow international Airport, London**
 Security check of Heathrow sounds much more hectic as each individual has to queue and needs to put their liquids in a plastic bag before passing through the X-ray doors. But Heathrow airport was wonderful with so many terminals and wide spaces along with marvelous duty free shops. However, the internet is so expensive compared to freely accessible services internet in Hong Kong and Seoul airport. Finally we made our way towards Dallas via another British Airways flight after waiting couple of hours in huge terminal 5. Once we arrived at Dallas Airport, we have to start looking at American Airlines flight to St. Louis. The airport was very big and spacious. Finally after flying couple of hours, we arrived at St. Louis Airport. We had to wait for a long before shashi arrived to pick up. Then we went to one of the motel in St. Louis where shashi ordered a pizza and slept voraciously as we were so tired and exhausted.

**May 8, 2009 St.Louis MO**
Then the other morning we had delicious coffee and were preparing to leave for Anna in Illinois where marriage ceremony was offing. Amit was there for driving us all the way to Carbondale. Being the unlucky chap we were caught in traffic and the power failure even in US due to the terrible storm in southern Illinois.  Most of the gas stations were shut down due to the power failure.  Thanks for ladies who helped us to make delicious rice that we ate voraciously after two days of hectic travel at southern hills in SIU.

**May 8, 2009 Woodland’s  Retreat Cabin, Makanda IL**
 Finally we arrived at Anna where nice cabins with enough space, water, television, utensils and more importantly very natural built completely by woods were arranged by the Shashi and Katy. The place was awesome. Thanks to kabir for joining us that night and making it more memorable like a small katunje VDC of Nepal.
 Deepesh did a wonderful job, he drove with his mom all the way from Nebraska to attend the marriage ceremony of his brother. The wedding rehearsal party in Anna was great with little kids doing fun and we were busy socializing with our new family members. Thanks for chuck and Linda for managing all those stuffs and giving us an ample opportunity to share the memorable time. JJ is great guy but I suppose he needs to eat more otherwise he will end up like me.

**May 10, 2009 Anna IL**
The wedding day was absolutely exhilarating. It was the fusion between the east and west. The melody behind the cotton was looming our ear drum so we feel emotional, happy and excited. The bride and bridegroom were eventually there and chanting of facilitator reminded me watching the discovery channel talking much about wildlife and forestry. The chap did a great job. The photo session was great; still we are waiting to see the professional photographs.
In the evening, the reception was wonderful with live music was heart throbbing Jessy dance was great! Man u should be somewhere in Hollywood what are you doing in Kansas? Common u still have time, it's not too late. The fusion of Nepali and English dance was vividly seen showing thediversity of culture and civilization. Vijay thanks for being a professional photographer, I think shashi made mistake by hiring someone else.
**May 11, 2009 St.Louis MO**
How a person could get married twice without getting divorce or annulment. But practically speaking in Nepal, polygamy is very common and even polyandry still exists in the remote site of Nepal. Katy was very happy to get married in Hindu-style. Her sister was complaining that she should get married two times tooo-----a filthy joke guys! Never do that…you will ruin your life.
**May 13-15, 2009 Cadiz  KY**
We visited Cadiz, a small town in western Kentucky. We stayed in Lake House that was built in 70’s. It was wonderful moment grilling chicken wings in the evening. Thanks shashi it was delicious. We visited the park land between the lakes and the live museum simulating the US civilization two hundred years back. I invited receptionist to visit Nepal, u don’t need to make something like this here as our country itself is a demo. She was so surprised and she asked me “Am I Joking” I told her I am not good in jokes. Later she was inquiring her co-workers about Nepal and probably they must ended up in Google- thanks Sergery and Ben. We played bocce ball for the first time, it was fun and exciting, rolling the balls like kids in single digit. The dock was flooded so we use the sail boat to reach the dock. Shashi and Katy must have lost calories to take us to and fro from the dock as it was flooded. Wow! The motor boat was great. We start driving in the lake and were enjoying ourselves but we felt sorry for the birds that has nest with four eggs. We are sorry for you guys. Don’t worry u will have next eggs soon. In the way we saw wild goats, I couldn’t understand how they are going to survive in the island in the winter. Most of us jumped into the water as we have certified attendant and, we had confidence on her. It was so fun, memorable and exotic. Again the barbecue smells fly in the air. Also we feel sorry for Maxie, our neighbor who was very sad because somebody shot his dog. Ironically, we never ate KFC in Kentucky.
**May 16, 2009 Carbondale IL**

 When we arrived in Carbondale again, Quarto's was there. That was something we ate for the last time in Carbondale. Finally we have to move to Chicago, we took Amtrak from Carbondale to Chicago. Passing through all the ways were same stereotype houses, big roads and thesame America! What else could we expect? We were so happy to see Kabir in the union station. Interestingly we feel our pain in an ass gone after  eating delicious food prepared by Kabir.  It was awesome, we were so tired exhausted and we feel so good to eat perfect Nepali cuisine. Thanks buddy! I would hire you as a chef if I open a Nepali restaurant somewhere in the west.
** May 17, Chicago IL**
The next day we were busy roaming around the downtown of Chicago. Sears tower, shed aquarium, millennium garden would always be there in tributaries of my mind. Thanks Vijay for giving us such a wonderful ride in such a hustling and bustling traffic. You did a great job.Definitely you deserve applause and could be recruited as a top chauffer if I ever start the transportation company .Spending time with Nisha didi’s family was great. It was an open atmosphere chilled with feelings of closeness of being nepalese I am pretty sure kabia and his sweet brother must be doing well and remember us sometimes. Don’t worry folks we will meet you guys again but don’t have solid idea at the moment. The goat meat and pappad was great! I like it.  Thanks vinaju and nisha didi

**May 20 Washington D.C.
**Finally we had to say goodbye to Chicago and make our way towards the  Virginia via DC.  Amtrack again, but very long and lousy journey. Meeting the  lance corporal, self-acclaimed programmer, and a jolly Columbian was a fantastic memories talking about different things from the wide spheres of life. The terrain was bit different as the train passes through the bank of river, somewhere you can see windmills at the top of hill stations.We arrived at Union Station at 2 pm.  After waiting for couple of minutes, we saw a guy with a little kid. He is a Sanjib dai, who made all the way towards herdon, Virginia, We have to use red line orange line and again have to take bus to reach the sanjib dai’s place.  We  are very thankful to sushma Bhauju who made the most delicious food we  have ever eaten. Still I remember that chicken curry so vividly that sometimes I feel I will go to Virginia again. Kids were so happy and they are so curious to checks our eyes whether its still open or not. The kid starts counting all the peoples whether we are there or not. He is gonna be a great  mathematician .Her sister was so happy, content and beautiful,
**May 21  Washington  D.C.**
We went to  Lincoln Park, make our way towards the most powerful folk home - White House. We saw Capitol Hill and science museum. We ate a lunch at MC Donald. The little boy was so happy to have his new toy, There were arrays of government offices along the capitol Hill and its surrounding.
**May 22  Herdon, Virginia**
The following day we went to Kohl, ate papa john’s pizzas and chickens. They were so big that a single piece is enough for me. I was bit surprised how could a chicken legs and wings can be huge like that? Truly amazing America has big roads, big mansions and of course big woman's…lol thanks a lot sanjib dai and sushma bhauju we are very grateful to you. Kids were so cute.
**May 23rd greyhound station, VA**

Then we made our way towards Maine by greyhound. The journey started from DC and it was a long drive, we had transfer at New York. When we reached NY it was already dark. We came out of the union station as we have plenty of time to change another bus. Finally we were in the 43rdstreet. I was totally surprised, I couldn’t think. Wow…what an amazing  big mansions everywhere, peoples are like bees in beehives. It's amazing, it's awesome, I feel like America is NY. We ate a pizza somewhere in the 46th street it was very big; I gave all my energy to chew it. Finally, our bus was there and we made our way towards Boston.
 **May 24th greyhound station, Boston , MA**
 We reached early in the morning in the union station. We were so happy when two Gujarati's workings for McDonald offer free French fries and chicken selects. They really liked us as we were from the same region. The final bus was ready at the morning to leave for Bangor from Boston
** May 25th -28th  Bangor , ME**
 It was tiring journey looking at the traffic and greeneries’ around. We reached greyhound station in Bangor, shashi and Katy were there to give a drive. It was rainy morning. We went to house and enjoyed the place, take rest, enjoy Nepali food as usual and make our way towards the bed. The weather was chilling cold. We stayed in Merrimac Street; it seems as the old town. Shashi made delicious barbecue of wings. The next day we make our way to Acadia National Park which is 27 miles, very big and huge park can be compared to one of the biggest city of Nepal. It has beautiful landscapes, we went to hills, and they call it mountains. We went to sand beach, the water was chilling cold but again some of them were freaking out to swim. The park was great; we can see the French bay.
After that we went to small city bar harbor. The following day we went to downtown of Bangor. It's simply the cross section of four streets, a very small one. But I can see court and sheriff’s office. Although the temperature was cold, here people think that its summer so they don’t wear clothes even though its cold. Psychologically its summer and it must be hot and it is hot for them but not for us. We went to see the University of Maine, everywhere the university seems alike, and particularly we went to the department of forestry and watch out activities. The other day we went to Wal-Mart. Thanks Katy for making lasania and tauca. They were dam delicious; you worked pretty hard spending couple of hours in kitchen preparing it. Gumba was again wonderful cat who has just adapted to new environment but clever enough to chase other cats in neighborhood. Seems gonna be the don of the neighbor. I feel good with chatting with Kabita the other dayafter a long time.

**May 29-30, Boston, MA**
It took four hours to reach the Boston downtown from Bangor. When we reached there we were searching for the Dinesh dai’s house. When we reached the place, nobody was there. Later everybody gets accumulated and there start the Nepalese socialization, talking about so much about our country, politician and the village. We went to Harvard square, saw the statue of john Harvard, and walk all the way towards MIT. Someone was playing a guitar in the pavement of Harvard square and it was so melodious that I feel America is Harvard square melodically. The other guy with a single wheel bicycle was showing his stunt- crazy fellow. However I like his stunts, they were awesome. In the evening delicious dinner was ready, thanks samjhana bhauju for your kind hospitality, a great applause for you. The kids were great, we just got amazed because they get confused to talk in Nepali and we are pleased to hear their real accent. That’s great. The next day we made bus and dock ride, it was fun. The chauffer was great chap who knows inches and inches of Boston, having more than 20 years of experience. Maybe better than the professor of history at Harvard. The guy describes us the city along with turtle and those amateur sailors, all about history of Boston. With more than 20 years of experience, he is Bostonworm. We meet bishnu Dai later in the evening thanks for his donuts they were so delicious. Kids were voracious eater. I was even surprised to meet RAJAN BHANDARI over there.After that we made our way towards the Maine again canceling our trip to New York. I was so sad but we had no choice. We stayed in Maine for two more days and make our way towards Nepal flying from British Airways from Boston via London via Delhi to Katmandu. We were logically crushed in pieces when we reached Katmandu because it was more than 27 hours travel. The hangover and jet lag remained for couple of days. Then the ball was in the square one again, doing our normal stuffs.
Finally I would like to thank all for making our trip wonderful . See you again……….`,
        image: '/Travelnew/images/blogspot/placeholder.svg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'the-end-begins',
        title: 'The End Begins',
        date: 'July 31, 2007',
        content: `The days were extremely hot and muggy. I could feel hot waves of air passing through my body that was very dry and humid. This summer was completely different compared to my place. It was even difficult to walk in the evening. However, the cloudy days and the fringe showers were able to make the environment much easier than anticipated. The packing maniac has already been started and the course was the last one. The course was more professional and industrial. It was also exerting constant stress gradually as we move into the core contents.

We visited Nanjing Normal University for the last time. It was afternoon and guys have already finished their exam and some of them were planning to leave to the country for a summer holidays. We were so excited and tempted to eat at one of the local restaurant at Nanshita. However, it was not an easy task without the aid of someone who can speak Chinese. So, we asked one of Nepalese student to accompany us to the local restaurant. We ate “ Suan Caiyu” , The Fish and green vegetables ,”Gongobao Ji Ding”, The chicken and fish, “ Mi Fan”, The rice, “Zhang Dan”, The Omlette, “Ke le”, Coca-Cola with the help of “Kuaizi”, The Chopstick

All of us were taking much about July 17 as it was the day for us to leave the Nanjing.  It was emotional moment when I was greeting for the last time as we never know that when we are going to see each other again. I was simply recalling how we met for the first time and the beautiful memories that we spend together.  Now the wonderful memories would only be in the tributaries of our mind and has already become the sweet history. I met my last (new) Chinese friend Alice; it was short time knowing each other as all of us in bus-stand when we were wondering about the big centipedes that was passing near us.  As both of us were busy and the time was running out for me, we never got an opportunity to meet again.  I feel sad when I look at my old friend. But he looks happy and vivid as usual and was busy in his work. I was quite happy that we were good friends and I was successful on teaching him some English sentences for a year. I realized that he learned English better than my Chinese.

Finally, the last day to leave Nanjing was at the doorstep.  We were given buffet on the occasion of our graduation ceremony. The banquet was organized at one of the biggest restaurant of Nanjing at Fujimiao. I was so lucky that my best place in Nanjing would be the last place for us to visit.  The environment gave flashback of inaugural ceremony of the last year. At the beginning I was quite excited to leave the place but I feel bitter and sad when we were about to leave the Nanjing. I never knew that Nanjing has been deeply stagnated in my mind and in my heart for quite long period of time and I feel Nanjing is my second home. We leave to train station at seven pm. I feel extremely sad and despair although I was going back to my homeland.  As we were leaving the perimeter of a school, we said bye-bye to our class and buildings that has the wonderful memories.

Traveling through the train has already been the part of my life.  I find it easier to travel through the train although it's hectic if it's too long but the comfort ness and environment is laudable. So we were moving north thousands of miles away from Nanjing towards Beijing.  As the train starts to move I feel more emotional. I almost cried and listen the song “Tell me you didn’t say good-bye”. It was tragic moment, I watched through window as the train slides slowly towards north and I realized that everything is becoming history very fast and the end has already begun.

It was very dark and I could see the lights far away from the window. I watched it till mid-night. Unlike previously, this time I was sleeping very well.  The next morning at 6:30 am, I looked out through the window, it was raining and we were already at Beijing. The train station was very crowded and everywhere peoples were like bees in bee-hives.  It was again terrible experience for me when I had to move towards the bus-stop with my luggage. I realized that I will never travel in my life with so many luggages’.  The big mansions, crowded peoples, seamless traffic, the big-sky scrappers were something the Beijing has been known for many years. One of the most hustling and crowded city of the world, the traffic is a serious problem and I started to think about quite and calm Nanjing.  Despite of so many sky-scrappers and mansions, I feel that Beijing still needs more than that to manage the serious problem of traffic and crowded peoples. Finally we arrived at our hotel at 2 yumin Lu, Xichengu, Beijing where one of the grand hotels is located.

After eating the lunch, we quickly make our way to see the one of the seventh great wonder of the world, The Great Wall at Badaling. The Great Wall of China, one of the greatest wonders of the world, was enlisted in the World Heritage by UNESCO in 1987. Just like a gigantic dragon, the Great Wall winds up and down across deserts, grasslands, mountains and plateaus, stretching approximately 6,700 kilometers (4,163 miles ) from east to west of China. With a history of more than 2000 years, some of the sections of the great wall are now in ruins or even entirely disappeared. However, it is still one of the most appealing attractions all around the world owing to its architectural grandeur and historical significance.

The Great Wall was originally built in the Spring, Autumn, and Warring States Periods as a defensive fortification by the three states: Yan, Zhao and Qin. The Great Wall went through constant extensions and repairs in later dynasties. In fact, it began as independent walls for different states when it was first built, and did not become the "Great" wall until the Qin Dynasty. Emperor Qin Shihuang succeeded in his effort to have the walls joined together to fend off the invasions from the Huns in the north after the unification of China. Since then, the Great Wall has served as a monument of the Chinese nation throughout history. A visit to the Great Wall is like a tour through the history backwards; it brings tourists great excitement in each step of the wall.

The mystery of the construction of the wall is amazing.

The construction of the Great Wall, drew heavily on the local resources for construction materials, was carried out in line with the local conditions under the management of contract and responsibility system. A great army of manpower composed of soldiers, prisoners, and local people, built the wall. The construction result demonstrates the manifestation of the wisdom and tenacity of the Chinese people.

The Great Wall as we see today was mostly built during the Ming Dynasty. It starts from Shanhaiguan Pass in the east to Jiayuguan Pass in the west traversing provinces of Liaoning, Hebei, Beijing, Tianjin, Shanxi, Inner Mongolia, Ningxia, Shaanxi and Gansu.

The Great Wall has long been incorporated into Chinese mythology and popular symbolism. The most beautiful of several legends is about the collapse of a section of the Great Wall caused by Meng Jiangnu, who cried bitterly over the death of her husband in the construction of the Great Wall. This legend has been spread widely through textbooks, folk songs and traditional operas. It is well-known in China.

We feel easier to move around the city in public vehicles as we have already contacted one of our friends from Beijing. First, we took the bus number 305 from Badaling free way to reach the last-stop of the bus from where the bus number 319 to Badaling great wall departs. It took almost one and half hours to reach the place. It was 2:30 when we reach the place. Once I made a glance towards the great wall, I was amazed and spellbound. I feel that I am in the china after eleven months to see this majestic achievement of human civilization. How human can create such a  beautiful walls that runs through the hill stations seamlessly for thousands of kilometers, the only human made artifact that can seen from the moon.

As we start to climb the great wall by paying 25 RMB as a discounted rate because of our student card. It was stiff from the base but enjoyment and feeling of ecstasy, a feeling of china, a feeling of greatness. The place seems very crowded and each time I see these crowds I remember myself watching the bees in beehives and ants collecting the food in winter for the rainy season. There were many children and they seem very happy and delighted. It’s the desire of every Chinese to visit The Great Wall in their life, we took many pictures and I feel I was climbing the highest mountain of the world, The Mount Everest. After walking through hundreds of meters, we make our way back as we feel very tired and it's impossible to walk around the seamless man-made artifact. Finally after buying some souvenirs we made our way towards our hotel. We were tired and exhausted.

At 8 pm, we decided that we will go to Tiananmen Square although it was too late. Tiananmen Square is a modern creation, China being a land where large public gathering places were not traditionally built. Its construction broke down walls of the Forbidden City to make way for the large thoroughfare, Chang'an Jie. Previously Tiananmen Square was occupied by imperial offices which were inside the Forbidden City and connected the Temple of Heaven to Qianmen and the palace. Tiananmen (translated from Chinese: The Gate of Heavenly Peace) is the original gate of the Imperial Palace, commonly known as the Forbidden City. It is now one of the entrances for tourists visiting the Forbidden City.

Built and burned down a few times starting in 1417, its recent incarnation dates to 1651. Today it is a world recognized symbol of where Mao Zedong (Mao Tse-tung) declared the foundation the People's Republic of China on October 1, 1949.

We rushed towards metro station.  As we reached the sub-way, we were so surprised to see the underground two sub-ways and the metro was very crowded. At first, it was so confusing for us to travel through it, however we manage to reach the Tiananmen square west gate after changing another metro.  We were able to reach the place at ten. Hurriedly, we manage to take some pictures of this memorable place. When we were coming, we were lost somewhere in the middle; eventually we reached our hotel after taking the taxi. The other day, I realized that I missed one of the precious-thing; my diary in that I used to tabulate information in chronology.

The other day we were pretty sure about the route of underground sub-way, we make our way again towards Tiananmen Square and Forbidden City. It was easier than the last night as we were more used to with the system although the place was very crowded no matter train comes after every few minutes.  We took some memorable pictures, drank ice-water as it was very hot and has to rush towards hotel very soon as two of our friends were leaving at afternoon.

In the evening we roam around the busy-street of Beijing. Peoples were everywhere and foods in the street was making environment very amusing and alluring although I have seen it before in Nanjing. We were lucky to find cyber cafe that was very cheap and quickly informed our friends and relatives that we were in the lap of the great wall. We could even see one of the Olympic stadiums that's under construction and realized that the tariff of hotel has already escalated for the next year Olympic at Beijing. Everywhere we can see hoarding boards of the Olympics 2008 and realized that Olympic maniac has made the environment more colorful.

The next day I woke up very early as it was the last day in China and we have to reach an airport at 5:00 a.m. We rushed towards airport and there was traffic problem as the highway was under maintenance, however we were able to reach the airport at time.  So, we were preparing to travel 1238 miles to Hong Kong and left the Beijing at 7:40. Eventually at the mid-day we reached the Hong Kong airport and were disappointed when we were informed that our plane was delayed for nine hours. So, we were spending more than 15 hours in the Hong Kong Airport.  I feel bit exhausted as I couldn't sleep well in transit and was afraid of sleeping disorder although I was using internet and was enjoying the environment.  After getting tired of looking at electronic board several times, I realized that at 0400 its time for us to leave for Nepal.

Finally, we landed at Airport at 06:30 in the morning and I was warmly received by family members. I was happy to be at home after a long time but as soon as I see the poor infrastructure,  political chaos, economical and social problems I feel sorry for my country and was missing Nanjing more than ever.

After spending my holiday for a week and trying to adapt myself again to the old environment, I realized that I was in the heaven for last eleven months which I will always miss in my life no matter where I go  and where I live. Nanjing would always remain in my nutshell forever. Xie Xie Ni ,.Nanjing!`,
        image: '/Travelnew/images/blogspot/placeholder.svg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'under-shadow-of-a-green-tree',
        title: 'Under Shadow Of a Green Tree',
        date: 'June 29, 2007',
        content: `[

![Photo](/Travelnew/images/blogspot/blogspot_33abba1f6c92cbcd.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirMZVAGFwzrDSTVHXThsg5bLndQeHkb765agbiayjaJFvlYxyYLuBcpFE5sXZM1I5JoVP3qkCB9J-PV1ktsjnnXm4tqQw3O2FVHxL_jla37Vpw0vSbXc5136TKdZVfIVehn-8E/s1600-h/undergreentree.jpg)

Most of the days were very dry and humid. The mercury goes above what we have anticipated and the shadow of green trees that were abundant around the periphery has been our humble friend for a long time. The days were very muggy and sun seems stronger than ever. As I looked from the window of the terrace of my class-room, every thing seems lousy and looks tired of the long and hot days.

The packing maniac has already been started as it will take couple of weeks to months to send items through postal office and peoples seems crowded to post office. Definitely, it’s a marvellous idea to manage things before getting stressed in the eleventh hour to leave. The counter to go back has already been started as many of us have already got our ticket confirmation for the next month flight. The excitement to leave or stay here was not omnipresent as we were here to leave one day. It was simply a matter of time that will decide the fate of everything. I visited my Chinese friend’s university frequently at the University area of Nanjing where many universities were located into same arena. It was good experience to see big University. I was fascinated to see how big University looks like and how they operate? It was completely a new experience for me. I was so surprised when I know that more than ten thousands students were studying in the same University. Sometimes, we used to play the badminton and enjoy the time to look around the different blocks of the University. It was immortal days.

The Fujimiao trip has always been remarkable and memorable no matter how many times I went there. The long antique homogenous buildings with slanted roofs, the crowded street, the wooing shopkeepers and snaky narrow streets with identical doors would remain in my gray matter for longer period of time when remembering Nanjing. One muggy afternoon, I was so obsessed to talk with one of the Chinese girl when I see her in the streets of Fujimiao. I gather enough guts to talk with her but it went in vain after she didn’t understand little English. But again, that was a fun, trying to talk with someone who doesn’t understand any words of English at all. I feel sorry for myself and her. This is one of the serious problems I have been encountered over here from the beginning. It was more curious when one of the girls gave me her business card and thought that I am from middle-east. So it was very funny when they make you originate from US to middle-east? –although I am from their neighbor country. This is the first girl I met who was not the student and she works full-time although she studies part-time. Eventually, the cell-phone was always acting as the translator better than ever. The following day was very tough when I spend my day with them, walking around the fujimiao again knowing more about Chinese people and their life-style irrespective of their poor English. Also I realize that most of the Chinese who use msn or yahoo messenger are the person who works in the international business environment and use it to talk with their foreign client frequently.

Traveling in the bus and alone has already become the part of my life and I find it very easy, exploring and exotic no matter most of the time peoples were staring at me as I was from alien’s space.

The last course become most productive and I spend substantial amount of time nurturing myself and enhancing my programming skills. I feel I am taking back some skills in my life that could be very helpful to shape my future in computing profession.

Everything was in countdown including 1912 street-The night hub of Nanjing. As usual we have found many of our friends were keener to enjoy this place as they realize that they have to enjoy this place before leaving. It was so fun when I went to podium and many girls including the manager was giving me the hand. It was exceptional moment again dancing and enjoying the night. We met few girls and had a good time chatting with them. I was so surprised when one of them knows so many things about my country from everlasting fragile politics to Gurkhas, The Front Line Warriors. Although the girl sounds honest for me; I feel bad when she bullied her email address as she was drunk. But again I have to admit that she was the most intellectual woman I ever met in China.

The night life became more vivid and frequent as we were counting our days to go back. 1912 street seems place that’s completely isolated from another space with its own identity and environment. As the twilight begins, the colorful light of 1912 starts to attract every street-hawk who is passing through-by. The place was very crowded as usual and we enjoy roaming around the street and seeing the funky young Chinese crippling the night-life ever than before. The girls look soberly beautiful, modern and fashionable, although they lack the natural beauty. The L narrow lane of the 1912 street was always glowing in the night no matter how things are moving on other part of the Nanjing. The girls were seen vomiting and feeling nausea in every corner as they were over drunk. The smoke inside the chambers make you feel that you are inhaling smoke seen in colorful sparkling light and enjoying the taste of music that beats your ear-drums. I danced a lot as usual and I feel I am becoming dance-addict. I was so tired that I just catch the bar at podium and just look at peoples 360 degrees around me. I feel this world is completely different and unique and find peoples were hypnotized in their own fantasy with music and alcohol. The imaginations and experiences looking at all peoples from the podium was fantastic experience. At one time, I was freeze in the podium as my muscles were cramped and I couldn’t move. The following morning the clothes seem they have been soaked in the smoke-chambers and when peoples start to leave in the morning, they look tired and exhausted. The taxis were waiting in the queue to serve these nocturnal inhabitants. Some of the tables were seen occupied even up to early morning and you will find plenty of them who are taking morning nap under the open-sky hypnotized in their own world. Slowly the confetti would be cleaned up and the person starts to move to their place. Thanks to McDonald and Coffee, they make our life easier as they operate round the clock. The morning Coffee was something I will never forget in my life after being nocturnal for whole night. Walking in the quiescent city in the early morning and taking metro was fun and adventure. The cold but soft wind makes the environment more subtle and hypnotize that we are pretty well no matter how tired we were physically.

The environment was muggy; very dry and humid. Sometimes, it was very terrific and most of the time I enjoyed staying inside my room and playing with the small techno-gadget my roommate bought recently. The green trees around us were always giving us accompany and we enjoyed sitting in the shadow of green trees before falling off to go to class every day. I feel these trees were only happy and protecting us in this hot environment. The days were extremely hot and frustrating as we start to sweat in no-time. We used to feel completely tired after hectic day. However, every evening we used to take walk for a while and use to drink soft drinks and ice-creams. It was again fun to talk about this place and thinking about our own country; staying in the stairs and watching the sporty basketball creeks that doesn’t care the hot. On one evening, we went to one of the Muslim restaurant with one of my Muslim friend from Nigeria. I enjoyed a food a lot even though I was bit skeptical about my stomach. Eventually, we were handed the visa of Hong Kong as we have connecting flight of Kathmandu. I feel the time is running out and the shade under green trees will be history.

On another rainy day as I was busy peeping students with umbrella in their hand, the beautiful trees and greenery around us looks glistening and sparkling after being washed by the virgin rain. I look at the cross-section of high-way that I always enjoyed every morning and in break-time for the last ten months, watching and simulating the fast and rushing traffic with cosmopolitan life over here. I even used to have a good time talking with few Chinese students who were majoring on English. I was so shocked when one of the Chinese students has very bad impression with attitudes and behavior of some of our friends; I gave him few reasons behind those behaviors that must have been reflected because of social factors. After all, people from all around the world do have different types of culture on which they were brought up and we have to give space for everyone. However, it should be kept in mind that it shouldn’t hurt others when someone is imposing his culture.

The last week of the month was better as we feel relieved when there was a fringe shower and cloudy day. After the rain, when I look from the same window that I look everyday, it seems that the place is completely washed, fresh and green. Eyes feel good to see these green trees which look more greenish than before and hopefully to sit under the shade of these green trees would be better than ever. On one evening, I realized sitting under the shade of green trees that this must be last time thinking and writing blog from Nanjing before I finished it next month from Nepal after writing for last nine months. Adiue Nanjing…… and Green trees…`,
        image: '/Travelnew/images/blogspot/blogspot_33abba1f6c92cbcd.jpg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'civilization-and-superiority',
        title: 'Civilization and Superiority',
        date: 'May 31, 2007',
        content: `[

![Photo](/Travelnew/images/blogspot/blogspot_dc98cc7f7b5e9a3e.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnIoSuOmWMNlGxLAW9dWb5OfCZAEhdQ9-JU5e2wky_ti1gUB6FpfYwHTDVS0JMvhHOnOfyX-oI6r8HX0jaR12rTPet9mA_1QlWEikv1cNi8TJwK0D0YZhuddtCfs_6LPjW93VT/s1600-h/c9.jpg)

**Prologue**

The second longest holiday, the may holiday has started in the first week of the month. Everywhere in the town, especially in front of railway station and Bus Park students were moving with their suitcases and luggage’s. It was funny when a Chinese guy and a girl told me that I look like an American, I laughed at myself for a long time. I told them that I am from Nepal and they were happy to say “Niboer” is our neighbor country. In the night, we heard banging’s and firecrackers, the crazy celebration of May holiday again.

The week started with long and lousy hot days as mercury was rising faster than ever. We went to meet our friends at Nanjing Normal University as it was one of the place we used to visit often in the holidays as guys were cool, we find good companionship to laugh and enjoy and talk about our country and experiences in this different but beautiful land.

The same afternoon, we were amazed when two guys from an England and Denmark approached us suddenly and said that they were tourist and wants a company in the night as they were new to the town. We were surprised and confused but we realize that it’s difficult to be a tourist here alone without the aid of someone.

We went to Talking Point, had pizzas and spaghettis. In the evening, we went to corner of Nanjing normal University. It looked like a typical street shop of Kathmandu at night; where dozen of us gathered in wonderful evening in the shade of green trees. I feel we were at the heart of Kathmandu as the surrounding was incredibly Nepali as most of us were Nepalese. I look around the place; it was a beautiful night, the quiescent environment and clear blue sky. We talked about different aspects of life as usual from political environment in Nepal to development beyond the borders. This is the place where the east meets the west as there are influx of foreign students, transnational peoples and completely multicultural environment. This is the place where you see different peoples murmuring different languages and laughing and enjoying in the open sky in gentle wind giving glimpse of the single world under an open umbrella.

Later friends from Estonia, Armenia and Russia joined us. I looked at the blue-sky underneath from the green-trees. There were no stars in the close proximity, it was already 2 in the morning and guys were still busy drinking. I had brief conversation about philosophy of religion with Estonian guy who believed more in Buddhism although he is an atheist. I invited him to visit Nepal. He had been learning traditional martial-art,"tai-chi" for couple of years and hopes to be the instructor in his country after leaving ski-instructing job.

As usual we went to 1912 street to enjoy the night life again to hear the bits and bytes of music and the dancing environment. The night passed very quickly and the morning was placidly quiescent again. As we were used to with public transportation, early in the wee-hours bus looked completely deserted and empty. As the bus stretches inside the city, peoples were busy stretching their bodies in public parks; elder’s peoples were doing “tai-chi”. It was fun just peeping through the windows traveling inner concentric of cities before landing quietly in the school and lying in the bed.

On another hot day, we visited Dr. San Yat-Sen scenery spot. In Chinese history he is known as "The Father of the Revolution" or "The Father of the Republic." In the West he is considered the most important figure of Chinese history in the twentieth century. As a revolutionary, he lived most of his life in disappointment. For over twenty years he struggled to bring a nationalist and democratic revolution to China and when he finally triumphed with the establishment of the Chinese Republic in 1912 with him as president

The beautiful and professional lady chauffer drove us to the front of the Pipa Lake. As we move around the places, it was perfectly a natural, a small lake surrounded by the greeneries and giant wall on the other end. The place is also popular for bride and bride groom to take the pictures as we saw many of them with their beautiful smile on the road to their new life. The park was well maintained and everywhere there were wooden-flooring. As we circle the entire park, hammocks were everywhere, couples and children’s were in utopia. We headed towards the botanical garden. The garden was a big one; there were so many things to look however we feel more attracted by the rose gardens and the rope-bridges. The garden has green house where all the plants species were collected, the botanist and students were busy collecting samples. Finally, the climax of the day arrived as we make our way to the purple mountain through the rope-way. Although, the rope-way was old and rusted but it was very long rope-way. The environment was calm and emotional when the rope-way moves slowly towards the top of Purple Mountain that stretches couple of kilometers from the base. As we view the Nanjing, the city looks elegantly beautiful with lakes and greeneries along with big mansions like a bamboo shoot in springs which make it more alluring. We were greeted by many children’s in the air and were happy to greet them back. The mind became completely vacant and submerged into the relaxation when the rope-way moves higher and higher but slowly and gently towards the top of the hill. Many of the foreigners were visiting the place and we realized that this is one of the best places in Nanjing to move around. From the top, we see the fascinating view of the Nanjing city. We stayed on the rock and inhale the fresh air at the top of the purple mountain with the majestic views. Later, we made our way back as the sun was becoming dim. When we touch the leaves of the trees from ropeway, we feel it more natural and pleasant. At the end of the day, we made our way to the Shinjekou, have pizza and were back to the school.

**The short Flight- MU2807 (D+1)**

It was not oceanic flight of 815 from Australia to Los Angelos mesmerized in The Lost. Neither we were lost in virtual island somewhere in the pacific rim forever and seamlessly waiting for someone to rescue nor there was a Jack or intrinsically sober Julia nor fat but cunning Harley with us. Nor I am the Kean, a computer-whiz that’s missing in the architect of the Lost if I had ever written the script. We were in holiday trip for five days from 8th may to 12th May from Nanjing to Guanzhou, a southern china flight MU2807 of one hour and forty five minutes. We reached the airport at early in the morning. The traffic was not hustling and bustling, the highway looks placidly quiescent. As usual every Chinese airport is expanding every year so the construction was everywhere and the airport looks sophisticated and fully automated so we don’t have long queue and have hassle less security clearances. We finished the security clearances and were waiting for more than hours in terminal to board the flight. Flying in the sky is lousy and it’s most disgusting part of the journey although I used to love at the beginning to crunch my curiosity that’s in my mind from the time I was a kid. The announcements were continuous in frequent interval and Chinese English seems very funny and dry. We can only sit, eat, sleep or read in the sky inside the slandered hollow chamber. As airplane starts to leave the ground and take altitude we feel current of waves passing through our nerves due to drastic change in altitude. We can see the beautiful Nanjing from the small window of the plane. The city looks very beautiful with enough greenery and beautiful landscape. Eventually we were flying high in the sky to cover the air distance of more than 1200 kilometers. The announcement and safety precautions from the cock-pit were most of the time about altitudes and refreshments. Almost all the seats were filled by foreigners as we were more than hundred students. Noticing it, the air-hostess glanced us and repelled with shyness. It was a little but delicious breakfast, an orange juice, bakery products and some Chinese noodles. I opted for bakery stuffs as noodles sucks for me in China. I finished few short stories by Hemingway; it was nice time reading short stories in the flight when I had nothing to do at all in the early morning. The city looked very big as I peep through the window as we were about to land. Apparently, we landed at the Guanzhou airport. As we were getting outside from the airport, our tour guide, Gabin, A smiling and funny but fat Chinese guy was already waving us to guide through the next five days of exotic trip. The trip became funny when one of our friends was lost in the airport. We were delayed for more than one hour and were able to trace him later in the airport where he was stacked and seemed in despair. Obviously the problem must have been the communication.

**The Hustling Canton City (D+1)**

Guangzhou was the capital city of Guangdong province with more than twelve millions of population located in south-east part of china. It’s the economic hub of china where international trade and business is growing exponentially every year to generate millions of employment and foreign currency. Guangzhou, also called Canton, Kuang-chou, or Kwangchow or ram city. It is a busy port and a commercial and industrial center on the Zhu Jiang (Pearl River). Manufactures include processed food, textiles, steel, paper, cement, fertilizer, chemicals, motor vehicles, and machinery. The city, which is served by an outer deepwater port at Whampoa (Huangpu), is linked by rail with Hong Kong and Beijing. About 15 percent of China's foreign trade is conducted here. A leading educational center of China, Guangzhou is the site of Zhongshan (Chung-shan or Sun Yat-sen) University (1924), a school of medicine, a technical university, and an agricultural institute. Landmarks in the city include Sha-mien (Shameen) Island, where foreign traders formerly lived; a Ming dynasty (1368-1644) temple, now the Peasant Movement Institute; a pagoda in the Temple of the Six Banyan Trees; a 14th-century watchtower (now Guangzhou Museum) in Yue Xiu (Yue Hsiu) park; the blue-roofed Sun Yat-sen Memorial Hall; and a mosque said to be the oldest in China.

As we move towards the city, the city seems very crowded and rusted. Traffic was a serious problem and the roads were snaky running almost at the top of the building. Realizing the serious problem, the city has banned motorbike; nevertheless the problem seems not addressed at all. Eating in Guangzhou is very popular from the ancient time. There is saying that people eat everything except man. The SARS outbreak started from Guangzhou and more than 370 died of this deadly disease.

We were drove to the Ersha Island that’s located in the delta region of the Pearl River outskirt of city. Pearl River or Zhu Jiang is the third largest river of china that stretches from southeast from Guangzhou to the South China Sea. The suburb is the place where foreign diplomats and elites lives where we can see the beautiful houses and international school. The bank has big mansions that look very rigid and straight in the mid hot day. We managed to get outside from the bus and took some snaps at the bank of Pearl River which looks magnificent on the hot day. We were warmly greeted by traditional song and music when we arrive to have a lunch. It was fun to see beautiful Chinese girls singing with warm hospitality. The lunch was excellent. After lunch, we made our way towards the Dr. San Yat Sen Commeration Hall. The Commoration Hall was the first hall developed in western style for the meeting of the top officials of china.

As the coach moves up and down in the busy road of the Guanzhou, I feel like watching the spider man again with tall sky scrappers and layered snaky bridges in different hierarchy that stretches through the top of the building. Sometimes I feel I am playing the Ferrari game in early 90’s in the old computer at my home passing through the different tunnels and surprisingly artificial roads. The greenery of city is maintained cautiously as of Nanjing and it seems that city is pre-planned although it’s very old. We went to see the city’s monument, the monument of five rams, the art of fine sculpture and history. The fairy tale about it was more amazing to hear. Later we went to the Beijing road, the shopping road of Guangzhou. As usual bargaining was always tough and women were wooing hard to sell Rolex watch in every corner that starts with less than 20 RMB. Finally, we were driven back to our hotel. The communications seems easier than before.

**Walking at Night (D+1)**

We were lucky to meet two Nepali origin girls. It was difficult for us to locate them as we were not able to traverse the huge city that looks severely complicated with so many peoples. However, we ask the chauffer to talk with girls who were studying basic Chinese language for couple of months, a part of their medical study. The girls look happier even though sometimes they talk about home. We went to 1920 street and look at the Pearl River. The river was sparkling and splashing in the night with the cold breeze. We can see the beautiful and elegant mansions alongside the two banks of the river and their images moving in water with splashing sound. The ferry was passing through the beautiful arched-bridges in parallel that connects northern and southern Guangzhou at almost equidistance. The environment was quiet and it seems that the place is for relaxation as we can see young lads having good time in the bank of the river after hectic day. We walk through the long bank of the river and were shocked for a while when the lights were off but later realized that it was the daily schedule. Finally we made a way towards face-off, a disco club. The place looks very crowded and has two chambers playing different genre of songs. There were couple of foreigners and it seems that youngsters are more professional in dancing than in Nanjing. Finally, we made our way to the hotel, surprised to see different English channels including CNN but felt asleep in no-time after hustling day, traveling for more than thousands of kilometers.

**The end of Road (D+2)**

****

Early in the morning we headed towards another city of the Province, the Shenzhen city. Located on the border with Hong Kong, Shenzhen and the area around it became China’s first Special Economic Zone in 1980. The city with population of merely eight million. Shenzen is the new city of the china that was developed in 80’s for the sole purpose of international trade and business. The Chinese government established Special Economic Zones when it began to open the economy to foreign investors. These zones offer lower tax rates than the rest of China and other incentives to investment. Before 1980, Shenzhen, then called Bao’an, was an undeveloped town of 20,000 inhabitants. It grew rapidly once it became a Special Economic Zone. Its central location between Hong Kong and Guangzhou also made it an ideal place to locate industry. Light industry, especially the production of arts and crafts, textiles, footwear, clothing, medicines, and building materials, is important to the city’s economy. It is said that for money we have to go to Shenzhen, food for Guanzhou and Zhuhai for living.

It was 10:05 in the morning; we were in the mid-way in-between Shenzhen and Guanzhou. We pass through banana farming, glimpse of agricultural and industrial revolution. The English hoarding boards were more common. The continuous movement of trucks and logistic carrier clearly gives the importance of the city as a transport and logistic hub. Every side along they way, there were many huge industries and mansions.

As I get off from the bus, I was amazed to see the places, tall mansions were leaning towards me shining and sparkling in the beautiful evening. The place seemed little crowded and clean. I feel I was in land of Zion, described in some English songs, people looks beautiful. Everything seems to be in order and was not in chaos. Even the green trees along the roads and the height of the buildings were homogenous. I feel this is the extreme beauty human can endeavor and feel with bare eyes. I never thought that the development roads will end somewhere like this but I believe this might be the end of one facet.

**The proto-type (D+2)**

After traveling for few hundreds of kilometers from Guangzhou and having a lunch at hot day. We visited splendid china that features seeing round the ancient, civilized country with a history of 5000 years and traveling over a land of charm and beauty only in one day is the masterpiece titled pioneer of Chinese artificial scenery. The small mini china has everything from Forbidden City to Great wall and from potala palace to golden goose temple. The place was developed as a prototype village so that we can see the entire china without visiting the particular place. The folk and cultural shows make the place more interesting and make us feel in splendid china. It’s very weird and interesting to see the diverse china aggregated into the small but beautiful place. We take many snaps as we were able to simulate ourselves that we have traveled so many places in this beautiful country. The management and design of the park was superb. There were so many cultural shows and one of it looks exactly like the cultural show of Nepal, it must have been from south-western part of china. The environment was colorful and I feel sometimes I wonder how human made things looks so beautiful and charming. At last, we saw the cavalry battle show. It was the most fantastic and heart-throbbing show I ever had seen in china. I feel I was watching a sort of Chinese ancient movie as the waves of swords hit my ear-drum as two ancient warriors fight each other and show their skillful fighting skills simulating the historical war. It was the seamless journey of the historic china. The entire field in front of the eyes was battle ground and was filled with ancient soldiers and warriors. The claps were non-stoppable from audiences as it was very skillful and dangerous that ought to look like simulation in front of the eyes. Surprisingly, many of the performers were girls and their skill could be lauded well than of male counterparts.

**The view center (D+2)**

****
As I peep from the window of bus I can see twinkling stars far in the sky. The city has colorful lights as sun has already gone down and we were moving towards the Meridian view center, a window of Shenzhen and Hong Kong, the 79 storey building, and 384 m tall to see the beautiful Shenzhen city. As I get off from the bus, I was spellbound to see the big buildings leaning towards me. As I move myself into 360 degree, I feel I was lost somewhere in the middle of magnificent city surrounded by glistening and colorful mansions. The city was very clean, very well managed and looks completely fresh and virgin. We have to change the lift several times as the security officer welcomed us with her beautiful smile and escort us to the next lift. The lift moved very fast, the number 69 seems very small compared to the lift. Eventually we were at the top of the human civilization. As I look outside, I feel I was in the land of heaven. I can see beautiful, elegant and colorful city. I can see the enchanting view of beautiful Shenzhen and Hong Kong stretching seamlessly as far as I can see with my bare eyes. From generation to generation, both people natured by the long Shenzhen River, Shenzhen and Hong Kong have grown up together in one continuous line. The cross-sections of roads and traffics makes more alluring. A lot of modern high story mansions sprang up like bamboos shooting after a spring rain. I feel I am at the peak of development, after that there is dead zone. And I questioned myself the superiority of human-kind and Endeavour-The rationality of superpower.

**The Russian Ship (D+3)**

It was mid-day when we reached the place. The day was muggy; however, the cool breeze that passes through our ear makes us feel better and environment was subtle. The ship was stagnant, stagnant for many years but doesn’t look completely deserted and wasted. It looks very big, sophisticated and implicitly military ship. I have never seen this type of ship in my life except in BBC or some Hollywood movies. Before we went to make observation, there were some formal processions as the soldiers marched through the ground. The male and female soldiers parade like a Russian military and seem from the eastern European countries. It was the first time I was inside the ship (although it was not functional). We observe the ship, it was very big. There were several aircrafts landed on the top of the ship and modern communication equipment at the top of it. The ship looks very strong. I imagined how much iron it would have taken to make this ship and was amazed to see the development that happened many decades back. There were more military and cultural shows on the different parts of the ship. We move around the place and see the most sophisticated weapons and equipment. The cabin of ship looks deserted with wires coming out of the places and things left out in chaos with hole in radars screen. The ship has been laying there for many years and still has the centre of attraction for all the visitors giving glimpse of technological development and military importance that existed several decades back.

**The land of paradise and E-friendship (D+3)**

We were moving west from Shenzhen towards Zhuhai. Zhuhai is situated in the southwest of the Pearl River Delta of Guangdong Province. It faces Hong Kong on the east across the Lingding Ocean, Macau on the south, Xinhui and Taishan on the west, and Zhongshan on the north. It is 150 kilometers away from Guangzhou. Zhuhai is a garden-like seaside tourist city, where flowers blossom all year round. In 1999, it was granted “International Award for Best Practices in Improving the Living Environment” by United Nations Center for Human Settlement and was the only winner of the award in China. Besides, it won series of titles such as “Top Tourist City of China”, “State Garden Green City”, “State Environmental Protection Model City” and “State Hygienic City”.

We passed through Zhonshan city in the very hot day. As the bus stopped to fuel the gas we were able to buy some fresh fruits directly from the local farmers. The amazing sky-scrappers and bridges with tunnels became the daily bread of life to see. There was something more that was eccentric in my mind for a long time once the trip was fixed. It was all about meeting Melody, one of my best Chinese friends whom I know from the internet. We never know that we were going to meet in this way. The imagination was very vibrant and vivid that evening as I was expecting to see her. It was the place where virtual world was being projected in the reality, the dream came true.

Finally, in the evening we reached the beautiful place after passing through many green hill stations and ridges, seeing so many fishing ponds and banana trees. The terrain looks exactly like Nepal as the city stretches in the bank of the river. We saw different type of ships and boats in the dock.

It was evening in the lobby of year 2000 hotel where I was expecting to meet her. I even don’t know how to recognize her so I asked her to tell me the color of the clothes she was wearing but she told me that it’s not necessary. She was right. I was staying outside and waiting for a long time. Eventually she was in the lobby waiting for me. She looked calm and patient but a bit nervous. She speaks English very well. Her hairs and eyes looks similar to than in internet. She was thin girl and she complained about me for being slim. Her hairs were beautiful and sparkling in the rays of light. She was bit unhappy when I couldn’t speak Chinese with her but was convinced later as I told that I learned Chinese only for 15 days. It’s obvious that any language can’t be learned merely in fifteen days. We made our way towards the Chinese restaurant as she hadn’t had her dinner. I drank a glass of juice; the restaurant was not so crowded. She insists me to eat some soup with her but I refused. As I watch her using the chopsticks and eating, she feel bit embarrassed and shy. After I notice it, I moved my eyes somewhere else. It was a perfect evening after a long time and it was big surprise and it must have been a very good luck for both of us projecting ourselves in the real world. Finally, we made our way towards lover’s street. The city look calm, the bank was not crowded; the soft wind blew through our ears. I can hear the splashing water in the banks of the river, the coconut trees leaves waved too often. We watched the stars and the glowing ship that was parked in the bank. The moment was placidly romantic. It was like a miracle, I never know when I was going to meet her again in my life. Finally, it was too late and we decided that there should be the end of the beautiful evening in the bank of South China Sea leaving back the wonderful memories forever. That’s how life moves on and was an exemplary example of being optimistic about seamless possibilities in life. We moved towards our place, I was so exhausted with physically and emotionally that I fall asleep in no time leaving back the memory for a while.

**The first cruise in South China Sea (D+4)**

The day was beautiful as I push the curtain and look through the wide windows. The street has already started to show the movement of people and traffic and was wet because of the light shower in the night. The sun was ready for us to guide through the new day. We were expecting to have a cruise in the south-china see at 10 o’ clock. The feelings and emotions were rising high as it was the first time I would be traveling through the ship and see the sea. The cruising has been in my mind for a long time back once I started to know about the ship and watched Hollywood movies. We were at dock where many passenger ships were waiting for us. The internal tourism in the country has been flooded everywhere in China and this place was neither an exception. We were in the small ship that can accommodate more than two hundred peoples. As the ship moves on with its stereo-type sound coming from its engine, the water comes like a wave and splashes in the fringes. Sometimes, the tiny water droplets splash into the edges so hard that it sprinkles inside the ship. I didn’t hesitate to tease a small Chinese kid who was very shy although her mother insists him to say hello to me. As water seems like moving mountains, splashing here and there, the cold wind and the bumpy ship, sliding up and down. The water was sparkling and looks like a snow in a beautiful sunny day. I remember the old man and the sea, by Hemingway and had clearer pictured about the novel again that I had read in my high school. I was also scared that I may have sea sickness as people were hypnotizing the journey. We can see the slender and marvelous building at the bank of south-china sea, Macau- The former colony of Portuguese and the casino world. Casino is legal in only this part of the china. We can even see the symbol of Macau, the lotus flower in the bank. There were three bridges connecting the other two small islands of Macau, Zhuhai with Macau. Earlier, I was bit disappointed as I couldn’t buy the ticket to go at the top of the ship. The problem was communication and later there were no enough spaces. But the cruising in the ship was fantastic as I have realized that my fantasy to cruise and its projection in reality is surprisingly the same. As water and cool air sprinkle the journey, it became much more exotic. I can see the horizon in the first time in my life where the clear blue sky meets the sea. As I see hundreds of Water Mountains moving and splashing in the edge of the ship, I find the journey is never-ending process. I imagined how Columbus might have discovered America, no matter the journey was exotic but never ending process! Luckily, they allowed us to go at the top of the ship later and we were rushing to go there and take some beautiful snaps and it was again pleasant surprise at last. The human civilization sometimes makes me feel that there is nothing beyond human endeavor and superiority.
**
The glistening city and Pearl River (D+4)**

The same evening we reached the Guangzhou as it was the end of our journey. But we were lucky that we were able to meet some of Nepali friends again and it was the second cruise that we take to see city that night in Pearl River. It was almost nine o clock at evening and we were waiting for Nepali friends in the port. I was surprised to see the open sex market in Guangzhou after seeing at Xian last year. It was again a big surprise for me when I met one of my high school friends after ten years. When I pronounced his name he was delighted and surprised and shocked but he couldn’t remember mine. My old friend can speak Chinese very well and as he speaks Chinese very fluently and feel so surprised and curious. It was hard for me to believe that foreigner can speak Chinese so well. It seems that it was an art of speaking and a fun to watch someone speaking it. The guy was doing post graduate degree in medicine. Finally, we were again inside the ship. The ship looks more modern than previous one. It has almost everything inside it and there were not so many peoples. The city was sparkling and glistening along the two banks of the river. As we pass through the bridge we shouted and scream for nothing but for excitement in Nepali language. We were even singing Nepali songs and were trying to create a perfectly Nepali environment. We feel we were somewhere in the beautiful lake of Nepal.

**The pleasant breakfast (D+5)**

The breakfast was all about eating. Surprisingly, it was something else for me this time. I was simply analyzing the people’s eating behavior and civilization in the early morning with the orange juice in my hand. Straight in front of my table were two beautiful Chinese girls with two kids who were ready for the breakfast with maize in their table. They were using the chopsticks but were eating breads. Far on the eleven o’ clock in the corner was the guy who was enjoying fresh water melon. Behind me at six o’ clock there were four white women who were slicing the bread and drinking a juice. The scrambled egg chef was always busy as the queue seems the most popular one. It must have been the best dish everybody likes from Africa to Asia and from Europe to America. It was difficult to turn but again I tried gently at five o clock to see who was behind me. There was a guy who has big arms with a tattoo. At 2 o clock pointing were the two guys from Seychelles, our course mates and were at the end of their breakfast enjoying some fresh fruits and salads. It seems that western peoples enjoy bread more than ever. Chinese were enjoying noodles with their chopsticks, the rest were enjoying rice. I started with coffee and ended up in orange juice seamlessly watching food choice of diverse peoples from diverse regions. It was the best breakfast I ever enjoyed as the surrounding was rich with diversity and it made the food more delicious and pleasant with the inquisitive and diverse environment. I even watched seriously how people eat the food, use the culinary and order of eating. There were huge gaps between haves and haven’t, still a long way to go to make a beautiful world and ideal world.

**Epilogue
**
After wrapping of the holiday when we were back in our place, we were completely tired but were full of vivid and wonderful memories in our mind that would last for many years. Also we went for boating in one of the hot days. It was wonderful moment again roaming around the big glistening lake surrounded by tall and elegant mansions around us. On one weekend, we were invited by my Chinese friend to her university few kilometers west of my school. We went there and surprised to see how modern university looks like with big mansions, sporting and recreational centers and surprisingly big cafeterias. We visited several places of University and we went to dancing hall in the evening. It was fun seeing cultural program and dance party at the University. The environment was very good and there were different types of programs the student prefer. After my friend insisted too much, I even took the part in one of the caricature program and won the prize. I never did these things and I never feel shy anymore. Later we danced although it was very difficult for me as it was a Chinese dance but I tried to cope very hard. It was wonderful moment in the University and would be in my tributaries forever.
I finished the book Hemingway’s 49 short stories and started the new Chinese literature “The living Stone”. Eventually, the may was saying good bye for us and I had less than 50 days more in Nanjing. On retrospection, it gave me the best moment of the last nine months that will always remain in my tributaries forever.`,
        image: '/Travelnew/images/blogspot/blogspot_dc98cc7f7b5e9a3e.jpg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'placidly-quiescent',
        title: 'Placidly Quiescent',
        date: 'April 30, 2007',
        content: `[

![Photo](/Travelnew/images/blogspot/blogspot_f646248ee8cf95c4.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-HOOVGsK296jWBIm72UPNFZae-kRZg1dOIlSPySkalZuvQFxnJX058OJR4vDmLAEiIMTIo9SUbvzae9uiQH96RK4VtX7cKDkwm157kpsM2Gn6Hr2nf2XTP9Q4lp58_rZGX_JZ/s1600-h/PICT0006.JPG)

When I focus my eye-lens to far edge of the hill-stations, the changes were already been able to moisturize my gray matter. The lovely-hills surrounding us have already been painted by a fresh green layer of virgin leaves. As I focus my eyes near to the surrounding there were no differences either, the skeleton-trees look vividly verve with his new virgin leaves glistening and shining when the morning sun reflects through it every day. There were beautiful flowers everywhere, birds were chirping everywhere with many of them busy feeding their offspring’s. The grounds along with meadow were completely green no matter students were busy playing football everyday. The environment and surroundings were melancholy and dormant as the days become hot and long. The environmental and climatic changes were already there and we were simply waiting for it to happen gently and placidly. The weather has already started to become warmer and the Chinese students have already changed their old but warm uniform with the light ones that looks them smarter like a business professionals. The environment looks lucid, beautiful and clean. Many trees, shrubs and herbs along with birds were showing the rapid changes. The days are hotter as we have already started to wear light shirts but again the climate of the Nanjing sucks sometimes as it’s not predictable no matter I always manage to see the five days weather forecast of BBC.

Fujimiao Trip always remained wonderful trip no matter how many times we went there. The wide giant gates along all the way in every corners of city with long and wide roads, the beautiful temple located at the heart of the city, the man-held and goat carriages, the narrow stream with motor-boats and of course the crowded but seamless peoples. It looks like typical Chinese city in all aspects from peoples to architectural design and from fancy shops to huge artistic gates. Sometimes we stand at the small bridge that’s in the centre of city and watch the motor boats as it pass through the gentle streams in-between the big mansions along sides of it. Walking through the streets of Fujimiao was fun as there were sales and many shops everywhere; sales girls were smiling and clapping to attract attention of new costumers. Fujimiao is one of the best places in Nanjing that looks like perfectly and incredibly china, a place where the history meets with future.

It was a fun in one afternoon as we were roaming around the Fujimiao when we were lost for fifteen minutes as we were not able to trace out the main road as there were many roads that look similar crossing each other. However, it didn’t take a long time to trace our bus stop. The day became more colorful when few sales girls in the shop were crazy to take pictures with us. As usual, the McDonald was always waiting for us.

The following day we went to Shinjekou, the day was hotter but again it seems that I was the only guy to wear the half-t-shirt except few fashionable girls who were giving me accompany. The coffee and pizza after a long time was delicious change for my tongue in the hot afternoon that we were expecting and waiting for a long period of time. We really enjoyed the place as we spend long time to eat and enjoyed peeping busy and populous Ladi at the heart of Shinjekou.

As we were walking in the heart of Shinjekou we were completely amazed when some sales girls approached us. At first, it was confusion as we couldn’t understand the information that they were trying to communicate. Later, a smiling sales girl was persuading us for our photos so that she is going to print it. It was a promotional campaign of portable photo printing device of Canon. Finally we were happy to see our photos printed for absolutely free without a single penny.

There was a mini New Year celebration program in one of our mate’s room. The countdown for this time was Nepali New Year when all of us (Nepalese) were already gathered for the momentum. It was a co-incident that many of the countries in Asia including Myanmar, Cambodia, Laos, and Bangladesh have New Year on the same day. But the amazing and interesting fact was that each countries has different numbers for new year and some were lagging far behind and some were in the mid-way and others were already ahead. It was again complex mathematical and historical artifacts regarding the issue of New Year. But in terms of number Nepal is already 57 years ahead of the English date. We started with soft drinks and few light snacks. As usual, the coke was something I could enjoy with nuts and crackers. Nepali music and English music were already hitting hard so that we can dance in the congested small place inside the room with tiny speakers at the centre of the room. That was enough to light the cigar. Eventually, it was wonderful evening for remembrance without Nepalese food. Later we mixed up with other guys who were also celebrating it and convey the New Year wishes..!!

On one evening we invited our new friends Ruan and her friend Daisy for dinner. Amazingly, the dinner was like a tough expedition without any ambitions for my friend Tony as it was too hot and spicy. The foods were messed up. The girls were confused too as they couldn’t figure out our choices and couldn’t explain ingredients in detail. We were very choosy on eating. We were even awkward and couldn’t say what we want and the girls were completely nervous too as they couldn’t communicate well. It was even the new place for them and place was too crowded and the food was smelling everywhere. Nevertheless, it was again a new experience watching other people eating instead of us eating and enjoying.

Later in the same night, we roamed around the 1912 street and enjoyed colorful night at A8 and Scarlet. The place was too crowded and DJ Jack was playing rap and dance songs. We were simply moving here and there as the environment was pleasant and we don’t have to worry about heart-beating cold. All of us enjoyed whole night dancing and drinking after a long and hectic week-days. The smoke, colorful lights and people all were matching perfectly better than before as the external environment was better than ever and we use to take a periodic break at some intervals and roam around outside to have a fresh air. Earlier in the morning, it was a painful time after being nocturnal despite of beautiful weather and placid morning. The streets were deserted, there were few peoples in the wee-hours in the morning and few shops were open. We pass through Narrow Street walking in a gentle breeze that was refreshing us, surprisingly the girls were greeting but again some of them were staring as usual. Finally, we make our way quietly to the school and took rest whole-day.

I had small misunderstanding with my new-roommate. As we couldn’t settle the issue, so I refused to stay with him and moved to my old-room. No matter, it was a new experience for me and I learned something new from that room but amazingly I can feel happiness in my old-mate face and mind when he saw me back. The old-room was not lavish as the one I was staying on however I could feel something better than that as physical things always doesn’t give happiness. There was a peace, mutual understanding and a sense of open-ness and transparency between us that was more important than any other objects in the vicinity. I find it’s the person that makes the room more beautiful rather than the physical things in the room. The room looks deserted, however it was quite, sober and a simple; identical to my room at my home without many techno, fancy and expensive gizmos.

As the sun was becoming stronger and stronger each day, we used to stay on the shade of green trees that’s everywhere in the vicinity as the environment and landscaping was design with careful planning. Sometimes, we move around basketball court and watch the Chinese students being crazy of basketball in the hot sun. The soft and cold winds make us feel cool in the day. The ice-cream and cola became the bread of life again. The students started to wear half-shirts and it seems that cold frozen days are far behind and is never coming very soon. The tennis mania continues and we were playing with schedule and were enjoying the wonderful time playing in every evening before supper. Finally, the third-last course was finished and I was so crazy that I wrote the C program to count the number of days to go back and all of us laughed but enjoyed program counting for the days to go back.

Spending time with friends from Arab with Arabic-tea was something exciting that used to happen frequently in our Yemen’s friend room. As they start to murmur about their culture and politics. I listen to them very cautiously and inquisitively. Eventually it became a lecture of regional politics, geography and religion. Enjoying the coffee and evening walk in every day became the essential part of the life.

The last week of the month was horrible and stressful as we have a long seven days class consecutively. They were adjusting our holidays for two consecutive weeks so we were busy attending class even on weekends. It was too boring and monotonous. But finally it’s over now and all of us are ready to start a long and exciting holidays from the beginning of the next Month.

Reminiscently the month was placidly quiescent with subtle change and was successful in writing words fewer than ever before.`,
        image: '/Travelnew/images/blogspot/blogspot_f646248ee8cf95c4.jpg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'the-turning-point',
        title: 'The Turning Point...!',
        date: 'March 31, 2007',
        content: `[

![Photo](/Travelnew/images/blogspot/blogspot_9a76ddb9a1ecfe48.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcryBOv5CnGetcx60INqnDiKQfx471tspcRNCFQ5qrAOnmkXc0GlMk0IkTryE7Yf66WSoPX-dFXzANhnUYdty-gCpiIdJObsCZM5OpSyktfhyEr_5DJ3-qq5pqq-tidvX1mLDo/s1600-h/PICT0039.JPG)

It was the cold and windy but beautiful evening at Hunan Lu, the food-street of Nanjing. We were roaming around the artificial flowers that were decorated alongside the whole street with our Chinese friends in the last week of spring festival that was wrapping off very soon for a year. We were invited by Li and Lu for the Chinese food on this beautiful evening. It was astonishing moment as the climatic environment were subtle and euphoric as the sun was already down and we could feel cool and soft wind blowing through our ears. The delicious Chinese foods were waiting for us as we marched towards one of the Chinese restaurants where hundreds of peoples were enjoying their food in the beautiful evening. As we were used to with these Chinese foods, our friends were amazed and were staring us as we were using the chopsticks comfortably. The food constitutes few new items that we had never eaten before.  As girls were busy cooking food in the master pan that was embedded in the center of table with electric heater and were asking awkwardly and repetitively about food and our choice, however we were nodding happily with pleasant environment rather than eating. We were enjoying the moment in full spheres with fun and lust of excitement. As we were wrapping off our dinner and our friends were dubious about our appetite when we ate too little as compared to what they have anticipated. Nevertheless, it was wonderful hospitality and courtesy. As we were planning to leave, we experience short shower that was predicting that autumn is coming and which was obvious after cold and heart-throbbing winter. Later we enjoyed biting “caomei”- the strawberry and walked in a light frenzy shower with whirlwind that was blowing in the beautiful evening at Hunan Lu.

With the change in climate, temperature in centigrade scale increased drastically to two-digits and the days have already started to become warmer and were stretching for wee hours. The flowers and buds started to blossom, the green leaves popped out from every tree that looked dead and deserted like a cactus plant. The natural environment became greenery and verve as the students started to return and the buildings seems occupied after a long winter break. The small shops started to open at usual hours with its stereotype layout and smiling sales girls.  Again, to communicate with these girls to buy something was fun and irritation as we have to use sign language or have to point specific commodity that are in the range of our eyes. Again to know the price, we have to use tiny machine-calculator that always acts as an interface every time we went for shopping inside the premises or to do some bargaining at the town. The monotonous school-siren started to buzz every half an hour. The rooms were filled up and streets along with basketball courts and football grounds were occupied with green uniforms as usual. Hearing of “Er Er Shan Si " ..,1, 2,3,4.., The military drill has started again with girls and boys marching in homogenous pattern. Life started to become colorful after a long break and was moving fast and was more stringent in order. The falling off of students in the early morning became bread of life. I feel how human makes environment perfectly social with these artificial entities. The deserted place started to look lively again and seemed that everything is coming on track again after one month of long break. Students seem to be happy and energetic as smile occupies their tiny face and were busy gossiping their holiday experiences. The environment became perfect and I am enjoying it with new hope and excitement as the new semester begins.

Surprisingly, I received two books from one of my well wisher a day ahead of my birth-day. It must have been the birthday gift I received after a long time in my life. It was apparent that I was also becoming the victim of numerical illusion as my 28th birthday passed very swiftly and cryptically. I believe this month was one of the important months in different perspectives. In diverse views, some people might say I am getting old, some (myself and oldies) are saying I am still very young, I might be saying it’s a numerical illusion again incremented finitely (you don’t know that finite value) till your physical existence. So I am 28! There were neither a cakes nor any celebration as I keep myself mum.

But again something more than this submerged in my mind that has no turning point at all and it’s less likely to be reversible reaction in chemistry. Starting with Dale Carnegie’s positive thinking, I moved to secular humanism of Dr. Paul Kurtz. Finally, I am landed to Infidel- Ayaan Hirsi Ali and I realized myself that its time for me to take a big and bold decision that was resided in my mind for a long time.

Again Traveling from Asia to Africa and finally to secular china has made me think eccentrically that this is right decision for me that I have been waiting for a long although it has invoked my mind for more than a decade. Although I have taken this decision long time back but I believe this is my birthday-present from inside me. It’s again not important to dictate these things again and again as it might hurt somebody who has a deep and a profound faith on it. But I have to confess it, I am an atheist. Finally, I took a bold decision and I have realized that Infidel and Atheism is ruling me forever more strongly more ever than before. I feel more stressed as I was reached the answers of my imagination and weird thought that has been dominating me for more than decades. As I started infidel earlier this month, a book by Ayaan Hirsi Ali, I was inside the concentric and eccentric circles of principles and philosophies of religion that I was trying to free myself out from it. I realized that I was getting closer in a single dimension of secular humanism. It was the week of enlightenment with excitement and joy for me. It was a transition, a revolution that has been sketched in my gray matter for a long time. It was like a maternal pain every woman has to suffer to have a baby as I was crying and surviving desperately to feel the changes that have been accumulated in my mind for a long time. Finally I was emancipating from the close boundaries of religion forever from the secular land of China.  It was opening up new horizon but again hard in beginning to distinguish thin lines of ethics, freedom and religion. It was seeing different things in different perspective, the fading religion and stronger infidel. It was a sort of transitional phase for me, still I feel awkward to decide in crossroads as I was brought up in orthodox society where religion has been key and dominating issues for last 28 years of my life. The roads were trembling but again I had strong determination. I was getting more addicted with philosophy as I read some philosophical theories of Kant and Marx. I was looking for unique aspect of human who can produce cognitive theories that can address the aspects of materialism, communism and rationalism in a more stratified manner.

The course was focusing more on microscopic components of operating system and the professor was the most influential one with substantial experiences and knowledge in course matter. Course was the toughest one I have ever read as it was more abstract where cognitive theory rules and the professor was very skillful to address the problem with his full strength to convey the meanings of subject matter with his strong technical skills and visual aids along with superb and satirical examples. Sometimes, I feel it was more like philosophical class (that I had never taken) where there were convergence of mathematics, computer science and philosophy.

Many new students joined us and it was fun again to see the different new faces from different part of the land that I have seen in television and some I have never heard of. As these new students survive hard to acclimatize with new environment for first few weeks and were cunning hard to follow the rules, I was more curious to know about them and their country.

The life became more stressful as the book infidel and the course was exerting constant pressure on the tributaries of mind. However, the colorful night made the feeling of ecstasy and utopia accompanied by our new friends from Nepal. The meeting with Vicky, my first Chinese friend after couple of months was merely a co-incident again at the lift of Nanjing Normal University. She was happy to see me again but I saw shyness along with despair. I realize something was becoming barrier for her to continue our friendship as we used to have before. Later I realized that she has a new boyfriend. But I feel I miss something although I didn’t have serious relationship with her but she was the first Chinese girl I ever met in my life and I was keen to learn so many things about china from her. It would be difficult for me to reach her again and I thanked her from my heart. That night it was one of the most enjoyable night life I ever had in the disco as I was more rigid in my thought as well as my decisions were  vivid and fresh although it was in a transition period. It was again the fun, enjoyment and art of dance with colorful light and heart-throbbing music that I had always loved in my life.

The worst part will always be the morning in the 1912 street when we spend whole night in club. In the dawn as we get out from the club, we used to shiver and were tired and hungry after waking up for more than twenty four hour.  We look for twilight dumplings that were already available in the narrow street behind the 1912 street. But many of them who came out from the closed chamber never ever feel it disgusting as they still have the level of OH high in their blood. It was not amazing even to see some vomiting in dawn. As we walked with shivering in the morning of 1912 street, we see the natural face of all young Chinese girls and boys who were inside those close chambers and have enjoyed the whole night but despair and lousiness looms the dawn with tiring and exotic night. Many yellow taxis were waiting for the queue.

I met guys from Lebanon and Yemen. I was so inquisitive to know about Israel-Palestine issues that seems as it is from the time I was a kid but was looking for answers that has been not easy for many decades. No matter, he tried to give answers in his perspective but again it sounds it was lacking something from other part of the coin. Had it been so easy, I might have not remember the day I asked my father about this problem and he said that he is even seeing it from the time he was a kid. He is still searching for the answer and so do I. I remembered the BBC program where Simon Perez, deputy premier was interviewed by some of the young Arabs. The program was one of the most influential political debates I have ever seen in BBC.  To analyze the problem from the mid-line was not easy and I was just happy to get answers from his side of coin. Nevertheless, it was an experience I would remember always in my life as I have known from the guy who is directly involved in the everlasting conflict.

On one evening, I was delighted when the administration informed us that they are showing us an orchestra. But later we realized that it was simply a cultural and musical program of the institute. Again, the show was very interesting and curious as we had never seen these types of performances before. The performance was all in Chinese and it was obvious and we were simply the spectator to listen Chinese tone and a melodious music that we never had acquainted even though we had spent more than half of year. As thrilling sound and colorful light starts to rotate into the podium, the beautiful girl in the military uniform with her tall and elegant body, murmured in Chinese and all of them clapped. Apparently, we clapped imitating the Chinese students who were there. We were sure that she must be a good anchor and she has a lovely voice despite of us not understanding anything she murmured. There were more than ten performances, half of them were songs and half of them were short-dramas. The show started with a woman singing (probably) a national song followed with hundreds of claps of students each time. However the music and the tone were universal and was a proof of human civilization.  Then the other performance was all about the comedy drama that we never understood besides watching gestures of the different actors. The environment for two hours was univocal with constant flow of vibration of music and laughter and claps. Then I managed to ask one of the students about what the woman was saying. She was singing “Woman is a flower”. I find every modern romantic song irrespective of different language conveys almost same meaning, the abstract and enduring romantic feelings, a joy and eudemonia. We were blatantly supporting the zeal and enthusiasm of the actors along with hundreds of Chinese students. The two hours passed swiftly although we felt sometime the time should move fast as we were not catching anything no matter the musical melodies were striking our ear-drums.

The following weekend seems very busy as we roamed the Qin Jiao and Shin-Jekou with our new friends who joined us. Although the road and city seems familiar but again it was unique experience in different perspective as we went to town each time. We were more used to with public bus system as we find it more easy and fun to travel in public bus although it was too crowdy and slow. It was the tradeoff between quality and economy. But I was inquisitive to know more about this place from a wide window, traveling along the bus gave me more time to think about this country and peoples as I get acquainted with different peoples and environment. We were more frequent in McDonald and KFC and it had already become the part of our life. Eating became fun again no matter each time we get inside MCdonald and KFC; we have to struggle hard to get the place to eat. Although it seems that these multinational companies were everywhere in modern china but again the flow of traffic is beyond their capacity and it shows the leaning of the Chinese society towards the western life and their life were becoming more hectic as economy continue to grows in two digit. The tennis phobia continued as the weather became warmer and the days started to became longer. Sportsmanship predominant higher than before and the life was more stratified and hectic.

We went to the Fujiamiao, another city of Nanjing. As we were not sure where we should get off from the bus, we asked a young Chinese girl to help us to track the way to the heart of Fujimiao. She was cute but was blushed and embarrassed at the beginning as the normal Chinese girl. I was amazed when she told me that she loves physics and she is planning to study physics in her University. I have never found in my life woman who loves to study physics. The more important thing was that it was her own decision but not her parents as it happens in most of the developing and least developed countries. The city is decorated in old architecture with many doors but blended with modern styles and shops. The city is also called the light city as it is decorated with colorful light that dominates the entire spectrum. The narrow stream passes through the edges of the city where peoples were boating in the heart of the metro-city. We were also surprised to witness Rick-Shaw or the goat-carriages! The place was wonderful and there were sale everywhere as spring is on the way and beautiful sales girls were attracting every costumer by their gentle claps. The weather of the Nanjing is very weird, the temperatures goes up and down abruptly. But again, no matter how it fluctuates, the days will become warmer and warmer. The turning point for climate and my principle has already started to show delineation and was aiding me towards existentialism and secular humanism. The last day of the month was shabby with gloomy days and light shower in the morning with temperature dipping slightly and I was feeling melancholy using my fingers and brain as fast I can to give the finishing touch of these words. Finally my fingers were tired and ended up with saying adieu March!!! 2007`,
        image: '/Travelnew/images/blogspot/blogspot_9a76ddb9a1ecfe48.jpg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'faded-hope-and-silver-lining',
        title: 'FADED HOPE AND SILVER LINING',
        date: 'February 28, 2007',
        content: `[

![Photo](/Travelnew/images/blogspot/blogspot_82ba6a3723444fd4.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAbjE-IYKOpwLyMCQFoQ0O6nn2cQWdOoB4ePWNQiRhI_fW_kbnKKXWcYyco_4UJTsjZDD7CW1lI6WW5AJmJXgTzIgPsoRpUp5rhW7cqcqZ_HZCbN9j8UVqdlfOJZj50RGLHjvS/s1600-h/chaptersix.jpg) **T**he hopes were shattered inside the womb. Finally, a long month holiday was in the door-step. This long holiday gave me glimpses of schooling days and University life, the perennial beauty of those golden days that would be in tributaries immortally.

I finished the book of Secular Humanism by Dr. Kurtz as I was eagerly waiting it with pertinent lust and desire. Certainly, it gave me a lot of pleasure and helped me to vindicate my principles and attitude of secular life. This book is the best book I have ever read in my life depicting the life and different societies in completely different dimensions.

Again food etiquette was never going to end as this time we were offered a banquet by the University as the semester ended. Enjoying the food with different taste and wearing the plastic glove was again the fun with chopsticks problems as usual. But it was a sheep restaurant everything we ate was entirely sheep.

Feb 14 was definitely a special day for romantic lovers around the world in one or other way. Interestingly, that was one of the worst days of the holiday as we have to desert the plan at eleventh hour because of the weird telephone call. We were called immediately to be present inside the premises. With frustration and despair we were rushing but again the taxi hunting was not easy task. However, when we were back to our apartment we realized that it was nothing serious, was neither a hoax nor it was an April fool. They were distributing us a box of oranges. We were laughing for a long time but couldn’t resume our plan as it was too late. But oranges worked pretty well when we enjoyed it after the lunch in the sun.

As my hope of touching snow feathered away forever and I have realized that I don’t have luck anymore. Surprisingly, there was a miracle in Kathmandu Valley, in Nepal where there was a snowfall after sixty two years although the snowfall is common in northern part of Nepal where Himalayas including Mt. Everest lies. I feel how unlucky I was that I couldn’t enjoy such a beautiful moment in my country and being unlucky again at Nanjing. So the hopes have been permanently faded away.

I was obsessed with serial “The Lost”. It was making my life hell. Never been addicted to movies like this before, watching the movie even at wee hours was a sucking experience but feeling you are inside the movie was charming. But now I am suffering more to see the new episodes as it’s not released yet in the market and I have to download it through internet using P2P networks. Also keeping pace with sports was another achievement as we have nothing to do to kill time.

However, the month holds very special meaning to Chinese people as New Year and autumn festival begins. Most of the schools and universities have a long month holiday and this month is the time where highest number of human migration takes place inside the earth. We could see peoples always in a rush with their luggage in the hand everywhere. It seems that whole city was traveling and we were being deserted. The building premises inside the University looks empty and deserted as we could see hollow building without any human activities. As I pass through it, it means nothing without human, completely deserted without any verve.
Chinese New Year is the first day of the lunar calendar, so it is also called the Lunar New Year. And it is also called Spring Festival since it is the beginning of the spring term, which is the first term of the 24 terms on the lunar calendar. It was recorded that Chinese started to celebrate Chinese New Year from about 2000 BC, though the celebrations were held on different times under different emperors. They started to celebrate Chinese New Year on the first day of the lunar calendar based on Emperor Wu Di's almanac of the Han Dynasty.
Legend says the celebrations of Chinese New Year may be related to a beast known as Nian. The beast Nian came out to eat people on new years until an old man found a way to conquer it. Then people started to observe and celebrate Chinese New Year. The word "Nian" now has the same meaning as Chinese New Year, which is used as commonly as Chinese New Year.
Usually the preparation starts a month before the New Year. The preparation includes thoroughly cleaning and decorating the house, buying new clothes, preparing enough food for at least two weeks. The decorations are highly symbolic with a lot of lucky words, printed paintings and red colors everywhere. Kids are busy in shopping for different kinds of firecrackers. Everyone gets a haircut before the New Year.
Celebrated internationally in areas with large populations of ethnic Chinese, Chinese New Year is considered to be the most important holiday for the Chinese as well as ethnic groups such as the Mongolians, Koreans, the Miao and the Vietnamese, who were influenced by Chinese culture in terms of religious and philosophical worldview, language and culture in general. Chinese New Year is also the time when the largest human migration takes place when Chinese all around the world return home on Chinese New Year eve to have reunion dinner with their family.
The New Year's Eve is the time for families. The New Year Eve's dinner is the biggest dinner of the year, much like Thanksgiving dinner. The dinner is full of symbolic meaning, such as Chinese dumplings implying wealth since they have the shape of ancient Chinese gold or silver ingots. Everyone, even kids, drinks a little Jiu (usually hard liquor), which symbolizes longevity since Jiu has the same pronunciation as longevity in Chinese. Then the family chats while watching national TV shows or listening to radio together until the coming of the New Year. In China, the national TV shows have been prepared for a few months by a group of famous entertainers.
Giving Hongbao or red packets during Chinese New Year is another tradition. A Red packet is simply a red envelope with money in it, which symbolizes luck and wealth. Red packets are typically handed out to younger generation by their parents, grand parents, relatives, and even close neighbors and friends.
Chinese New Year's day is celebrated within the family. Usually family members gather on the morning of New Year's Day. At this gathering red packets are given to unmarried members of the family. The second day of the Chinese New Year is usually for visiting the family of the wife if a couple is married. A large feast is also typically held on the second day of the Chinese New Year. The seventh day of the Chinese New Year celebration is traditionally everyone's birthday, the day when everyone grows one year older. It is also the day when tossed fish salad, yusheng, is eaten. People get together to toss the colorful salad and make wishes for continued wealth and prosperity in the New Year. Dragon and Lion dancing is another tradition of Chinese New Year
Lantern Festival or Yuanxiao Festival is on the 15th of the first month of Chinese New Year, which marks the end of the New Year celebrations. Chinese celebrate the first full moon of the year on this day. It is the time for family reunion again. Yuanxiao is also a kind of cake, which looks like a table tennis ball (a little smaller) made of sticky rice with sweet stuffing inside. Everyone eats a few on Lantern Festival, which symbolizes family will stick together
2007 is known as the Year of the Pig. There are 12 animal names; so by this system, year names are re-cycled every 12 years. Current year is Year 4704 by the Chinese calendar. Posters with the word ‘luck’ are often seen around the New Year's. Each year is also designated by one of the twelve animals. For instance, 2005 is Year of Rooster; 2006 is Year of Dog; and 2007 is the Year of Pig. This system is extremely practical. A child does not have to learn a new answer to the question, "How old are you?" in each New Year. Old people often lose track of their age, because they are rarely asked about their present age. Every one just have to remember that he or she was born in the "Year of the Dog" or whatever. Since this is the Year of the Pig, any one who was born in the Year of the Pig is now either 0 or 12, 24, 36, 48, 60, 72, 84 or 96 years old.
The two most popular greetings during the Chiense New Year celebration season are (in Mandarin): “Gong Xi Fa Cai”, and “Xin Nian Kuai Le”. These roughly mean “Congratulations and be prosperous (financially)”, and “Happy New Year”.
Far in the horizon, I was able to see shimmering flashes and silver lining at the horizon in my grey matter after ill-faded hope melted away and we were able to plan to celebrate New Year in the small city Xu Zhou in one our Chinese friend’s home. I was wondering about that beautiful moment after being frustrated for a long time. So we were ready to start our three days trip to the Xu Zhou that was exotic, adventurous and skeptical.

Located in the northwest of Jiangsu Province, Xuzhou is the largest city of northern Jiangsu as well as the most ancient city of the province. Thousands of years' history has blessed the city with profound culture, especially when it was the second political center of the Han Dynasty (260BC-220). Now, Xuzhou is the center of the Huaihai economic development zone of China and also one of the nation's most important agricultural product bases.

The Museum of the Terracotta Warriors and Horses of Han Dynasty is something very interesting. Unlike Terra Cotta Warriors of Xian, the pit is aquatic and is located in the west side of the Lion Hill, the museum shows thousands of terracotta warriors and horses. The ancient artisans emphasized to show the inner heart world and the characteristics of the warriors through their different gestures and expressions.

Guishan Han Tomb, located in the west side of Guishan Mountain in the Jiuli District, is the most famous Han tomb due to it's large scale, exquisite architecture and mysterious building ways. It is the tomb for the sixth prince and princess of the Western Han Dynasty-Liu Zhu (128BC- 116BC) and his wife. The workmen at that time dug out the mountainside and built this palace like tomb, which is consisted of two corridors, two tomb paths and five halls including bedrooms, parlors, kitchens and stables.

Xuzhou Han City is located in the Jiuli district. As a modern architecture built in the Han Dynasty style, it is one of the television bases of CCTV (China Central Television) where many teleplays and films are made. Also, it is an artistic palace both to enjoy the Han culture and to relax and recreate. The Imperial Palace displays nearly all the artifacts from the ancient palace. The statues of the emperor and other officials give it a realistic atmosphere.

Quanshan National Forest Park is located in the south suburb of the city, is praised as the 'Nature Oxygen Bar' due to its breath- taking natural beauties and rich varieties of plants and birds.

Yunlong Mountain (Dragon in Clouds Mountain), lying in the south of Xuzhou, is a well-known scenic spot of the city. The mountain is divided into nine sections just like nine dragons winding in clouds, hence its name. There are many historical relics hiding among the ever green pines and cypresses and beautiful ravines, including the huge stone sculpture of Buddha of the North Wei Dynasty (386-534), the inscriptions carved on cliff surfaces of the Tang (618-907) and Song (960-1279) dynasties, the Setting Free Cranes Pavilion of the Song Dynasty and the Xinghua Temple of the Ming Dynasty (1368-1644).

Yunlong Lake is to the west of the Yunlong Mountain and is the sister lake of the West Lake in Hangzhou. Encircled in three green mountains, the lake is just like an emerald setting in the city. The most attractive place there is the Above-water World on the central island of the lake. Seen from afar, the park just looks like a huge whale playing with water.

Xuzhou Museum, located on the north side of the Yunlong Mountain, is a comprehensive museum responsible for collecting, restoring and exhibiting the cultural relics discovered in the city. It now shows various cultural relics in the eight exhibition halls, including ancient calligraphic works, furniture, stone tablets and some precious relics once buried with the dead in the ancient tombs. The souvenir center provides you with stone inscription rubbings, calligraphic works and pictures as well as other traditional handicrafts.

The true glamour of any cities cannot be described in words, however you need to explore it and feel it.

We were restless and were very eager to start our short but exciting journey of three days. Nevertheless it was an exotic, adventurous and skeptical as we were traveling alone for the first time. We have confidence and eagerness to start the journey; however the Chinese language was our weakness and were skeptical in one or other way.

The skepticism materialized when I bought the wrong ticket but we were quickly able to figure it out as it was written somewhere in English and the cost price was less than what our friend had told us. Later I showed full address written in English language and the women gave me another ticket with a smile. As we were taking rest in the lobby at train station and were eagerly waiting for our train to arrive. We were waiting in the wrong lobby and it never showed status of our train. We realized it later as I showed ticket to one of the women luckily and she showed us the way and we realized that we almost had missed the train. As nihilism was rising and our heart-beat was rising fast but we were able to feel relaxed when we were inside the train. We were lucky as our destination was the last station of the train. But peoples were staring at us as we have long beards that were grown up after many years in this vacation. Luckily, it was a double-decker train but the day was gray and gloomy. Most of the peoples who are traveling in train are either sleeping or playing cards or sticked with the tiny-box-mobile. We passed through Yangtze River again as we were moving towards north. This was the first time we traveled in the day in the train as we were enjoying every moment of the greeneries and terrains. We pass through ridges, fields and small villages. As we passed through it we can see agricultural and industrial revolutions happening alongside the track. Every house has a New Year stickers printed in the walls and doors. It seems that everything was red. Our friend Qi was bit worried and he was busy on taking status from time to time through our newly bought mobile phone. The message was giving us more companionship and we were feeling more confident and enjoying our journey.

Sometimes I felt disgusted when a person tried to avoid us when you are simply showing your smiling gesture and affections. I was confused, we are scared or they are scared. But I never let my spirit down as inquisitiveness and eagerness was ruling us. Finally almost at the end of our journey, it became more interesting as we were able to break the tip of an ice-berg with some of the people around us and was happy to share our basic information with minimum communication skills.

Finally we arrived at XuZhou, as we came out from the train station, it was 1900. Our friend was waiting for us at the train station and it took no time to locate him as he has already passed the information about his geographical location outside the train station. Once we were out of train stations we heard bursting noises of fire-crackers and we could see fire-crackers everywhere in the sky. Thanks from our heart XuZhou for welcoming us and Qi for inviting us.

We were happy for their warm greetings although it was a new year-eve and it’s common in any part of China. As we were in front of the train station, I couldn’t figure out differences between 6 million inhabited Nanjing and one and half million inhabited XuZhou in terms of physical infrastructure city possesses. The cities architecture looks similar and it didn’t make a lot of differences to me in any way. But we were struggling hard to find a taxi again.

As we reached his home, we were warmly welcomed by his family members including his father, mother and grandmother. Later we shared the eve dinner with his family. The chopstick problem was again there and also there were some gaps because of the language as Qi can only understand English. We enjoyed the delicious dinner with wide varieties of food. More importantly, the compliments, gestures and hospitality were of great concern to us. We were amazed again when grandmother told us that we are the first foreigners she saw after the Japanese invaded China. All of them drink alcohol as it is the culture to drink on that day. We ended up with almond drinks. Family members were busy making foods for the New Year. We could hear the fire-crackers and see colorful lights whole night. The Chinese nation threw itself in a Diwali-like celebration whole night with sound and light ushering in the new year of the pig.

The next day early in the morning after taking noodles as a breakfast we went towards Lion Hill Mausoleum. However, whole-day we could hear the bursting fire-crackers. Even inside the house, it’s a customary tradition that before having breakfast, lunch and dinner. Firecrackers should be ignited inside the house.

Lion Hill Mausoleum is one of the unique mausoleums we visited in China. It has a full of verve. As life and dead holds equals’ importance, so everything you have in your life should be there in mausoleum. It was divided into four parts and took nineteen years to build it. We were surprised to see this unique mausoleum and watched different chambers designed with care and profound skills. People in Han Dynasty believe that Jade could prevent from decaying of physical body so Jade was used everywhere and was a precious element. Most of the precious elements including belt-buckles and gold ornaments were taken to the Museum. Also we visited the aquatic pit of terra cotta warriors. There were cavalry regiment and different warriors. The pit tries to describe how horses and cavalries play a vital role in the military formation in earlier days.

Later we had a delicious lunch at one of the modern Chinese restaurant. The restaurant seems to be fully occupied as peoples were enjoying the New Year day. It was the same old way to eat, you have to become a cook by yourself and have everything in front of you that you need to cook. This time, Qi takes initiatives and he himself established as a professional cook who can make delicious Chinese foods. It was wonderful experience again eating and seeing the charm of the city from the window.

Again we opted to visit Museum. We were lucky as it was open and we were crossing the finger for it from early morning. The museum was very modern and we were able to see so many antiques that have been excavated from the different monuments and historically important places around the periphery. One of the most interesting part of the music was a color, the different colors in a different floor of the museum makes it more allure and attractive and was thus able to attract enough visitors with wide variety of antiques and monuments. Not only that, I find the museum very modern and psychologically designed.

Later we move towards a bank of Yunlong Lake and enjoyed the beautiful evening. As we walk, we inhale fresh air and can see the big and beautiful lake and behind us we can see peoples traveling to Yunlong Mountain through cable-cars.

Finally, we enjoyed a New Year dinner with the family again. It was simply a re-union and it was again the emotional moment rather than something that could be described in words. We enjoyed warm hospitality along with delicious foods deep inside in our heart that would be immortal in our life. We eat dumpling and we realized that there are few foods in the Nepali and Chinese that have identical meanings like Tofu and Mommo. Again the environment was more interesting rather than foods as it was a completely a new and blended experience for us everything amazing and inquisitive.

Later at night, we watched the fire-crackers in the sky for almost an hour and we could hear and see the colorful flashes whole night. There were different types of crackers some were bursting in different types of lights other following a different track and some were bursting with unique sounds. I was amazed how much money that could have been spends on these things although firecrackers were invented on china. I had never seen so many fire-crackers in front of my naked eyes except in the inaugural ceremony of Olympics or any mega events happening in other part of the world in the TV. It seems that whole-china is a bridegroom and covered with bright lights and colors. We really enjoyed watching it as it was completely a new experience for us again and it was making the environment verve again.

The next day after our breakfast and giving tons of thanks for the kind hospitality and care, we had to say good-bye as we have to catch the train early in the morning to Nanjing. But this time we were more confident and were happier as we have gathered enough experiences and we were not novice anymore.

As the train moved on, we can peep the beautiful rural part of china and the sun was rising slowly as we moved towards south. Children have already started to eat the breakfast but we didn’t care for it as we have it already in the Qi home. However, Qi mother have also given us a lunch packet so that we can enjoy in the mid-way. But again peoples were staring to us and we were even more frustrated and embarrassed when a kid spitted us for no reasons but we simply smiled at him again as we have no other options. As usual, mobile warfare, eating and sleeping are the three common activities of peoples I realized in the train. I realized last time that I need a coke desperately so this time I was able to buy it at train station and enjoy the journey with beautiful scenery and a coke. Again we were finally enjoying the trip as we were able to talk with people around us and I was even amazed when the guy told me that I look like Taliban. So, it makes me think seriously that an outer appearance plays a vital role no matter how you feel inside. I smiled at him and said yes, however, I was finally able to convince him about my country by making the map. Finally we arrived at Nanjing very easily and relaxed.

Finally as holiday was going to end very soon, we were able to make get together with some of our Nepali friends at Nanjing Normal University and we make our way towards 1912 street again. The twilight at 1912 street emerged but I see it more differently and weirdly this time.

As we enter the club, the verve of music was again inviting us with colorful lights and heart-throbbing music. This time I was able to meet some of my friends again. I can even see the existence of Pluralism in different forms inside the closed chamber. It was simply a common juncture for peoples to enjoy their feelings and emotions with the aid of music irrespective of different walks of life, regions and cultures. The life at 1912 street was going like before as we have been there after a long duration.

The world is moving towards determinism and relativism that’s what I feel inside this close environment where smoke and music rises higher than any other tangible objects. Feeling transcendental with the art of music and dance makes you feel you are at the utopia. Jugs of ice and alcohol keeps on coming as different light moves in different angles, the music keeps on going, the time ticks on, people moving for a whole night, the security continuously keeps eye wide open every time and DJ jack keeps on playing the same old but verve music, a sort of melagonia existed forever.

Peoples quelling the thirst of their feelings in different ways some are laughing, others are shouting hard, others just move their legs in the beat of music, no restrictions anyone from old to young, from a young girl to a mature woman , from radical Islamic woman to religious Christian , from Jews to radical Hindu, from black to blondes, from Africans to Asians, from Europeans to Americans, everyone meets here, there is no boundaries and an open place where people from different walks of life just mixes up and enjoys the moment in the land of of Zion. I enjoyed it with a full verve after a long break but never took a long time to catch the beat of music to move the pace of my body.

The month was also interesting as we started to use the public vehicles effectively more than ever. We enjoyed traveling through bus and we started to realize that it’s very easy although it’s late and sometimes it’s crowded. But again I realize it has different blends of experience and we need to experience it to know more about this place and a country. Traveling in double-decker was again another fabulous experience that resided inside my gray matter from the time I was a kid.

Finally, the half-year in Nanjing is finished and the holiday is going to end soon. I know I would never have free time like this in my life. The countdown has already been started as faded hope fades forever and silver lining gives more gleaming hopes in the Chinese New Year. [

![Photo](/Travelnew/images/blogspot/blogspot_56cd720de87d501f.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVTR6N32NeUDs15MvaBGV4PQVQuCwK9ngT_xjEYTonCltdzAhnJcKYDJfP660cComTk7U39NRgMhQz039-_UaxQz4bvMaTrUjoQwjBjnegBRgwoRPPBkbVnhtpVcgVZjclAp1y/s1600-h/chinese.jpg)Xin Nian Kuai Le…`,
        image: '/Travelnew/images/blogspot/blogspot_82ba6a3723444fd4.jpg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'numerical-illusion',
        title: 'Numerical Illusion',
        date: 'January 30, 2007',
        content: `[

![Photo](/Travelnew/images/blogspot/blogspot_ebe836249c5c2faf.gif)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJwEhpb24XN-JIVRBMAdbFM2l2Hby6DvujGekeX5OJO4TztFeDTcocrP9t-sLGeqz90WSQbgPIkAS2zJTrFaJ-MiJvRZUJLGOXe_fHPqGZ4hFTRqhMVRtXC6f6tNe88KOt55iM/s1600-h/IL2.gif)

The parties to ring out 2006 have been over for almost a month and the confetti has already been cleaned away. Now it's time to look ahead to the New Year with new hopes of aspiration and school of thoughts. However, for many of us it would be nothing more than psychological illusion of numbers in our grey matter. The aspirations and hopes are simply a complex function of psychological and physical needs. The results are obvious; it may bring new invention or catastrophic war or absurd static environment. Nevertheless it creates waves of turbulence psychologically and thus drives the human for endeavor.

I was celebrating this illusion with fragile hope but obviously there are some distance seed of glistening hopes submerging as a mirage in the horizon. The New Year started with three peoples in internet room and we make count down and switch on the system expecting that positive change will happen in the world for everybody from the peoples fighting hard in western Africa to ethnic conflicts erupting on different parts of Asia. For Europe and America, global terrorism, serial killers and small arms could be in the races that need to be addressed. For me, the year ended with vanilla coke and coke was again something I drink (eat) for the first time in this year. As I don’t see any changes that are happening instantly, it’s giving me a glimpse that this numerical illusion has a long way to go for me and battle would be fierce in Basra as to General David. I have first photo of the year 2007 and it was worst photo!!- A pictorial illusion again, that can hardly describe my feelings and emotions. It must be photo taken on the rush. Later we gather and make first loud noises of the year. Finally, I was spending time with friends in so called virtual world of future and past ,chatting with someone who is lagging by year; European friends; others who have already spend couple of hours of new year; my Australian friends; An numerical illusion again talking with past and future numerically and at the same time for me .

Every day was amazing living in the single digit temperature most of the time. Also I encountered one of the weird combinations of maximum and minimum temperature; Maximum was 4; minimum was 3; the amazing difference was 1; the numerical illusion is following again.

Days are becoming colder but my fantasy remained as gray feelings that submerged permanently in my delicate mind. It was a hoax for me and I am hoping for colder days and snowfall in February. Again, I conquered Mount Everest by chatting more than 12 hours continuously, a disease called chat mania.

Food etiquette was following again when some of our Chinese friends invited for Chinese food. It was wonderful time at Ahwai Special Brother Restaurant and Bar at Xinjekou. We were lucky seven and it started with drinks, both hot and soft. I started with sprite. We sat in corner, in a separate chamber of restaurant. The starting was very exotic as they started to bring dishes with uncooked food. Surprisingly, we find at the middle of table was a big cooking bowl, above it had a child and under it was the gas burner. So, we realized that we were going to be chief chef and have to cook every food implicitly cooked on the big and small bowl. Surprisingly, I didn’t see any oil. We were going to taste the lower and upper bounds of these foods when they are boiled; cooked. Simon was better in cooking and sooner he established himself as chief chef, so he took the initiative and we were passively assisting him. I was strictly following his steps and find out quickly that there were no complex algorithms that needs to be followed. The rule was simple fold. Just make sure that what you want to eat and just pour it in big and small bowl where hot soup was boiling. There were many vegetables and meat lined up nearby. I was scared at first and thought what we were going to do with it ? When I counted it, there were more than twenty items of food. I took a long breath. However, It was a perfect moment for us relaxing and enjoying the Chinese food with commercial break for photograph and rest room. We were enjoying very slowly as we have to give some spaces and time for our stomach to process the food we have eaten. Honestly, that day is one of the days in my life that I have eaten so much food. Following some days, my stomach complained me notoriously and I was always running. However, Eating Etiquettes were behind curtain that seemed it never existed.

Surprisingly, I am happy that these days my old friend of aged 68 could answer me something in English after every morning exhaustive training. He loves to say, “I am fine, Thank you” with his old-smile and with a parrot-type imitated stereo-type tone. After all, it was remarkable achievement for both of us.

I suffered from Flu for seven days. It was terrible; I thought I will die of Flu. I vomited after 22 months and I recalled my days in Burundi and I was more serious and scared. I almost fainted for few seconds and they took me to the hospital. When I was in hospital, I feel good as many patients were waiting for the same diagnosis. The professionalism of doctor and nurses really deserves sound of an applause. I find most of the doctors were busy checking the history of patient in computer. Nurses were so skilled that the injection they give me never touches my skin. But all peoples stare at me wherever I go as I must be the only foreigners in that closed chamber. Later, I was lining up with many patients who were suffering from Flu to have some salines. Finally, she injected me three salines and was back to my room at midnight. Immediately, I started to feel good. However, after that incident I feel so bad and I realized that my emotions were falling down drastically. I thought, I was desperately surviving for existence. I feel I was lonely and deserted. It must be homesick.

I got two important books from my western friend, I am grateful to her as those two books can change, foster and consolidate my school of thoughts and can pave way for the aspiring future.

For no reasons, I change my room. I am in 305 now, the numerical illusion again. I was moving from Namibia to Nigeria, South to West Africa. My old room mate and I lived in harmony for last four months. I am grateful to Francs for being my first roommate and definitely would remember him for my whole life. But I have more lavish life style now as this room is well furnished with sound system and notebook computer.

The new course was professional and applied course as we were learning about vendor specific technology. Microsoft windows 2003 server administration was interesting and professional course. This was more like a workshop, where we were spending most of the time in installing and configuring different services in servers. The musical cacophony vibrates around walls and surpasses around the environment making it more allure. It was wonderful experiences that we gathered could be instrumental in real world. I am sure the professor loves music and dance very much. Unfortunately, final exam was the disaster for most of my classmates.

Using the public bus for first time was something that made me skeptical as there was problem of language and procedures we have to follow. However, there were no differences between car and bus except that couch seats and few peoples. In bus everybody seemed loyal and perform their daily job in the tiny electronic gadget that’s near the chauffer. Everything is automated through the tiny electronic gadget. I compared to my public bus in my country, its ambivalence. I realized that we were becoming VIP for the last five months without experiencing this exotic environment and not caring financial gain.

Finally, I am wondering about my long month holiday and spring festival. Don’t know how this numerical and psychological illusion drives me but again I have to wait time to see its poignant effect. But again let’s hope that this numerical illusion prevail positive changes for all living things.`,
        image: '/Travelnew/images/blogspot/blogspot_ebe836249c5c2faf.gif',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'food-epiphany-and-eating-etiquette',
        title: 'Food Epiphany and Eating Etiquette',
        date: 'December 31, 2006',
        content: `[

![Photo](/Travelnew/images/blogspot/blogspot_41d8eaeb76fed7bd.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVhWumLbg7lpxOf6quHypbSPriZQkn_DQKZ_YnXR1HE_vTkKxOdmI9lXHSUkdTF7LwciSgwXA4wu3ivHT6urBU1k1NPaWFyU2ROhkcHJGqFw0hQQWUK8F4e6Dwhzpsj0Wpn3L2/s1600-h/food+copy.jpg) Food Epiphany and Eating Etiquette

                                                                23:45 ,December 31 ,2006

                                                                            Nanjing,China

The minimum temperature is below the freezing point and it accelerates to reach two digits in the mid-day. However, the cold wind will be with you most of the time that has already started to hit the inner tributaries of mind and heart both physically and psychologically. Adapting to live in the freezing cold for a long time is a challenge and opportunities for cells and tissues. I am still eagerly waiting for my grand day!! But I have to wait one more months to reach the climax of freezing cold to feel the snow fall if I am lucky.

The month started by computer network course, the area of my interest of undergraduate degree. The course content was not impressive as I expected to dig more, nevertheless it was professional. It helped me to get fundamental and practical insights that are worthy in the professional environment. Learning Photoshop and finishing many e-books in snail-crawling class was something I have never expected I will do in my life. However, I was happy I learned Photoshop although I am poor in an art of drawing.

Life becomes colourful when it’s twilight in the 1912 street. Asking for some barbecue sticks and getting more than two dozens sticks was one of the common problems we suffer due to the gap in communication. However, when I ate a lot of it, I realized that it was the wise decision that I have made which was keeping my stamina up for the whole night, eventually assisting art of dancing. It was a food for enjoyment and living.

There are different reasons why people eat food. Obviously, the prime reason is for survival. But when survival is no more a question, then people eat food for enjoyment and fun. Some people are very conscious about their food to keep there physique to be slim or to show biceps and triceps. Some peoples have a passion of eating, they can’t resist it and can’t avoid it, and no matter they are suffering from diabetics or obesity. They are vulnerable to foods and they are cryptic in the dining room.

The choice of individual varies diversely depending on their culture and the way they are brought up. Interestingly, age and sex are crucial factors which determine the choice of food. Western and Eastern foods are completely different. Even the foods within the eastern cultures differ according to the different geographical regions and cultural diversity even in the same region.

Some are under nourished and some are malnourished, some are underweight and others are obsessed. Some are spending lot of money to manage their weight and some are not having enough money to have basic foods they ought to have.

Hunger and famine are some of the biggest challenges of the 21st century. No matter, how people define an art of eating, I should say I am not fond of eating except few itineraries; maybe I am eating for survival!! It is no doubt that eating is key issues not only for human to survive or for ecstasy but also for all living creatures in the universe.

Vicky, the name sounds Hindi, but she is my Chinese friend. Having English nick name is one of the common cultures of young Chinese peoples. I do have many Chinese friends but this girl is very close to us and is very happy to spend a time with us. Vicky, A freshman of Psychology major at Nanjing University, is originally from Beijing. I would be always thankful to her for sharing her precious moment and help us to know insights of Chinese culture despite our communication gap. I never asked her Chinese name that shows how pathetic I am in Chinese language. However, it’s mind-boggling every time she brings that tiny electronic machine with her to bridge the gap of our communication. This is how technology helps people to bridge the gaps and grasps opportunities. Promiscuously, it seems the missions are learning English and Chinese culture cryptically.

On one evening, we spend more than five hours walking through the underground train subway. It is mind-boggling to roam around the underground metro subway as you see the fascinating window shops that serve your every need. You will never realize that time moves so fast until you see your clock tickles seamlessly as the sub-way spreads more than few kilometres, bigger than shopping malls of Kathmandu. The three layers spread with wide varieties of commodities ranging from the beauty parlour to KFC and MCDONALDS and at the bottom is the metro. I was wondering when I will experience travelling through underground metro but it was never a distance dream. Watching other peoples doing window-shopping was a fantastic experiences that will remain in your grey matter forever in this crowded sub-way.

Spending entire evening with Vicky and watching her trying to catch English words was amazing. But it seems that she was imitating more slang, the analogy to most of African friends, rather than understanding its proper uses. It’s no doubt that English is becoming critical and a key factor for career and growth opportunities in china like of many countries as globalization continues to invade the geographical boundaries.

I was mesmerizing the time I met her for the first time at the corner of Nanjing Normal University when we were enjoying mutton barbecue, we never thought we will be so close with her. It was simply the matter of time and the frequency of propagation.

Later we enjoy the night life again. We were already addicted to hear the western music in eastern culture and colourful light and heart-throbbing music in subtle environment that were hitting our ear-drums whole night. The vomiting and sleeping jerks are daily commodities that can be enjoyed without tickets around these premises along with exploding emotions and musical harmony.

It was already a freezing morning at 1912 street after fascinating and wonderful night life. The clock was ticking so fast again with the beat of music. It was wonderful time dancing whole-night. Eating dumpling (MOMOS) with chopsticks in dawn was the need or the enjoyment that was very hard to realize. However, the month was surprising as most of time we were busy in eating various types of foods ranging from Italian to Chinese, and truly Nepali. It was simply a food epiphany, a co-incidence for wrapping-off the year.

Eating etiquette can vary widely between different cultures and nations. In China, a person who takes the last item of food from a common plate or bowl without first offering it to others at the table may be seen as a glutton and insulting the generosity of the host, similarly, amongst older Australian women, a woman who takes the last item of food is called the old spinster, whilst in most European cultures a guest is expected to eat all of the food given to them, as a compliment to the quality of the cooking. The last two needs to be verified personally. In some societies including Hindu it is considered disgusting to eat with the left hand, because the left hand is reserved for dirty tasks, and left handed individuals are sometimes forced to use their right hand.

Again, it was time to enjoy Nepalese food again. But this time we invited some of our Chinese friends and Nepalese friends together to TajMahal Restaurant and Bar at Shin Je Kou, Nanjing. We were two less for a dozen with four of our Chinese friends. As we sit together in two rows facing one another. We started with milk-tea, a traditional tea of Nepal. In the walls, the environment was perfect as we can see different beautiful Indian actress and south-eastern culture. When we started our food, Chinese friends were in dilemma, maybe they were looking for the chopsticks that were not there. The dishes and utensils were antiques all made up of bronzes. Our foods are very spicy compared to Chinese foods. I can see our Chinese friends looking for the water frequently to quench the thirst. It was their first experience. Everything in life at first is confusing but amusing and intrinsic. We started our lunch at mid-day. Later some of the foreigners also enjoyed watching us eating the traditional Nepali food as we have homogenous foods along the table. After tea was traditional bread, rice, chicken curry, pulse, chicken-tandoori, Rice, salads. The food was even spicy for me. I could feel something was happening inside me, however, we enjoyed it a lot. I believe my stomach has already been tuned for Chinese food. At last, we wrap-off our wonderful lunch with desert white-sweet called “Rasbari” in Nepali. We enjoyed almost two hours. Practically, we were never concerned about food etiquette as in multicultural environment these issues are non relevant as there is no uniformity. Simply most of us were enjoying. We were happy that some of our Chinese friends are willing to visit Nepal someday, I am afraid; it’s not a verbal and food compliment!

The following day we were invited by few Nepalese friends to have dinner near Nanjing Normal University. We went to talking restaurant. This time we were exactly half-dozen rounded up in a small table at the corner. At other side of the table we could see the Christmas tree. Before we pass through the streets today, we could see everywhere Christmas trees. I think these Christmas trees are guided by the principle of globalization and economy. We enjoyed pizzas, mashed-potatoes, spaghetti and drinks. It was perfect time enjoying the western food.

At last in compliment before leaving, we got a merry Christmas wishes from owner.

Also we were lucky to visit Nanjing Hongshan Forest Zoo this month. My desire turned into reality when we used metro, fast moving underground train that passes through Nanjing City from the centre.

We started with Flamingo, move to crown cranes garden and was happy to see the Siberian crane. We watched peacock garden, I watched the peacock legs. In Nepal they used to say “peacock will cry seeing legs that are not beautiful like its feathers”. I couldn’t convince myself, the legs were not as ugly as in phrase.

Later we were having ostrich mania as everybody wants to take photos with this big bird. I was just wondering how nature creates these wonderful things with diversity. After that, we move to carnivorous animals starting with panther, Bengal tiger, white-black tiger. Most of them were sleeping and it seems that they were not happy behind bars. How could they be?? Animals don’t love modern and materialistic life like human. Then we move to Lion zoology garden, the lion stunt was the majestic and royal style. In the way, I was shocked to see some rotating wheels again; it gave me flashback of the shocking time in amusement park couple of weeks back.

We can see many children’s at this place as it was the children’s place. They were happy to compliment us with “ni hao” each time we greet them. Something I have learned in last four months.

We had fried-rice as a lunch this time, the cheapest lunch I ever had in china. I was scared to have it at first because of stomach problem as we were experiencing different types of food and I was already tuned to Chinese food long time back. It seems that this time everybody eat for calorie after using it to see natural diversity.

Interestingly, I was scared to ride camel and horse to have photos at first. But I have no patience to resist becoming a cowboy or a Siberian silk-road traveller with horse and camel. It was a wonderful experience to have photos riding them.

Also, we watched one of the endangered species of the world, white panda and red panda. Red panda gave us warm sense of hospitality but white panda maybe dreaming of his boy-friend so she was not active. She was lying and enjoying the nap of winter. I think she did wise decision.

One of the incredible experiences was animal circus inside the zoo’s premises. It started with warm welcome and applause with tiger and lion show. They were tamed by the professionals and were performing different gestures and sometimes were rotating the wheels. It seems that they were tamed using pointed and thick stick along with the frequency of sound. The show was followed by dwarf and dog. Dog did some aerobics and walked only through front and rear legs. Later she did skipping. Then we saw monkey aerobics and bear’s cycling. At last, there was procession taking Christmas gift by bear at last with monkeys in vanguard followed by human. It was perfect combination of zoological diversity. I was amazed to see these performances, however it seems that most of these animals are not enjoying the show except dog, they were doing these things in psychological stress, and I feel sorry for them and was optimistic for their independence and freedom.
Later in the eve of Christmas day, Getting Christmas Card for the first time in my life was another wonderful experience in non-religious china.

Also, I got my first New Year gift from Melody, my Chinese friend who lives at south-east part of china. We never meet but we were good friends on internet, the virtual world for many peoples but real one for us. But I was surprised that she knows my choice. I think that she read my blog seriously. No matter her choice was perfect.

We were studying in the weekend as they were elongating New Year holiday for three days. So, are we becoming book-worm? Something I never did in my life.

The most disgusting part of this year was internet crawling to survive as we were isolated for last four days because of earthquake in Taiwan. It was serious problem from Beijing to Bangkok and from Shanghai to Kathmandu, most part of Asia pacific region due to the problem of fibre-optics. I was becoming crazy of internet so badly that I could feel it making differences in my life although it’s simply a virtual environment for many.

The year is rounding up forever within few minutes for me. Peoples in Aussie are in the year 2007 and will be followed by Asians and rest of west on the basis of Longitude.

Closing up food etiquette on the New Year eve was interesting for me. Completing my blog with apple and vanilla coke was exciting moment for me enjoying the last hour of year 2006. Behind the curtain was the Peter Andre with Mysterious Girl. The apple was something I never liked in my life and coke was something I always love from my heart, the taste was juxtaposition. I am still asking myself this is a food for epiphany or etiquette. But for me, it was both!!

I know this is my last paragraph of the year 2006. Finally, let’s hope that peace and development with secular humanism prevails in the year 2007.

Adieu 2006: Time 12:45: Nanjing, China`,
        image: '/Travelnew/images/blogspot/blogspot_41d8eaeb76fed7bd.jpg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'life-is-series-of-unpredicted-journeys',
        title: 'Life is Series of Unpredicted Journeys',
        date: 'December 7, 2006',
        content: `[

![Photo](/Travelnew/images/blogspot/blogspot_c4876e34612d5b7b.jpg)

](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYtn6FqQxducPhGK3bmuXIhvDJe6Lnfp2hEZmWXeg_BiLyshECIJ3zHJMvMfcvnt723ZdevhOw9Aplan79hGL6IKwtrA2dYBTAaxNeXIaUnTZuo3v3davxVXeylisZy1yiAIEm/s1600-h/Hukou.jpg)

Life is Series of Unpredicted Journeys

Nov 30, 2006

It was the beautiful morning and sun was glowing as usual. However, I could feel differences in its strength and penetration. The sun is not warmer as it used to be and the winter has already knocked us.

We went to golden bridges in Qi Jiao. It was one of the cheapest markets at Nanjing but you should be cautious in bargaining. Sometimes you never know the extreme ends. Also, you could see unmanaged pavement and open restaurants in the street but you can get everything to eat. I find this place good for bags, electronic goods and cloths.

The end of first course, the room number 112 multi cultural party, playing tennis for first time are some of the events that I will remember this month forever in my life.

The new doctorate professor, having profound instructor’s qualities, one who loves to laugh from her heart, a woman with first degree in space technology, advanced degree in electronic warfare and PHD in information tracking, was unforgettable woman. I was very happy to have doctorate professor of my first degree for the first time in my life.

I enjoyed learning about Chinese tea culture. Don’t feel amused if you see every youngster to old peoples in china carrying a big tea-jar in their hand every time. I tasted Green tea – most expensive tea in my life which was offered free by our professor in class.

Green teas are mostly used in winter and red teas in summer. Most people like green although youngsters prefer cola and coffee. One of my Chinese friends was insisting me that I should wait for third or fourth cup to get the best out of it. At first you have to wash your cup with tea. The tea may cost up to 500RMB or even more higher than that.

Of the three major beverages of the world tea, coffee and cocoa, tea is consumed by the largest mass of people.

China is the homeland of tea. It is believed that China has tea-shrubs as early as five to six thousand years ago, and human cultivation of tea plants dates back two thousand years. Tea from China, along with her silk and porcelain, began to be known the world over more than a thousand years ago and has since always been an important Chinese export. At present more than forty countries in the world grow tea with Asian countries producing 90% of the world's total output. All tea trees in other countries have their origin directly or indirectly in China.

The word for tea leaves or tea as a drink in many countries are derivatives from the Chinese character "cha." The Russians call it "cha'i", which sounds like "chaye" (tea leaves) as it is pronounced in northern China, and the English word "tea" sounds similar to the pronunciation of its counterpart in Xiamen (Amoy).In Nepali we call it “Chiya”. The Japanese character for tea is written exactly the same as it is in Chinese, though pronounced slightly differenced.

The habit of tea drinking spread to Japan in the 6th century, but it was not introduced to Europe and America till the 17th and 18th centuries.

Chinese tea may be classified into five categories according to the different methods by which it is processed. The Green tea is the variety which keeps the original colour of the tea leaves without fermentation during processing. The Black tea, known as "red tea" (hong cha) in China, is the category which is fermented before baking. It is a later variety developed on the basis of the green tea. The Wulong tea represents a variety half way between the green and the black teas, being made after partial fermentation. The Compressed tea is the kind of tea which is compressed and hardened into a certain shape. It is good for transport and storage and is mainly supplied to the ethnic minorities living in the border areas of the country. As compressed tea is black in colour in its commercial form, so it is also known in China as "black tea". Most of the compressed tea is in the form of bricks; it is, therefore, generally called "brick tea", though it is sometimes also in the form of cakes and bowls. The Scented tea is kind of tea is made by mixing fragrant flowers in the tea leaves in the course of processing. The flowers commonly used for this purpose are jasmine and magnolia among others. Jasmine tea is a well-known favourite with the northerners of China and with a growing number of foreigners.

Producing a tea is not an easy task. A new tea-plant must grow for five years before its leaves can be picked and, at 30 years of age, it will be too old to be productive. The trunk of the old plant must then be cut off to force new stems to grow out of the roots in the coming year. By repeated rehabilitation in this way, a plant may serve for about l00 year’s .The season of tea-picking depends on local climate and varies from area to area. The picking starts from the end of March and lasts through October, altogether 20-30 times from the same plants at intervals of seven to ten days. With a longer interval, the quality of the tea will deteriorate. A skilled woman picker can only gather 600 grams (a little over a pound) of green tea leaves in a day.

The new leaves must be parched in tea cauldrons. This work, which used to be done manually, has been largely mechanized. Top-grade Dragon Well tea, however, still has to be stir-parched by hand, doing only 250 grams every half hour. The tea-cauldrons are heated electrically to a temperature of about 25oC or 74oF. It takes four pounds of fresh leaves to produce one pound of parched tea.

The best Dragon Well tea is gathered several days before Qingming (Pure Brightness, 5th solar term) when new twigs have just begun to grow and carry "one leaf and a bud." To make one kilogram (2.2 lbs) of finished tea, 60, 000 tender leaves have to be plucked. In the old days Dragon Well tea of this grade was meant solely for the imperial household. It was, therefore, known as "tribute tea".

Tea is produced in vast areas of China from Hainan lsland down in the extreme south to Shandong Province in the north, from Tibet in the southwest to Taiwan across the Straits, totalling more than 20 provinces.

Tea has been one of the daily necessities in China and around the globe for the different peoples from different quarter of life since immemorial time. In summer or warm climate, tea seems to dispel the heat and bring on instant cool together with a feeling of relaxation. For this reason, tea-houses abound in towns and market villages in South China and provide elderly retirees with the locales to meet and chat over a cup of tea. This culture exists in remote and rural areas of Nepal.

Medically, the tea leaf contains a number of chemicals, of which 20-30% is tannic acid, known for its anti-inflammatory and germicidal properties. It also contains an alkaloid (5%, mainly caffeine), a stimulant for the nerve centre and the process of metabolism. Tea with the aromatics in it may help resolve meat and fat and thus promote digestion. It is, therefore, of special importance to people who live mainly on meat, like many of the ethnic minorities in China. A popular proverb among them says, "Rather go without salt for three days than without tea for a single day."

Everyday I enjoyed the tea as the course is becoming tough. Realizing the strength and weakness of subject matter in my University and was comparing the teaching pedagogy, we are lagging far behind. Our educationist and policy maker has a long way to go.

I find something similar to Nepal in terms of personal career and life goal of individual aspirants. Most Chinese students study subjects in their University not by their will or by interest but most of them do for the sake of their parents.

I even experienced unforgettable moment to teach class mates as they were not getting things. Also, I had one of the most challenging presentation about diamond (*) problem in C programming for a class. It was a memorable day for me.

We went to McDonalds again. I am addicted to these junk foods. We also went to very big computer shops located at Computer Street where you get anything you want. But tough bargaining goes there too. I used Microsoft Vistas for the first time in my life. I find it interesting and appealing.

It’s been a long time I was wondering about my hair, I went to barber’s place. At first I was skeptical about her professionalism because I was afraid we couldn’t communicate well. Also, Chinese hair-style and ours are completely different although I am not hair savvy guy. However, everything goes well as anticipated and I was grateful to her. Again, the language of gesture worked pretty well here.

I was even lucky to use QQ. QQ is an instant messaging software that has been very popular in China. If you meet any Chinese guys or girls, don’t forget to ask for a QQ number. I am sure he/she will be very happy and in compliment you will get beautiful smile. I find the features of QQ promising than yahoo or msn as a software engineer and as a professional chatter. Hearing the Chinese song with Chinese girl in QQ was heart-touching experience although I didn’t understand the language as the virtual reality rules.

We were lucky to contribute in sports day this year because it happens every two years in this University. It was again wonderful day with lots of formal processions and events. As we march in the main field with our own military Uniform and our own flags in our hand, I feel we were taking part in Olympics.

Inaugural ceremony starts by flag rising ceremony, a sense of patriotism was moving through my blood like a flash, undoubtedly it was very emotional and sensational moment that are very difficult to describe in words.

As colourful hydrogen balloons as moved higher and higher in the sky and resembled the diversity of nature and peoples. The ceremony proceeds with musical cacophony with four big balloons showing the direction of wind at four corners of the ground.

The battle-field drill started with 95-china rifle similar to Russian AK-47. Then group of girls and boys with a Murphy cloth performs typical dance that symbolizes red-revolution of china. They were using Peony, typical royal flower in china existed from ancient Dynasty. They were even using "chagi" a Chinese fan that were used to frighten the wild animals in the old-days. In the middle of the show, these girls changed their dress from red to yellow. Sometimes you never notice that as it’s too fast and professional. Finally, it was end of vanguard performance.

The game started with 100m athletics, African students showed a good performance and international students were happy to share those wonderful moments. There were many shows of girls and I realized that girls were coming up in the sports. Finally we had many photo sessions with colorful uniforms.

I had lost a bangle at one of the classroom that I bought in Yangzhou last month. But I was surprised when my professor returned to me after a week. I believe system works in china. I was happy because that is something I bought first time in china and may have emotional attachment with me.

In one afternoon, I was lucky to experience the typical Chinese food with my Chinese friends in town. We went to small typical Chinese restaurant near Computer Street. At first, five dishes were brought on series chicken and peanut, Green Vegetable, Tomato egg, Cucumber chili and fish soup and at last they bring maize-egg soup and rice.

They insisted me to eat more as I was eating too less. But I am not eating jerk. All the foods were in the table and I was enjoying their hospitality. Particularly, I loved chicken-peanut, and soup. Honestly, our talk was not less spicy, than these foods as we started to talk about different issues of Chinese society.

However, my friend told me that every item of vegetables can be used on soup. Also these are things that you have basically in Chinese dining table. He even told me something about chopsticks. I am serious about it after that.

The second course has finished. I was happy as I gained some life-long skills, and was grateful to my instructor. We moved to advance course.

On one of the chilling evening, we started with mutton barbecue in Ninghailu, near Nanjing Normal University. I was scared at first to eat street food but I realized that its good and many peoples were eating it. My friends tasted octopus tentacles but I rejected their offer. I am very sceptical and selective to eat a food in street. However taking one stick, I find it more delicious. I took a risk and ended with 5 sticks. I did a good decision that I realized later at the club.

As I was closely watching cooking skills of the skilful old-man, nearby were the tentacles of octopus being grilled and many Chinese were rushing to buy it. It was a cold chilling evening with light showers. The man uses five different types of spices and uses his sharp wedge for the homogenous distribution of oil. It seems very simple and easy but demand was very high.

Later, a Chinese girl came and I talked with her. She was the student of university. She was so shy and she keeps on asking me why my friends were staring at her. I told her “Maybe you are beautiful”. She was shied again.

Her English was not so good. She asked my cell-phone that I don’t have. So I gave the number of my friend. She says she is happy to eat octopus! Of course, everybody has choice in life. I have no comments.

After that, we went towards 1912 street, night Freak Street. It was almost midnight. We stayed outside waiting for our friend who works as a DJ in one of the reputed night club.

We were sitting outside below red-umbrella exactly opposite of baby-face. Guys were drinking and I was taking sprite and my ear-drums were hearing the orchestra at terrace.

People were moving like swarm of bees. Most of them had cigarettes in hand. Little distance away, Chinese girl was vomiting, and then came western couples in 60's. They were in more pathetic condition. Woman can’t wear her sweater because she was drunk and was moving her hands from left to right and right to left but the sweater was upside down. We were laughing but I was feeling bad inside. I had a bad habit of taking care of many peoples in this big world.

I was simply watching the activities of each people as they pass by with enthusiasm and cautiousness. Again another Chinese girl was moving like rabies dog! Watching the activities of people at midnight was something I have never imagined in my life but seems thrilling and exciting.

We can see the security patrol at one corner, with cigarettes in their hand to repel cold. Later we met guys from Spain and we were friends in no-time, maybe because we have black hair, although I never give emphasis to colour in my life.

It started with striping in A8. Show girls pouring ice-cubes in naked body of a man, a current passes through your nerves. We sat in corner and watch for a while. Later I couldn’t resist as waves of music strike my mind and ear-drum each time and I was impatient to move my body. I started to dance in one corner. Later, we moved nearby podium where many peoples were dancing and we were making our own groups, especially with guys from Spain.

When I started to dance I feel everything was changing for me, all were motivating and I was also helping few Chinese guys to dance with me in my pace. I never knew that I was good in dancing but I realized after that day, I am not bad either. Later, I dance with a Chinese girl.

At last, I was dancing in podium. But what I could feel inside my heart was that there were no infatuations inside me, I could only see the matrix of arts inside me performing extremely well.

Later we went to Scarlet, one of the most popular night clubs of Nanjing, there was more crowds and smoke. I danced with many girls there but that day was one of the wonderful moments of my life as I had never been to clubs like this before in my life. The next day I was exhausted and tired.

This month we have five days holiday trip to know insight of North West China. We went to Shaanxi Province to visit Xuanyuan Temple, The Mausoleum of Yellow Emperors, Yan An Memorial Museum, Chairman Mao's House, Date Garden, Hukou Waterfalls, Shaanxi Provincial Museum, Big wild goose Pagoda, Terra Cotta Museum and finally to Muslim Street

Shaanxi Province is located in the heart of China. Boasting a population of more than 36 million in an area of over 200,000 square kilometres is bigger than Nepal. Shaanxi includes most of the middle stretch of the Yellow River. It borders Inner Mongolia, Shanxi, Henan, Hubei, Sichuan, Gansu and Ningxia. Shaanxi Province is one of the most important cradles of ancient Chinese civilization. As far back as one million years ago, some of China's earliest inhabitants lived in this region, and began spreading their culture along the life-sustaining Yellow River. Throughout the province's long history, there are 13 dynasties who established capitals here. Because of this rich history, cultural relics and ruins are plentiful, and may be found preserved both above- and underground. So Shaanxi is called the 'authentic history museum' in China.

In the capital city, Xian, you can see the City Wall, which was begun in the Han Dynasty, a century before the Christian era, and is now the largest and most well-preserved ancient wall, existing in China. It has mausoleum of the Tang emperor Xuanyuan (the Yellow Emperor), who initiated Chinese civilization.

Shaanxi is the juxtaposition of Chinese new-democratic revolution and a place with unique folk customs. The loud resounding Shaanxi opera, the joyous clattering of gongs and drums, the exquisite cut - paper art and the peasants' paintings full of a rich flavour of life are some of the attraction of this place.

The mausoleum of Yellow Emperor and Xuanyuan Temple, Xuanyuan, stands at the top of Mt. Qiaoshan, Huangling County, Yan'an, Shaanxi Province. The Yellow Emperor is regarded as the ancestor of Chinese people so he has been worshiped by all the Chinese people. The Huang Di Tribe mainly lived at north of Shaanxi Province and it is said the Yellow Emperor was buried at Huangling County. The mausoleum of Yellow Emperor has become a Holy Land of Chinese and symbol of Chinese culture.

HuKou Waterfall is located at the intersection of Shanxi Province and Shaanxi Province, some 400 kilometres from Xian, is the second largest waterfall in China located at mighty Yellow River, where it suddenly found its way through a narrow valley blocked by mountains on both sides. The riverbed abruptly narrows down from 300 meters to 50n meters, turning the placid water to rapids. The tremendous water splashes on the rock, forming a magnificent waterfall of 15 meters high and 20 meters wide, as if the water is pouring down from a huge teapot, hence the name Hukou (means mouth of teapot).

Shaanxi Provincial Museum located to the northwest of the Big Wild Goose Pagoda, in the south suburb of Xian city, the Shaanxi Provincial Museum is an epitome of Shaanxi’ glamorous imperial past. The museum building was designed in China’s ancient Tang Dynasty style, grand and elegant. The Shaanxi Local Historic Exhibition Room is arranged into seven small parts of the Prehistoric Period with a focus on the social development from the Stone Age to the decline of China’s imperial history in 1840. Many theme items reflecting Shaanxi’s characteristic local culture are displayed in this hall, including the Silk Road Exhibition, Yaozhou Porcelain Exhibition and so on. The most impressive exhibits here are the murals from the Tang Dynasty tombs.

Big wild goose Pagoda Situated in the Da Ci'en Temple, about four kilometres from the urban centre, the Big Wild Goose Pagoda is one of the most famous Buddhist pagodas in China. The Pagoda was built in the Tang Dynasty to collect Buddhist scriptures. Although it is worn by wind and rain, the architecture is well preserved. Originally built in 589 A.D. in the Sui Dynasty, Da Ci’en temple was named Wu Lou Si Temple. It was not until 648 A.D. when Emperor Li Zhi, then still a crown prince, sponsored a repair project on the temple. This was a symbol of thanksgiving to his mother for her kindness, after she had suffered an early death. The temple then assumed the present name Temple of Thanksgiving. The temple, with 13 separate courtyards, contained 1,879 magnificent-looking rooms altogether and was a place of grand extent in the Tang Dynasty. However, it went into gradual decay after the downfall of the Tang Dynasty. The halls and rooms that have survived the ages are structures that were built in the Ming Dynasty. The Tang Regime gave orders to build a chamber for the translation of Buddhist scriptures. The Wild Goose Pagoda was finished in 652 A.D. Its five stories are 60 meters in height. The decay of the earth-cored pagoda caused the new construction of a 10-storey pagoda from 701 to 704. However, the winds of war in the years to come reduced the pagoda almost to ruins, which in turn resulted in the construction of a 7-stored, 64-meter-high structure today. The storied pagoda was an architectural marvel. It was built with layers of bricks but without any cement in between. The bracket style in traditional Chinese architecture was also used in the construction of the pagoda. The grand body of the pagoda with its solemn appearance, simple style and high structure, is indeed a good example of Chinese traditional architecture.

Terra cotta Warriors and Horses Museum is located about 1.5 km east of Emperor Qinshi Huang’s Mausoleum. In the early spring of 1974, a number of peasants accidentally discovered some ancient bronze weapons and pieces of broken terra cotta armored warriors while sinking a well at the northern foot of Mt. Lishan, 35 km from Xi'an, the famous cultural city in China's history. No one ever expected that this accidental discovery would prove to be one of the most significant modern archaeological finds, adding greater understanding to China's history and at the same time unfolding a unique and majestic spectacle before the world: the Terra-Cotta Warriors and Horses Museum, the underground army of terra cotta warriors. Among the three pits, No.1 pit is the largest one. More than 6,000 clay warriors and horses could be unearthed from No.1 pit. All of them are life-like. The terra-cotta warriors and horses are arrayed in an oblong battle formation of the Qin Dynasty, facing east, they look healthy and strong and have different facial expressions, showing Emperor Qingshihuang’s Strong determination of wiping out the other six states and unifying the whole country. It is the most magnificent archaeological discovery in this century. It is also a reflection of Chinese people’s wisdom and artful skill two thousand years ago. Thousands of real weapons were unearthed from these terra-cotta army pits. These weapons were exquisitely made. Some of them are still very sharp since their surface were treated with chromium. They are as bright as new, though buried underground for more than 2,000 years. This indicates that Qin Dynasty’s metallurgical technology and weapon-manufacturing technique already had reached quite a high level. In 1980, two teams of large painted bronze chariots and horses were unearthed 20 metres west of the mausoleum. Together with Terra cotta Warriors, they are called the eighth wonder of the world.

The Muslim Street is a fantastic place to wonder. All shops and restaurants in the street are operated by Muslims. The stalls lines and the narrow alleys sell almost everything you can expect. If you are good at bargaining, you can get some things at a really cheap price. The restaurants in the streets are all Muslim ones, and variety of Muslim food and snacks can be tried here, including the locals’ favourite ones, roasted beef, roasted fish, and pancakes. Food served is diverse, complex but are very cheap.

Now we were ready to experience these beautiful places of china.

Nov 13, 0600, we are waiting for a bus to move from our University premises. We move towards Qi Jia Nanjing Train station. We departed from Nanjing at 1700.

In train we started discussing about oranges in different languages. The train was moving slowly. The train can move up to 160 Km per hr in its maximum speed. As another train passes from the opposite direction, you feel that you are watching Keen Reeves in Matrix. It was already a dusk as we passes across Yangtze River. The slow and steady flow of Yangtze River and train was predicting perfect environment of the trip.

At 18:40, we started our supper provided in a pack. Now, it was time to rock some music, we were jamming hotel California with James who is good in Guitar.

The train was moving very slow but the expectation and emotions were rising above. As train started to move in the faster speed, I can see the continuous movement of peoples across our car and personnel wearing blue dress were always busy in cleaning. We were rocking hotel California for many many hours. Now, it was already time for someone to dream about their family. Then we passed through very high sky-scrappers, where we can see vehicles at top and down.

At 21:50, we were informed that light will be switched off at 22:00. We passed through many railway platforms and we could see many tall buildings and tall chimneys. I just imagine, how beautiful the trip would have been if we could have travelled in the day. The light was gone now but still there was dim light under the table that I can use to write something about this wonderful experience. There was pin drop silence except the stereo-type sound of electro-mechanical part of the train. I can see many basketball courts as we pass through.

The train stopped at 22:00 in one of the train station. It started to move after ten minutes. As another train passes each time, you can feel flash of light coming inside you. There were many traffic lights as we pass through.

At 01:40, Nov 14, the train stopped at Zheng Zhou train station. I believe they inspected the different critical operational parts of the train. Even in the middle of night, peoples were moving and waiting for the train. Life is moving extremely fast here was what I concluded. In the mid-night, rest room was locked for a while. I was in problem for couple of minutes before they open it.

I peeped from the window and I can see the crescent of moon moving along with us. It was a good fantasy and imagination perpetrated with nature. Again constructions were everywhere. I took a rest for a couple of hours as I was too tired. Surprisingly, I was dreaming about travelling in double-decker train. May my dream come true!

Early in the morning, I was waiting for a Dawn. At 0500, people started to woke up and do their regular jobs. Finally at 06:30, I could see the silver lining of the cloud signifying new day although it was started couple of hours back technically. We can even see the rural glimpse of villages as we pass through, at many places there were massive urbanization happening as old houses were being demolished and new ones were coming up.

Most small rivers and natural canals were dry along the way. I can see the green farm and big industries everywhere. I was enjoying a piece of bread with orange juice. In fact, I was seeing and experiencing the beauty rather than eating. I can even see the graves as we move ahead. Now, it was early in the morning. Elder citizens were busy stretching their arms in the fields enjoying the beautiful part of wonderful morning.

Finally, we reached at Xian at 08:00 before that I had my last coffee that cost 10 RMB (1.5 dollar). We board our bus at 08:45 in the morning. The sun was shining dim, the temperature was chilling. We were at the northern part of the Xian city, the capital of Shaanxi province.

We met our tour guide, Elsey, smiling Chinese girl in mid 20’s, very cheerful and hospitable. Later, we had delicious breakfast at 0900 at double dragon restaurant. As we move forward, the terrains seem dry but it has many small hill stations. The sun was rising high. At the mid of the day 12:00 we pass through many maize fields. This province is rich in natural resources like Coal, Oil, and Uranium and it is becoming prosperous province.

We visited Xuanyuan Temples that has 5000 years of history. We saw the oldest Cypress Tree of china believed to be 2200 years old. There were three tables that resemble Macau, Hong Kong and History of this place. Everywhere there is a dragon. Dragon is believed to be ancestor of Chinese people. Then we went to the mausoleum of Yellow Emperor

Finally we headed towards Yan An, another city of Shaanxi province. Along the way, everywhere you can see curved Arched Roof something identical to my grandfather’s house in my village. Also, the soil was dry and yellow most of the time. But apple gardens were fabulous.

We arrived in Yan An at 17:00. We relaxed for a while to have a supper. The chopstick problem was not leaving us. It was one of the most important suppers for me because I could enjoy it with an Art, seeing the paper cutting skills, a heart-touching art of an old disabled man. Later I bought his collection of animal portrait and he designed portrait of my face. It was great emotional moment for me.

In cold-night, the wind was blowing and light showers were outside. We went to Khusala disco, the small typical disco near our hotel. We were dancing for a long time we didn’t know that time was running so fast, I could even see cops watching the dance. But peoples over here were bit different compared to peoples in Nanjing, I find people non-reactive to us. They could be shy and be reserved. But after all, we enjoyed a lot.

The next morning on Nov 15, we were ready to rock the day after finishing our breakfast at 0800. We left for Yan An Memorial Museum. We see many antique things of Chinese PLA and know about different historical revolution of china.

We can even see the Chinese scripts of Chairman Mao, different military equipment. We can even see the old-type writer and see how educational institutions were growing from ancient time and how china is giving more priority to its educational policy.

After that we went to chairman Mao’s house. It was well preserved. Unfortunately, we can’t see it inside because there were some renovations going on. Before that, we even went to Chairman Mao’s meeting room and simulate ourselves as a Peoples Liberation Army (PLA) for a while. We even see the place where Chairman Mao gave first interview to western journalist.

At 10:30, we went to date garden, one of the historical and secret meeting place of Chinese revolution. It was wonderful time seeing some cultural show and knowing about significance and importance of this place.

We had lunch at 12;00, the same typical food we proceed towards Hukou waterfall, the second highest waterfall of china located at the cross section of Shanxi and Shaanxi province in Yellow river. we had to change the route as there was an accident. As we pass through the ridges we could see many apple-gardens. I have never seen such a huge apple gardens in my life. Later we bought 2 kg of apple at 3 RMB (0.4 US cents) and in that chilling cold, we were very happy to bite those fresh apples and swallow juices in ice-freezing environment. As we were moving, Angel, another tour guide from Nanjing sang Chinese song and the musical environment loomed. Although, we couldn’t understand the Chinese song but we could feel something from her expression.

In the way, we saw donkeys and horses that were used for mode of transportation and people were staring at our bus as we were alien from moon. I find this place like a typical cow-boy village of early cow-boy American movies I used to watch when I was a kid. Most of the houses have arched windows and are inside the earth, covered roof by earth to survive from the cold.

Some of the prominent features of houses are that they have arched shape window, the top is covered by the soil and even though people seems poor but every house has a dish antenna at the top.

Finally at 13:30 we arrived at Hukou waterfall in Yichuan County. We see the yellow river for the first time. As we get out from the bus, the cold wind was swirling but we proceed towards waterfall with zeal and enthusiasm.

The waterfall is magnificent. The turbulent sound and waves it creates was echoing the two sides of the hill stations. As we move nearer, the sound was more lively and heart-breaking. We can see one of wonderful creation of nature. The scene can be overwhelming, water stirs up masses of smoke and clouds, with colour turning from yellow to grey, grey to blue. The locals call this awesome scenery “smoke from river”.

At the end of the day we reached at Yichuan County at 18:00, and stayed at Dianli hotel. The temperature was -5 degree centigrade, the most chilling day in my life. The city was like a typical American suburb in an American movie, very beautiful, elegant and managed. I was not feeling too cold. I don’t know maybe I am a hot boy or a man. But, me I don’t like summer, I love winter from the time I was a kid. After having supper, we tried to get out from the hotel although there was light shower but we came back after walking for couple of minutes as we were completely blank of this place and the city was almost deserted. Later, the manager of the hotel opened the disco room and we were rocking quickly. You could see Indian songs to American rock. At that time I realized Angel is shy girl and Elsey was good in dancing. Angel seems very sober but nervous. It was a perfect environment.

I was looking for the weighing machine for a long time, I got it in hotel but unfortunately it was not working. Later, I talked with security officer, a friendly chap. Soon I was enjoying the CCTV with him. It was fun seeing activities of my friends and other peoples. Later, I was even able to use the internet. I checked news and write few pieces of note about my existence in different land. Later, I felt too tired was with my pillow in no time.

On Nov 16, we left for Xian after breakfast at 0800. As we pass through we can see the snow covered white hill stations. It was like silver plated ornaments that are very precious. We enjoyed the natural beauty perfectly and we were making the environment musical again. Peoples sang the song of different countries. It was an ideal multicultural environment. Although you did not understand what exactly others were saying but still it was penetrating and generating sort of emotion and happiness and the environment was friendly. After four hours we saw green fields again.

Finally we arrived at Xian and had our lunch in The New Town Restaurant at 12:00 noon. I have noticed something different here, there were many foreigners and even I can see few hoarding boards in English. As the largest city in NW China, Xi’an isn’t a horse town, but I was nevertheless startled and amazed at how modern and cosmopolitan it is. On many of the tree-lined major boulevards you’ll find expensive and stylish shops, hotels, and restaurants with superb facilities. It is even bigger than Nanjing.

The other big surprise for me was the large size of the original walled city. The Inner City is surrounded by a wall which is over 13 km (8.5 miles) in total length. Originally there were twelve gates in this wall but later they add four more gates to manage the growing traffic of the city.

We went to Shaanxi history museum where we saw historical monuments and antiques. I was surprised to see the human fossils of thousands of years back that mesmerized the tributaries of my high-school biology class. I was happy that I can see those things in front of it even though I learned it many years back. We saw ancient ornaments, clothes and utensils.

We see how civilization develops and how civilization is evolutionary process. How money was introduced, how paper processing starts from scratch using fibre and become the global business commodity in the modern china. How the silk were invented and it became one of the oldest commodities. We can even realize how animals were used as warriors in the ancient time of war. How precious element like Jade, Gold including mirrors were invented in those days.

Introduction of monetary currency, use of necklaces in the ancient time were other interesting insights. Nevertheless, money from one dynasty couldn’t be used or transferable to another dynasty.

We even notice that how Buddhism prevails in china. Also, we were even excited and curious to know that in one of the dynasty fat woman were considered most beautiful woman. Ancient Silk Road also signifies the important cultural and economical importance of Xian. We even notice about the first lady emperor in china and how gender equality and education system were given priority in the history.

At 15:45 we moved towards Pagoda Temple which is about one thousand meters far from the museum. The temple is the typical Buddhist temple and we can see the lotus flowers everywhere. It was believed that Buddha was cremated to nine hundred thousands places and this place is one of it.

Later we visit the Asia’s highest water fountain near pagoda temple. However, we were not lucky enough to see it when it is operational.

Finally, we were waiting for our supper at hundred year old Donglaishun restaurant at 17:30. It was very nice and old restaurant. But the same problem was there, the chopstick problem never left us.

Later we arrived at Diamond International Hotel at 19:30. The hotel was excellent with superb facilities. We were planning to go to see night life at Xian but we couldn’t as we were tired and we find it awkward to roam around the places. Although we have heard about buzzword baby face, we have to halt our plan. But we were able to move around train stations and around our hotel to see the beautiful glimpse of this modern city.

One of the frustrating and severe social problems of this city is related with sex business and prostitution. Everywhere you can find the woman to quench your physical thirst. It starts merely from ten dollars to more than hundred dollars. Hookers will come to you as you pass through the cities. Don’t get panicked, just do what you feel good?

At night, I borrowed my friend’s notebook computer and quickly check the happenings in my country and around the world. I was lucky on this day to check my weight after two months; I was 61 KG, +1 in china. It seems that china likes me or vice versa.

On November 17, 2006, the last day, We were excited to visit the eighth wonder of the world. At 07:30 we were very happy to have an English breakfast after a long time leaving away the chopstick problem for a while.

Because of its historical importance this city is often compared to the cities of Greece, Egypt and Italy.

We left hotel at 0900, as we move on we could hear “Get down get down move in all around”- beautiful song by Backstreet boys.

Finally, we were at Terra Cotta, the eight wonder of the world and the climax of our holiday. There were three vaults in museum. I feel this place as a living history. The first vault has many soldiers. I was happy to know how media and journalist helped to excavate this historical monument when it was discovered earlier. It has also been listed in UNESCO’s world heritage site.

We met a kid inside the museum who was nice but would-be successful businessman. We take many photos of these living antiques and I was happy to take photos with Captain of Terra Cotta soldiers.

We could even see the excavation being carried out and it will take many many years to finish this excavation. There are many scientists around the world working round the clock to preserve these historical monuments.

One of the most exciting things about this trip was related to chromium technology that was used in ancient weapons 2200 years ago in china. This technology was discovered by Germans in 1937 and by American in 1951.

At last we were at the auditorium hall of the museum where we could see the documentary about this place. Also environment was perfect, you could see nine sides flat screen and you feel you are inside a Matrix like a Neo in techno-revolution.

After visiting these wonderful places, we were at flourishing international hotel for our lunch at 12:00 PM. I bought two rings for remembrance of this historical place and had already bought two terra-cotta lighters last night on the street.

After that, we were at Snacks (Muslim) street, the last place to visit. This is one of the oldest parts of the city and here most of the local government houses resides. There were many beggars in the street, many of us gave the cheap apples we bought before and they were very happy. Later we met two of the Pakistanis guys who told that there are many Nepalese students studying medicine in this place.

Finally we were at Guang Hua Hotel for our last supper. We had last soup at 17:50. Finally we were moving towards the Xiang Train Station.

We were at train station at 18:30. Before we proceed we have to queue it up at line for some of the formal proceedings that needs to be done. However, we were being terra cotta soldiers for a while as many peoples were staring at us with curiosity. Again, there were many beggars and poor people who were asking for foods and money. We were now at train and leaving this place very soon. No matter, where we will go, the Shaanxi will be in our memory forever. Thanks Shaanxi for being so beautiful!

Now the train is moving towards a Nanjing, luckily we had western chaps in our neighbourhood. I checked the newspaper, this time something amazing happened, I was happy to read something in English. The paper was talking about railways importance in modern china and how it is focusing on quality service and safety procedures in the future. The train started to move at 18:45. We were waiting to rock this evening again. We had transcontinental rockers from different continents of the world including Asia, Africa, South America and Europe. We enjoyed a lot.

I had short chat with a guy from Spain who works in Ireland, a vet doctor by profession. He is here for three weeks to enjoy holiday. I believe we have so much in common about human civilization, development and social aspects in different parts of the world. I really enjoyed talking with this guy, I am sure he was happy too. I was even happy to convince him that Lord Buddha was born in Nepal. Interestingly, this chap seems very different from others. Almost we were in same frequency but I doubt about band.

Finally, I was tired and I was in my bed at 22:45. I woke up at 05:30 September 18 and I could even see the train moving as usual in same pace. I enjoyed watching the sceneries from the window of the train. I had my coffee at 06:30 with 10 Yuan (1.5 dollar), one of the expensive coffees. We started to enjoy breakfast pack, I ate bread and juice.

At last we were at Nanjing at 08:30 and it was raining. Finally we were at our place and were relaxing after a long but exotic trip. We completed more than 2500 kilometers almost thrice the length of Nepal.

There were many interesting facts about this trip but one of the disappointing facts for me being a Nepali was that many people think in china and around the world that Lord Buddha was born in India. But Lord Buddha was born in Nepal. I could see how small countries are losing their identities in a global world. But I am grateful to UNESCO for considering Nepal as a birthplace of Lord Buddha.

In the end of this month, days were becoming very cold. We couldn’t see the sun for eleven days disgusting experience for me that never happened in my part of the world.

Internationally, back in my home many important things happened. This month was the historical month for would-be the peace and prosperous Nepal. The road are tough ahead however, the first pace is promising as the government and the rebels signs an agreement for arms management, promulgation of interim constitution and paving the way for new constitution through the election of constitutional assembly.

In china, the founder of China's biggest electrical appliance has made it to the top of Forbes magazine's richest business people list. Wong Kwong Yu, the 37-year-old entrepreneur behind Gome Appliances, country's biggest electrical appliance retailer, with a net worth of $ 2.3 billion, was on Thursday named as the richest Chinese by Forbes in its 2006 China Rich List.

Also, China is bucking the global aid establishment of Sino-African Summit, the importance strategic-diplomacy of this decade. Premier’s visit to South-Asian allies including India and Pakistan would have long term impact and will create historical milestone in the days ahead in this region and in the entire global world.

In IT world, Microsoft's decision to work with Novell reflects the increasingly important role of Linux's open-source software in corporate IT world.

Also, Gmail started its email application for cell phones followed the path of Microsoft and Yahoo but for me Google has always been the beautiful even though it’s late.

At last I am feeling too cold. I am sure it’s too long. I should go to my bed. Only this journey is finished, many more to accomplish!!!`,
        image: '/Travelnew/images/blogspot/blogspot_c4876e34612d5b7b.jpg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'moving-to-square-one',
        title: 'Moving to Square One',
        date: 'November 6, 2006',
        content: `[

![Photo](/Travelnew/images/blogspot/blogspot_3d82e5c61ade55a2.jpg)

](http://photos1.blogger.com/x/blogger2/3583/4344/1600/760603/terracotta.jpg)

[](http://photos1.blogger.com/x/blogger2/3583/4344/1600/482072/terracotta.jpg)

**Moving to Square One**

October 30, 2006-10-31

The cold but soft wind has already started to blow very gently on early morning. It was fresh air I was inhaling but I could feel something more than that. I have realised that spring is nearby and it’s giving me an acknowledgement that I have a tough but exciting days ahead. The temperature has started to drop but I am excited because I will be enjoying the snowfall for the first time in my life although I was born in Nepal, The homeland of 8th top tallest mountain including Mount Everest.

It’s been more than a month now and I am feeling the Nanjing closer than before. Now my eyes and heart can look transparently and more clearly except speaking Chinese language. The course is becoming exciting everyday and professional, I am enjoying every day and every moment.

It was long national holiday in the beginning of this month that coincides with Thanks giving, Ramadhan and Dashain for different peoples from different quarter of life. Fortunately, we were able to enjoy our wonderful time with some of the Nepalese friend in Nanjing. It was my first experience in life, enjoying Dashain outside Nepal.

I was surprised when I saw Nepalese restaurant named “Himalayan Nepalese Restaurant” near Nanjing Normal University with Nepalese chef, flags and recipe with perfect Nepalese environment. I never thought we will have place like that as Nepal has never been the place of importance to international community not only in South-Asia but whole in Asian continent. I was really impressed as I could feel and sense something about Nepal deep inside me forever in China.

We were more than ten Nepalese students. Most of them are studying Chinese language at Nanjing Normal University, Shingulu to start medical degree next year and some were in the middle of their educational goals. But China is becoming important hub for Nepalese and other foreign students to study medicine as it is cheap and has shifted policy for foreign students.

The weird telephone card was making us crazier in operational procedures and my friends were tempted to grab it as it was very cheap card. However, we were able to sort it out after very long conversation with owner. I feel language constraints as a big barrier for foreigners in China.

We met some of the wonderful Nepalese chaps who helped us to go around Nanjing. Also, I had Mc DONALD for the first time in my life, one of the trivial but stacked in Gray matter for a long time.

I was even more impressed by the guy from Armenia, the short but very smart and smiling chap. I thought he helped me to understand some vocabularies as well as East Asian agendas on his region.

After delicious Nepalese lunch we went to Amusement park. We were enjoying the most beautiful amusement park that I have ever seen in my life. Most of those things are simply a mechanical rotor that moves in a different directions and mathematical angles in different algorithm. But the human presence over there was making it more alluring and heart-touching with different colourful lights.

On a hot sunny day there's nothing more refreshing than being flung through the air on the Flying Pharaoh. Round and round it goes as riders safely soar high above the ground in comfortable seats suspended from above that was what I have imagined and seen in the romantic Indian movies. But those feelings can only be weird imagination for some peoples.

It was true at the beginning I enjoyed a lot in slow and steady motion riding Pharaoh but it was horrible when I almost fainted at top, it was rotating too fast and I was feeling nausea.

Although I had played these rotating games a decade back and had severe problem of Nausea and vomiting. It relapsed again when I played pharaoh that evening.

I was feeling bad each time now even though only when rotors were moving. It was disgusting and irritating for me and I didn’t want to stay there for a long time. I was feeling very tired, exhausted and weak. I was lucky that I was alive.

It get even worst when I was vomiting in taxi later; giving me the flashback of those naughty days when I used to drink a beer from bottle in late teens and early 20’s and used to vomit in rest-room.

The money was gone and the imagination faded away for forever. I have re-assured myself that I was not born to play this game and have promised myself that I will never take this train again in my life.

But after I saw courage’s of beautiful Nepalese girls crushing those games with smile and boldness. I was happy. It’s hard to see courageous Nepalese woman because of orthodox and male dominated society. Finally we were at the second home and I was very exhausted and tired.

Following morning, we left our venue at seven for the ancient city of Yangzhou in the morning. As we passed through the high-ways I could see the inner side of the china. The inner fields, houses and life of farmers from the window of the bus were giving fascinating view of china.

In the mid-way, we passed through Yangtze River. The slow but gentle flow of the Yangtze River was proving that china is pacing towards economic prosperity and development. I can see some big ships for the first time from my window.

Acclaimed as the mother river of China, the Yangtze River divides the country both geographically and culturally. Bounded by picturesque natural scenery and ancient cultural heritage, this region is a key tourist place to visit.

The Yangtze River is the longest river in Asia and third longest in the world beside Nile and Amazon. The headwaters of the Yangtze are situated at an elevation of about 16,000 feet in the Kunlun Mountains in the south-western part of Qinghai. Approximately 350 million people inhabit the region of the Yangtze.

In 1995 construction began on the Three Gorges Dam near Yichang and is scheduled for completion in 2009. The dam will measure about 600 feet and about 1.5 miles wide. The dam is expected to help control the flooding of the Yangtze River Valley.

Flooding along the river has been a major problem. The rainy season in China is May and June in areas south of Yangtze River, and July and August in areas north of river. The huge river system receives water both from southern and northern flanks, which causes its flood season to extend from May to August.

The dam will contain twice the amount of concrete of the Itaipu Dam in Brazil, currently the world’s largest.

In the course of this valley, the river's elevation drops from above 5000 m to less than 1000 m. The Yangtze receives more water from thousands of lakes as it pass by.

Historically, the mighty Yangtze river became the political boundary between north China and south China several times because of the difficulty of crossing the river. A lot of battles took place along the river.

Politically, [Nanjing](http://en.wikipedia.org/wiki/Nanjing) was the capital of China several times, although most of the time its territory only covered the south-eastern part of China.

It is also a loading point for coal barges on the Yangtze River for 28 cities including Nanjing and Shanghai.

Snaking its way 6,300 kilometres from western China’s Qinghai-Tibet Plateau to the East China Sea, the Yangtze River stretches nine provinces and serves as a drain for 695,000 square miles of land. It spans so many regions that it has acquired half a dozen names.

A quarter of China’s ocean-going cargo enters the river between Shanghai and the sea.

Shanghai is known as the gateway to the Yangzte, spanning the Huangpu tributary just south of the river’s mouth.

Nanjing has become associated with calamity since the Japanese devastated it in 1937. Destruction, mass murder, and torture desecrated this prized city ultimately claiming 150,000 civilian lives.

Nanjing now boasts some of China’s most advanced technology and a prestigious university. The city stands as a symbol of Chinese strength and self-sufficiency, a monument of the people on their great river.

Every year the Yangtze deposits massive amounts of silt that helps make up the Jiangsu Province, a large plain used to grow rice. The fertile plains provide one of the most profitable areas of agriculture in China. Today China accounts for 35% of the world’s rice production.

Rice is the world's single most important food crop and a primary food for more than a third of the world's population.

The common Chinese saying, ‘If you haven’t travelled up the mighty Yangtze, you haven’t been anywhere’, well describes the river’s range of picturesque landscapes and geo-political importance.

The ancient city of Yangzhou was settled over 2,400 years ago. Located northwest of Shanghai in the Yangtze River delta, Yangzhou is well known for its fine cuisine, jade carving, and beautiful gardens, lakes and canals.

Yanghzou has history of more than two thousand years; a leading economic and cultural centre and major port of foreign trade and external exchange since ancient time in the lower reaches of the Yangtze River and Huaihe rivers

Slender West Lake is one of the places we visited in the northwest suburb of Yangzhou City. With continuous harnessing through the dynasties, it gradually became a scenic area with many enchanting lake scenes. It is located to the west of the city and is slim in its shape, so people named it Slender West Lake.

We spend almost a day in this place, we never feel that time was moving fast. The beauty was amazing and heart touching. We could see monuments, natural beauties and ferries across the lake. The beautiful flowers and bridges were more interesting things to notice.

One of the characterstics I have noticed in the china is that every city is very populous and crowded. I have even noticed that chinese peoples loves to enjoy holiday and inner tourism has gain momentum in china as chinese economy is becoming prosperous each day.

But one of my chinese friend was telling me that only the rich peoples can afford to go for vacation so it seems that majority of chinese peoples are struggling hard as china continues to prosper.

Slender West Lake is 4.3 kilometres in total length with an area of over 30 hectares. The lake boasts many famous scenic spots, such as the White Pagoda, the Five Pavilion Bridge, and Xiaojin Hill.

We were able to have a glance of romantic activities of a couple in the park that was proving that new generation is moving towards westernization and is opening up.

Finally, we were at the top of the beautiful Nine-Storey Da Ming Temple. The storey was very difficult and tiring as it was too stiff. But we were competing to reach at the top so that we can see everything. Also, everywhere electronic cameras were installed for the safety reasons.

Inside it, every floor has the Buddha’s statue that seems bit different than in Nepal. In Nepal, we don’t have any crown or caps in Buddha’s statue. At top, we could see everything; it was very exciting and alluring sceneries.

I can see how the religious parameter deviates with time and place. After finishing the trip we were taken to one of the Chinese vegetarian restaurant named “Daminssi Vegetarian Restaurant”.

When we were inside the restaurant, it seemed crowded because we were almost 100 foreigners at a time. Peoples were glancing at us. We were curious what we were going to eat there.

But they brought completely weird and Chinese dishes. There were round tables and dishes were served in it and we have to rotate the table to get the specific cuisine. They brought many types of food although it was a vegetarian restaurant.

We were inevitable to use chopsticks in our lunch. I tried to use chopsticks for the first time but I failed and was in frustration and in despair as I was so hungry. There were many dishes of the food in the table but were not sure what we were eating. After seeing others in despair I didn’t made an attempt to use it again. But I have decided that I will buy a pair of chopsticks and try to learn it as it seems necessary if you want to dig china.

But we were expecting desperately for the spoon and fork to arrive. However, there was havoc for a long before they bring it. At the middle of lunch, they gave us the spoon and fork. Now peoples were more tempted as they find the fork and spoons and were enjoying food perfectly after a long pause although it was weird and sceptical.

Finally we were back in our apartment after the tiring but exciting day. Fortunately, I was able to taste KFC for our supper.

The other day we went to Wal-Mart and KFC at Xin Jie Kou and bought some sportswear to play football. These days I started to like sports ever than before.

At evening we went to explore Chinese night life. In Nanjing, the 1912 street is popular place for night jockeys and freaks to enjoy colourful lights, music and dance. Although I am not a night life freak nor I have seen these things except in Bangkok on 2004 and in local streets of thamel, tourist hub of Kathmandu.

I was able to memorise some of key words of places we were been that includes Rothenberg, the Scarlet, the red club, 7th club and locked door.

I was surprised when I entered the bars, everywhere English song was there from Hip-Hop to blues. The environment was perfect with wonderful music, DJ’s and colourful light. I was happier when I heard Hotel California. I could even see other foreigners and security patrols moving to and fro in the place.

Again we had to rush for our place as we were afraid of the old man who locks door in our apartment after 10.

We left the place for the next time convincing our selves that we would able to freak out some other day to enjoy it fully in one or other way at mid night.

Other day ,we were surprised when we got four different types of round cake in our dinner on Oct 26,2006. Fortunately, it also ends the festival of Dashain in Nepal. I was wondering why we were given four different types of round cakes in the full moon day. Later I realised that the day was about reunion in Chinese culture. On this very day all Chinese peoples gather together and have a dinner in the evening.

I may explain the significance of full moon day in the future if I get opportunity to know about it.

On the other part of the globe many interesting as well as shocking things happened this month.

One of the prominent Russian woman journalists was shot dead. Google was buying You tube, North Korea has tested Nuclear power, world got Ban, a South Korean as a new Secretary General of UN.

Finally October was saying goodbye and November was in the door-way. My fingers were tired and I realised that I have to take a long rest again before I start new one.`,
        image: '/Travelnew/images/blogspot/blogspot_3d82e5c61ade55a2.jpg',
        tags: ["Blog"],
        location: ''
    },
{
        id: 'life-in-nanjing',
        title: 'Life in Nanjing, China for a Month',
        date: 'October 06, 2006',
        content: `It was a beautiful evening in the month of June 2006, when I was nominated for a 10-month professional computing course in China. This experience opened my eyes to a vibrant culture and a rapidly advancing technological landscape, marking the beginning of many international adventures.`,
        image: 'https://photos1.blogger.com/blogger/4585/3941/200/IMGP0124.jpg',
        tags: ['Travel', 'China', 'Culture'],
        location: 'Nanjing, China'
    }
];
