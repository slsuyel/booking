import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Card from './Card';
import './Scroll.css';
const data = [
  {
    title: 'Personalized Matching',
    description:
      'At E-Bibaho, we understand that finding the right partner is about unique compatibility. Our platform uses advanced algorithms and personalized questionnaires to match you with individuals who share your values, interests, and life goals, ensuring a higher chance of meaningful connections.',
  },
  {
    title: 'Verified Profiles',
    description:
      'We prioritize your safety and trust. Each profile on E-Bibaho undergoes a stringent verification process, including ID checks and personal interviews, to ensure that all members are genuine and serious about marriage.',
  },
  {
    title: 'Privacy and Security',
    description:
      'Your privacy is paramount. E-Bibaho employs state-of-the-art security measures to protect your personal information and communication. Our privacy options allow you to control who sees your information and how they interact with you, giving you peace of mind.',
  },
  {
    title: 'User-Friendly Interface',
    description:
      "Whether you're tech-savvy or not, our platform is designed for ease of use. The intuitive design and straightforward navigation of E-Bibaho make your search for a life partner a hassle-free experience, accessible on both desktop and mobile devices.",
  },
  {
    title: 'Diverse Member Base',
    description:
      'Diversity is our strength. E-Bibaho hosts a wide array of profiles from different cultural, religious, and professional backgrounds, enriching your options and increasing the likelihood of finding someone who truly suits your personal preferences.',
  },
];

const Scroll = () => {
  const isMobile = false;

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-395%']);

  return (
    <>
      {isMobile ? (
        <div className="stack">
          {data.map(data => {
            return <Card key={data.title} />;
          })}
        </div>
      ) : (
        <section ref={targetRef} className="HorizontalScrollCarousel">
          <div className="sticky_horizontal">
            <motion.div style={{ x }} className="d-flex gap-5">
              {data.map(data => {
                return <Card key={data.title} />;
              })}
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
};
export default Scroll;
