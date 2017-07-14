const assert  = require('assert');
const request = require('supertest');
const Models  = require('../models');
const app     = require('../server');

let Match;
before("Setup test Database", function(done) {
  let newMatch = {
    winner: "Isaac",
    loser: "Davis"
  };

  Models.match.create(newMatch).then( function(match) {
    Match = match;
    done();
  });
});

after("Destroy test Database", function(done) {
  Models.match.destroy({
    where: {}
  }).then(function() {
    done();
  });
});

describe("POST /matches", function() {
  it("can be created", function(done) {
    request(app)
      .post('/matches')
      // .expect()
      // .expect()
      // .expect( function(res) {
      //
      // })
      .end( function(err, res) {
        if(err) {
          done(err)
        } else {
          done();
        }
      });
  });
});

describe("GET /matches", function() {
  it("can be retrieve", function(done) {
    request(app)
      .get('/matches')
      // .expect()
      // .expect()
      // .expect( function(res) {
      //
      // })
      .end( function(err, res) {
        if(err) {
          done(err)
        } else {
          done();
        }
      });
  });
});

describe("GET /matches/:id", function() {
  it("can be retrieve", function(done) {
    request(app)
      .get('/matches/' + Match.id)
      // .expect()
      // .expect()
      // .expect( function(res) {
      //
      // })
      .end( function(err, res) {
        if(err) {
          done(err)
        } else {
          done();
        }
      });
  });
});
