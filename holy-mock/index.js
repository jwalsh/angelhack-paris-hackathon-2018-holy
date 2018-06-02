var faker = require('faker');
var stochastic = require('stochastic');
var _ = require('lodash');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

console.log('mock housing lifecycle events');



const now =  (new Date).getTime();

// arrival times of events: 1 event per hour over the course of an 24 hour day
// give the number of seconds from the start of the process
const events = stochastic
      .poissP(1, 24, true)
      .map(e => {
        return {
          timestamp: new Date(now + Math.floor(e * 60 * 60 * 1000)),
          message: 'event'
        };
      });

console.log(events);
