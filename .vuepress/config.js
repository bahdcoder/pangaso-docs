module.exports = {
  title: 'Pangaso',
  description: "The missing Mongo DB admin panel",

  head: [
    [
      "link",
      {
        href:
          "https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i",
        rel: "stylesheet",
        type: "text/css"
      }
    ],
    [
      "meta",
      {
        name: "docsearch:version",
        content: "0.1.0"
      }
    ]
  ],

  themeConfig: {
    displayAllHeaders: true,
    sidebarDepth: 2,

    nav: [
      { text: "Home", link: "" },
      {
        text: "Version",
        link: "/",
        items: [{ text: "0.1", link: "/0.1/" }]
      }
    ],

    sidebar: {
      "/0.1/": require("./0.1"),
    }
  }
};
