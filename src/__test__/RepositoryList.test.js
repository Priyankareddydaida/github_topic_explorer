import { render, screen } from '@testing-library/react';
import RepositoryList from '../components/RepositoryList';

const mockRepositorysData = [
    {
        "node": {
            "id": "MDEwOlJlcG9zaXRvcnkxNDE3MDM=",
            "description": "Simple object-oriented interface to generate and attach DOM nodes in JavaScript.",
            "name": "dombuilder",
            "stargazerCount": 19,
            "url": "https://github.com/skyzyx/dombuilder",
            "__typename": "Repository"
        },
        "__typename": "RepositoryEdge"
    },
    {
        "node": {
            "id": "MDEwOlJlcG9zaXRvcnk2OTc1MjA=",
            "description": "Server for the MusicBrainz project (website, API, database tools)",
            "name": "musicbrainz-server",
            "stargazerCount": 688,
            "url": "https://github.com/metabrainz/musicbrainz-server",
            "__typename": "Repository"
        },
        "__typename": "RepositoryEdge"
    },
    {
        "node": {
            "id": "MDEwOlJlcG9zaXRvcnkxNTM0OTUz",
            "description": "portfolio site for Mrs. Kitt",
            "name": "amykitt.com",
            "stargazerCount": 2,
            "url": "https://github.com/mkitt/amykitt.com",
            "__typename": "Repository"
        },
        "__typename": "RepositoryEdge"
    }
]

test('renders repository list', () => {
    render(<RepositoryList repositories={mockRepositorysData} />);
    // sending three repository in array. each related topic creates a new header so we need to get three header.
    expect(screen.getAllByRole('heading')).toHaveLength(3)
});

