import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRegLightbulb, FaRegHeart, FaRegSmile, FaRobot, FaRocket } from 'react-icons/fa';

// Plum color palette
const colors = {
  cream: '#FFF8F0',
  plum: '#6C2676',
  coral: '#FF5A5F',
  accent: '#FDE68A',
  dark: '#2D1A2D',
  text: '#3B1F47',
  card: '#F9F6F2',
};

const Bg = styled.div`
  background: linear-gradient(135deg, #FFF8F0 0%, #FDE68A 100%);
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Hero = styled.section`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: none;
  @media (max-width: 768px) {
    min-height: 60vh;
    padding: 40px 0;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3.4rem;
  font-weight: 900;
  color: ${colors.plum};
  margin-bottom: 1.2rem;
  line-height: 1.1;
  letter-spacing: -2px;
  text-shadow: 0 2px 12px #fde68a44;
  @media (max-width: 768px) {
    font-size: 2.4rem;
    letter-spacing: -1px;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: ${colors.text};
  max-width: 650px;
  margin: 0 auto 2.2rem auto;
  text-shadow: 0 1px 8px #fde68a22;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0 16px;
  }
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const Button = styled(motion.button)`
  background: linear-gradient(90deg, ${colors.coral} 60%, ${colors.plum} 100%);
  color: white;
  border: none;
  padding: 18px 38px;
  border-radius: 32px;
  font-size: 1.18rem;
  cursor: pointer;
  margin-top: 28px;
  font-weight: 800;
  box-shadow: 0 4px 16px #ff5a5f22;
  letter-spacing: 0.5px;
  transition: background 0.3s, box-shadow 0.3s, transform 0.2s;
  &:hover {
    background: linear-gradient(90deg, ${colors.plum} 60%, ${colors.coral} 100%);
    box-shadow: 0 8px 32px #6c267644;
    transform: scale(1.04);
  }
  @media (max-width: 768px) {
    padding: 16px 32px;
    font-size: 1.1rem;
  }
  @media (max-width: 480px) {
    padding: 14px 28px;
    font-size: 1rem;
  }
`;

const CampaignSection = styled.section`
  padding: 80px 0 40px 0;
  background: transparent;
  @media (max-width: 768px) {
    padding: 60px 0 30px 0;
  }
`;

const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  @media (max-width: 768px) {
    gap: 24px;
  }
`;

const CampaignCard = styled(motion.div)`
  background: linear-gradient(120deg, #fff 60%, #fde68a33 100%);
  border-radius: 28px;
  padding: 48px 36px;
  margin: 16px 0;
  box-shadow: 0 8px 32px rgba(108,38,118,0.10);
  min-width: 320px;
  max-width: 420px;
  flex: 1 1 320px;
  border: 2px solid ${colors.accent};
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  &:hover {
    transform: translateY(-12px) scale(1.04);
    box-shadow: 0 16px 48px rgba(108,38,118,0.18);
    border-color: ${colors.coral};
  }
  @media (max-width: 768px) {
    padding: 36px 24px;
    min-width: 280px;
  }
  @media (max-width: 480px) {
    padding: 32px 20px;
    min-width: 100%;
  }
`;

const CardIcon = styled.div`
  font-size: 2.2rem;
  color: ${colors.coral};
  margin-bottom: 8px;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CampaignTitle = styled.h2`
  color: ${colors.coral};
  font-size: 1.6rem;
  margin-bottom: 0.7rem;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const CampaignDescription = styled.p`
  color: ${colors.text};
  font-size: 1.13rem;
  line-height: 1.7;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SectionHeading = styled.h3`
  color: ${colors.plum};
  font-size: 2rem;
  font-weight: 900;
  margin: 2.5rem 0 1.2rem 0;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin: 2rem 0 1rem 0;
  }
`;

const TestimonialCard = styled.div`
  background: ${colors.plum};
  color: white;
  border-radius: 20px;
  padding: 32px 28px;
  margin: 32px auto 0 auto;
  max-width: 500px;
  box-shadow: 0 6px 24px rgba(108,38,118,0.13);
  font-size: 1.1rem;
  text-align: center;
  position: relative;
`;

const CampaignIdeasList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CampaignIdea = styled.li`
  background: ${colors.card};
  border-left: 6px solid ${colors.coral};
  margin: 18px 0;
  padding: 18px 22px;
  border-radius: 12px;
  font-size: 1.08rem;
  color: ${colors.text};
  box-shadow: 0 2px 8px rgba(255,90,95,0.06);
`;

// --- Campaign Matchmaker Quiz ---
const QuizSection = styled.section`
  background: ${colors.accent};
  padding: 60px 0 40px 0;
  border-radius: 32px;
  margin: 40px 0;
  @media (max-width: 768px) {
    padding: 40px 0 30px 0;
    margin: 30px 0;
    border-radius: 24px;
  }
`;
const QuizContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  background: ${colors.card};
  border-radius: 24px;
  box-shadow: 0 4px 16px rgba(108,38,118,0.09);
  padding: 36px 28px;
  text-align: center;
  @media (max-width: 768px) {
    padding: 28px 20px;
    margin: 0 16px;
  }
`;
const QuizQ = styled.h4`
  color: ${colors.plum};
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;
const QuizOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const QuizOption = styled(Button)`
  background: ${colors.coral};
  color: white;
  font-size: 1rem;
  margin: 0;
  border-radius: 18px;
  padding: 12px 0;
  box-shadow: none;
`;
const QuizResult = styled.div`
  margin-top: 32px;
  background: ${colors.cream};
  border-radius: 18px;
  padding: 24px 18px;
  color: ${colors.text};
  font-size: 1.1rem;
  box-shadow: 0 2px 8px rgba(255,90,95,0.06);
`;

const campaignIdeas = [
  {
    name: 'Plum x Aisle: the long-term love contract',
    desc: "co-create a playful 'relationship contract' for companies and employees, inspired by aisle's long-term dating vibes. hr signs a giant 'plum love contract' at events, pledging to care for their people for the long haul. plum delivers a surprise 'anniversary' care package a year later."
  },
  {
    name: 'a plum a day—literally',
    desc: "for a month, plum delivers a real plum fruit (or branded snack) to every employee at select client offices, with a qr code for a daily wellness micro-challenge. the office with the most completed challenges gets a 'plum party' with live music, wellness pop-ups, and a custom meme wall."
  },
  {
    name: "plum's insurance tarot",
    desc: "at events or online, plum's 'insurance tarot reader' gives playful, personalized 'insurance fortunes' (like: 'you will experience a claim so smooth, you'll think it's magic'). real plum experts are on hand to make your fortune come true."
  },
  {
    name: "plum's meme-ified policy docs",
    desc: "plum rewrites a real policy document entirely in memes, gifs, and emojis. hrs can request a 'meme-ified' version of their own company's policy—making compliance fun for the first time ever."
  },
  {
    name: 'plum pals',
    desc: "meet the animated dream team: plum pals! they turn insurance faqs into lols and 'aha!' moments. think saturday morning cartoons, but for grown-up benefits."
  }
];

const quizQuestions = [
  {
    q: 'What excites you most about a campaign?',
    options: [
      'Fun, quirky storytelling',
      'Real impact on people',
      'Bringing people together',
      'Cool tech & AI',
      'Radical transparency'
    ]
  },
  {
    q: 'Pick a Plum value:',
    options: [
      'Human-first',
      'Empathy',
      'Community',
      'Innovation',
      'Openness'
    ]
  },
  {
    q: 'Your campaign superpower would be…',
    options: [
      'Turning boring into brilliant',
      'Making people feel seen',
      'Building hype and community',
      'Automating the magic',
      'Telling the truth, beautifully'
    ]
  },
  {
    q: "What's your go-to move when you join a new team?",
    options: [
      'Crack a joke to break the ice',
      "Listen and learn everyone's story",
      'Organize a team lunch or game',
      'Suggest a new tool or hack',
      'Share a wild, honest idea'
    ]
  },
  {
    q: "Just for fun: What's your sun sign?",
    options: [
      'Aries/Leo/Sagittarius',
      'Taurus/Virgo/Capricorn',
      'Gemini/Libra/Aquarius',
      'Cancer/Scorpio/Pisces',
      "I don't believe in sun signs!"
    ]
  }
];

function getMatchedCampaign(answers) {
  // Use the first 4 answers for matching
  if (answers.length < 5) return null;
  const counts = [0, 0, 0, 0, 0];
  answers.slice(0, 4).forEach(idx => { if (typeof idx === 'number') counts[idx]++; });
  const max = Math.max(...counts);
  const matchIdx = counts.indexOf(max);
  return campaignIdeas[matchIdx];
}

function CampaignMatchmaker() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const matched = getMatchedCampaign(answers);
  const progress = Math.round((step / quizQuestions.length) * 100);

  return (
    <QuizSection>
      <QuizContainer>
        <SectionHeading style={{ margin: 0 }}>🎯 Campaign Matchmaker</SectionHeading>
        <div style={{ margin: '12px 0 24px 0' }}>
          <span style={{ color: colors.plum, fontWeight: 700 }}>Progress: {step}/{quizQuestions.length}</span>
          <div style={{ background: colors.accent, borderRadius: 8, height: 8, marginTop: 6 }}>
            <div style={{ width: `${progress}%`, height: 8, background: colors.coral, borderRadius: 8, transition: 'width 0.3s' }} />
          </div>
        </div>
        {step < quizQuestions.length ? (
          <>
            <QuizQ>{quizQuestions[step].q}</QuizQ>
            <QuizOptions>
              {quizQuestions[step].options.map((opt, i) => (
                <QuizOption
                  key={opt}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setAnswers([...answers, i]);
                    setStep(step + 1);
                  }}
                >
                  {opt}
                </QuizOption>
              ))}
            </QuizOptions>
          </>
        ) : (
          <QuizResult>
            <b>Your Plum-perfect campaign match:</b><br /><br />
            <span style={{ color: colors.plum, fontWeight: 700, fontSize: '1.2rem' }}>{matched.name}</span>
            <br /><br />
            {matched.desc}
            <br /><br />
            <Button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setStep(0);
                setAnswers([]);
              }}
              style={{ marginTop: 12 }}
            >
              Try Again
            </Button>
          </QuizResult>
        )}
      </QuizContainer>
    </QuizSection>
  );
}

