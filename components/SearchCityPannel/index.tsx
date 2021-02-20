import React, { useContext, useMemo, useState } from "react";
import { MetaWeatherSearchResponse } from "adapters/metaweather-api-definitions";
import { WeatherContext } from "contexts/WeatherContext";
import { cities } from "utils/searchCityHint";
import { FiSearch, FiX } from "react-icons/fi";
import axios from "axios";

export interface ISearchCityPannel {
  openPannel: boolean;
  setOpenPannel: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchCityPannel: React.FC<ISearchCityPannel> = ({
  openPannel,
  setOpenPannel,
}) => {
  const [searchText, setSearchText] = useState("");
  const [lastSearches, setLastSearches] = useState<MetaWeatherSearchResponse[]>(
    []
  );
  const { setWeather } = useContext(WeatherContext);

  const lastSearchesToDisplay = useMemo(() => lastSearches.reverse(), [
    lastSearches,
  ]);

  async function handleSearch(): Promise<MetaWeatherSearchResponse> {
    try {
      const { data } = await axios.get<MetaWeatherSearchResponse[]>(
        `/api/search/${searchText}`
      );

      if (!data || data.length === 0)
        throw new Error("Digite uma outra cidade");

      const [{ title, woeid }] = data;

      return { title, woeid };
    } catch (error) {
      console.log(error);
    }
  }

  async function getWeatherByWoeid({
    title,
    woeid,
  }: MetaWeatherSearchResponse) {
    try {
      const response = await fetch(`/api/location/${woeid}`);
      const weather = await response.json();

      setLastSearches((current) => [...current, { title, woeid }]);
      setWeather(weather);
      setOpenPannel(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section
      className={`${
        openPannel ? "block" : "hidden"
      } absolute overflow-y-scroll inset-0  py-10 px-11 bg-primary flex flex-col space-y-8 text-center w-full`}
    >
      <div className="flex justify-end">
        <button
          type="button"
          className="p-1"
          aria-label="Close search pannel"
          title="Close search pannel"
          onClick={() => setOpenPannel(false)}
        >
          <FiX size={32} />
        </button>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1 flex items-center space-x-2 px-2 border border-light-gray">
          <FiSearch size={24} />
          <input
            type="text"
            className="bg-transparent py-3 flex-1 focus:outline-none"
            value={searchText}
            onChange={({ target }) => setSearchText(target.value)}
          />
        </div>
        <button
          className="px-4 bg-blue-700 hover:bg-blue-900 transition"
          onClick={async () => getWeatherByWoeid(await handleSearch())}
        >
          Search
        </button>
      </div>
      <ul className="space-y-4">
        {/* Last searches. Example below */}
        {searchText &&
          cities
            .filter((city) =>
              city.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
            )
            .map((city) => (
              <li
                role="button"
                onClick={async () => {
                  setSearchText(city);
                  getWeatherByWoeid(await handleSearch());
                }}
                className="border bg-primary border-medium-gray text-medium-gray py-3 hover:border-light-gray hover:text-light-gray"
              >
                {city}
              </li>
            ))}
        {!lastSearches.length && <p>Type some City</p>}
        {!searchText &&
          lastSearchesToDisplay.map(({ title, woeid }) => (
            <li
              role="button"
              onClick={async () => await getWeatherByWoeid({ title, woeid })}
              className="border border-medium-gray text-medium-gray py-3 hover:border-light-gray hover:text-light-gray"
            >
              {title}
            </li>
          ))}
      </ul>
    </section>
  );
};
