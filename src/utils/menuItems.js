import { dashboard, expenses, transactions, trend } from "./icons";

export const menuItems = [
  {
    id: 1,
    title: "Консоль",
    icon: dashboard,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "Усі операції",
    icon: transactions,
    link: "/dashboard",
  },
  {
    id: 3,
    title: "Прибуток",
    icon: trend,
    link: "/dashboard",
  },
  {
    id: 4,
    title: "Видаток",
    icon: expenses,
    link: "/dashboard",
  },
];
