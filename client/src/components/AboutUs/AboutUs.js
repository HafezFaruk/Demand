import React from "react";
import contactImg from "../../img/contact-banner.jpg";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import about1 from "../../img/about-img.jpg";
import about2 from "../../img/about-img-2.jpg";
import img1 from "../../img/team6.png";
import img2 from "../../img/team-5.png";
import img3 from "../../img/team-7.jpg";
import img4 from "../../img/team-8.jpg";


const AboutUs = () => {
  return (
    <div>
      <div className="relative">
        <div>
          <img src={contactImg} alt="" />
          <div className="absolute inset-0 flex justify-center  items-center  text-white">
            <div>
              <h1 className="text-4xl uppercase">About Us</h1>
              <div className="flex items-center justify-center mt-2">
                <AiOutlineHome className="text-myColor" />
                <AiOutlineRight className="mx-2" />
                <h6>About Us</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 container my-14">
        <div className="col-span-7">
          <h1 className="text-lg text-myColor uppercase font-semibold mb-3">
            OUR HISTORY
          </h1>
          <h1 className="text-3xl  uppercase font-semibold mb-3">
            CREATIVE AND NEW FASHION <br /> TRENDS COLLECTION
          </h1>
          <article>
            <p>
              Fashion is a potent visual marker of our times,” says Caroline
              Stevenson, head of
            </p>
            <p>
              cultural and ... “Trend analysis of any given era will reveal
              society's values and
            </p>
            <p>aspirations.” ... The urge to creative expression runs deep</p>
          </article>
          <div className="grid grid-cols-12 gap-3 mt-8">
            <div className="col-span-4">
              <h1 className="text-4xl text-myColor mb-3">12</h1>
              <p>Years Experience</p>
            </div>
            <div className="col-span-4">
              <h1 className="text-4xl text-myColor mb-3">
                <span>30</span>k
              </h1>
              <p>Happy Customer</p>
            </div>
            <div className="col-span-4">
              <h1 className="text-4xl text-myColor mb-3">
                <span>100</span>%
              </h1>
              <p>Clients Satisfaction</p>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <img src={about1} alt="" />
        </div>
      </div>
      <div className="container grid grid-cols-12 gap-3">
        <div className="col-span-5">
          <img src={about2} alt="" />
        </div>
        <div className="col-span-7">
          <h1 className="text-lg text-myColor uppercase font-semibold mb-3">
            OUR VISION
          </h1>
          <h1 className="text-3xl  uppercase font-semibold mb-3">
            OUR VISION IS SIMPLE - WE EXIST TO <br /> ACCELERATE OUR CUSTOMERS’
            PROGRESS
          </h1>
          <article>
            <p>
              we design and deliver our customers’ digital transformation by
              bringing together
            </p>
            <p>
              their vision with our industry knowledge and deep technological
              expertise. we
            </p>
            <p>design and deliver our customers’ digital transformation</p>
          </article>
          <div className="mt-8">
            <h1 className="flex items-center mb-3">
              <BiLike className="text-myColor mr-3" />
              <p>We build strong relationships</p>
            </h1>
            <h1 className="flex items-center mb-3">
              <BiLike className="text-myColor mr-3" />
              <p>We encourage initiative and provide opportunity</p>
            </h1>
            <h1 className="flex items-center mb-3">
              <BiLike className="text-myColor mr-3" />
              <p>We embrace change and creativity</p>
            </h1>
            <h1 className="flex items-center mb-3">
              <BiLike className="text-myColor mr-3" />
              <p>We champion an environment of honesty</p>
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-10 container">
        <h1 className="text-3xl uppercase text-center font-semibold my-8">
          MEET WITH OUR TEAM
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="rounded overflow-hidden group">
            <div className="relative">
              <img src={img1} className="w-full h-72" alt="" />
              <div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href="/#"
                    className="text-white text-lg w-9 mb-5 h-8 rounded-lg bg-facebook flex items-center justify-center transition"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="/#"
                    className="text-white text-lg w-9 mb-5 h-8 rounded-lg bg-twitter flex items-center justify-center transition"
                  >
                    <BsTwitter />
                  </a>
                  <a
                    href="/#"
                    className="text-white text-lg w-9 h-8 mb-5 rounded-lg bg-instagram flex items-center justify-center  transition"
                  >
                    <AiFillInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-3 text-center">
              <h2 className=" text-lg text-gray-800">Md Omar Faruk</h2>
              <h2 className="text-lg text-gray-800">Founder</h2>
            </div>
          </div>
          <div className="rounded overflow-hidden group">
            <div className="relative">
              <img src={img2} className="w-full h-72" alt="" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a
                  href="/#"
                  className="text-white text-lg w-9 mb-5 h-8 rounded-lg bg-facebook flex items-center justify-center transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="/#"
                  className="text-white text-lg w-9 mb-5 h-8 rounded-lg bg-twitter flex items-center justify-center transition"
                >
                  <BsTwitter />
                </a>
                <a
                  href="/#"
                  className="text-white text-lg w-9 mb-5 h-8 rounded-lg bg-instagram flex items-center justify-center  transition"
                >
                  <AiFillInstagram />
                </a>
              </div>
            </div>
            <div className="pt-3 text-center">
              <h2 className=" text-lg text-gray-800">Ashraful Islam</h2>
              <h2 className="text-lg text-gray-800">Team Leader</h2>
            </div>
          </div>
          <div className="rounded overflow-hidden group">
            <div className="relative">
              <img src={img3} className="w-full h-72" alt="" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a
                  href="/#"
                  className="text-white text-lg w-9 mb-5 h-8 rounded-lg bg-facebook flex items-center justify-center transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="/#"
                  className="text-white text-lg w-9 mb-5 h-8 rounded-lg bg-twitter flex items-center justify-center transition"
                >
                  <BsTwitter />
                </a>
                <a
                  href="/#"
                  className="text-white text-lg w-9 mb-5 h-8 rounded-lg bg-instagram flex items-center justify-center  transition"
                >
                  <AiFillInstagram />
                </a>
              </div>
            </div>
            <div className="pt-3 text-center">
              <h2 className=" text-lg text-gray-800">Kamal</h2>
              <h2 className="text-lg text-gray-800">Senior Officer</h2>
            </div>
          </div>
          <div className="rounded overflow-hidden group">
            <div className="relative">
              <img src={img4} className="w-full h-72" alt="" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a
                  href="/#"
                  className="text-white text-lg w-9 mb-5 h-8 rounded-lg bg-facebook flex items-center justify-center transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="/#"
                  className="text-white text-lg w-9 mb-5 h-8 rounded-lg bg-twitter flex items-center justify-center transition"
                >
                  <BsTwitter />
                </a>
                <a
                  href="/#"
                  className="text-white text-lg w-9 mb-5 h-8 rounded-lg bg-instagram flex items-center justify-center  transition"
                >
                  <AiFillInstagram />
                </a>
              </div>
            </div>
            <div className="pt-3 text-center">
              <h2 className=" text-lg text-gray-800">Naimul Islam</h2>
              <h2 className="text-lg text-gray-800">Marketing Officer</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
