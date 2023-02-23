import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div className="container mt-3 w-50">
      <Form onSubmit={onSubmit}>
        <InputGroup className="mb-1">
          <Form.Control
            placeholder="Search image..."
            name="search"
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            type="submit"
            className="bg-success text-white"
          >
            Search
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default ImageSearch;
