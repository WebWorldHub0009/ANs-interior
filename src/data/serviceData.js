import img from "../assets/images/main/4.webp";

import smartHomeImg from "../assets/images/main/home.jpg";
import furnitureImg from "../assets/images/main/fur.jpg";
import bedroomImg from "../assets/images/main/bed.jpg";
import kitchenImg from "../assets/images/main/kit.jpg";
import falseImg from "../assets/images/main/false.jpg"
import wallpaper from "../assets/images/main/u.jpg"
import curtain from "../assets/images/main/p6.jpg"




const servicesData = [
  {
    title: "Premium Curtains",
    route: "/services/curtains",
    img: curtain,
    subtitle: "Elegance Draped in Luxury",
    quote: "Transform your windows into statement pieces that reflect your taste and style.",
    overview: "At ANS Interiors, our Premium Curtains are meticulously crafted to elevate every space with sophistication and elegance. Using luxurious fabrics, precise tailoring, and intricate designs, our curtains are designed to enhance the aesthetic appeal while also providing practical benefits such as light control, privacy, and insulation. Every project is tailored to client needs, offering a perfect balance of form and function. From classic drapes to modern motorized solutions, our curtains seamlessly complement interior decor while reflecting individual taste. Our team ensures that every pleat, fold, and finish is executed with perfection, creating a stunning visual statement. Beyond beauty, these curtains provide durability, ease of maintenance, and versatility, making them an essential element of premium interior design. We pride ourselves on delivering curtains that blend artistry, comfort, and luxury to transform homes into truly exquisite living spaces.",
    whyUs: "We combine exclusive fabrics, expert craftsmanship, and customized designs to ensure every curtain is a masterpiece that elevates your living space.",
    features: [
      "Custom sizes for all windows",
      "High-quality, durable fabrics",
      "Thermal and blackout options",
      "Elegant pleating and finishing",
      "Motorized and smart curtain options available"
    ],
    cta: "Book a Consultation"
  },
  {
    title: "Smart Homes",
    route: "/services/smart-homes",
    img: smartHomeImg,
    subtitle: "Future-Proof Living",
    quote: "Experience the perfect blend of technology and luxury for a smarter lifestyle.",
    overview: "ANS Interiors’ Smart Home solutions offer the ultimate fusion of luxury and technology, transforming ordinary living spaces into intelligent, intuitive homes. Every element is thoughtfully designed to enhance convenience, security, and comfort. Our team integrates advanced lighting, climate control, entertainment systems, and security solutions seamlessly into the home environment, ensuring every device is user-friendly and aesthetically cohesive. Beyond mere automation, we customize solutions tailored to each client's lifestyle, providing effortless control over their home with voice commands or mobile applications. Security features such as smart locks, surveillance systems, and alerts are seamlessly integrated, giving homeowners peace of mind. Energy-efficient solutions optimize consumption while maintaining comfort, reflecting a sustainable approach. ANS Interiors ensures that technology enhances the visual appeal of interiors rather than overshadowing it, creating a sophisticated, functional, and elegant living experience that is both future-ready and timeless in style.",
    whyUs: "We specialize in integrating technology without compromising on style. Our smart solutions are personalized to your lifestyle, enhancing comfort, convenience, and security.",
    features: [
      "Voice-activated controls",
      "Automated lighting and curtains",
      "Climate and energy management",
      "Smart security systems",
      "Remote monitoring and control via app"
    ],
    cta: "Explore Smart Homes"
  },
  {
    title: "Custom Furniture",
    route: "/services/furniture",
    img: furnitureImg,
    subtitle: "Tailored to Your Taste",
    quote: "Unique furniture for unique spaces, designed exclusively for you.",
    overview: "At ANS Interiors, our Custom Furniture service is a celebration of craftsmanship, luxury, and individuality. Every piece is designed to reflect the client’s personal style while complementing the home’s overall interior aesthetic. We source the finest woods, metals, and fabrics to create durable, elegant, and functional furniture that is both beautiful and practical. Each design is carefully conceptualized, considering ergonomics, space optimization, and the intended use of the piece. From living room centers to bedroom essentials and bespoke storage solutions, our furniture seamlessly integrates into the home, becoming a statement of luxury and style. Our expert artisans combine traditional techniques with modern design innovation to deliver pieces that are timeless, unique, and crafted with attention to the smallest details. With ANS Interiors, furniture is not just functional—it is art that transforms the ambiance of any room, providing comfort, sophistication, and enduring elegance.",
    whyUs: "We offer bespoke designs, high-quality materials, and expert craftsmanship to create furniture that becomes a centerpiece in your home.",
    features: [
      "Handcrafted bespoke designs",
      "Premium wood, metals, and fabrics",
      "Ergonomic and functional layouts",
      "Space optimization solutions",
      "Durable finishes with attention to detail"
    ],
    cta: "Design Your Furniture"
  },
  {
    title: "Bedroom Design",
    route: "/services/bedroom-design",
    img: bedroomImg,
    subtitle: "Sanctuary of Comfort",
    quote: "Your bedroom is your private retreat; let us make it exquisite and serene.",
    overview: "ANS Interiors creates bedroom designs that perfectly blend luxury, comfort, and personal expression. Each bedroom is meticulously designed to reflect the client’s style, combining color palettes, textures, and lighting to create a relaxing and visually stunning environment. Bespoke furniture, smart storage solutions, and ambient lighting are seamlessly integrated to enhance functionality without compromising elegance. Our designers pay attention to every detail, from the selection of premium bedding materials to accent decor elements, ensuring a cohesive and harmonious space. With smart home integration, automated lighting, and climate control options, bedrooms are transformed into personal sanctuaries that provide peace, comfort, and privacy. Every project is approached with the goal of creating a serene retreat, where luxury meets practicality, allowing homeowners to unwind and rejuvenate in a space that is as stylish as it is restful.",
    whyUs: "We excel at integrating luxury with comfort, offering bespoke furniture, ambient lighting, and smart storage solutions for a perfect bedroom experience.",
    features: [
      "Custom wardrobes and storage",
      "Ambient and layered lighting",
      "Elegant color and texture schemes",
      "Smart home integration for comfort",
      "Premium bedding and décor selection"
    ],
    cta: "Transform Your Bedroom"
  },
  {
    title: "Luxury Kitchen Design",
    route: "/services/luxury-kitchen",
    img: kitchenImg,
    subtitle: "Where Function Meets Art",
    quote: "A kitchen that’s not just functional, but a work of art.",
    overview: "ANS Interiors’ Luxury Kitchen Designs combine practicality with artistic elegance. Every kitchen is carefully planned, with meticulous attention to layout, workflow, and aesthetic appeal. Premium materials, bespoke cabinetry, elegant countertops, and state-of-the-art appliances are integrated to create a space that is as beautiful as it is functional. Our team collaborates with clients to understand their culinary habits, storage needs, and style preferences, ensuring a kitchen that is tailored to their lifestyle. Innovative solutions maximize efficiency, while lighting and decor enhance the visual appeal. Whether it’s a modern minimalist design or a timeless classic look, our kitchens reflect sophistication, functionality, and luxury. Each design balances aesthetics, ergonomics, and durability, transforming kitchens into spaces that inspire culinary creativity and become the heart of the home.",
    whyUs: "We combine ergonomic layouts, premium materials, and timeless designs to deliver kitchens that are as stunning as they are functional.",
    features: [
      "Custom cabinetry and island design",
      "Smart appliance integration",
      "Elegant countertops and backsplashes",
      "Maximized storage solutions",
      "Luxury finishes with durability"
    ],
    cta: "Explore Kitchen Designs"
  },
  {
    title: "False Ceiling / POP Design",
    route: "/services/false-ceiling",
    img: falseImg,
    subtitle: "Elevate Your Interiors",
    quote: "Ceilings that impress, lighting that transforms.",
    overview: "ANS Interiors specializes in creating False Ceiling and POP designs that elevate interiors to new heights of luxury and style. Each ceiling is designed to complement the room’s architecture while incorporating innovative lighting and acoustic solutions. From minimalistic linear designs to intricate 3D patterns, our ceilings enhance the ambiance, depth, and elegance of every space. Our team meticulously selects high-quality materials to ensure durability and seamless finishing. Integrated lighting options allow customization of moods, while designs are crafted to harmonize with furniture, wall treatments, and flooring. The combination of aesthetic appeal, functional acoustics, and ambient lighting makes our ceiling designs both visually captivating and practical. ANS Interiors ensures that every project transforms an ordinary ceiling into a striking feature that elevates the overall interior design, leaving a lasting impression of sophistication and luxury.",
    whyUs: "We provide innovative ceiling designs, flawless installation, and premium finishes to elevate the ambiance of your home.",
    features: [
      "Custom POP designs",
      "Integrated ambient lighting",
      "Durable and high-quality materials",
      "Acoustic optimization",
      "Modern and classic design styles"
    ],
    cta: "Upgrade Your Ceiling"
  },
  {
    title: "Wallpaper Design",
    route: "/services/wallpaper-design",
    img: wallpaper,
    subtitle: "Walls That Speak Luxury",
    quote: "Make every wall a statement of style and elegance.",
    overview: "ANS Interiors’ Wallpaper Design service adds character, luxury, and personality to your home’s walls. Our designers curate premium wallpapers with textures, patterns, and colors that complement each interior, creating a cohesive and visually stunning environment. From accent walls to full-room installations, we consider lighting, furniture, and color schemes to ensure harmony and elegance. Every wallpaper is carefully selected for quality, durability, and ease of maintenance, and our expert team ensures precise, flawless installation. The result is a luxurious, sophisticated interior where walls not only define space but also express individuality. Whether it’s a bold modern pattern or a classic textured design, ANS Interiors’ wallpapers elevate rooms into immersive, stylish, and inviting spaces that exude elegance and refinement.",
    whyUs: "We combine curated designs, expert installation, and premium materials to create walls that truly reflect sophistication.",
    features: [
      "Luxury textured wallpapers",
      "Custom patterns and colors",
      "Durable and easy maintenance",
      "Accent and feature walls",
      "Expert and precise installation"
    ],
    cta: "Decorate Your Walls"
  }
];

export default servicesData;
