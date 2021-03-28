import React, { useMemo, useState } from "react";
import { cities } from "src/utils/searchCityHint";
import { FiSearch, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { selectUI, selectWeather, UIActions, weatherActions } from "src/store";

export const SearchCityPannel = () => {
  const [searchText, setSearchText] = useState("");
  const { loading, lastSearches } = useSelector(selectWeather);
  const { searchPannel } = useSelector(selectUI);
  const dispatch = useDispatch();
  const lastSearchesForHint = useMemo(() => lastSearches.reverse(), [
    lastSearches,
  ]);

  function closePannel() {
    dispatch(UIActions.CLOSE_SEARCH_PANNEL());
  }

  async function handleSearch(searchText: string) {
    dispatch(weatherActions.SEARCH_WEATHER(searchText));
    setSearchText("");
  }

  return (
    <section
      className={`${
        searchPannel ? "block" : "hidden"
      } absolute overflow-y-scroll inset-0  py-10 px-11 bg-primary flex flex-col space-y-8 text-center w-full`}
    >
      <div className="flex justify-end">
        <button
          type="button"
          className="p-1"
          aria-label="Close search pannel"
          title="Close search pannel"
          onClick={closePannel}
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
          className={`${
            loading ? "bg-secondary animate-pulse" : ""
          } px-4 bg-blue-700 hover:bg-blue-900 transition`}
          onClick={() => handleSearch(searchText)}
          disabled={loading}
        >
          {loading ? "Loading" : "Search"}
        </button>
      </div>
      <ul className="space-y-4">
        {searchText &&
          cities
            .filter((city) =>
              city.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
            )
            .map((city) => (
              <li
                role="button"
                key={city}
                onClick={() => {
                  setSearchText(city);
                  handleSearch(city);
                }}
                className="border bg-primary border-medium-gray text-medium-gray py-3 hover:border-light-gray hover:text-light-gray"
              >
                {city}
              </li>
            ))}
        {!lastSearches.length && <p>Type some City</p>}
        {!searchText &&
          lastSearchesForHint.map(({ title, woeid }) => (
            <li
              role="button"
              key={woeid}
              onClick={() => {
                {
                  dispatch(
                    weatherActions.GET_WEATHER_BY_WOEID({ title, woeid })
                  );
                  setSearchText("");
                }
              }}
              className="border border-medium-gray text-medium-gray py-3 hover:border-light-gray hover:text-light-gray"
            >
              {title}
            </li>
          ))}
      </ul>
    </section>
  );
};
