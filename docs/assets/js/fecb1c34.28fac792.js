"use strict";(self.webpackChunktest_website=self.webpackChunktest_website||[]).push([[318],{6765:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=i(4848),n=i(8453);const r={},o="OpenDI Reference Architecture -- Roles and User Stories",a={id:"index",title:"OpenDI Reference Architecture -- Roles and User Stories",description:"Purpose",source:"@site/versioned_docs/version-Live/index.md",sourceDirName:".",slug:"/",permalink:"/roles-user-stories-ds/",draft:!1,unlisted:!1,editUrl:"https://github.com/IAmKelDev/roles-user-stories/tree/dev/versioned_docs/version-Live/index.md",tags:[],version:"Live",frontMatter:{},sidebar:"landingSidebar",next:{title:"Decision Maker",permalink:"/roles-user-stories-ds/Roles/Decision Maker"}},l={},d=[{value:"Purpose",id:"purpose",level:2},{value:"Why start with user roles?",id:"why-start-with-user-roles",level:3},{value:"Objective",id:"objective",level:3},{value:"Who reads this document?",id:"who-reads-this-document",level:3},{value:"User Roles",id:"user-roles",level:2},{value:"Decision Maker",id:"decision-maker",level:3},{value:"DI Analyst",id:"di-analyst",level:3},{value:"Decision Model Builder",id:"decision-model-builder",level:3},{value:"Decision Asset Manager",id:"decision-asset-manager",level:3},{value:"OpenDI System Administrator",id:"opendi-system-administrator",level:3},{value:"Decision Simulation Builder",id:"decision-simulation-builder",level:3},{value:"Decision Simulation Manager",id:"decision-simulation-manager",level:3},{value:"Decision Monitor Builder",id:"decision-monitor-builder",level:3},{value:"Decision Monitor",id:"decision-monitor",level:3},{value:"Decision Quality Assurance Manager",id:"decision-quality-assurance-manager",level:3},{value:"About this document",id:"about-this-document",level:2},{value:"Status of this document",id:"status-of-this-document",level:3},{value:"OpenDI compliance",id:"opendi-compliance",level:3},{value:"Known Issues",id:"known-issues",level:3}];function c(e){const s={a:"a",br:"br",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"opendi-reference-architecture----roles-and-user-stories",children:"OpenDI Reference Architecture -- Roles and User Stories"}),"\n",(0,t.jsx)(s.h2,{id:"purpose",children:"Purpose"}),"\n",(0,t.jsxs)(s.p,{children:["This document enumerates typical user roles for Decision Intelligence systems, with links to further descriptions and user stories for each role, in separate documents.",(0,t.jsx)(s.br,{}),"\n","By doing so, it supports better consistency in other documents that describe the software systems used by these users.  You can read this document both so that you may benefit from and also that you can contribute to, OpenDI standards."]}),"\n",(0,t.jsxs)(s.p,{children:["This document assumes you're familiar with ",(0,t.jsx)(s.a,{href:"https://opendi.org/OpenDI%20Intro%20Material/",children:"OpenDI Intro Material"}),", which sets the stage for the material here."]}),"\n",(0,t.jsx)(s.h3,{id:"why-start-with-user-roles",children:"Why start with user roles?"}),"\n",(0,t.jsx)(s.p,{children:"By situating all standards within software systems that are used in well-defined ways by people in the roles described here, we are able to create better standards and software systems because they serve user's needs that have been studied for many years.  In addition, by standardizing around user roles, this leads to better consistency and interoperability in systems that we create."}),"\n",(0,t.jsx)(s.p,{children:"This document therefore serves as a foundation for the rest of the OpenDI Reference Architecture. In keeping with best practices in user-centered design \u2014 it's important to understand how a DI system is to be used."}),"\n",(0,t.jsxs)(s.p,{children:["As a foundation for that, in turn, it's important to start with ",(0,t.jsx)(s.em,{children:"who"})," will be using the DI system, and ",(0,t.jsx)(s.em,{children:"why"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The purpose of this living document is therefore to capture user stories for the DI reference architecture, which is summarized in Figure 2 in ",(0,t.jsx)(s.a,{href:"https://opendi.org/OpenDI%20Intro%20Material/",children:"OpenDI Intro Material"}),".",(0,t.jsx)(s.br,{}),"\n","User stories, per ",(0,t.jsx)(s.a,{href:"https://www.atlassian.com/agile/project-management/user-stories",children:"Agile best practice"}),' are not requirements, but are plain-language descriptions of how software "will provide value to users".  They provide a framework into which more detailed, "functional", requirements are added later.  Over many years of software development, we\'ve learned that, if our goal is to build systems that are "fit for purpose", explaining things in this way is the easiest for humans to understand and to ensure we\'re building the right solutions.']}),"\n",(0,t.jsx)(s.h3,{id:"objective",children:"Objective"}),"\n",(0,t.jsx)(s.p,{children:"With the above information as context, then, the objective of this document is twofold:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"Contributors:"})," To align contributors to the OpenDI Reference Architecture so we are all on the same page as to what software users need; and"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"Consumers:"})," To serve as the authoritative point of reference for engineering teams that are working on the OpenDI Reference Architecture directly or implementing OpenDI features in an OpenDI-compliant artifact."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["By way of illustration for #2, a software vendor might be interested in creating just one part of this architecture - perhaps the connection to data in the bottom layer of Figure 2 of\n",(0,t.jsx)(s.a,{href:"https://opendi.org/OpenDI%20Intro%20Material/",children:"OpenDI Intro Material"}),'.  Such a vendor can read this document to ensure that the system they build can be integrated with systems from other vendors that help a user to create a decision model, and to use a decision simulation system. This means that the data connection vendor can deliver its products much faster to market, because it doesn\'t have to deliver the entire "stack" of DI modules.']}),"\n",(0,t.jsx)(s.p,{children:"There are also open source teams that are developing modules that are compliant with the OpenDI architecture.  This means that if you are developing a proprietary module, then by following this standard you'll be able to leverage those open source systems, thereby de-risking and de-costing your product."}),"\n",(0,t.jsxs)(s.p,{children:["Note that the roles and associated use cases in this document are limited to those associated with the use of DI software systems. Out of scope for this document are roles and use cases that don't involve the use of DI software. For example, ",(0,t.jsx)(s.a,{href:"http://www.dihandbook.com",children:(0,t.jsx)(s.em,{children:"The Decision Intelligence Handbook"})})," describes a process for creating a decision framing document, which is the responsibility of a Decision Team Leader role. This role is not explicitly called out in this document, because it does not interact with DI software in ways that aren't covered by other roles. Nor is the creation of the Framing Document a user story described here, for the same reason."]}),"\n",(0,t.jsx)(s.h3,{id:"who-reads-this-document",children:"Who reads this document?"}),"\n",(0,t.jsx)(s.p,{children:'Generally speaking, we expect this document to be used by software architects and/or technical leads who have decided to build software modules that follow the OpenDI standard.  Larger teams may even designate a formal "standards liason" role whose job it is to keep up with ecosystem activities.'}),"\n",(0,t.jsxs)(s.p,{children:["It is in the interest of these ",(0,t.jsx)(s.em,{children:"consumers"})," of this standard to also ",(0,t.jsx)(s.em,{children:"contribute"}),' to it, especially in the early days of OpenDI. Contributing to the standard improves its quality, which \u2014 using a "commons" model that is familiar to many of us in DI \u2014 benefits all participants.']}),"\n",(0,t.jsx)(s.h2,{id:"user-roles",children:"User Roles"}),"\n",(0,t.jsxs)(s.p,{children:["Within a DI ecosystem, there are a number of user roles, which are listed below. Any individual user may have one or more of these roles. User roles from a requirements perspective are distinct, albeit potentially related to organizational roles (",(0,t.jsx)(s.em,{children:"e.g."}),", a service provider, consultant, engineer, researcher, ",(0,t.jsx)(s.em,{children:"etc"}),".)."]}),"\n",(0,t.jsxs)(s.p,{children:["The roles described here are both historically descriptive as well as aspirational. They are based on the experience of early creators of decision intelligence software, but include user stories that go beyond what current systems are able to do.  They represent a combination of many person-decades of experience since approximately 2010. At the time of this writing, the roles are consistent with \u2014 and so act as an extension of \u2014 the material within\n",(0,t.jsx)(s.a,{href:"https://www.dihandbook.com",children:(0,t.jsx)(s.em,{children:"The Decision Intelligence Handbook"})}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Note that a particular ",(0,t.jsx)(s.em,{children:"person"})," may \u2014 and usually does \u2014 serve multiple roles. The Decision Simulation Builder, for instance, may be the same person as the Decision Simulation Manager."]}),"\n",(0,t.jsx)(s.h3,{id:"decision-maker",children:"Decision Maker"}),"\n",(0,t.jsx)(s.p,{children:"I use DI software systems to determine the best set of actions to achieve my desired outcomes. I interact with renderings of Causal Decision Models to gain an intuition regarding the causal relationship between actions and outcomes and/or to receive recommended actions for my review and/or to review fully automated (not human-in-the-loop) automated DI systems. I have the authority required to adjust all Levers relevant to my decision, and typically I am also responsible for the Outcomes."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/roles-user-stories-ds/Roles/Decision%20Maker",children:"Link: Decision Maker (Full Role Description)."})}),"\n",(0,t.jsx)(s.h3,{id:"di-analyst",children:"DI Analyst"}),"\n",(0,t.jsx)(s.p,{children:"I collaborate with stakeholders to produce stakeholder-facing artifacts early in the DI process. The primary purpose of these artifacts is to enable Decision Model Builders to build Causal Decision Models."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/roles-user-stories-ds/Roles/DI%20Analyst",children:"Link: DI Analyst (Full Role Description)."})}),"\n",(0,t.jsx)(s.h3,{id:"decision-model-builder",children:"Decision Model Builder"}),"\n",(0,t.jsx)(s.p,{children:"I author Causal Decision Models within OpenDI-compliant software systems. I may use Causal Decision Diagrams as a starting point."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/roles-user-stories-ds/Roles/Decision%20Model%20Builder",children:"Link: Decision Model Builder (Full Role Description)."})}),"\n",(0,t.jsx)(s.h3,{id:"decision-asset-manager",children:"Decision Asset Manager"}),"\n",(0,t.jsx)(s.p,{children:"I curate a library of decision assets for use by other roles. My work involves identifying reusable assets from parts of the DI workflow, or from elsewhere."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/roles-user-stories-ds/Roles/Decision%20Asset%20Manager",children:"Link: Decision Asset Manager (Full Role Description)."})}),"\n",(0,t.jsx)(s.h3,{id:"opendi-system-administrator",children:"OpenDI System Administrator"}),"\n",(0,t.jsx)(s.p,{children:"I set up and configure OpenDI-compliant software and/or services. I support other roles by maintaining a private network or a public or hybrid cloud architecture."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/roles-user-stories-ds/Roles/OpenDI%20System%20Administrator",children:"Link: OpenDI System Administrator (Full Role Description)."})}),"\n",(0,t.jsx)(s.h3,{id:"decision-simulation-builder",children:"Decision Simulation Builder"}),"\n",(0,t.jsx)(s.p,{children:"I prepare Causal Decision Models for simulation. To do this, I use draft Causal Decision Models and associated decision assets created by other roles."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/roles-user-stories-ds/Roles/Decision%20Simulation%20Builder",children:"Link: Decision Simulation Builder (Full Role Description)."})}),"\n",(0,t.jsx)(s.h3,{id:"decision-simulation-manager",children:"Decision Simulation Manager"}),"\n",(0,t.jsx)(s.p,{children:"Once simulations have been created by the Decision Simulation Builder, I perform the tasks to execute them using some computational resources. I manage simulation parameters and hyperparameters, schedule simulation execution, and curate results."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/roles-user-stories-ds/Roles/Decision%20Simulation%20Manager",children:"Link: Decision Simulation Manager (Full Role Description)."})}),"\n",(0,t.jsx)(s.h3,{id:"decision-monitor-builder",children:"Decision Monitor Builder"}),"\n",(0,t.jsx)(s.p,{children:"I rig Causal Decision Models so that they can be monitored, using evidence of outcomes, externals, and other decision element values. Rigged models are evaluated for whether the likelihood of achieving desirable outcomes has substantively changed."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/roles-user-stories-ds/Roles/Decision%20Monitor%20Builder",children:"Link: Monitor Builder (Full Role Description)."})}),"\n",(0,t.jsx)(s.h3,{id:"decision-monitor",children:"Decision Monitor"}),"\n",(0,t.jsxs)(s.p,{children:["I track a Causal Decision Model that has been used by a Decision Maker as it is updated with new evidence of outcomes, externals, and other decision element values ",(0,t.jsx)(s.em,{children:"after"})," an Action is taken. My primary interest is identifying whether the likelihood of achieving the Decision Maker's desired outcomes has substantively changed, and therefore to possibly trigger a re-examination of the decision."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/roles-user-stories-ds/Roles/Decision%20Monitor",children:"Link: Decision Monitor (Full Role Description)."})}),"\n",(0,t.jsx)(s.h3,{id:"decision-quality-assurance-manager",children:"Decision Quality Assurance Manager"}),"\n",(0,t.jsx)(s.p,{children:"I provide oversight to a project that includes DI, to ensure that models and simulations are authored, run, and monitored in such a way that they are fit for purpose."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/roles-user-stories-ds/Roles/Decision%20Quality%20Assurance%20Manager",children:"Link: Quality Assurance Manager (Full Role Description)."})}),"\n",(0,t.jsx)(s.h2,{id:"about-this-document",children:"About this document"}),"\n",(0,t.jsx)(s.h3,{id:"status-of-this-document",children:"Status of this document"}),"\n",(0,t.jsx)(s.p,{children:"At this point in time, this document is the first in an expected series of OpenDI standards publications.  It has been drafted by the OpenDI founders (DLR and LP so far) and others (IK) in preparation for public comment."}),"\n",(0,t.jsxs)(s.p,{children:["Generally speaking, we feel that the list of user roles is quite complete, and we are in the process of refining the user stories associated with each role. This document does not, however, at the current time, list the specific chronological steps in each user story.  We're not sure if it ever will; this is an open question at this time. ",(0,t.jsx)(s.a,{href:"https://opendi.org/How%20To%20Contribute/",children:"Feedback is welcome"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"opendi-compliance",children:"OpenDI compliance"}),"\n",(0,t.jsx)(s.p,{children:'At the time of this writing, there is no formal assessment procedure nor criteria for what it means for software to be "OpenDI compliant".  We expect that this will remain the case for the foreseeable future.'}),"\n",(0,t.jsx)(s.h3,{id:"known-issues",children:"Known Issues"}),"\n",(0,t.jsxs)(s.p,{children:["This repository's ",(0,t.jsx)(s.a,{href:"https://github.com/opendi-org/roles-user-stories/issues",children:"issues"})," page describes known issues with this document."]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>a});var t=i(6540);const n={},r=t.createContext(n);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);