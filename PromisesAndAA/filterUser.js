const { filterDirMyPromise } = require('./filterdir')
 
 
async function tester() {
  try {
    const files = await filterDirMyPromise("Folder1", ".js")
    console.log(files)
  } catch (err) {
    console.log(err)
  }
}
async function testerSeq() {
    try {
      const files = await filterDirMyPromise("Folder1", ".js")
      const files2 = await filterDirMyPromise("Folder2", ".js")
      const files3 = await filterDirMyPromise("Folder3", ".js")
      const files4 = await filterDirMyPromise("Folder4", ".js")
      const files5 = await filterDirMyPromise("Folder5", ".js")
      console.log(files,files2,files3,files4,files5)
    } catch (err) {
      console.log(err)
    }
  }
  async function testerParallel() {
    try {
      const p1 = filterDirMyPromise("Folder1", ".js")
      const p2 = filterDirMyPromise("Folder2", ".js")
      const p3 = filterDirMyPromise("Folder3", ".js")

      const p4 = filterDirMyPromise("Folder4", ".js")
      const p5 = filterDirMyPromise("Folder5", ".js")
      Promise.all([p1,p2,p3,p4,p5]).then((results)=>console.log(results));
          } catch (err) {
      console.log(err)
    }
  }
tester()
testerSeq();
testerParallel();