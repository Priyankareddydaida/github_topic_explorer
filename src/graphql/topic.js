import { gql } from '@apollo/client'

export const GET_TOPIC = gql`
    query getTopic($name : String!) {
        topic(name: $name) {
          name
          id
          stargazerCount
          relatedTopics {
            name
            id
            stargazerCount
          }
          repositories(first: 10) {
            edges {
              node {
                id
                description
                name
                stargazerCount
                url
              }
            }
          }
        }
    }
`