import Model, { attr, hasMany } from '@ember-data/model';

export default class TeamModel extends Model {
  @attr('string') name;
  @hasMany('game', { inverse: 'homeTeam' }) homeGames;
  @hasMany('game', { inverse: 'awayTeam' }) awayGames;
}
