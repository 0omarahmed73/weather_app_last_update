import { useGeolocation } from "@uidotdev/usehooks";
import { createContext, useEffect, useRef, useState } from "react";
import { Weather } from "../services/find_weather";
import useLocalStorage from "use-local-storage";
export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [chooseLang, setChooseLang] = useLocalStorage("lang", "en");
  const [defaultCity, setDefaultCity] = useLocalStorage("defaultCity", "Cairo");

  const [languages, setLanguages] = useState({
    set: chooseLang === "en" ? "Website Setting" : "إعدادات الموقع",
    default: chooseLang === "en" ? "Default Location" : "الموقع الافتراضي",
    city: chooseLang === "en" ? "Search for City" : "البحث عن مدينة",
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isSearching, setIsSearching] = useState(false);
  const [weathers, setWeathers] = useState([]);
  const isMount = useRef(true);
  const [error, setError] = useState(null);
  const [citiesList, setCitiesList] = useState([
    "Cairo",
    "Riyadh",
    "Marrakesh",
    "Suez",
  ]);
  useEffect(() => {
    setLanguages({
      set: chooseLang === "en" ? "Website Setting" : "إعدادات الموقع",
      default: chooseLang === "en" ? "Default Location" : "الموقع الافتراضي",
      city: chooseLang === "en" ? "Search for City" : "البحث عن مدينة",
      ["Other Large Cities"]:
        chooseLang === "en" ? "Other Large Cities" : "مدن كبيرة أخرى",
      ["Feels Like"]: chooseLang === "en" ? "Feels Like" : "يشعر وكأنه",
      ["Wind Speed"]: chooseLang === "en" ? "Wind Speed" : "سرعة الرياح",
      ["Humidity"]: chooseLang === "en" ? "Humidity" : "الرطوبة",
      ["chooseLang"]: chooseLang === "en" ? "Choose Language" : "اختر اللغة",
      ["saveChanges"]: chooseLang === "en" ? "Save Changes" : "حفظ التغييرات",
      ["No city found!"]:
        chooseLang === "en" ? "No city found!" : "لم يتم العثور على المدينة!",
      ["savedSuccessfully"]:
        chooseLang === "en"
          ? "New Settings Saved Successfully"
          : "تم حفظ الإعدادات الجديدة بنجاح",
      ["kph"]: chooseLang === "en" ? "km/h" : "كم/س",
      ["Made with ❤️ by Omar Ahmed & Yousef Hassan "]:
        chooseLang === "en"
          ? "Made with ❤️ by Omar Ahmed & Yousef Hassan"
          : "صنع ب❤️ من قبل عمر أحمد ويوسف حسن",
    });
    setCitiesList([
      chooseLang === "en" ? "Cairo" : "القاهرة",
      chooseLang === "en" ? "Riyadh" : "الرياض",
      chooseLang === "en" ? "Marrakesh" : "مراكش",
      chooseLang === "en" ? "Suez" : "السويس",
    ]);
  }, [chooseLang]);
  const state = useGeolocation();
  const [weather, setWeather] = useState({
    location: {
      name: "Cairo",
      region: "Al Qahirah",
      country: "Egypt",
      lat: 30.11,
      lon: 31.33,
      tz_id: "Africa/Cairo",
      localtime_epoch: 1719245253,
      localtime: "2024-06-24 19:07",
    },
    current: {
      last_updated_epoch: 1719244800,
      last_updated: "2024-06-24 19:00",
      temp_c: 38.3,
      temp_f: 100.9,
      is_day: 1,
      condition: {
        text: "Sunny",
        icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        code: 1000,
      },
    },
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const setTime = setTimeout(() => {
      if (!state.loading && !state.error && state.latitude && state.longitude) {
        setLoading(true);
        Weather.findWeather({ state, setError })
          .then((response) => {
            setWeather(response);
          })
          .catch((error) => {
            setError(error);
          });
      } else {
        Weather.findWeatherByCity({ city: defaultCity, setError })
          .then((response) => {
            setWeather(response);
          })
          .catch((error) => {
            setError(error);
          });
      }
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(setTime);
    };
  }, [state]);

  const searchForCity = (city) => {
    setIsSearching(true);
    setError(null);
    setLoading(true);
    Weather.findWeatherByCity({ city, setError })
      .then((response) => {
        setWeather(response);
        setIsSearching(false);
      })
      .catch((error) => {
        setError(error);
      });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    if (isMount.current) {
      citiesList.map((city) => {
        Weather.findWeatherByCity({ city }).then((response) => {
          setWeathers((prev) => [
            ...prev,
            {
              weather: response.current.temp_c,
              image: `https:${response.current.condition.icon}`,
            },
          ]);
        });
      });
      isMount.current = false;
    }
  }, []);
  console.log(loading);
  return (
    <WeatherContext.Provider
      value={{
        weather,
        loading,
        isSearching,
        setIsSearching,
        searchForCity,
        citiesList,
        weathers,
        error,
        show,
        handleClose,
        handleShow,
        languages,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
