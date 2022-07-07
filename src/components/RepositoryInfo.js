import React from 'react'
import { Badge } from "react-bootstrap";

export default function RepositoryInfo({
    repository
}) {
    const { name, description, stargazerCount, url } = repository?.node ?? {}
    return (
        <div>
            <a href={url} target="_blank"><h4>{name} <Badge bg="secondary">{stargazerCount}</Badge></h4></a>
            <p>{description}</p>
        </div >
    )
}