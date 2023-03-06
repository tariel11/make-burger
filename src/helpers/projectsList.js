import project01 from "./../img/projects/01.jpeg"
import project01Big from "./../img/projects/01Big.jpeg";

import project02 from "./../img/projects/02.jpeg"
import project02Big from "./../img/projects/02Big.jpeg"

import project03 from "./../img/projects/03.jpeg"
import project03Big from "./../img/projects/03Big.jpeg"

import project04 from "./../img/projects/04.jpeg"
import project04Big from "./../img/projects/04Big.jpeg"

import reactTool from "../img/tolls/react.png"
import javaTool from "../img/tolls/java.png"
import htmlTool from "../img/tolls/html.png"
import cssTool from "../img/tolls/css.png"
import figmaTool from "../img/tolls/figma.png"

export const projects = [
    {
        title: "Ykl",
        img: project01,
        imgBig: project01Big,
        skills: 'React, Node.js, MongoDB',
        price: 45000,
        time: 27,
        traffic: 10,
        font: "Limerick-Serial & Inter",
        colors: ["#f5f5f5","#000000"],
        tools: [reactTool, javaTool, htmlTool, cssTool, figmaTool]
    },
    {
        title: "Ogogo movie",
        img: project02,
        imgBig: project02Big,
        skills: 'React, Node.js, MongoDB',
        price: 32000,
        time: 20,
        traffic: 55,
        font: "Limerick-Serial & Inter",
        colors: ["#342fd1","#000000"],
        tools: [reactTool, javaTool, htmlTool, cssTool, figmaTool]
    },
    {
        title: "Elstone",
        img: project03,
        imgBig: project03Big,
        skills: 'React, Node.js, MongoDB',
        price: 10000,
        time: 7,
        traffic: 30,
        font: "Limerick-Serial & Inter",
        colors: ["#222222","#ffffff"],
        tools: [reactTool, htmlTool, cssTool, figmaTool]
    },
    {
        title: "Landing page to Team",
        img: project04,
        imgBig: project04Big,
        skills: 'React, Node.js, MongoDB',
        price: 17000,
        time: 14,
        traffic: 20,
        font: "Limerick-Serial & Inter",
        colors: ["#11c8fe","#f6f7fa"],
        tools: [ htmlTool, cssTool, figmaTool]
    }
]