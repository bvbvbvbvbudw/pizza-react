// products.js
import waffleDesktop from "../assets/images/image-waffle-desktop.jpg";
import waffleTablet from "../assets/images/image-waffle-tablet.jpg";
import waffleMobile from "../assets/images/image-waffle-mobile.jpg";
import waffleThumbnail from "../assets/images/image-waffle-thumbnail.jpg";

import cremeBruleeDesktop from "../assets/images/image-creme-brulee-desktop.jpg";
import cremeBruleeTablet from "../assets/images/image-creme-brulee-tablet.jpg";
import cremeBruleeMobile from "../assets/images/image-creme-brulee-mobile.jpg";
import cremeBruleeThumbnail from "../assets/images/image-creme-brulee-thumbnail.jpg";

import macaronDesktop from "../assets/images/image-macaron-desktop.jpg";
import macaronTablet from "../assets/images/image-macaron-tablet.jpg";
import macaronMobile from "../assets/images/image-macaron-mobile.jpg";
import macaronThumbnail from "../assets/images/image-macaron-thumbnail.jpg";

import tiramisuDesktop from "../assets/images/image-tiramisu-desktop.jpg";
import tiramisuTablet from "../assets/images/image-tiramisu-tablet.jpg";
import tiramisuMobile from "../assets/images/image-tiramisu-mobile.jpg";
import tiramisuThumbnail from "../assets/images/image-tiramisu-thumbnail.jpg";

import baklavaDesktop from "../assets/images/image-baklava-desktop.jpg";
import baklavaTablet from "../assets/images/image-baklava-tablet.jpg";
import baklavaMobile from "../assets/images/image-baklava-mobile.jpg";
import baklavaThumbnail from "../assets/images/image-baklava-thumbnail.jpg";

import meringueDesktop from "../assets/images/image-meringue-desktop.jpg";
import meringueTablet from "../assets/images/image-meringue-tablet.jpg";
import meringueMobile from "../assets/images/image-meringue-mobile.jpg";
import meringueThumbnail from "../assets/images/image-meringue-thumbnail.jpg";

export const products = [
    {
        img: {
            desktop: waffleDesktop,
            tablet: waffleTablet,
            mobile: waffleMobile,
            thumbnail: waffleThumbnail,
        },
        name: "Waffle",
        title: "Waffle with Berries",
        price: (6.50).toFixed(2)
    },
    {
        img: {
            desktop: cremeBruleeDesktop,
            tablet: cremeBruleeTablet,
            mobile: cremeBruleeMobile,
            thumbnail: cremeBruleeThumbnail,
        },
        name: "Creme Brulee",
        title: "Vanilla Bean Creme Brulee",
        price: (7.00).toFixed(2),
    },
    {
        img: {
            desktop: macaronDesktop,
            tablet: macaronTablet,
            mobile: macaronMobile,
            thumbnail: macaronThumbnail,
        },
        name: "Macaron",
        title: "Macaron Mix Of Five",
        price: (8.00).toFixed(2),
    },
    {
        img: {
            desktop: tiramisuDesktop,
            tablet: tiramisuTablet,
            mobile: tiramisuMobile,
            thumbnail: tiramisuThumbnail,
        },
        name: "Tiramisu",
        title: "Classic Tiramisu",
        price: (5.50).toFixed(2),
    },
    {
        img: {
            desktop: baklavaDesktop,
            tablet: baklavaTablet,
            mobile: baklavaMobile,
            thumbnail: baklavaThumbnail,
        },
        name: "Baklava",
        title: "Pistachio Baklava",
        price: (4.00).toFixed(2),
    },
    {
        img: {
            desktop: meringueDesktop,
            tablet: meringueTablet,
            mobile: meringueMobile,
            thumbnail: meringueThumbnail,
        },
        name: "Pie",
        title: "Lemon Meringue Pie",
        price: (5.00).toFixed(2),
    },
];
