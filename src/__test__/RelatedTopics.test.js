import { render, screen } from '@testing-library/react';
import RelatedTopics from '../components/RelatedTopics';

const mockRelatedTopicsData = [
    {
        "name": "angular",
        "id": "MDU6VG9waWNhbmd1bGFy",
        "stargazerCount": 43768,
        "__typename": "Topic"
    },
    {
        "name": "react-native",
        "id": "MDU6VG9waWNyZWFjdC1uYXRpdmU=",
        "stargazerCount": 24967,
        "__typename": "Topic"
    },
    {
        "name": "vue",
        "id": "MDU6VG9waWN2dWU=",
        "stargazerCount": 49045,
        "__typename": "Topic"
    }
]
const handleTopicClick = jest.fn({})

test('renders related topics', () => {
    render(<RelatedTopics relatedTopics={mockRelatedTopicsData} handleTopicClick={handleTopicClick} />);
    // sending three related topic in array. each related topic creates a new button so we need to get three button.
    expect(screen.getAllByRole('button')).toHaveLength(3)
});

