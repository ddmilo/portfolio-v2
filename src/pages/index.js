import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Dan Milo || Full Stack Developer" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="skills" heading="Skills" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
        <ProjectsSection sectionId="portfolio" heading="Projects & Websites" />
        <ContactSection sectionId="contact" heading="Contact Me" />
      </Page>
    </>
  );
}
