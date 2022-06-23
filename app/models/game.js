import Model, { attr, belongsTo } from '@ember-data/model';

export default class GameModel extends Model {
  @belongsTo('team', { inverse: 'homeGames'}) homeTeam;
  @belongsTo('team', { inverse: 'awayGames'}) awayTeam;
  @attr('number') homeGoals;
  @attr('number') awayGoals;
  @attr('date') playedOn;
}

