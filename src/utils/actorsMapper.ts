import { IActor } from '../interfaces/AllCommonItefaces';
export const actorsMapper = (actors: IActor[]): IActor[] => {
  return actors.map(({ id, character, name, profile_path }) => ({
    id,
    character,
    name,
    profile_path,
  }));
};
