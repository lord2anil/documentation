const React = require("react");
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import GitHubLogo from "../assets/icons/github-logo.svg";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import ChevronRight from "../assets/icons/chevron-right.svg";

const HomeSplash = () => {
  const [featureWordIndex, setFeatureWordIndex] = useState(0);
  const featureWords = ["Fast", "Plone powerd", "Performant"];

  const [isShow, setIsShow] = useState(true);

  const changeFeatureWordIndex = (index) => {
    setIsShow(false);
    setFeatureWordIndex(index);
    setIsShow(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (featureWordIndex >= featureWords.length - 1) {
        changeFeatureWordIndex(0);
      } else {
        changeFeatureWordIndex(featureWordIndex + 1);
      }
    }, 3600);
    return () => clearInterval(timer);
  }, [featureWordIndex]);

  return (
    <div className="hero home-splash">
      <div className="container">
        <div className="inner">
          <div className="padding-vert--md">
            <h1 className="title slogan">
              A&nbsp;
              <span className="feature-word">
                <CSSTransition
                  in={isShow}
                  timeout={2000}
                  classNames="feature-word-text"
                  appear={true}
                >
                  <span>{featureWords[featureWordIndex]}</span>
                </CSSTransition>
              </span>
              <span className="hide-on-mobile">&nbsp;</span>CMS
            </h1>
            <div className="subtitle">
             Combine the power of Plone and React.
            </div>
          </div>
          <div className="pluginWrapper button-wrapper">
            <Link
              to="https://github.com/plone"
              className="button  button--outline button--primary github"
            >
              <GitHubLogo className="github-logo" />
              View on GitHub
            </Link>
            <Link
              to={useBaseUrl("/docs")}
              className="button  button--outline button--primary secondary"
            >
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const LearnHow = () => (
  <div className="hero">
    <div className="learn-how">
      <div className="container">
        <div className="row">
          <div className="col col--7">
            <p className="hero__title">
              <small>Description</small>
            </p>
            <p className="hero__subtitle">
              <small>
              Volto is a React-based frontend for the Plone CMS.<br></br>
              Volto, a new experience for editing the web.
              Start editing your content the intuitive way.
              </small>
            </p>
          </div>
          <div className="col">
            <img
              className="image"
              src="https://voltocms.com/static/editor-preview-8bae2d3edae5395fdc29eaf275c2f11c.png"
              align="right"
              alt="plone-description"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);




const ContributionSection = () => {

  return (
    <div className="contribution">
      <div className="center-elem contribution-text">
        <h2>Make your first contribution to Plone</h2>
      </div>
      <div className="center-elem">
        <p>Find a good first issue to get you started !</p>
      </div>
      <div className="contribution-link">
             <Link
              to="/docs/general/contributor-guide#good-first-issues"
             >
              <GitHubLogo className="contribution-logo" />
              Good First Issues
            </Link>
      </div>
    </div>
  );
};



const Index = (props) => {
  return (
    <Layout>
      <HomeSplash />
      <LearnHow />
      <ContributionSection />
    </Layout>
  );
};

export default Index;
