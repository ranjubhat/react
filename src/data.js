export const TreeData = {
  name: "root",
  isFolder: true,
  children: [
    {
      name: "Public",
      isFolder: true,
      children: [
        {
          name: "index.html",
          isFolder: false,
          children: [],
        },
      ],
    },
    {
      name: "Src",
      isFolder: true,
      children: [
        {
          name: "index.js",
          isFolder: false,
          children: [
            {
              name: "App.js",
              isFolder: false,
              children: [],
            },
            {
              name: "index.js",
              isFolder: false,
              children: [],
            },
            {
              name: "styles.css",
              isFolder: false,
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: "package.json",
      isFolder: false,
    },
  ],
};