const BrainSection = styled.section`
  padding: 60px 0 30px 0;
  background: ${colors.cream};
  @media (max-width: 768px) {
    padding: 40px 0 20px 0;
  }
`;

const BrainHeading = styled.h3`
  color: ${colors.plum};
  font-size: 2rem;
  font-weight: 900;
  margin: 2.5rem 0 1.2rem 0;
  text-align: center;
`;

const BrainDiagram = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin: 0 auto;
  max-width: 700px;
`;

const BrainStep = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.card};
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(255,90,95,0.06);
  padding: 18px 28px;
  font-size: 1.15rem;
  color: ${colors.text};
  min-width: 320px;
  max-width: 500px;
  position: relative;
  @media (max-width: 768px) {
    padding: 16px 24px;
    font-size: 1.1rem;
    min-width: 280px;
  }
  @media (max-width: 480px) {
    padding: 14px 20px;
    font-size: 1rem;
    min-width: 100%;
  }
`;

const BrainIcon = styled.span`
  font-size: 2rem;
  margin-right: 18px;
`;

const BrainArrow = styled.div`
  font-size: 2.2rem;
  color: ${colors.coral};
  margin: 0.5rem 0;
`;

// Add SVG doodles for each step (move to top level)
const doodles = [
  // Empathy
  () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="20" rx="18" ry="10" stroke="#FF5A5F" strokeWidth="2"/><ellipse cx="20" cy="20" rx="6" ry="3" fill="#FDE68A"/></svg>
  ),
  // Brainstorm
  () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M10 30 Q20 10 30 30" stroke="#6C2676" strokeWidth="2" fill="none"/><circle cx="20" cy="20" r="4" fill="#FF5A5F"/></svg>
  ),
  // Aha
  () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="10" stroke="#FDE68A" strokeWidth="2"/><path d="M20 10 v-6" stroke="#FF5A5F" strokeWidth="2"/><path d="M20 36 v-6" stroke="#FF5A5F" strokeWidth="2"/></svg>
  ),
  // Tech
  () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="10" y="15" width="20" height="10" rx="3" stroke="#6C2676" strokeWidth="2"/><circle cx="20" cy="20" r="2" fill="#FF5A5F"/></svg>
  ),
  // Story
  () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="12" y="12" width="16" height="16" rx="4" stroke="#FF5A5F" strokeWidth="2"/><path d="M16 20 h8" stroke="#6C2676" strokeWidth="2"/></svg>
  ),
  // Test
  () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="28" rx="10" ry="4" stroke="#FDE68A" strokeWidth="2"/><circle cx="20" cy="20" r="4" fill="#6C2676"/></svg>
  ),
  // Launch
  () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20 30 l5-10 l-5-10 l-5 10 z" fill="#FF5A5F" stroke="#6C2676" strokeWidth="2"/><circle cx="20" cy="30" r="3" fill="#FDE68A"/></svg>
  ),
];

