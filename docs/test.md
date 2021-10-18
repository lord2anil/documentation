---
id: test
title: A new landing
sidebar_label: Landing
description: Landing Page
hide_table_of_contents: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<div className="box-wrapper" markdown="1">
  <div className="box box1 card">
    <div className="container">
    <h2>Volto</h2>
    <p>All about Volto</p>
        <img src={useBaseUrl('/img/volto-screen.png')} />
    </div>
  </div>

  <div className="box box3 card">
    <div className="container">
    <h2>Icons</h2>
    <p>All about Icons.</p>
        </div>
  </div>
  <div className="box box4 card">
    <div className="container">
    <h2>What is Plone Classic UI</h2>
    <p>What is it, what is the difference to Plone Volto.</p>
    <ul>
        <li><a href="/ci/jenkins">Differences</a></li>
        <li><a href="/ci/bamboo">FAQ</a></li>
        <li>and <a href="/ci">More</a></li>
        <img src={useBaseUrl('/img/plone-classic-screen.png')} />
    </ul>
    </div>
  </div>
</div>
