import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Artist {
    id: Id!
    name: String!
    genre: String!
  }

  type Album {
    id: Id!
    title: String!
    genre: String!
    artist: Artist
  }

  type ArtistQueryFilter {
    id: [Id!]!
    genre: [String]!
    artist: [String]!
  }

  input ArtistQueryInput {
    filter: ArtistQueryFilter
  }

  type Query {
    artist(input: ArtistQueryInput): Artist
  }
`;
