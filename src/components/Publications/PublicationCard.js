import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiOutlineFilePdf } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";

function PublicationCard(props) {
  return (
    <Card className="publication-card-view">
      <Card.Body>
        <div className="publication-header">
          <div className="publication-icon">
            <FaQuoteLeft style={{ fontSize: "1.5em", color: "#c770f0" }} />
          </div>
          <div className="publication-badge">
            <span className="ieee-badge">IEEE</span>
          </div>
        </div>
        <Card.Title className="publication-title">{props.title}</Card.Title>
        <Card.Text className="publication-authors">{props.authors}</Card.Text>
        <Card.Text className="publication-venue">
          {props.venue} 
        </Card.Text>
        <Card.Text className="publication-description">
          {props.description}
        </Card.Text>
        <div className="publication-buttons">
          {props.pdfLink && (
            <Button
              variant="primary"
              href={props.pdfLink}
              target="_blank"
              className="publication-btn"
            >
              <AiOutlineFilePdf /> &nbsp; PDF
            </Button>
          )}
          {props.doiLink && (
            <Button
              variant="primary"
              href={props.doiLink}
              target="_blank"
              className="publication-btn"
            >
              <BsLink45Deg /> &nbsp; DOI
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default PublicationCard;
