import TypeAnimation from "../components/TypeAnimation";

import { BsLinkedin, BsInstagram, BsFacebook, BsGithub } from "react-icons/bs";

const Home = () => {
  return (
    <div className='body '>
      <div className='flex justify-center'>
        <div className='w-8/12 h-screen  justify-center flex  '>
          <div className=" w-8/12 flex flex-col pt-56   ">
            <div className='greeting text-2xl'>
              <TypeAnimation textToType={"Hi, I am"} />
            </div>
            <div className='type text-4xl'>
              <TypeAnimation textToType={"Kyle Virmar C. Millendez"} />
            </div>

            <div className="line mt-2"></div>
            <div className='intro h-16 pt-4 w-8/12 text-justify'>
              <TypeAnimation textToType={"A full Web Developer that has an ability to create a responsive, visual appealing and functional website"} />
            </div>
            <div className="flex gap-3 justify-center pt-4 ">
              <div><button className="cv_btn py-1 px-5 rounded-full">Download CV</button></div>
              <div><button className="cv_btn py-1 px-5 rounded-full">Download CV</button></div>
              
            </div>
          </div>
        </div>
        <div className='w-2/4 h-screen bg-pink-500 flex basis-2/5'>2</div>
      </div>
    </div>
  );
};

export default Home;
