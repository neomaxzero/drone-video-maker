
// ffmpeg()
//   .input("sample/002 - 11102020.mov")
//   .audioCodec("aac")
//   .audioBitrate("128k")
//   .videoCodec("libx264")
//   .videoBitrate("4500k")
//   .on("progress", function (progress) {
//     console.log("Processing: " + progress.percent + "% done");
//   })
//   .on("error", function (err) {
//     console.log("an error happened: " + err.message);
//   })
//   .on("end", function () {
//     console.log("file has been converted succesfully");
//   })
//   .output("saved.mp4")
//   .run();