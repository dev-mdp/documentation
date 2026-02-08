// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */

module.exports = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "pendahuluan",
      label: "Pendahuluan",
    },
    {
      type: "category",
      label: "Shared",
      items: [
        {
          type: "category",
          label: "Auth Service",
          items: [
            {
              type: "category",
              label: "Software Design Document",
              items: [
                "shared/auth-service/sdd/auth-service-architecture",
                "shared/auth-service/sdd/auth-service-flow",
              ],
            },
            {
              type: "category",
              label: "Development",
              items: [
                "shared/auth-service/development/auth-service-scaffolding",
                "shared/auth-service/development/ci-cd-flow",
              ],
            },
          ],
        },
        "shared/frontend-scaffolding",
      ],
    },
    {
      type: "category",
      label: "Events Apps",
      items: [
        // {
        //   type: "category",
        //   label: "Software Requirements Specification",
        //   items: ["events-apps/srs/README"],
        // },
        {
          type: "category",
          label: "Software Design Document",
          items: ["events-apps/sdd/user-register-otp"],
        },
        // {
        //   type: "category",
        //   label: "Internal Technical Documentation",
        //   items: ["events-apps/itd/README"],
        // },
        // {
        //   type: "category",
        //   label: "API",
        //   items: ["events-apps/api/README"],
        // },
      ],
    },
  ],
};
