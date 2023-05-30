import brandActivationWhite from "../assets/img/brand-activation-light.svg";
import brandActivation from "../assets/img/brand-activation.svg";
import exhibitionsWhite from "../assets/img/exhibitions-light.svg";
import exhibitions from "../assets/img/exhibitions.svg";
import marketingWhite from "../assets/img/marketing-light.svg";
import marketing from "../assets/img/marketing.svg";
import sponsorshipWhite from "../assets/img/sponsorship-light.svg";
import sponsorship from "../assets/img/sponsorship.svg";

const whatWeDo = [
  {
    title: "Brand Activation",
    desc: "We are highly specialized in producing a quality user experience for a given digital product",
    icon: brandActivation,
    hoveredIcon: brandActivationWhite,
    list: [
      {
        title: "Experimental Activation",
      },
      {
        title: "Event Management",
      },
      {
        title: "Product Launch",
      },
      {
        title: "Internal Engagement",
      },
      {
        title: "Activation Management",
      },
      {
        title: "Award Management",
      },
      {
        title: "Support Services",
      },
    ],
  },
  {
    title: "Sponsorship",
    desc: "Our in-house frontend development team brings your digital experiences to life accurately",
    icon: sponsorshipWhite,
    hoveredIcon: sponsorship,
    list: [
      {
        title: "Right Negotation",
      },
      {
        title: "Concept Ideation",
      },
      {
        title: "Cause-related Marketing",
      },
      {
        title: "Merchandising & Asset Valuation",
      },
    ],
  },
  {
    title: "Field & Retail Marketing",
    desc: "Communicate your uniqueness, your voice and your values in a way that is visually appealing",
    icon: marketing,
    hoveredIcon: marketingWhite,
    list: [
      {
        title: "Product Sampling",
      },
      {
        title: "Brand Ambassadors",
      },
      {
        title: "POS Deployment",
      },
      {
        title: "Mystery Shopping",
      },
      {
        title: "Merchandising",
      },
      {
        title: "Data Collection/Analysis",
      },
      {
        title: "Market Research",
      },
    ],
  },
  {
    title: "Exhibitions",
    desc: "Access highly skilled motion designers giving you access to modern, fast-turnaround, awesome video content",
    icon: exhibitions,
    hoveredIcon: exhibitionsWhite,
    list: [
      {
        title: "Trade Shows",
      },
      {
        title: "Conferences",
      },
      {
        title: "Support Services",
      },
    ],
    isLastChild: true,
  },
];

export { whatWeDo };
