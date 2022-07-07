import React from 'react'
import { Form, Button } from "react-bootstrap";


export default function TopicSearchForm({
    handleSubmit,
    handleChangeTitle,
    value
}) {
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label>Topic Name</Form.Label>
            <Form.Control onChange={handleChangeTitle} value={value} type="text" placeholder="Enter Topic" />
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}