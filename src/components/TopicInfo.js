import React from 'react'
import { Badge } from "react-bootstrap";

export default function TopicInfo({
    topic
}) {
    return (
        <div>
            <h2> # {topic?.name} <Badge bg="secondary">{topic?.stargazerCount}</Badge> </h2>
        </div>
    )
}