export interface Post {
    id: string;
    title: string;
    date: string;
    content: string;
    image: string;
    tags: string[];
    location: string;
    gallery?: string[];
}

export const posts: Post[] = [
    {
        id: 'aconcagua-expedition-andes',
        title: "Trip to Aconcagua.",
        date: 'Dec 25, 2025 - Jan 17, 2026',
        content: `
### The Giants of the Earth: Himalayas vs. Andes
Mountain ranges are the world's most dramatic storytellers, each with a unique personality forged over millions of years. Having grown up in the shadow of the **Himalayas**, I am accustomed to their soaring, jagged peaks and the deep, spiritual significance they hold. The Himalayas are the "young" giants—steep, vertical, and dominated by the world's highest 8,000-meter peaks. They are often characterized by lush green valleys that transition sharply into walls of ice and rock.

In contrast, the **Andes** of South America—where **Aconcagua** reigns supreme—offer a different kind of majesty. Spanning the entire length of the continent, the Andes are the longest continental mountain range in the world. They feel older, more expansive, and rugged in a way that is hauntingly beautiful. While the Himalayas are defined by their sheer verticality, the Andes often present vast, high-altitude plateaus and a landscape that is arid and colorful, shifting from dusty ochres to brilliant snowy whites. Exploring the Andes is like stepping into a different chapter of Earth's history—one where the scale is just as grand, but the rhythm is entirely its own.

Argentina is a land of dramatic contrasts, from the vibrant tango halls of Buenos Aires to the rugged, windswept wilderness of Patagonia. However, for a mountaineer, the ultimate pilgrimage leads to the Central Andes, home to **Mt. Aconcagua**. Standing at 6,962 meters (22,837 feet), it is the highest peak outside of Asia and a formidable member of the Seven Summits.

Our journey began in **Mendoza**, the undisputed wine capital of Argentina. Nestled in a high-altitude desert oasis, Mendoza is a city defined by its ingenious irrigation system—a network of open canals (acequias) that channel Andean meltwater to feed its lush, tree-lined avenues. Life here follows the rhythm of the mountains: a midday siesta to escape the heat, followed by late-night dinners where a glass of world-class Malbec is almost mandatory.

![Mendoza Streets](/Travelnew/images/journal/journal_218456cddb4390389cfd75cb2dd9c567.jpeg)
![Mendoza Trees](/Travelnew/images/journal/journal_4041784bb75344ab221f3b79925d40ef.jpeg)

### The Challenge of the Stone Sentinel
Don't let Aconcagua’s reputation as a "non-technical" climb fool you. The success rate hovers around only **30-40%**. The challenges are physiological and environmental: atmospheric pressure at the summit is 40% of that at sea level, and explorers must contend with the fierce **Viento Blanco** (White Wind), which can reach 100km/h. It is a grueling test of endurance, far more demanding than the trekking peaks like Kilimanjaro.

---

### December 25, 2025 - The Long Journey South
The expedition kicked off with a transit through Houston. A quick celebration at *The Annie* with some excellent red fish provided the final taste of civilization before the long flight to Santiago, Chile.

![Dining in Houston](/Travelnew/images/journal/journal_1ea9ee2fd1fe5a47aee212fed8301d0b.jpeg)

---

### December 26-28 - Base Camp Mendoza & Gear Prep
Arriving in Mendoza, the sheer scale of the Andes immediately became apparent from the airplane window. The city felt like home, with pigeons reminding me of my childhood in Kathmandu. We spent these days at the Diplomatic Hotel for briefings and rigorous gear checks. A realization hit: I was missing a pair of medium gloves—a small but critical detail at -20°C.

![Andes View from Plane](/Travelnew/images/journal/journal_103155bb06ef8f0be66db11add038c6a.jpeg)
![Gear Inspection](/Travelnew/images/journal/journal_3f146fbb363fa3c7b80c8d776ec41bb7.jpeg)

---

### December 29-30 - Into the Wild: Los Penitentes to Pampa de las Leñas
Moving into the mountains, the landscape transformed into a rugged, arid wilderness. We stayed in a high-school style dormitory in Los Penitentes (8,800 ft) before hitting the trail. The trek began along the rocky banks of a glacial river. I watched fascinated as mules—the yaks of the Andes—carried our expedition gear toward the higher camps.

![Base in Penitentes](/Travelnew/images/journal/journal_2e8f7bde477ab403b1d20d9cb586c46c.jpeg)
![River Trail](/Travelnew/images/journal/journal_395375bb2a91a5cf0e14de387882083c.jpeg)
![Trail Paperwork](/Travelnew/images/journal/journal_2a2ebd88be0400696f125c3fbc97dbf0.jpeg)
![Wildflowers](/Travelnew/images/journal/journal_e4aba7f0ea2e8345a117152abb94d2bc.jpeg)

---

### December 31 - A High Altitude New Year's Eve
This was our longest trekking day—17km through a massive, stunning valley. We spotted Guanacos (wild relatives of the llama) and colorful Andean sparrows. As evening fell, the massive peak of Aconcagua finalmente appeared on the horizon, glowing in the dusk.

![Valley Slopes](/Travelnew/images/journal/journal_10f7b9698a8a469a3aaf959be32d9da5.jpeg)
![The Big Valley](/Travelnew/images/journal/journal_2893e3b080bd9ecdf70af1b55d6bad15.jpeg)
![Aconcagua Reveal](/Travelnew/images/journal/journal_c31be75031e1e2865a942cd729742da9.jpeg)

---

### January 1-5 - Life at Plaza Argentina Base Camp
We rang in 2026 at Plaza Argentina, the heart of the mountain. These days were dedicated to acclimatization—a slow dance with the altitude. We managed logistics, watched the team organize loads, and rested by the small mountain streams that flow from the glacier's foot.

![Plaza Argentina](/Travelnew/images/journal/journal_3a50b6fa6f1a5295c8f805576d83b371.jpeg)
![Glacial Stream](/Travelnew/images/journal/journal_3d400931c2b005b707a2c5dc4f236968.jpeg)
![Ice Formations](/Travelnew/images/journal/journal_5be8ce507305fd1d72303231eaf62e9e.jpeg)

---

### January 7-9 - Polar Camp 2 & Snowstorm Survival
The weather turned. We arrived at Camp 2 amidst a heavy snowstorm that dumped two feet of fresh powder, plunging temperatures to -20°C. Navigating the camp became an expedition in itself. We used the downtime for crampon training—learning to run and even "dance" in the tiny metal teeth that provide safety on the ice.

![Snowstorm Camp](/Travelnew/images/journal/journal_760a2d883e768e2c87cb0f4c0f34c775.jpeg)
![Andes Panorama](/Travelnew/images/journal/journal_8c91bab98ecb0d8f4c9705541cfb608c.jpeg)
![White World](/Travelnew/images/journal/journal_affbccc7fad58fb5d75a13fd64fbc043.jpeg)
![Crampon Training](/Travelnew/images/journal/journal_2309e784bf92d8c42e9ebdf9d49f0565.jpeg)

---

### January 11 - The Summit Push: Listening to the Mountain
The summit attempt began at 3:00 AM. It was a surreal ascent, looking out over the entire Andean range under the stars. However, just 500 meters from the summit, the safety conditions deteriorated. The snow was too deep and the risks too high. Listening to the mountain, we turned back. While we didn't touch the top, the experience of being in that thin air was a summit of the spirit.

![Summit Slopes](/Travelnew/images/journal/journal_380bf46d246383d5afad7faed29638ae.jpeg)
![Turning Back](/Travelnew/images/journal/journal_47f107d9df505ae28ae68ca2659848ba.jpeg)
![High View](/Travelnew/images/journal/journal_52db77b2148c14e855f2246b33eec686.jpeg)
![Descent to Safety](/Travelnew/images/journal/journal_989bdc5eb0299088495bae02e0ec8993.jpeg)

---

### January 12-17 - Journey Home: Gratitude and Unfinished Business
The descent took us to Plaza de Mulas and finally back to the comfort of Mendoza. A celebratory dinner and a professional haircut marked the return to civilization. Departing via Santiago, I felt a deep sense of gratitude. Aconcagua is a formidable teacher. I’m leaving South America with "unfinished business" and a promise to return.

![Farewell Mendoza](/Travelnew/images/journal/journal_463f6906d5bbfb4b15e9100f59058eaf.jpeg)
![Santiago Transit](/Travelnew/images/journal/journal_7cdac55b07f2313d328c126a601faa21.jpeg)
![Home Soil](/Travelnew/images/journal/journal_44315d3d472b41cf481ed204f74d1d4e.jpeg)
`,
        image: '/Travelnew/images/journal/journal_52db77b2148c14e855f2246b33eec686.jpeg',
        tags: ["Aconcagua", "Andes", "Expedition", "Trekking"],
        location: 'Aconcagua, Argentina',
        gallery: [
            '/Travelnew/images/journal/journal_103155bb06ef8f0be66db11add038c6a.jpeg',
            '/Travelnew/images/journal/journal_10f7b9698a8a469a3aaf959be32d9da5.jpeg',
            '/Travelnew/images/journal/journal_1774eef715b67cf401f2d59b25109280.jpeg',
            '/Travelnew/images/journal/journal_1ea9ee2fd1fe5a47aee212fed8301d0b.jpeg',
            '/Travelnew/images/journal/journal_218456cddb4390389cfd75cb2dd9c567.jpeg',
            '/Travelnew/images/journal/journal_2309e784bf92d8c42e9ebdf9d49f0565.jpeg',
            '/Travelnew/images/journal/journal_2893e3b080bd9ecdf70af1b55d6bad15.jpeg',
            '/Travelnew/images/journal/journal_2a2ebd88be0400696f125c3fbc97dbf0.jpeg',
            '/Travelnew/images/journal/journal_2e8f7bde477ab403b1d20d9cb586c46c.jpeg',
            '/Travelnew/images/journal/journal_380bf46d246383d5afad7faed29638ae.jpeg',
            '/Travelnew/images/journal/journal_395375bb2a91a5cf0e14de387882083c.jpeg',
            '/Travelnew/images/journal/journal_3a50b6fa6f1a5295c8f805576d83b371.jpeg',
            '/Travelnew/images/journal/journal_3d400931c2b005b707a2c5dc4f236968.jpeg',
            '/Travelnew/images/journal/journal_3f146fbb363fa3c7b80c8d776ec41bb7.jpeg',
            '/Travelnew/images/journal/journal_4041784bb75344ab221f3b79925d40ef.jpeg',
            '/Travelnew/images/journal/journal_4357b4e586ceb205a02e0f0fd2693bf2.jpeg',
            '/Travelnew/images/journal/journal_44315d3d472b41cf481ed204f74d1d4e.jpeg',
            '/Travelnew/images/journal/journal_463f6906d5bbfb4b15e9100f59058eaf.jpeg',
            '/Travelnew/images/journal/journal_47f107d9df505ae28ae68ca2659848ba.jpeg',
            '/Travelnew/images/journal/journal_4d679ab1b005b2dabe65a57aa0f1e761.jpeg',
            '/Travelnew/images/journal/journal_4dd489445fe3225631ecb79e2beed961.jpeg',
            '/Travelnew/images/journal/journal_52db77b2148c14e855f2246b33eec686.jpeg',
            '/Travelnew/images/journal/journal_5be8ce507305fd1d72303231eaf62e9e.jpeg',
            '/Travelnew/images/journal/journal_6517a3c0eed7bbb1555363a2e9a8faad.jpeg',
            '/Travelnew/images/journal/journal_6cfee67b4a0d74683f47f73ede306786.jpeg',
            '/Travelnew/images/journal/journal_73cef4bcff430e2d49a4b0d67a14cd80.jpeg',
            '/Travelnew/images/journal/journal_760a2d883e768e2c87cb0f4c0f34c775.jpeg',
            '/Travelnew/images/journal/journal_7cdac55b07f2313d328c126a601faa21.jpeg',
            '/Travelnew/images/journal/journal_7fef9ae6a143aa64874441f1b8de45c0.jpeg',
            '/Travelnew/images/journal/journal_87b84c8074a0e89465efc51bb5f1b86c.jpeg',
            '/Travelnew/images/journal/journal_8c91bab98ecb0d8f4c9705541cfb608c.jpeg',
            '/Travelnew/images/journal/journal_8d378263f43f03d98725f3d61d064c65.jpeg',
            '/Travelnew/images/journal/journal_989bdc5eb0299088495bae02e0ec8993.jpeg',
            '/Travelnew/images/journal/journal_9c511c23388b069472a93497cbf8f0c8.jpeg',
            '/Travelnew/images/journal/journal_9e0473ef7266a259efd1f99db7cbfb7a.jpeg',
            '/Travelnew/images/journal/journal_a6f85a75e03d6b72a442cafc4da435b3.jpeg',
            '/Travelnew/images/journal/journal_ac997840739bb77406e8a2d79030f4bb.jpeg',
            '/Travelnew/images/journal/journal_affbccc7fad58fb5d75a13fd64fbc043.jpeg',
            '/Travelnew/images/journal/journal_b4a16f161db5f93f7fc9a35708c2b1d2.jpeg',
            '/Travelnew/images/journal/journal_bced215e7490ed1d9171c068bd69bec2.jpeg',
            '/Travelnew/images/journal/journal_be42b0522586ecee49cf9dc621b028c7.jpeg',
            '/Travelnew/images/journal/journal_c31be75031e1e2865a942cd729742da9.jpeg',
            '/Travelnew/images/journal/journal_d2bdedd9f2a7b6a79adab90e9ec72cb7.jpeg',
            '/Travelnew/images/journal/journal_db1476ab75e1e0d9290eb4d5deefdb92.jpeg',
            '/Travelnew/images/journal/journal_e4aba7f0ea2e8345a117152abb94d2bc.jpeg',
            '/Travelnew/images/journal/journal_ff517c9f932e5ec52c4d50a57b6946e6.jpeg'
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
        id: 'life-in-nanjing',
        title: 'Life in Nanjing, China for a Month',
        date: 'October 06, 2006',
        content: `It was a beautiful evening in the month of June 2006, when I was nominated for a 10-month professional computing course in China...`,
        image: 'https://photos1.blogger.com/blogger/4585/3941/200/IMGP0124.jpg',
        tags: ['Travel', 'China', 'Culture'],
        location: 'Nanjing, China'
    },
    {
        id: 'traveling-in-himalayas',
        title: 'Traveling in Himalayas : Experiencing cultural and natural diversity of Nepal',
        date: 'May 29, 2017',
        content: `The trail looks truly natural and aesthetically pleasant...`,
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRU9Nf-vGysb3GPtagMYdmBRQnzwshOXwAGxYKQvN30BxbT9_ph6tXUwYC-TizEAwjVozgEZ4xOt5dXOs7c_1tniZa-R7FvO_59H9hp8dZ3ARfiiGtx9cdqI7cXwYSbgYUUJbI/s640/G0040132.JPG',
        tags: ['Travel', 'Nepal', 'Himalayas'],
        location: 'Nepal'
    }
];
