import { Button, Badge } from "react-bootstrap";
import React from 'react'


export default function RelatedTopicButton({
    relatedTopic,
    onClick,
}) {
    return (
        <Button onClick={onClick}>
            {relatedTopic?.name}
            <Badge bg="secondary"> {relatedTopic?.stargazerCount}</Badge>
            <span className="visually-hidden"></span>
        </Button>
    )
}