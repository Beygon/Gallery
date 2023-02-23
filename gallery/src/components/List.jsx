import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import ImageCard from "./ImageCard";
import ImageSearch from "./ImageSearch";
const List = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <>
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className="d-flex text-center justify-content-center align-items-center mt-4">
          Sorry,No image found!
        </h1>
      )}
      <Container>
        <div className="row">
          {isLoading ? (
            <h1 className="mt-5 mx-auto text-center">Loading...</h1>
          ) : (
            <div
              className="col-sm w-100 align-items-center justify-content-center"
              style={{
                display: "flex",
                gap: 30,
                flexWrap: "wrap",
              }}
            >
              {images.map((image) => (
                <ImageCard image={image} key={image.id} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default List;
