import { Component, Fragment } from "react";
import FooterThree from "../component/layout/footer-3";
import HeaderFour from "../component/layout/header-4";
import HeaderThree from "../component/layout/header-3";
import AppSection from "../component/section/appsection";
import BannerFour from "../component/section/banner-4";
import BannerThree from "../component/section/banner-3";
import AchievementThree from "../component/section/achievement-3";
import Category from "../component/section/category";
import ClientsTwo from "../component/section/clients-2";
import Course from "../component/section/course";
import InstructorTwo from "../component/section/instructor-2";
import Register from "../component/section/register";
import Sponsor from "../component/section/sponsor";
import Workshop from "../component/section/workshop";
import WorkshopTwo from "../component/section/workshop-2";
import BlogTwo from "../component/section/blog-2";
import Clients from "../component/section/clients";


const HomeFour = () => {
    return (
        <Fragment>
            <HeaderThree />
            <BannerThree />
            <Category />
            <Course />
            <Workshop />
            <BlogTwo />
            <Clients />
            <FooterThree />
        </Fragment>
    );
}
 
export default HomeFour;