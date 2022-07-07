import { render, screen } from '@testing-library/react';
import RelatedTopicButton from '../components/RelatedTopicButton';

const mockRelatedTopicData = {
    "name": "react-native",
    "id": "MDU6VG9waWNyZWFjdC1uYXRpdmU=",
    "stargazerCount": 24967,
    "__typename": "Topic"
}

const handleTopicClick = jest.fn({})

test('render related topic button properly', () => {
    render(<RelatedTopicButton onClick={handleTopicClick} relatedTopic={mockRelatedTopicData}  />);
    expect(screen.getByRole('button')).toBeInTheDocument()
});

