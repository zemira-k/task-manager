import { storageService } from './generalService/storageService';

export const teamService = {
  query,
  add,
  getById,
  remove,
  update,
};
const entityType = 'team';

function query(filter = null) {
  let teams = storageService.query(entityType);
  if (filter) teams = _filter(teams, filter);
  return teams;
}

function add(team) {
  const newTeam = storageService.post(entityType, team);
  return newTeam;
}

function getById(teamId) {
  const team = storageService.getById(entityType, teamId);
  return team;
}
function remove(teamId) {
  const newTeams = storageService.remove(entityType, teamId);
  return newTeams;
}
function update(team) {
  const updateTeam = storageService.put(entityType, team);
  return updateTeam;
}

function _filter(teams, filter) {
  let filterTeams = teams.filter(
    team =>
      filter.title &&
      team.title === filter.title &&
      ((filter.title && team.title.include(filter.title)) ||
        (filter.color && team.color.include(filter.color)))
  );
  return filterTeams;
}
