import React from "react";

export default function Card({ location, spot, avatar, children }) {
  return (
    <div>
      <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
        <img
          className="w-full h-48 object-cover object-center"
          src={avatar}
          alt="avatar"
        />
        <div className="p-4">
          <p className="font-semibold text-gray-600 text-sm">{location}</p>
          <p className="font-semibold text-lg">{spot}</p>
          <p className="text-sm text-gray-600 line-clamp-3 mt-2">{children}</p>
          <div className="mt-4">
            <a
              href={`/places/${spot.toLowerCase().trim().replace(" ", "-")}`}
              className="text-white bg-blue-600 hover:bg-blue-700 shadow-xl hover:shadow-2xl transition-all p-2 px-6 rounded-lg inline-block transform hover:scale-105"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
