import { gql } from "@apollo/client";

// Get Characters
export const GET_CHARACTERS = gql`
  query getCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
        }
        location {
          id
          name
        }
        image
        episode {
          id
          name
        }
        created
      }
    }
  }
`;

// Get Character
export const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      created
    }
  }
`;

// Get Locations
export const GET_LOCATIONS = gql`
  query getLocations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        type
        dimension
        created
        residents {
          id
          name
        }
      }
    }
  }
`;

// Get Location
export const GET_LOCATION = gql`
  query getLocation($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
      }
      created
    }
  }
`;

// Get Episodes
export const GET_EPISODES = gql`
  query getEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        air_date
        episode
        characters {
          id
          name
        }
        created
      }
    }
  }
`;

// Get Episode
export const GET_EPISODE = gql`
  query GET_EPISODE($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      created
    }
  }
`;
