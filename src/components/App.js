import {useEffect, useState} from "react";
import {findCoordinates, findMyCoordinates} from "../api/localize";
import ErrorToast from "./ErrorToast";
import LocalizeMap from "./LocalizeMap";
import LocationInfo from "./LocationInfo";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";
import Spinner from "./Spinner";

function App() {
  const [currentLocation, setCurrentLocation] = useState();
  const [searchList, setSearchList] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchCoords = async () => {
      const data = await findMyCoordinates();
      setCurrentLocation(data);
    };
    fetchCoords();
  }, []);

  if (!currentLocation) return <h1>LOADING...</h1>;

  const handleSearchOnMap = async query => {
    try {
      setIsLoading(true);
      const data = await findCoordinates(query);
      if (data.error) return alert(data.error.info);
      setSearchList(prevList => [{...data, query}, ...prevList]);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <SearchList searchList={searchList} />
      <LocalizeMap gridPosition="item map-grid-position" header="my location" location={currentLocation} />
      <LocationInfo gridPosition="item3" location={currentLocation} header="my location:" />
      <SearchBar onSearch={query => handleSearchOnMap(query)} />
      <LocalizeMap gridPosition="item map-grid-position" header="last search" location={searchList[0]} />
      <LocationInfo gridPosition="item6" location={searchList[0]} header="last search:" />
      {errorMsg && <ErrorToast errorMsg={errorMsg} />}
      <Spinner />
    </div>
  );
}

export default App;
