// import book from '../assets/books.jpg'
// const card = () => {
//     return(
//         <div class="w-1/4 m-5 p-5 bg-slate-950 rounded-xl flex-col items-center">
//             <div><img src={book}/></div>
//             <p class="text-white">Sun Sep 01 2024</p>
//             <h2 class="text-xl font-bold text-sky-500">How to Build a positive relationship and have a good life....</h2>
//             <p class="font-thin text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis vero culpa veniam earum atque quod repellat doloribus asperiores molestias labore quo, neque consectetur dolorum dignissimos, repudiandae inventore ipsam reprehenderit. Aliquid.</p>
//         </div>
//     )
// }
// export default card
import { useState } from 'react';
import book from '../assets/books.jpg';
import { FaEye, FaHeart } from 'react-icons/fa';  // Importing icons

const Card = ({name,role,title,category,intro,image,content,url}) => {
    const [showMore, setShowMore] = useState(false); // State for "Read More" functionality
  return (
    <div className="w-1/4 m-5 p-5 bg-slate-950 rounded-xl flex flex-col items-center">
      {/* Image Section */}
      <div>
        <img src={(url)?<img src={url}></img>:image || book} alt="Book Cover" className="rounded-md" />
      </div>

      {/* Date Section */}
      <p className="text-white mt-2">{new Date().getDate || "Sun Sep 01 2024"}</p>

      {/* Title Section */}
      <h2 className="text-xl font-bold text-sky-500 mt-2" >
        {title || "How to Build a Positive Relationship and Have a Good Life..."}
      </h2>

      {/* Content Section */}
      <p className="font-thin text-white mt-2 ${showMore ? '' : 'line-clamp-3'}" >
        {content || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis vero culpa veniam earum atque quod repellat doloribus asperiores molestias labore quo, neque consectetur dolorum dignissimos, repudiandae inventore ipsam reprehenderit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque autem amet expedita aliquam minima dolores, animi inventore recusandae porro quidem, non culpa quia sunt mollitia, consectetur magnam tempora repellat odio nulla. Voluptate, est sequi."}
      </p>

      {/* Read More Button */}
      <button
        className="text-sky-500 hover:underline mt-2"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Read Less" : "Read More"}
      </button>

      {/* Author and Interaction Section */}
      <div className="flex items-center justify-between w-full mt-4 border-t border-gray-700 pt-4">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"  // Placeholder image for author
            alt="Author"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <p className="text-white font-bold">{name || "Ananya Tiwari"}</p>
            <p className="text-gray-400 text-sm">{role|| "Content Creator"}</p>
          </div>
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-white">
            <FaEye className="mr-1" /> 0
          </div>
          <div className="flex items-center text-white">
            <FaHeart className="mr-1" /> 0
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
