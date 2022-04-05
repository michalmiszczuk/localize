import {useEffect, useState} from "react";
import ErrorToast from "./ErrorToast";
import LocalizeMap from "./LocalizeMap";
import LocationInfo from "./LocationInfo";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";
import Spinner from "./Spinner";

import {findCoordinates, findMyCoordinates} from "../api/localize";
import {v4 as uuidv4} from "uuid";

function App() {
  const [currentLocation, setCurrentLocation] = useState();
  const [searchList, setSearchList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("dfsfsdf ");

  useEffect(() => {
    const fetchCoords = async () => {
      const data = await findMyCoordinates();
      setCurrentLocation(data);
    };
    setIsLoading(true);
    fetchCoords();
    setIsLoading(false);
  }, []);

  if (!currentLocation) return <Spinner />;

  const handleSearchOnMap = async query => {
    try {
      setIsLoading(true);
      const data = await findCoordinates(query);
      if (data.error) {
        setErrorMsg(data.error.info);
        return;
      }
      setSearchList(prevList => [{...data, query, id: uuidv4()}, ...prevList]);
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <SearchList searchList={searchList} />
      <LocalizeMap
        gridPosition="map-1"
        header="my location"
        location={currentLocation}
        fallbackMsg="waiting for data..."
      />
      <LocationInfo
        location={currentLocation}
        header="my location:"
        fallbackMsg="waiting for search..."
        gridPosition="lacation-1"
      />
      <SearchBar onSearch={query => handleSearchOnMap(query)} />
      <LocalizeMap
        gridPosition="map-2"
        header="last search"
        location={searchList[0]}
        fallbackMsg="waiting for search..."
      />
      <LocationInfo
        location={searchList[0]}
        header="last search:"
        fallbackMsg="waiting for search..."
        gridPosition="lacation-2"
      />
      {errorMsg && <ErrorToast errorMsg={errorMsg} onClose={() => setErrorMsg("")} />}
      {isLoading && <Spinner />}
    </div>
  );
}

export default App;
