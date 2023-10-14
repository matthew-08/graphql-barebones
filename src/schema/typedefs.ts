import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Artist {
    id: ID!
    name: String!
    genre: String!
  }

  type Album {
    id: ID!
    title: String!
    genre: String!
    artist: Artist
  }

  input ArtistQueryFilter {
    id: [ID!]
    genre: [String!]
    artist: [String!]
  }

  input ArtistQueryInput {
    filter: ArtistQueryFilter
  }

  type Query {
    artists(input: ArtistQueryInput): [Artist]
  }
`;
