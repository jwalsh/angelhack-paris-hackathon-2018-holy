var faker = require('faker');
var stochastic = require('stochastic');
var _ = require('lodash');
var mock = require('../holy-spec/mock.json');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties


const now =  (new Date).getTime();

// arrival times of events: 1 event per hour over the course of an 24 hour day
// give the number of seconds from the start of the process
const events = stochastic
      .poissP(1, 24, true)
      .map((e, i) => {
        let result = mock.Page.events[i];
        if (result) {
          result.timestamp = new Date(now + Math.floor(e * 60 * 60 * 1000));
          return result;
        }
      })
      .filter(e => e);
mock.Page.events = events;

console.log(JSON.stringify(mock));
