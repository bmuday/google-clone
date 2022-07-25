import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useStateContext } from "../contexts/StateContextProvider";
import { Loading } from "./Loading";

export const Results = () => {
  const { results, loading, getResults, searchTerm } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/products") {
      getResults(`/products?_limit=10`);
    } else if (location.pathname === "/articles") {
      getResults(`/articles?_limit=10`);
    } else if (location.pathname === "/cryptos") {
      getResults(`/crypto?_limit=10`);
    } else if (location.pathname === "/videos") {
      getResults(`/videos?_limit=10`);
    }
  }, [searchTerm, location.pathname]);

  if (loading) return <Loading />;

  switch (location.pathname) {
    case "/products":
      return (
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
          {results?.map(({ id, image_url, name }) => (
            <div key={id} className="md:w-2/5 w-full">
              <a href={image_url} target="_blank" rel="noreferrer">
                <p className="text-sm">{image_url.substring(0, 30)}</p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">
                  {name}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/articles":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.map(({ id, authors, title, url, img_src }) => (
            <a
              href={url}
              target="_blank"
              key={id}
              rel="noreferrer"
              className="sm:p-3 p-5"
            >
              <img src={img_src?.src} alt={title} loading="lazy" />
              <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
              <p className="sm:w-24 w-24 text-sm mt-2">{authors}</p>
            </a>
          ))}
        </div>
      );
    case "/cryptos":
      return (
        <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
          {results?.map(({ id, name, price }) => (
            <div key={id} className="md:w-2/5 w-full ">
              <p className="text-lg dark:text-blue-300 text-blue-700">{name}</p>
            </div>
          ))}
        </div>
      );
    case "/videos":
      return (
        <div className="flex flex-wrap ">
          {results?.map(({ id, title, video }) => (
            <div key={id} className="p-2">
              <ReactPlayer url={video} controls width="355px" height="200px" />
              <p>{title}</p>
            </div>
          ))}
        </div>
      );
    default:
      return "Error...";
  }
};
