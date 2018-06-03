var faker = require('faker');
var stochastic = require('stochastic');
var _ = require('lodash');
var mock = require('../holy-spec/mock.json');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

let ev = [];
const now =  (new Date).getTime();

for (i = 0; i < 5; i++) {
  ev = ev.concat(mock.Page.events);
}

// arrival times of events: 1 event per hour over the course of an 24 hour day
// give the number of seconds from the start of the process
const events = stochastic
      .poissP(2, 24, true)
      .map((e, i) => {
        let result = ev[i];

        if (result) {
          result.timestamp = new Date(now + Math.floor(e * 60 * 60 * 1000));
          result.property.name = faker.address.streetAddress();
          result.estimatedCost = faker.commerce.price(); // Math.floor(Math.random() * 1000);
          return result;
        }
      })
      .filter(e => e);
mock.Page.events = events;
mock.Page.profile.firstName = faker.name.firstName();
mock.Page.profile.lastName = faker.name.lastName();
mock.Page.profile.username = faker.internet.userName();
console.log(JSON.stringify(mock));