function AnirudhBrainDiagram() {
  const steps = [
    { icon: '🧐', text: 'First, I get nosy (in a good way). Who are we talking to? What keeps them up at night? I\'ll even stalk their memes.' },
    { icon: '💡', text: 'I grab a notebook, a coffee, and go wild. Doodles, mind maps, even bad puns—nothing\'s off the table.' },
    { icon: '🎯', text: 'Suddenly, there\'s a spark. The "wait, this could actually work!" moment. I usually say it out loud.' },
    { icon: '🤖', text: 'Can a bot, a meme generator, or a weird hack make this cooler? If yes, I\'m building it.' },
    { icon: '✍️', text: 'I storyboard, scribble, and sometimes act it out. If it doesn\'t make me grin, it\'s not ready.' },
    { icon: '🧪', text: 'I test on a real human (usually a friend or my mom). Honest feedback only.' },
    { icon: '🚀', text: 'We launch! I\'m the one sending GIFs in the team chat and tracking every smile.' },
  ];
  return (
    <BrainSection>
      <BrainHeading>How Anirudh Actually Cooks Up a Campaign</BrainHeading>
      <BrainDiagram>
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <BrainStep>
              <BrainIcon>{doodles[idx]()}</BrainIcon>
              {step.text}
            </BrainStep>
            {idx < steps.length - 1 && <BrainArrow>⬇️</BrainArrow>}
          </React.Fragment>
        ))}
      </BrainDiagram>
    </BrainSection>
  );
}

const MarqueeWrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  background: linear-gradient(90deg, #ff5a5f 60%, #fde68a 100%);
  padding: 0;
  margin: 0;
`;

const MarqueeText = styled.div`
  display: inline-block;
  white-space: nowrap;
  font-size: 2.2rem;
  font-weight: 900;
  color: #fff8f0;
  letter-spacing: 0.1em;
  padding: 32px 0;
  animation: moveLeftRight 8s linear infinite;
  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding: 24px 0;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 20px 0;
  }
  @keyframes moveLeftRight {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100vw); }
  }
`;

const MarqueeLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

const InstaBanner = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 36px auto 0 auto;
  max-width: 420px;
  background: linear-gradient(90deg, #ff5a5f 60%, #fde68a 100%);
  color: #fff8f0;
  font-size: 1.25rem;
  font-weight: 800;
  border-radius: 24px;
  padding: 18px 32px;
  text-decoration: none;
  box-shadow: 0 4px 16px #ff5a5f22;
  letter-spacing: 0.5px;
  transition: background 0.3s, box-shadow 0.3s, transform 0.2s;
  gap: 14px;
  &:hover {
    background: linear-gradient(90deg, #fde68a 60%, #ff5a5f 100%);
    color: #6c2676;
    transform: scale(1.04);
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 16px 28px;
    margin: 24px auto 0 auto;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 14px 24px;
    margin: 20px auto 0 auto;
  }
`;

function App() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <Bg>
      <Hero>
        <Container>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet the Campaign<br />
            <span style={{ color: colors.coral }}>That Campaigns for Campaigns</span>
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A campaign in human form. <br />
            <b>Anirudh Panda</b> — ready to make Plum the most loved name in insurance (with a lot more heart).
          </Subtitle>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ marginBottom: 32 }}
            onClick={() => {
              window.open('https://anirudhpanda.in/', '_blank');
            }}
          >
            kon hai ye anirudh?
          </Button>
        </Container>
      </Hero>

      <CampaignSection ref={ref}>
        <SectionHeading>Why Anirudh?</SectionHeading>
        <CardRow>
          <CampaignCard
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <CardIcon><FaRegLightbulb /></CardIcon>
            <CampaignTitle>Wit, Warmth, and Wow</CampaignTitle>
            <CampaignDescription>
              I believe in marketing that makes you smile, think, and feel cared for. (And maybe hungry for more.)
            </CampaignDescription>
          </CampaignCard>

          <CampaignCard
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CardIcon><FaRegHeart /></CardIcon>
            <CampaignTitle>Marketing + Tech = WAH WAH</CampaignTitle>
            <CampaignDescription>
              I blend human-first storytelling with AI and as an engineer turned marketer, I know how to make it work.
            </CampaignDescription>
          </CampaignCard>

          <CampaignCard
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CardIcon><FaRocket /></CardIcon>
            <CampaignTitle>Strategy, Not Just Sass</CampaignTitle>
            <CampaignDescription>
              Creative is great. Creative that converts? Even better. I bring ideas that win hearts *and* business.
            </CampaignDescription>
          </CampaignCard>
        </CardRow>
        <InstaBanner
          href="https://www.instagram.com/therudepanda?igsh=emR2eGxjcWs5dm85&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span role="img" aria-label="camera">🎥</span> he also makes insta reels
        </InstaBanner>
      </CampaignSection>

      <CampaignMatchmaker />

      <AnirudhBrainDiagram />

      <MarqueeWrapper>
        <MarqueeLink href="mailto:anirudhpandaofficial@gmail.com" target="_blank" rel="noopener noreferrer">
          <MarqueeText>
            hire him &nbsp; • &nbsp; hire him &nbsp; • &nbsp; hire him &nbsp; • &nbsp; hire him &nbsp; • &nbsp; hire him &nbsp; • &nbsp; hire him
          </MarqueeText>
        </MarqueeLink>
      </MarqueeWrapper>
    </Bg>
  );
}

export default App; 