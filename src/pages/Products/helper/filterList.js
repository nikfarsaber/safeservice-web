export const filterList = [
  {
    id: 1,
    name: "brand",
    text: "برند",
    type: "selection",
    options: [
      { value: "all", text: "" },
      { value: "samsung", text: "سامسونگ" },
      { value: "apple", text: "اپل" },
      { value: "xiaomi", text: "شیائومی" },
    ],
  },
  { id: 2, type: "hr" },
  {
    id: 3,
    name: "color",
    text: "رنگ",
    type: "selection",
    options: [
      { value: "all", text: "" },
      { value: "black", text: "مشکی" },
      { value: "white", text: "سفید" },
      { value: "green", text: "سبز" },
    ],
  },
  { id: 4, type: "hr" },
  {
    id: 5,
    name: "memory",
    text: "ظرفیت",
    type: "selection",
    options: [
      { value: "all", text: "" },
      { value: "64GB", text: "۶۴ گیگابایت" },
      { value: "128GB", text: "۱۲۸ کیکابایت" },
      { value: "256GB", text: "۲۵۶ گیگابایت" },
    ],
  },
  {
    id: 6,
    name: "isExist",
    type: "toggle",
    text: "فقط کالاهای موجود",
  },
];
