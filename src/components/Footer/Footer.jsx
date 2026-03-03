import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineForwardToInbox } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <aside>
          <span className="text-xl font-semibold">CS-Ticket System</span>
          <p>
            A CS-Ticket System (Customer Support Ticket System) is <br /> a
            software application used by organizations to manage <br /> customer
            complaints, queries, and service requests efficiently. <br /> When a
            customer submits a problem or request, the system <br /> generates a
            unique ticket ID. This ticket helps track the issue <br /> from
            submission to resolution.
          </p>
        </aside>
        <nav>
          <h6 className="text-xl font-semibold">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav>
          <h6 className="text-xl font-semibold">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="text-xl font-semibold">Information</h6>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms and Conditions</a>
          <a className="link link-hover">Join us</a>
        </nav>
        <nav>
          <h6 className="text-xl font-semibold">Social Links</h6>
          <a className="link link-hover flex items-center gap-1">
            <FaXTwitter></FaXTwitter> @CS-Ticket System
          </a>
          <a className="link link-hover flex items-center gap-1">
            <FaLinkedin></FaLinkedin> @CS-Ticket System
          </a>
          <a className="link link-hover flex items-center gap-1">
            <FaFacebook></FaFacebook> @CS-Ticket System
          </a>
          <a className="link link-hover flex items-center gap-1">
            <MdOutlineForwardToInbox></MdOutlineForwardToInbox> @Support@cst.com
          </a>
        </nav>
      </footer>
      <footer className="footer border-t-2 border-gray-500 sm:footer-horizontal footer-center bg-neutral text-neutral-content p-4">
        <aside>
          <p>
           © {new Date().getFullYear()} CS-Ticket System. All right reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
