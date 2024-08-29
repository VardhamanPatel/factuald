import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export const ScrollServiceSection = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          
          lerp: 0.05,
       
        }}
      >
        <Hero />
        <Schedule />
      </ReactLenis>
    </div>
  );
};

const Nav = () => {
  return (
   <div></div>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />

      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="fixed top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-[300px]">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1542627088-6603b66e5c54?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="1"
        start={500}
        end={300}
        className="w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1695712551692-8fc8c0c4f205?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="2"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/2"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1630852722469-1a421dc9db5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-1/2"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-6xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-5xl font-black uppercase text-zinc-50"
      >
        Welcome to our creative hub. Our comprehensive suite of services is designed to boost your brand’s impact across various platforms. Explore the possibilities and let us help you achieve your goals
      </motion.h1>
      <ServiceCard title='Branding' description='Elevating your brand identity' content='We create unique and powerful brand identities that resonate with your audience, ensuring you stand out in the market with a memorable presence.' services={['Brand Strategy', 'Identity Design', 'Market Positioning', 'Creative Direction']} />
        <ServiceCard title='Logo Design' description='Crafting distinctive logos' content='We create logos that reflect your brand’s personality, ensuring a strong visual presence and symbolic representation.' services={['Logo Creation', 'Rebranding', 'Symbolism', 'Color Palette']} />
        <ServiceCard title='Graphic Design' description='Visual storytelling at its best' content='We deliver visually compelling designs for both print and digital, ensuring your message is creative and clear.' services={['Print Design', 'Infographics', 'Packaging', 'Visual Identity']} />
        <ServiceCard title='Web and Mobile Design' description='Responsive and engaging interfaces' content='We design intuitive websites and mobile applications that offer seamless user experiences, ensuring functionality and beauty across all devices.' services={['UI/UX Design', 'Responsive Design', 'Mobile Interfaces', 'Interaction Design']} />
        <ServiceCard title='Social Media Marketing' description='Amplifying your brand’s online presence' content='We create impactful strategies to help your brand connect with its target audience, drive engagement, and build a strong online community.' services={['Content Strategy', 'Campaign Management', 'Paid Ads', 'Analytics']} />
        <ServiceCard title='Video Editing' description='Crafting stories through video' content='We bring your visual content to life through expert editing, motion graphics, and storytelling techniques that captivate your audience.' services={['Editing', 'Motion Graphics', 'Visual Effects', 'Sound Design']} />
    </section>
  );
};

const ServiceCard = ({ title, description, content, services }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="text-4xl lg:text-5xl font-bold mb-6">{title}</p>
        <p className="text-2xl lg:text-3xl font-light mb-4">{description}</p>
        <p className="text-gray-300 text-xl lg:text-2xl mb-6"> {content}</p>
        <ul className='list-disc list-inside text-white space-y-2 text-lg lg:text-xl'>
          {services.map((service, index) => (
            <li key={index} className='hover:underline'>
              {service}
            </li>
          ))}
        </ul>
      </div>
      
    </motion.div>
  );
};