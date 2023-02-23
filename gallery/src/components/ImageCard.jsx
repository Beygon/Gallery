import React from "react";

import Card from "react-bootstrap/Card";
const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <>
      <Card
        style={{
          width: "25rem",
          height: "380px",
        }}
        className="mt-5"
      >
        <Card.Img
          variant="top"
          src={image.webformatURL}
          style={{
            overflow: "hidden",
            objectFit: "cover",
          }}
        />
        <Card.Body>
          <Card.Text>
            <Card.Title>Photo by {image.user}</Card.Title>
            <ul>
              <li>
                <span className="font-weight-bold">Views:</span> {image.views}
              </li>
              <li>
                <span>Downloads: </span>
                {image.downloads}
              </li>
              <li>
                <span>Likes: </span>
                {image.likes}
              </li>
            </ul>
            <div className="px-5 py-2">
              {tags.map((tag, id) => (
                <span
                  key={id}
                  className="px-1 py-1 inline-block bg-secondary rounded-pill text-sm text-white"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ImageCard;
