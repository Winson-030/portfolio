import Layout from "@/layouts/Layout";
import { Section } from "@/styles/GlobalComponents";

import Accomplishments from "@/components/Accomplishments/Accomplishments";
import BackgroundAnimation from "@/components/BackgroundAnimation/BackgroundAnimation";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Technologies from "@/components/Technologies/Technologies";
import Timeline from "@/components/Timeline/Timeline";






const Home = () => {
    return (
        <Layout>
        <Section grid>
          <Hero />
          <BackgroundAnimation />
        </Section>
        <Projects />
        <Technologies />
        <Timeline />
        <Accomplishments />
      </Layout>
      
    )
}

export default Home;