import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import CodeSnippet from "@site/src/theme/CodeSnippet";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const installs = [
  {
    label: 'Curl',
    lang: 'bash',
    copyBit: `curl -Lsf https://sh.benthos.dev | bash`,
    config: `# Install
    curl -X POST https://api.plone.com/v1/data \
    --header "Authorization: Bearer <ACCESS_TOKEN>" \
    --header "Content-Type: application/octet-stream"

# Run
benthos -c ./config.yaml`
  },
  {
    label: 'Homebrew',
    lang: 'bash',
    copyBit: `brew install benthos`,
    config: `# Install
brew install benthos

# Make a config
benthos create nats/protobuf/aws_sqs > ./config.yaml

# Run
benthos -c ./config.yaml`
  },
  {
    label: 'Docker',
    lang: 'bash',
    copyBit: `docker pull jeffail/benthos`,
    config: `# Pull
docker pull jeffail/benthos

# Make a config
docker run --rm jeffail/benthos create nats/protobuf/aws_sqs > ./config.yaml

# Run
docker run --rm -v $(pwd)/config.yaml:/benthos.yaml jeffail/benthos`
  },
]

const snippets = [
  {
    label: 'Upload',
    further: '/docs/guides/bloblang/about',
    config: `POST:
    curl -X POST https://api.plone.com/v1/data \
    
    --header "Authorization: Bearer <ACCESS_TOKEN>" \
    
    --header "Content-Type: application/octet-stream"`,

  },
  {
    label: 'Workspaces',
    further: '/docs/components/outputs/about#multiplexing-outputs',
    config: `POST:
    curl -i -X POST "https://api.plone.com/v1/workspaces" \
    
    -H "Authorization: Bearer <ACCESS_TOKEN>" \
    
    -H "Content-Type: application/json" \
    
    -d '{
      "name": "New Space",
      "accounts": {
        "id": "0"
      }
    }'`,

  },

];

const features = [
   {
     title: 'Plone 6',
     imageUrl: 'img/volto-screen.png',
     description: (
       <>
         <p>
         Create cool stuff!
         </p>
         
       </>
     ),
   },
   {
     title: 'Plone 6 Classic UI',
     imageUrl: 'img/plone-classic-screen.png',
     description: (
       <>
         <p>
         Plone means Disco Pants!
         </p>
         <p>
         and party!
         </p>
         <img src="/static/img/plone.svg"></img>
       </>
     ),
   },
  // {
  //   title: 'Reliable and Scalable',
  //   imageUrl: 'img/Blobscales.svg',
  //   description: (
  //     <>
  //       <p>
  //         Benthos runs fast and processes messages using a transaction model, making it able to guarantee at-least-once delivery even in the event of crashes or unexpected server faults.
  //       </p>
  //       <p>
  //         It's completely stateless, allowing for easy deployment and liberal scaling. It also exposes <a href="/docs/components/metrics/about">metrics</a> and <a href="/docs/components/tracers/about">tracing</a> events to targets of your choice.
  //       </p>
  //       <p>
  //         At Meltwater it's enriching over 450 million documents per day with a network of more than 20 NLP services. It sounds very interesting but rest assured, <a href="https://underthehood.meltwater.com/blog/2019/08/26/enriching-450m-docs-daily-with-a-boring-stream-processor">it's totally drab</a>.
  //       </p>
  //     </>
  //   ),
  // },
  // {
  //   title: 'Extendable',
  //   imageUrl: 'img/Blobextended.svg',
  //   description: (
  //     <>
  //       <p>
  //         Sometimes the components that come with Benthos aren't enough. Luckily, Benthos has been designed to be easily plugged with whatever components you need.
  //       </p>
  //       <p>
  //         You can either write plugins <a href="https://github.com/benthosdev/benthos-plugin-example">directly in Go (recommended)</a> or you can have Benthos run your plugin as a <a href="/docs/components/processors/subprocess">subprocess</a>.
  //       </p>
  //     </>
  //   ),
  // },
];


function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--6', styles.feature)}>
      <h3>{title}</h3>
      {/* {description} */}
      {imgUrl && (
        <div>
        {/* <div className="text--center"> */}
          <img className={classnames('padding-vert--md', styles.featureImage)} src={imgUrl} alt={title} />
        </div>
      )}
      {/* <h3>{title}</h3>
      {description} */}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="API things"
      keywords={["plone","stream processor","data engineering","ETL","ELT","event processor","go","golang"]}>
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={classnames('col col--5 col--offset-1')}>
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <p>Plone means disco pants!</p>
              <div className={styles.buttons}>
                <Link
                  className={classnames(
                    'button button--outline button--primary button--lg',
                    styles.getStarted,
                  )}
                  to={useBaseUrl('overview/about-plone')}>
                  Get Started
                </Link>
              </div>
            </div>
            <div className={classnames('col col--5')}>
              <img className={styles.heroImg} src="img/editor-preview.png" class="plone-home-animation"/>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row">
            {/* <div className={classnames(`${styles.pitch} col col--6`)}>
              <h2>It's boringly easy to use</h2>
              <p>
              Build by humans for humans.
              </p> */}
              {/* <p>
                Written in Go, deployed as a static binary, declarative configuration. <a href="https://github.com/Jeffail/benthos">Open source</a> and cloud native as utter heck.
              </p> */}
              {/* {installs && installs.length && (
                <Tabs defaultValue={installs[0].label} values={installs.map((props, idx) => {
                  return {label:props.label, value:props.label};
                })}>
                  {installs.map((props, idx) => (
                    <TabItem key={idx} value={props.label}>
                      <CodeSnippet {...props}></CodeSnippet>
                    </TabItem>
                  ))}
                </Tabs>
              )} */}
            {/* </div> */}
            {/* <div className={classnames('col col--6')}>
                {snippets && snippets.length && (
                  <section className={styles.configSnippets}>
                    <Tabs defaultValue={snippets[0].label} values={snippets.map((props, idx) => {
                      return {label:props.label, value:props.label};
                    })}>
                      {snippets.map((props, idx) => (
                        <TabItem key={idx} value={props.label}>
                          <CodeSnippet className={styles.configSnippet} {...props}></CodeSnippet>
                        </TabItem>
                      ))}
                    </Tabs>
                  </section>
                )}
            </div> */}
          </div>
        </div>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container margin-vert--md">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;