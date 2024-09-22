import {
  ContactsProps,
  countUpItemsProps,
  NavLink,
  ProjectProps,
  ServiceProps,
} from "@/Types";
import { BsVectorPen, BsCode } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";

const navLinks: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

const services: ServiceProps[] = [
  { id: 1, title: "Product Management", icon: <BsVectorPen />,finished:8  },
  { id: 2, title: "Web Developmemt", icon: <BsCode />, finished: 209 },
  { id: 3, title: "Web Research", icon: <HiMagnifyingGlass />, finished: 369 },
  { id: 4, title: "Data Structures & Algorithm", icon: <FiBarChart />, finished: 313 },
];
const countUpItems: countUpItemsProps[] = [
  {
    id: 1,
    number: 1,
    text: "Years of Experience",
  },
  {
    id: 2,
    number: 10,
    text: "Satisfied Customers",
  },
  {
    id: 3,
    number: 40,
    text: "Design Items",
  },
  {
    id: 4,
    number: 10,
    text: "Clients Served",
  },
];

const projects: ProjectProps[] = [
  {
    id: 1,
    img: "/project1.png",
    name: "Al-Nashwan",
    tools: ["React", "Typescript", "Tailwind CSS"],
  },
  {
    id: 2,
    img: "/project2.jpg",
    name: "React E-commerce Website",
    tools: ["React", "Tailwind CSS"],
  },
  {
    id: 3,
    img: "/project3.jpg",
    name: "Shopping Cart",
    tools: ["React", "Redux-Toolkit", "Tailwind CSS"],
  },
  {
    id: 4,
    img: "/project4.jpg",
    name: "Autocomplete SearchBar",
    tools: ["React", "Typescript", "Tailwind CSS"],
  },
];

const skills = [
  { name: "ReactJS", level: 90 },
  { name: "NextJS", level: 70 },
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 75 },
  { name: "MongoDB", level: 75 },
  { name: "NodeJS", level: 65 },
  { name: "Docker", level: 80 },
  { name: "Express JS", level: 65 },
];

const contacts: ContactsProps[] = [
  { id: 1, title: "Address", text: "Agra, UttarPradesh, INDIA" },
  { id: 2, title: "Phone", text: "7454028464" },
  { id: 3, title: "Email", text: "shubhmittalagra@gmail.com" },
];

export {navLinks, projects, countUpItems, services, skills, contacts };
