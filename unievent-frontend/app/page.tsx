import React from 'react'; 
import Navigation from '../components/layout/navigation';
import { Sparkles,Globe,ArrowRight,PlusSquare ,TrendingUp,Zap,MapPin,Users2} from 'lucide-react';


export default function Home() {
  return (
    <>
      <Navigation />
      <div className="flex flex-col  items-center min-h-screen min-w-screen text-violet-500 p-3 bg-black bg-blur-lg ">
        {/* Pill-shaped div */}
        <div className="flex items-center  h-8 px-6 bg-black border border-violet-700 rounded-full text-sm">
          <Sparkles size={20} strokeWidth={2} className="mr-2" />
          <p>University-Wide Events Portal</p>
        </div>
        {/* Heading below the pill */}
        <h1 className="mt-6 text-2xl font-extrabold text-white text-center font-bold sm:text-6xl  ">
        Discover, Join & <p className='text-blue-600'>Create Events</p> Across Campus
        </h1>
        {/* paragraph below the heading */}
        <div className="flex flex-col items-center text-white mt-10 w-full text-center text-grey-100">
          
          <p className="font-light text-[10px] md:text-[15px] lg:text-[19px]">
         
            The ultimate hub for university events. Connect with your <br />
            community,explore workshops, find parties, and organize your <br /> own experiences with ease.
          </p>
          
        </div>
        {/* cards */}

        
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-18 ">
    <div 
      className=" rounded-md p-7
         shadow-lg
        hover:shadow-md transition-shadow bg-white/5 backdrop-blur-lg border border-white/5 rounded-md    w-80 sm:w-105 mx-auto overflow-hidden relative overflow-wrap space-y-2">
           <div className="w-10 h-10 bg-violet-800/31 flex items-center justify-center rounded-md opticity-10">
      <Globe size={23} className='text-violet-600' strokeWidth={1.8} />
    </div>
      <h3 className="font-semibold text-white font-bold flex flex-row  justify-center text-xl">
      Explore Events
      </h3>
      <p className="text-gray-500 text-sm mt-1 font-light text-sm">
      Browse through hundreds of upcoming campus activities, workshops, and social gatherings happening this week.
      </p>
      <div className="w-full items-center mt-6">
  <button className="cursor-pointer align-center bg-violet-600 text-white w-full px-9 py-2 rounded-sm fonst-light text-sm bg-gradient-to-r from-indigo-500 to-purple-400 flex items-center justify-center gap-2">
    <span>Browse Calendar</span>
    <ArrowRight size={16} />
  </button>
</div>
    </div>
    <div 
      className=" rounded-md p-7
         shadow-lg
        hover:shadow-md transition-shadow bg-white/5 backdrop-blur-lg border border-white/5 rounded-md   w-80 sm:w-105 mx-auto overflow-hidden relative overflow-wrap space-y-2 opticity-15">
           <div className="w-10 h-10   flex items-center justify-center rounded-md opticity-10">
      <PlusSquare size={23} className='text-white' strokeWidth={1.8} />
    </div>
      <h3 className="font-semibold text-white font-bold flex flex-row  justify-center text-xl">
      Create Event
      </h3>
      <p className="text-gray-500 text-sm mt-1 font-light text-sm">
      Empower your student organization or club. Reach thousands of students by listing your own events today.
      </p>
      <div className="w-full items-center mt-6">
  <button className=" cursor-pointer align-center bg-violet-600 text-white w-full px-9 py-2 rounded-sm fonst-light text-sm bg-gradient-to-r from-blue-500 to-blue-300 flex items-center justify-center gap-2 hover:border-blue-800 hover:shadow-600">
    <span>Get Started</span>
    <ArrowRight size={16} />
  </button>
</div>
    </div>

       </div>
       {/* the heading of features */}
       <div className="flex flex-col items-center mt-25">
         <h1 className='font-bold text-white text-lg sm:text-3xl'>Why to Choose UniEvent</h1>
         <div className="h-1 w-30 bg-gradient-to-r from-violet-400 to-black rounded mt-6"></div>
       </div>
         {/* feature-cards */}
         <div className="mt-20 grid grid-cols-1 sm:grid-cols-4 gap-8 ">
         <div 
      className=" rounded-md p-7
         shadow-lg
        hover:shadow-md transition-shadow bg-white/5 backdrop-blur-lg border border-white/5 rounded-md    w-50 sm:w-70 mx-auto overflow-hidden relative overflow-wrap space-y-2">
           <div className="w-10 h-10 bg-blue-900/31 flex items-center justify-center rounded-full opticity-10 space-y-8">
      <TrendingUp size={23} className='text-violet-600' strokeWidth={1.8} />
    </div>
      <h3 className="font-semibold text-white font-bold flex flex-row  justify-start text-xl py-3">
      Smart Discovery
      </h3>
      <p className="text-gray-500 text-sm mt-1 font-light text-sm">
      Personalized event recommendations based on your interests, major, and club memberships.
      </p>
    </div>
    <div 
      className=" rounded-md p-7
         shadow-lg
        hover:shadow-md transition-shadow bg-white/5 backdrop-blur-lg border border-white/5 rounded-md    w-50 sm:w-70 mx-auto overflow-hidden relative overflow-wrap space-y-2">
           <div className="w-10 h-10 bg-blue-900/31 flex items-center justify-center rounded-full opticity-10 space-y-8">
      <Zap size={23} className='text-violet-600' strokeWidth={1.8} />
    </div>
      <h3 className="font-semibold text-white font-bold flex flex-row  justify-start text-xl py-3">
      Instant Registration
      </h3>
      <p className="text-gray-500 text-sm mt-1 font-light text-sm">
      One-click RSVP and digital ticket management. Never miss out on limited-entry events again.
      </p>
    </div>
    <div 
      className=" rounded-md p-7
         shadow-lg
        hover:shadow-md transition-shadow bg-white/5 backdrop-blur-lg border border-white/5 rounded-md    w-50 sm:w-70 mx-auto overflow-hidden relative overflow-wrap space-y-2">
           <div className="w-10 h-10 bg-blue-900/31 flex items-center justify-center rounded-full opticity-10 space-y-8">
      <MapPin size={23} className='text-violet-600' strokeWidth={1.8} />
    </div>
      <h3 className="font-semibold text-white font-bold flex flex-row  justify-start text-xl py-3">
      Live Campus Map
      </h3>
      <p className="text-gray-500 text-sm mt-1 font-light text-sm">
      Real-time visualization of where the action is happening across campus facilities and dorms.
      </p>
    </div>
    <div 
      className=" rounded-md p-7
         shadow-lg
        hover:shadow-md transition-shadow bg-white/5 backdrop-blur-lg border border-white/5 rounded-md    w-50 sm:w-70 mx-auto overflow-hidden relative overflow-wrap space-y-2">
           <div className="w-10 h-10 bg-blue-900/31 flex items-center justify-center rounded-full opticity-10 space-y-8">
      <Users2 size={23} className='text-violet-600' strokeWidth={1.8} />
    </div>
      <h3 className="font-semibold text-white font-bold flex flex-row  justify-start text-xl py-3">
      Verified Organizers
      </h3>
      <p className="text-gray-500 text-sm mt-1 font-light text-sm">
      All events are hosted by registered university clubs and departments for a safe experience.
      </p>
    </div>
         </div>

         

       </div>
       

       
      
    </>
  );
}
