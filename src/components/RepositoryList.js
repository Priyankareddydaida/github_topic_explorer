import React from "react";
import { Row, Col } from "react-bootstrap";
import RepositoryInfo from "./RepositoryInfo";

export default function RepositoryList({
    repositories,
}) {
    if (repositories?.length === 0) {
        return (
            <h5>{`Sorry :( No related Topic found `}</h5>
        )
    }
    return (
        <Row style={{
            marginTop: 16,
            paddingTop: 16,
            borderTop: '1px solid rgb(227 227 227)'
        }} lg={12}>
            {
                repositories?.map((repository) => (
                    <Col xs={12} key={repository?.node?.id}>
                        <RepositoryInfo repository={repository} />
                    </Col>
                ))
            }
        </Row>
    )
}