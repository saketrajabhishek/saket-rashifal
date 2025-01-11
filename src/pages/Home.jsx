import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  GiAries,
  GiTaurus,
  GiGemini,
  GiCancer,
  GiLeo,
  GiVirgo,
  GiLibra,
  GiScorpio,
  GiSagittarius,
  GiCapricorn,
  GiAquarius,
  GiPisces,
} from "react-icons/gi";
import "./loader.css";

const zodiacSigns = [
  { name: "aries", icon: <GiAries /> },
  { name: "taurus", icon: <GiTaurus /> },
  { name: "gemini", icon: <GiGemini /> },
  { name: "cancer", icon: <GiCancer /> },
  { name: "leo", icon: <GiLeo /> },
  { name: "virgo", icon: <GiVirgo /> },
  { name: "libra", icon: <GiLibra /> },
  { name: "scorpio", icon: <GiScorpio /> },
  { name: "sagittarius", icon: <GiSagittarius /> },
  { name: "capricorn", icon: <GiCapricorn /> },
  { name: "aquarius", icon: <GiAquarius /> },
  { name: "pisces", icon: <GiPisces /> },
];

const days = ["YESTERDAY", "TODAY", "TOMORROW", "WEEKLY"];

const Home = () => {
  const [selectedSign, setSelectedSign] = useState(null);
  const [selectedDay, setSelectedDay] = useState("TODAY");
  const [horoscope, setHoroscope] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setHoroscope(null);
  }, [selectedSign, selectedDay]);

  const fetchHoroscope = async () => {
    setError(null);
    setHoroscope(null);
    setLoading(true);
    try {
      const url =
        selectedDay === "WEEKLY"
          ? `https://api.allorigins.win/get?url=${encodeURIComponent(
              `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/weekly?sign=${selectedSign}`
            )}`
          : `https://api.allorigins.win/get?url=${encodeURIComponent(
              `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${selectedSign}&day=${selectedDay}`
            )}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("An error occurred. Please try again.");
      }
      const data = await response.json();
      const parsedData = JSON.parse(data.contents);
      if (parsedData.status !== 200) {
        throw new Error(
          "Boss Atleast select a zodiac sign and day to view horoscope."
        );
      }
      setHoroscope(parsedData.data);
    } catch (error) {
      setError(error.message || "Failed to fetch horoscope. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-300 mb-6">
        Zodiac Signs
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
        {zodiacSigns.map((sign, index) => (
          <motion.div
            key={index}
            className={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-lg font-semibold text-gray-800 dark:text-gray-300 capitalize cursor-pointer ${
              selectedSign === sign.name ? "border-2 border-blue-600" : ""
            }`}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedSign(sign.name)}
          >
            {sign.icon}
            <span className="mt-2">{sign.name}</span>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center space-x-4 mb-6">
        {days.map((day) => (
          <motion.button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`py-2 px-4 mb-2 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
              selectedDay === day
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Select ${day}`}
          >
            {day}
          </motion.button>
        ))}
        <motion.button
          onClick={fetchHoroscope}
          className="bg-teal-500 text-white py-2 px-4 mb-2 rounded-lg shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Fetch Horoscope"
        >
          View Horoscope
        </motion.button>
      </div>
      {loading && (
        <motion.div
          className="flex items-center justify-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="shimmer-loader"></div>
        </motion.div>
      )}
      {error && (
        <motion.div
          className="text-red-500 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {error}
        </motion.div>
      )}
      {horoscope && (
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-gray-800 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            {horoscope.date || horoscope.week}
          </h3>
          <p className="whitespace-pre-line">{horoscope.horoscope_data}</p>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
