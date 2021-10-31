const fs = require('fs');
const unzipper = require('unzipper');
const parseString = require('xml2js').parseString;

let data = 'EkycXML';

let buff = new Buffer(data, 'base64');
fs.writeFileSync('FileName.zip', buff);

(async () => {
    try {
      const directory = await unzipper.Open.file('./FileName.zip');
      const extracted = await directory.files[0].buffer('ShareCode');
      parseString(extracted.toString(), function (err, result) {
          console.log(result.OfflinePaperlessKyc.UidData[0].Poa[0]['$']);
      });
    } catch(e) {
      console.log(e);
    }
  })();


