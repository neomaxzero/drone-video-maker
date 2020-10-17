console.log("Welcome to Drone video maker!");

const fs = require("fs");
const path = require("path");

const ffmpeg = require("fluent-ffmpeg");
const videoQuality = require('./videoQuality');

const INPUT_DIRECTORY = "sample";

const directoryPath = path.join(__dirname, INPUT_DIRECTORY);

fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  //listing all files using forEach
  files.forEach(function (file) {

    const fileWOExtension = file.substring(0, file.length - 4);
    const q = videoQuality.high;

    ffmpeg()
      .input(`${INPUT_DIRECTORY}/${file}`)
      .audioCodec("aac")
      .audioBitrate("64k")
      .videoCodec("libx264")
      .addOutputOption('-pix_fmt yuv420p')
      .videoBitrate(q)
      .on("progress", function (progress) {
        console.log("Processing: " + progress.percent + "% done");
      })
      .on('codecData', function(data) {
        console.log('Input is ' + data.audio + ' audio ' +
          'with ' + data.video + ' video');
      })
      .on("error", function (err) {
        console.log("an error happened: " + err.message);
      })
      .on("end", function () {
        console.log("file has been converted succesfully");
      })
      .output(`converted/${fileWOExtension}-${q}.mp4`)
      .run();
  });
});
