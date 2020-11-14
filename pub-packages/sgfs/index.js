
const the                     = require('@cdr0/the');

module.exports = the('sgfs_Filesystem', () => {
  return new Filesystem();
})();

const { Dir }     = require('./lib/dir');
const { File }    = require('./lib/file');

function Filesystem() {
  let self = this;

  self.Dir    = Dir;
  self.File   = File;

  self.dirs   = {};
  self.files  = {};
  self.cache  = {};

  self.dir = function(path) {

    // Do we already have it?
    if (self.dirs[path]) {
      return self.dirs[path];
    }

    // No, must make a new one
    const result = new Dir(self, path);
    self.dirs[result.path] = result;

    return result;
  };

  self.file = function(path) {

    // Do we already have it?
    if (self.files[path]) {
      return self.files[path];
    }

    // No, must make a new one
    const result = new File(self, path);
    self.files[result.path] = result;

    return result;
  };
}
