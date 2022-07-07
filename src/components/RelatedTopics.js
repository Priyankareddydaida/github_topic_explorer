import React from "react";
import { Row, Col } from "react-bootstrap";
import RelatedTopicButton from "./RelatedTopicButton";

export default function RelatedTopics({
    relatedTopics,
    handleTopicClick
}) {
    if (relatedTopics?.length === 0) {
        return (
            <h5>{`Sorry :( No related Topic found `}</h5>
        )
    }
    return (
        <>
            <h6>Related Topics:</h6>
            <Row
                lg={4}>
                {
                    relatedTopics?.map((relatedTopic) => (
                        <Col  key={relatedTopic?.id}>
                            <RelatedTopicButton onClick={() => handleTopicClick(relatedTopic)} relatedTopic={relatedTopic} />
                        </Col>
                    ))
                }
            </Row>
        </>

    )
}