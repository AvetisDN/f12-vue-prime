const items = [
  {
    label: "Home",
    icon: "pi pi-home",
    to: "/",
  },
  {
    label: "Categories",
    icon: "pi pi-align-left",
    items: [
      [
        {
          label: "-- Blog Categories --",
          items: [
            {
              label: "News",
              to: "/blog/news",
            },
            {
              label: "Story",
              to: "/blog/story",
            },
            {
              label: "Food",
              to: "/blog/food",
            },
            {
              label: "Nature",
              to: "/blog/nature",
            },
            {
              label: "Technology",
              to: "/blog/tech",
            },
          ],
        },
      ],
    ],
  },
];

export default items;
