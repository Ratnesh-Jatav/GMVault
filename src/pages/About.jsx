import React from "react";
import SecurityImg from "../assets/images/security.jpg";
import SimplicityImg from "../assets/images/simplicity.jpg";
import AccessibilityImg from "../assets/images/accessibility.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-,gray-50 px-6 py-16 ">
      {/*  Intro */}
      <div className="max-w-3xl mx-auto text-center mb-16 ">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">About GMVault</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          GMVault (Guard My Vault) is a modern password manager built to make your
          digital life secure, simple, and accessible anytime, anywhere.
        </p>
      </div>

      {/*  Section 1 */}
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto mb-20">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🔒 Security First</h2>
          <p className="text-gray-600 leading-relaxed">
            GMVault uses advanced encryption techniques to protect your sensitive
            credentials. Your data remains private and accessible only to you.
          </p>
        </div>
        <div>
          <img
            src={SecurityImg}
            alt="No Internet Connection "
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/*  Section 2 */}
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto mb-20">
        <div className="order-2 md:order-1">
          <img
            src={SimplicityImg}
            alt="No Internet Connection "
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">⚡ Simplicity</h2>
          <p className="text-gray-600 leading-relaxed">
            A clean, intuitive interface makes it easy for anyone to manage
            passwords without hassle. No complex steps, just simple and secure access.
          </p>
        </div>
      </div>

      {/*  Section 3 */}
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🌍 Accessibility</h2>
          <p className="text-gray-600 leading-relaxed">
            Access your credentials from any device, anytime. GMVault ensures you
            are never locked out of your accounts again.
          </p>
        </div>
        <div>
          <img
            src={AccessibilityImg}
            alt="No Internet Connection "
            className="rounded-lg shadow-md"
          />

        </div>

        {/*The gitHub Button  
        <div className="flex gap-2 items-center">
          <button className='text-white bg-green-500 my-5 rounded-full flex justify-between items-center ring-white ring-1'>
            <img className='invert w-10 p-1' src="/icons/github.svg" alt="github logo" />
            <a href="https://github.com/Ratnesh-Jatav" target='_blank' rel="noopener noreferrer">
              <span className='font-bold px-2'>GitHub</span>
            </a>
          </button>
        </div>
        */}

        <div className="flex justify-center text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">

          <svg class="w-4 h-4 me-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
          </svg>
            <a href="https://github.com/Ratnesh-Jatav" target="_blank"><button type="button" >Connect With GitHub
            </button>
            </a>
        </div>


        <div className="flex justify-center text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm  text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
          <img className='invert w-10 p-1' src="/icons/portfolio.svg" alt="github logo" />
          <a href="https://ratneshjatav.netlify.app/" target="_blank">
            <button type="button"  >Connect With  Portfolio</button></a>
        </div>


        <div class="flex justify-center text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm  text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
          <img className='invert w-10 p-1' src="/icons/twitter.svg" alt="github logo" />
          <button type="button"> <a href="https://x.com/GMYamraj" target="_blank">Sign in with Twitter</a> </button>
        </div>


        <div className="flex justify-center  text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm  text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">

          <img className='invert w-10 p-1' src="/icons/linkedin.svg" alt="github logo" />
          <a href="https://ratneshjatav.netlify.app/" target="_blank">
            <button type="button"  >Connect With  Portfolio</button></a>




        </div>
      </div>
    </div>
  );
};


export default About;
