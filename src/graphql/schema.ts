import { gql } from "apollo-server-express";

export default gql`
  type Character {
    id: ID!
    rmId: Int!
    name: String!
    status: String
    species: String
    type: String
    gender: String
    origin: String
    image: String
  }

  input CharacterFilter {
    status: String
    species: String
    gender: String
    name: String
    origin: String
    limit: Int
    offset: Int
  }

  type RickAndMortyCharacter {
    id: ID!
    name: String!
    status: String
    species: String
    type: String
    gender: String
    origin: RickAndMortyOrigin
    image: String
  }

  type RickAndMortyOrigin {
    name: String
    url: String
  }

  type RickAndMortyCharacterList {
    info: RickAndMortyInfo
    results: [RickAndMortyCharacter!]!
  }

  type RickAndMortyInfo {
    count: Int
    pages: Int
    next: String
    prev: String
  }

  type Query {
    characters(filter: CharacterFilter): [Character!]!
    character(id: ID!): Character

    rmCharacters(
      page: Int
      name: String
      status: String
      species: String
      type: String
      gender: String
      limit: Int
    ): RickAndMortyCharacterList

    rmCharacter(id: ID!): RickAndMortyCharacter
  }
`;
