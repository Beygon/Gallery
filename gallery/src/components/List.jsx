import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const List = () => {
  return (
    <>
      <Container>
        <Card
          style={{
            width: "18rem",
            height: "350px",
          }}
          className="mt-5"
        >
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/random"
            style={{
              overflow: "hidden",
              objectFit: "cover",
            }}
          />
          <Card.Body>
            <Card.Text>
              <Card.Title>Photo By John Doe</Card.Title>
              <ul>
                <li>
                  <span className="font-weight-bold">Views:</span> 4000
                </li>
                <li>
                  <span>Downloads: </span>4670
                </li>
                <li>
                  <span>Likes: </span>4670
                </li>
              </ul>
              <div className="px-6 py-2">
                <span className="px-3 py-1 inline-block bg-secondary rounded-pill text-sm text-white">
                  #tag1
                </span>
                <span className="px-3 py-1 mx-2 inline-block bg-secondary rounded-pill text-sm text-white">
                  #tag2
                </span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default List;
