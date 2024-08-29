import React from "react";
import StickyFooter from "./StickyFooter";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";

function About() {
  return (
    <div className="w-full h-full">
      {/* <div className="flex justify-between px-5 h-[68.50px] w-full bg-[#1976d2] text-white text-4xl font-bold  pt-3">
        <div className="flex py-2">
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            // href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: "0rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            FundDonate.
          </Typography>
        </div>
        <div>About</div>
      </div> */}
      <h1 className="text-4xl font-bold text-center mt-5">About</h1>
      <div className="flex w-full justify-center items-center">
        <div className="w-2/3 h-full p-5">
          <div className="pt-5">
            <h2 className=" text-2xl font-medium">Our Mission</h2>
            <p className=" text-lg font-medium">
              At FundDonate, our mission is simple yet profound: to bring hope
              and support to those who need it most. We are dedicated to
              improving the lives of poor people and children through your
              generous donations. Every contribution helps us provide essential
              resources, support, and opportunities to those in need.
            </p>
          </div>
          <div className="pt-5">
            <h2 className=" text-2xl font-medium">Who We Are</h2>
            <p className=" text-lg font-medium">
              FundDonate was founded with a vision to create a positive impact
              in the world. Our team is driven by a shared commitment to making
              a difference. We work tirelessly to identify the most pressing
              needs and direct resources where they can have the greatest
              effect.
            </p>
          </div>
          <div className="pt-5">
            <h2 className=" text-2xl font-medium">What We Do</h2>
            <p className=" text-lg font-medium">
              We focus on various initiatives aimed at improving the lives of
              underprivileged children and families. Our programs include:
            </p>
            <ul className="list-disc text-lg font-medium pl-5">
              <li>
                Basic Needs Support: Providing food, clothing, and shelter to
                those in need.
              </li>
              <li>
                Educational Assistance: Offering educational resources and
                support to children to help them achieve their full potential.
              </li>
              <li>
                Health and Wellness: Ensuring access to essential health care
                and wellness programs.
              </li>
              <li>
                Community Empowerment: Supporting community-driven projects and
                initiatives that foster long-term self-sufficiency.
              </li>
            </ul>
          </div>
          <div className="pt-5">
            <h2 className=" text-2xl font-medium">Our Impact</h2>
            <p className=" text-lg font-medium">
              Since our inception, FundDonate has been able to make a tangible
              difference in the lives of countless individuals. Through our
              dedicated efforts and the support of our generous donors, we have:
            </p>
            <ul className="list-disc text-lg font-medium pl-5">
              <li>Provided meals to families in need.</li>
              <li>Supported children with educational resources.</li>
              <li>Funded health care treatments and services.</li>
            </ul>
          </div>
          <div className="pt-5">
            <h2 className=" text-2xl font-medium">Get Involved</h2>
            <p className=" text-lg font-medium">
              We believe that every person has the power to make a difference.
              Whether you choose to donate, volunteer, or spread the word, your
              support is crucial to our success. Join us in our mission to
              create a better world for those who need it most.
            </p>
          </div>
          <div className="pt-5">
            <h2 className=" text-2xl font-medium">Contact Us</h2>
            <p className=" text-lg font-medium">
              If you have any questions or would like to learn more about how
              you can get involved, please don’t hesitate to reach out. We’re
              here to answer your questions and provide more information about
              our work
            </p>
          </div>
          <div className="pt-5">
            <h2 className=" text-2xl font-medium">
              Together, We Can Make a Difference.
            </h2>
            <p className=" text-lg font-medium">
              Thank you for your support and commitment to our cause.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
