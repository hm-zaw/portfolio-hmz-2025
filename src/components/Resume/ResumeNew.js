import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import englishResume from "../../Assets/Publication/HtetMyetZaw - Resume.pdf";
import japaneseResume from "../../Assets/Publication/Japanese CV.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [selectedResume, setSelectedResume] = useState(null);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const resumeOptions = [
    {
      id: "english",
      title: "English Resume",
      subtitle: "Full Professional Profile",
      pdf: englishResume,
      icon: "🇬🇧",
      description:
        "Comprehensive CV with education, projects, publications, and technical skills",
      color: "#c770f0",
    },
    {
      id: "japanese",
      title: "Japanese Resume",
      subtitle: "日本語履歴書",
      pdf: japaneseResume,
      icon: "🇯🇵",
      description: "Japanese language version of my professional resume",
      color: "#934cce",
    },
  ];

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Header Section */}
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginBottom: "50px",
          }}
        >
          <Col md={12} className="resume-header">
            <h1 className="resume-main-heading">
              My <span className="purple">Resume</span>
            </h1>
            <p className="resume-subheading">
              Choose your preferred language version to download
            </p>
          </Col>
        </Row>

        {/* Resume Cards Section */}
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginBottom: "50px",
          }}
        >
          {resumeOptions.map((resume) => (
            <Col
              key={resume.id}
              md={5}
              className="resume-card-col"
              style={{ margin: "20px" }}
            >
              <div className="resume-download-card">
                <div className="resume-card-header">
                  <div className="resume-card-icon">{resume.icon}</div>
                  <div className="resume-card-title-section">
                    <h3 className="resume-card-title">{resume.title}</h3>
                    <p className="resume-card-subtitle">{resume.subtitle}</p>
                  </div>
                </div>

                <p className="resume-card-description">{resume.description}</p>

                <div className="resume-card-actions">
                  <a
                    href={resume.pdf}
                    download
                    className="resume-download-btn"
                    style={{ "--btn-color": resume.color }}
                  >
                    <AiOutlineDownload />
                    <span>Download PDF</span>
                  </a>
                  <button
                    className="resume-preview-btn"
                    onClick={() =>
                      setSelectedResume(
                        selectedResume === resume.id ? null : resume.id
                      )
                    }
                    style={{ "--btn-color": resume.color }}
                  >
                    <AiOutlineEye />
                    <span>
                      {selectedResume === resume.id
                        ? "Hide Preview"
                        : "Preview"}
                    </span>
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* PDF Preview Section */}
        {selectedResume && (
          <Row className="resume-preview-section">
            <Col md={12} style={{ textAlign: "center" }}>
              <div className="resume-preview-container">
                <h3 className="resume-preview-title">
                  {resumeOptions.find((r) => r.id === selectedResume)?.title}{" "}
                  Preview
                </h3>
                <div className="resume-pdf-wrapper">
                  <Document
                    file={
                      resumeOptions.find((r) => r.id === selectedResume)?.pdf
                    }
                    onLoadSuccess={onDocumentLoadSuccess}
                    className="d-flex justify-content-center"
                    loading={
                      <div className="resume-loading">
                        <div className="resume-spinner"></div>
                        <p>Loading PDF...</p>
                      </div>
                    }
                  >
                    <Page
                      pageNumber={1}
                      scale={width > 786 ? 1.2 : width > 468 ? 0.8 : 0.5}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  </Document>
                </div>
                {numPages > 1 && (
                  <p className="resume-page-info">
                    Showing page 1 of {numPages}
                  </p>
                )}
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default ResumeNew;
