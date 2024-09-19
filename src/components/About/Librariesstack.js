import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { DiBootstrap, DiMaterializecss } from 'react-icons/di'

const Librariesstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMaterializecss />
      </Col>
    </Row>
  )
}

export default Librariesstack
