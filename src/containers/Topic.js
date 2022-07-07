import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useLazyQuery } from "@apollo/client";
import { GET_TOPIC } from '../graphql/topic'
import TopicSearchForm from "../components/TopicSearchForm";
import RelatedTopics from "../components/RelatedTopics";
import TopicInfo from "../components/TopicInfo";
import RepositoryInfo from "../components/RepositoryInfo";
import RepositoryList from "../components/RepositoryList";

const DEFAULT_TOPIC = 'react'
function ExchangeRatePage() {
  const [getTopic, { data, loading, error }] = useLazyQuery(GET_TOPIC);
  const [topicName, setTopicName] = useState(DEFAULT_TOPIC)

  useEffect(() => {
    getTopic({
      variables: {
        name: DEFAULT_TOPIC
      }
    })
  }, [])

  useEffect(() => {
    if (error) {
      alert('Getting error while fetching topics')
    }
  }, [error])

  const handleChangeTitle = (e) => {
    e.preventDefault()
    setTopicName(e.target.value)
  }

  const handleTopicClick = (topic) => {
    setTopicName(topic?.name)
    getTopic({
      variables: {
        name: topic?.name
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getTopic({
      variables: {
        name: topicName
      }
    })
  }


  return (
    <Container>
      <TopicSearchForm value={topicName} handleChangeTitle={handleChangeTitle} handleSubmit={handleSubmit} />
      {
        loading ?
          <Spinner animation="grow" />
          :
          <>
            <TopicInfo topic={data?.topic} />
            <RelatedTopics relatedTopics={data?.topic?.relatedTopics}
              handleTopicClick={handleTopicClick} />
            <RepositoryList repositories={data?.topic?.repositories?.edges} />
          </>
      }
    </Container>
  )
}

export default ExchangeRatePage;