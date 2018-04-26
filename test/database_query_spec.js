const expect = require('chai').expect;
const database_query = require('../src/lib/database_query.js')

describe('database_query', function() {
  var db_query
  var result

  beforeEach(function(){
      db_query = database_query.new()
  })

  it ('should retrieve data from the database', function() {
    // Arrange
    db_query.get_req(function('name', 'fake_database.json') {
      // Action
      result = response
      console.log(response)
    })
    // Assert
    expect(result).to.equal('Julian')
  })

  it ('', function() {
    // Arrange
    // Action
    // Assert
  })
})
