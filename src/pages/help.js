import React from "react";
import styled from "styled-components";
import "../css/custom.css";
import Layout from "@theme/Layout";
import ChevronRight from "../assets/icons/chevron-right.svg";


const PageTitle = styled.h1`
  margin-top: 2rem;
  font-size: 3rem;
  font-weight: 800;
`;

const PageSubtitle = styled.div`
  margin-bottom: 3rem;
`;

const Page = styled.div`
  max-width: var(--ifm-container-width);
  margin: 0 auto;
  padding: 2rem var(--ifm-spacing-horizontal);
  width: 100%;
`;

function Help(props) {
  const { config: siteConfig, language = "" } = props;
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
  const langPart = `${language ? `${language}/` : ""}`;
  const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;
  return (
    <Page className="help-page">
      <PageTitle>NEED HELP?</PageTitle>
      <PageSubtitle>
        We are here to help.
      </PageSubtitle>
      <p>Chances are good that the developer site has the information that you're looking for.<br></br>
         All you need to do is find it.</p>
      <div className="row cards">
        <div className="card">
          <div className="header">
            <h2>
              <img
                src="/img/documents.png"
                id="documents-icon"
                alt="documents icon"
              />
              Browse Docs
            </h2>
          </div>
          <p>Learn more using the documentation on this site.</p>
          <div className="buttons">
            <a href="https://docs.plone.org" target="_blank">
              Read Documents
              <ChevronRight />
            </a>
            <a href="https://training.plone.org" target="_blank">
              Training
              <ChevronRight />
            </a>
            <a href="https://stackoverflow.com/questions/tagged/plone" target="_blank">
            Stack Overflow
              <ChevronRight />
            </a>
          </div>
        </div>
                <div className="card">
          <div className="header">
            <h2>
              <img src="/img/community.png" alt="community icon" />
              Join The Community
            </h2>
          </div>
          <p>Ask questions about the documentation and project</p>
          <div className="buttons">
            <a href="https://community.plone.org/" target="_blank">
              Discourse
              <ChevronRight />
            </a>
            <a href="https://github.com/collective" target="_blank">
              Collective
              <ChevronRight />
            </a>
            <a
              href="Discord."
              target="_blank"
            >
              Discord
              <ChevronRight />
            </a>
            <a href="https://github.com/plone" target="_blank">
              GitHub
              <ChevronRight />
            </a>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default (props) => (
  <Layout>
    <Help {...props} />
  </Layout>
);
