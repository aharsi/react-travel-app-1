import { useEffect, useState } from "react";
import Card from "./components/Card";

export default function Places() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data"))?.data || [];
    setData(storedData);
    setSearchedData(storedData);
  }, []);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchedData(data);
    } else {
      const filteredData = data.filter((place) =>
        place.spot.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchedData(filteredData);
    }
  }, [searchTerm, data]);

  return (
    <div>
      <header className="my-20">
        <h1 className="text-4xl text-center font-semibold text-blue-900">
          Places
        </h1>
        <p className="text-center mt-4 text-lg text-gray-700">
          You search, we find the best places for you to visit.
        </p>
        <br />
        <div className="w-full flex justify-center gap-2 mb-8">
          <input
            type="text"
            placeholder="Search for a place"
            className="p-2 outline-none border border-gray-500 rounded w-96"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <div className="grid grid-cols-3 gap-12 bg-blue-50 p-12 px-60">
        {searchedData.length > 0 ? (
          searchedData.map((place, idx) => (
            <Card
              key={`#${idx}`}
              location={place.location}
              spot={place.spot}
              avatar={place.avatar}
            >
              {place.description}
            </Card>
          ))
        ) : (
          <div className="text-center col-span-3">
            <p className="text-2xl">No results found</p>
            <p>Want to add your custom place?</p>
            <button
              type="button"
              className="mt-4 px-8 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-700 transition cursor-pointer"
              onClick={async () => {
                if (!searchTerm.trim()) return;

                try {
                  let spot = "";
                  let location = "";
                  let avatar = "";
                  let description = "";
                  let lat = "";
                  let lon = "";

                  // Step 1: Fetch details from Wikipedia API
                  const wikiResponse = await fetch(
                    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
                      searchTerm.trim()
                    )}`
                  );
                  const wikiData = await wikiResponse.json();

                  if (wikiData.type === "disambiguation" || !wikiData.title) {
                    alert(
                      "Invalid tourist place! Please try a different search."
                    );
                    return;
                  }

                  spot = wikiData.title;
                  description = wikiData.extract || "No description available.";

                  if (wikiData.coordinates) {
                    lat = wikiData.coordinates.lat;
                    lon = wikiData.coordinates.lon;
                  } else {
                    alert("Coordinates not found for this place.");
                    return;
                  }

                  if (wikiData.originalimage) {
                    avatar = wikiData.originalimage.source;
                  } else {
                    avatar = "https://via.placeholder.com/150"; // Fallback image
                  }

                  // Step 2: Reverse Geocode Location using OpenStreetMap
                  const locationResponse = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
                  );
                  const locationData = await locationResponse.json();

                  location = `${locationData.address.state || "Unknown"}, ${
                    locationData.address.country || "Unknown"
                  }`;

                  // Step 3: Validate if it's a tourist place using Overpass API
                  const overpassQuery = `
                      [out:json];
                      (
                        node(around:1000, ${lat}, ${lon})["tourism"];
                        node(around:1000, ${lat}, ${lon})["historic"];
                        node(around:1000, ${lat}, ${lon})["heritage"];
                        node(around:1000, ${lat}, ${lon})["site"="archaeological"];
                        node(around:1000, ${lat}, ${lon})["landmark"];
                        node(around:1000, ${lat}, ${lon})["amenity"="place_of_worship"];
                      );
                      out body;
                    `;
                  const overpassURL = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(
                    overpassQuery
                  )}`;
                  const overpassResponse = await fetch(overpassURL);
                  const overpassData = await overpassResponse.json();

                  // If Overpass doesn't return results, we allow adding the place (for famous places like Vaishno Devi Temple)
                  if (overpassData.elements.length === 0) {
                    alert(
                      "No tourism tags found, but we will still add this place."
                    );
                  }

                  // Step 4: Save the Valid Tourist Place
                  const newPlace = {
                    location,
                    spot,
                    avatar,
                    description,
                  };

                  const updatedData = [...data, newPlace];
                  setData(updatedData);
                  setSearchedData(updatedData);
                  setSearchTerm("");

                  localStorage.setItem(
                    "data",
                    JSON.stringify({ data: updatedData })
                  );
                } catch (error) {
                  console.error("Error fetching data:", error);
                  alert("Something went wrong while fetching data.");
                }
              }}
            >
              Add Place
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
