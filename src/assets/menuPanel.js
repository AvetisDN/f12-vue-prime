const items = [
  {
    key: "0",
    label: "Home",
    icon: "pi pi-home",
    to: "/",
  },
  {
    key: "1",
    label: "Categories",
    icon: "pi pi-align-left",
    items: [
      {
        key: "1-0",
        label: "News",
        to: "/blog/news",
      },
      {
        key: "1-1",
        label: "Story",
        to: "/blog/story",
      },
      {
        key: "1-2",
        label: "Food",
        to: "/blog/food",
      },
      {
        key: "1-3",
        label: "Nature",
        to: "/blog/nature",
      },
      {
        key: "1-4",
        label: "Technology",
        to: "/blog/tech",
      },
    ],
  },
];

export default items;
