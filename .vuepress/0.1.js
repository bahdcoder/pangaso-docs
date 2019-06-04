module.exports = [
  {
    title: "Getting Started",
    collapsable: false,
    children: ["introduction", "installation"]
  },
  {
    title: "Resources",
    collapsable: false,
    children: prefix("resources", [
      "",
      "fields",
      "validation"
    ])
  }
];

function prefix(prefix, children) {
  return children.map(child => `${prefix}/${child}`);
}
