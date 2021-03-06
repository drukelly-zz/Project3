const knex = require('../config/connection.js')

class Team {
  constructor (table = 'baseball') {
    this.table = table
  }
  // Count number of each position
  findPosition () {
    return knex.select('position')
      .count('*')
      .from(this.table)
      .groupBy('position')
  }
  // Find all in table
  findAll (table) {
    return knex.select()
      .table(table)
  }
  // Selects all players who are on the current team
  currentTeam () {
    return knex.select()
      .table(this.table)
      .where('on_team', true)
  }
  // Updates statistics for players who were selected for the team
  update (values) {
    return knex(this.table)
      .where('id', values.id)
      .update({
        wins: values.wins,
        losses: values.losses,
        era: values.era,
        batting_average: values.batting_average,
        so: values.so,
        hr: values.hr,
        hits: values.hits,
        sb: values.sb
      })
  }
  //   Adds a new player to the team
  addPlayer (values) {
    console.log(values)
    return knex(values.sport)
      .returning('id')
      .insert({
        name: values.name,
        image: values.image,
        jersey_number: values.jersey_number,
        position: values.position
      })
  }
  addToTeam (where, values) {
    return knex(this.table).where(where)
      .update(values)
  }
  removePlayer (id) {
    return knex(this.table)
      .where('id', id)
      .del()
  }
  reset () {
    return knex(this.table)
      .truncate()
  }
  picked (id) {
    return knex.select()
      .table(this.table)
      .where('id', id)
  }
  active (where, values) {
    return knex(this.table)
      .where(where)
      .update(values)
  }
}

class HockeyTeam {
  constructor (table = 'hockey') {
    this.table = table
  }
  // Updates statistics for players who were selected for the team
  update (values) {
    return knex(this.table)
      .where('id', values.id)
      .update({
        wins: values.wins,
        losses: values.losses,
        assists: values.assists,
        goals_scored: values.goals_scored
      })
  }
  picked (id) {
    return knex.select()
      .table(this.table)
      .where('id', id)
  }
  active (where, values) {
    return knex(this.table)
      .where(where)
      .update(values)
  }
}

class BasketballTeam {
  constructor (table = 'basketball') {
    this.table = table
  }
  // Updates statistics for players who were selected for the team
  update (values) {
    return knex(this.table)
      .where('id', values.id)
      .update({
        rebounds: values.rebounds,
        field_goals: values.field_goals,
        ast: values.ast,
        pts: values.pts
      })
  }
  picked (id) {
    return knex.select()
      .table(this.table)
      .where('id', id)
  }

  active (where, values) {
    return knex(this.table)
      .where(where)
      .update(values)
  }
}

module.exports = {
  Team: new Team(),
  HockeyTeam: new HockeyTeam(),
  BasketballTeam: new BasketballTeam()
}
