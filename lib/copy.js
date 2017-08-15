var Promise = require("bluebird"),
    fs = Promise.promisifyAll(require('fs-extra'));


function getit(project){
  return fs.copyAsync('project', project,{clobber: true})
    .then(function(err){
      if (err) return console.error(err)
    })
}

module.exports = getit;