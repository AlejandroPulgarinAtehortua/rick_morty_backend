import { IResolvers } from "@graphql-tools/utils";
import Character from "../models/character";
import { findCharacters } from "../services/charService";
import axios from "axios";

const RM_API = "https://rickandmortyapi.com/api/character";

const resolvers: IResolvers = {
  Query: {
    characters: async (_: any, { filter }: any) => {
      return findCharacters(filter);
    },
    character: async (_: any, { id }: any) => {
      return Character.findByPk(id);
    },
    rmCharacters: async (_: any, args: any) => {
      const params = new URLSearchParams();
      Object.entries(args).forEach(([key, value]) => {
        if (value !== undefined && value !== null)
          params.append(key, String(value));
      });
      const url = `${RM_API}?${params.toString()}`;
      const { data } = await axios.get(url);
      return data;
    },
    rmCharacter: async (_: any, { id }: any) => {
      const { data } = await axios.get(`${RM_API}/${id}`);
      return data;
    },
  },
};

export default resolvers;
