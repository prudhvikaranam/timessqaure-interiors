export const navData = {
  header: {
    navlist: [
      { name: "Home", id: "" },
      { name: "Themes", id: "themes" },
      { name: "Recent Projects", id: "projects" },
      {
        name: "Ideas", children: [
          { name: "Kitchen", id: "kitchen" },
          { name: "Living Room", id: "livingroom" },
          { name: "Bed Room", id: "bedroom" },
          { name: "Kids Room", id: "kidsroom" },
          { name: "Wardrobes", id: "warddrobes" },
          { name: "Pooja", id: "pooja" },
          { name: "Foyer", id: "foyer" },
          { name: "Bar", id: "bar" }
        ]
      },
      { name: "How we work", id: "weWork" },
      // { name: "Interiors", id: "" }
    ]
  },


  themes: [
    { theme: ['project-1', 'project-2', 'project-3'] },
    { theme: ['project-4', 'project-5', 'project-6'] },
    { theme: ['project-6', 'project-2', 'project-1'] },
    { theme: ['project-6', 'project-2', 'project-1'] }
  ]
};
