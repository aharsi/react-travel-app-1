import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function Place() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // State for popup image

  const formattedPlace = params.place
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data"))?.data || [];
    const placeData = storedData.find((item) => item.spot === formattedPlace);
    setData(placeData);

    if (placeData) {
      fetchGalleryImages(placeData.spot);
    }
  }, [formattedPlace]);

  const fetchGalleryImages = async (place) => {
    try {
      const response = await fetch(
        `https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=categorymembers&gcmtitle=Category:${encodeURIComponent(
          place
        )}&gcmtype=file&prop=imageinfo&iiprop=url&gcmlimit=10`
      );
      const result = await response.json();

      if (result?.query?.pages) {
        const images = Object.values(result.query.pages)
          .map((img) => img.imageinfo?.[0]?.url)
          .filter((url) => url);

        setGallery(images);
      } else {
        console.warn("No images found for:", place);
        setGallery([]);
      }
    } catch (error) {
      console.error("Error fetching gallery images:", error);
      setGallery([]);
    }
  };

  return (
    <div>
      <header className="my-20">
        <h1 className="text-4xl text-center font-semibold text-blue-900">
          {formattedPlace}
        </h1>
      </header>

      <div className="bg-blue-50 p-12 px-60 flex items-center flex-col text-center">
        <h2 className="text-3xl text-center font-semibold text-blue-800">
          Introduction
        </h2>
        <br />
        <p className="text-center text-zinc-700 w-[48rem] leading-relaxed">
          {data?.description || "No description available."}
        </p>
      </div>

      {/* Gallery Section */}
      <div className="p-12 px-20">
        <h2 className="text-3xl text-center font-semibold text-blue-800 mb-4">
          Gallery
        </h2>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 px-60">
          {gallery.length > 0 ? (
            gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Image of ${formattedPlace}`}
                className="w-full rounded-lg shadow-md hover:opacity-90 transition duration-300 break-inside-avoid cursor-pointer"
                onClick={() => setSelectedImage(img)} // Open image on click
                onKeyUp={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedImage(img);
                  }
                }} // Open image on key press
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedImage(img);
                  }
                }} // Open image on key down
              />
            ))
          ) : (
            <p
              style={{ columnSpan: "all" }}
              className="text-center flex justify-center items-center text-zinc-700"
            >
              No images available for this place.
            </p>
          )}
        </div>
      </div>

      {/* Image Popup (Modal) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)} // Close on background click
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setSelectedImage(null);
            }
          }} // Close on Escape key
        >
          <div
            className="relative max-w-4xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-zinc-950 bg-opacity-50 px-3 py-1 rounded-lg hover:bg-zinc-800 transition cursor-pointer"
              onClick={() => setSelectedImage(null)} // Close on button click
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedImage(null);
                }
              }} // Close on key press
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedImage(null);
                }
              }} // Close on key down
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[80vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
