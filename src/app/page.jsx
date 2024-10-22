"use client";
import { useState, useEffect } from "react";
export default function Home() {
  const [videos, setVideos] = useState([]); // Initialize with an empty array
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch("/api/video");
        const data = await res.json();
        if (Array.isArray(data)) {
          setVideos(data); // Set videos only if it's an array
        } else {
          setError("Invalid data format");
        }
      } catch (error) {
        setError("Failed to fetch videos");
        console.error(error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white shadow-lg p-10 rounded-lg max-w-md">
          <h1 className="text-4xl font-serif text-center mb-5">
            Video for interviews
          </h1>
          <p className="text-lg font-light text-center mb-10 italic">
            {" "}
            {error && <p>{error}</p>} {/* Display error if any */}
          </p>

          <ul className="space-y-4">
            {videos.map((video, index) => (
              <li className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked
                  className="form-checkbox h-6 w-6 text-black"
                />
                <div className="flex-1 h-20">{video.title}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
