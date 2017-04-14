import * as dirObj from 'dir-obj';

const project = dirObj.readDirectory(__dirname + '/..', {
  fileTransform: (file: dirObj.File) => {
    return file.fullpath;
  }
});

console.log(JSON.stringify(project, null, 2));
