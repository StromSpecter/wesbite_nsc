import maritime from "../../assets/Photo from Unsplash.avif";
import phone from "../../assets/Photo 1631016800696 5ea8801b3c2a.avif";
import residential from "../../assets/Photo 1472508249545 917598a8c985.avif";
import banner1 from "../../assets/Photo 1581088244515 64dc2471f75f.avif";
import banner2 from "../../assets/banner2.avif";
import logoakastar from "../../assets/Akastar Logo.svg";

export const bannerItems = [
  {
    id: 1,
    title: "Connecting the World",
    description:
      "Discover how our satellite technology is revolutionizing the way we connect to the internet, reaching remote areas around the globe.",
    img: {
      src: banner1, // Ensure this points to an imported image
      alt: "Connecting the World",
    },
    icon: {
      src: null,
      alt: "Connecting the World",
    },
  },
  {
    id: 2,
    title: "Akastar",
    description:
      "NSC has given birth to a product called Akastar, taken from the Sanskrit Akasa (meaning space), combined with stars as a symbol of welcoming advanced technology to the island of Indonesia. Enjoy Fast Internet to remote areas with us!",
    img: {
      src: banner2, // Ensure this points to an imported image
      alt: "Akastar",
    },
    icon: {
      src: logoakastar,
      alt: "Akastar",
    },
  },
];

export const navbarItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about-us",
  },
  {
    id: 3,
    name: "Product",
    path: "/product",
  },
  // {
  //   id: 4,
  //   name: "Career",
  //   path: "/career",
  // },
  // {
  //   id: 5,
  //   name: "News",
  //   path: "/news",
  // },
  {
    id: 6,
    name: "Contact",
    path: "/contact",
  },
];

export const productItems = [
  {
    id: 1,
    title: "Residential",
    img: {
      src: residential,
      alt: "Residential",
    },
    description:
      "With Akastar in your home, enjoy superfast internet without restrictions. Streaming videos, playing games, and working from home will be smoother than ever before. Make your home an unparalleled connectivity hub.",
  },
  {
    id: 2,
    title: "Mobile (Roam)",
    img: {
      src: phone,
      alt: "Mobile (Roam)",
    },
    description:
      "No more worrying about connection while traveling Akastar keeps you connected wherever you are. Browsing, streaming and mobile communication have never been easier, even in remote places.",
  },
  {
    id: 3,
    title: "Maritime",
    img: {
      src: maritime,
      alt: "Maritime",
    },
    description:
      "Take your adventures at sea to the next level with Akastar. With a fast internet connection on your boat, you can stay connected to the world, access online navigation, share experiences with friends, and pursue your favorite hobbies without a hitch.",
  },
];

export const faqItems = [
  {
    id: 1,
    question: "What is Akastar?",
    answer:
      "Akastar is a constellation of satellite internet operated by SpaceX. Akastar has a very wide coverage area that can be used in remote areas.",
  },
  {
    id: 2,
    question: "Can Akastar be accessed anywhere?",
    answer: "Akastar can reach to the remote areas of the country.",
  },
  {
    id: 3,
    question: "How to subscribe to Akastar?",
    answer:
      "Contact us for installation through email at sales@nsc.id or by phone at 0813-8995-5512. You can also do it by clicking this link.",
  },
  {
    id: 4,
    question: " What akastar have?",
    answer: "Have Sattellite internet.",
  },
];
