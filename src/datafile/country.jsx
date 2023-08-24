import indojpg from "../img/Indonesia.jpg";
import malajpg from "../img/Malaysia.jpg"
import japanjpg from "../img/Japan.jpg"
import indojpg2 from "../img/indo2.jpg"
import malayjpg2 from "../img/malay2.jpg"
import japanjpg2 from "../img/japan2.jpg"
import indoicon from "../img/icon/indonesia.png"
import malayicon from "../img/icon/malaysia.png"
import japanicon from "../img/icon/japan.png"
import indoview1 from "../img/indo/view1.jpg"
import indoview2 from "../img/indo/view2.jpg"
import indoview3 from "../img/indo/view3.jpg"
import indoview4 from "../img/indo/view4.jpg"
import malayview1 from "../img/malaysia/view1.jpg"
import malayview2 from "../img/malaysia/view2.jpg"
import malayview3 from "../img/malaysia/view3.jpg"
import malayview4 from "../img/malaysia/view4.jpg"
import japanview1 from "../img/japan/view1.jpg"
import japanview2 from "../img/japan/view2.jpg"
import japanview3 from "../img/japan/view3.jpg"
import japanview4 from "../img/japan/view4.jpg"

const countrylist = [
    {
        id: 1,
        name: 'Indonesia',
        title: "Uncover Indonesia's Natural Beauty",
        desc: 'Experience the enchantment of emerald rice terraces, ancient temples, and pristine beaches. Immerse yourself in rich traditions and vibrant festivals that celebrate the soul of Indonesia.',
        cover:indojpg,
        icon:indoicon,
        backdrop: indojpg2
    },
    {
        id: 2,
        name: 'Malaysia',
        title: "Embark on Malaysia's Cultural Odyssey",
        desc: 'Journey through a tapestry of cultures, from the bustling markets of Kuala Lumpur to the serene villages of Penang. Savor diverse culinary delights and immerse in festivals that unite this multicultural gem.',
        cover:malajpg,
        icon:malayicon,
        backdrop: malayjpg2
    },
    {
        id: 3,
        name: 'Japan',
        title: "Explore the Elegance of Japan",
        desc: "Indulge in the harmony of ancient traditions and futuristic technology. Discover the allure of cherry blossoms, serene temples, and bustling cityscapes. Japan's blend of tranquility and dynamism awaits.",
        cover: japanjpg,
        icon:japanicon,
        backdrop: japanjpg2
    }
]

const countrydetail = [
    {
      id: 1,
      name: 'Indonesia',
      img: [
        indoview1, indoview2, indoview3, indoview4
      ],
      description: "Indonesia, with its thousands of islands and diverse cultures, is a land of wonder. From the lush landscapes of Bali to the ancient temples of Borobudur, there's something magical at every corner. With its rich history and traditions, Indonesia offers a glimpse into the past and a promising future. The warm hospitality of its people and the mouthwatering flavors of its cuisine create an unforgettable experience.",
      funFacts: [
        "Home to the world's largest volcanic lake, Lake Toba.",
        "The Komodo dragon, the world's largest lizard, can be found in Indonesia.",
        "Batik is a traditional Indonesian art form that uses wax and dye to create intricate patterns on fabric."
      ],
      weather: "Indonesia experiences a tropical climate, with rainy and dry seasons. Be prepared for warm temperatures and high humidity throughout the year.",
      popularActivities: [
        "Exploring the vibrant markets of Ubud, Bali.",
        "Hiking to the top of Mount Bromo for a stunning sunrise view.",
        "Relaxing on the stunning beaches of Gili Islands."
      ]
    },
    {
      id: 2,
      name: 'Malaysia',
      img: [
        malayview1, malayview2, malayview3, malayview4
      ],
      description: "Malaysia is a melting pot of cultures and flavors. From the towering skyscrapers of Kuala Lumpur to the peaceful villages of Langkawi, the country offers a unique blend of modernity and tradition. The vibrant festivals and colorful celebrations showcase Malaysia's multicultural identity. Taste the array of dishes from Nasi Lemak to Roti Canai, and explore the UNESCO-listed George Town in Penang. Malaysia's diverse ecosystems, from rainforests to marine parks, provide nature lovers with an incredible range of experiences. Whether you're shopping in bustling markets or hiking in pristine landscapes, Malaysia has something for everyone.",
      funFacts: [
        "The Petronas Twin Towers in Kuala Lumpur were once the tallest buildings in the world.",
        "Malaysia is known for its diverse cuisine, influenced by Malay, Chinese, Indian, and indigenous cultures.",
        "Penang is famous for its street art and historic architecture."
      ],
      weather: "Malaysia has a tropical climate with high humidity and temperatures throughout the year. Rain is common, especially during the monsoon season.",
      popularActivities: [
        "Visiting the bustling street food markets of Penang.",
        "Exploring the rainforests and wildlife of Borneo.",
        "Relaxing on the white sandy beaches of Langkawi."
      ]
    },
    {
      id: 3,
      name: 'Japan',
      img: [
        japanview1, japanview2, japanview3, japanview4
      ],
      description: "Japan is a land of contrasts, where traditional tea houses stand alongside futuristic skyscrapers. From the serenity of Kyoto's temples to the bustling streets of Tokyo, the country is a blend of old and new. The ancient customs and modern innovations intertwine seamlessly, creating a unique atmosphere. Admire the intricate architecture of shrines, immerse yourself in the tranquility of zen gardens, and enjoy the vibrant pop culture that is prevalent in Harajuku. Japan's culinary scene is an adventure in itself, from sushi to ramen, each dish is a reflection of the country's rich heritage.",
      funFacts: [
        "Cherry blossoms, known as sakura, are an iconic symbol of Japan and bloom in spring.",
        "Capsule hotels provide compact accommodations for travelers in major cities.",
        "Sumo wrestling is a traditional sport that holds a special place in Japanese culture."
      ],
      weather: "Japan experiences four distinct seasons, with cherry blossom season in spring and colorful foliage in autumn being popular times to visit.",
      popularActivities: [
        "Exploring the historic temples of Kyoto.",
        "Experiencing the bustling energy of Tokyo's Shibuya Crossing.",
        "Taking a soak in an onsen (hot spring) in Hakone."
      ]
    }
  ];

export  {countrylist, countrydetail}