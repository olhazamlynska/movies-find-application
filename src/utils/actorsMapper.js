export const actorsMapper = actors => {
  return actors.map(({ id, character, name, profile_path: profilePath }) => ({
    id,
    character,
    name,
    profilePath,
  }));
};
