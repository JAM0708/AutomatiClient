const fs = require("fs");
const path = require("path");
const mime = require('mime-types');
const AWS = require('aws-sdk');

const config = {
  s3BucketName: 'automati-client-host',
  folderPath: 'dist' // path relative script's location
}

const distFolderPath = path.join(__dirname, config.folderPath);

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
})


const s3 = new AWS.S3({
  signatureVersion: 'v4'
});

fs.readdirSync(distFolderPath).forEach((filename) => {

  const filepath = path.join(distFolderPath, filename);

  fs.readFile(filepath, (error, fileContent) => {
    // if unable to read file contents, throw exception
    if (error) {
      throw error;
    }

   

    // map the current file with the respective MIME type
    const mimeType = mime.lookup(filepath)

    //console.log(fileContent.toString())
    // build S3 PUT object request
    const s3Obj = {
      // set appropriate S3 Bucket path
      Bucket: config.s3BucketName,
      Key: filename,
      Body: fileContent,
      ContentType: mimeType
    }

    // upload file to S3
    s3.putObject(s3Obj, (res, err) => {
      console.log(`Successfully uploaded '${filepath}' with MIME type '${mimeType}'`)
    })


  })

})