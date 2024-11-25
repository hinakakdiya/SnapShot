import React, { useEffect } from "react";
import Loader from "../components/Loadar";
import Gallery from "./Gallery";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../redux/reducer/ContainerSlice";

const Context = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.searchEntry);
  const { images, loading } = useSelector((state) => state.photo);

  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchPhotos(searchTerm));
    }
  }, [searchTerm, dispatch]);

  return (
    <>
      <div>{loading ? <Loader /> : <Gallery data={images} />}</div>
    </>
  )
}

export default Context;