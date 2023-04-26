var inFile = File.openDialog("Choose srt file");
var outFile = new File(inFile.fullName + "_.txt");

parseSRTFile(inFile, outFile);

function parseSRTFile(src, dest) {
  var file = new File(src);
  file.open('r');
  var srtText = file.read();
  file.close();

  var lines = parseSRT(srtText);

  var outputFile = new File(dest);
  outputFile.open('w');
  outputFile.writeln(JSON.stringify(lines, null, 2));
  outputFile.close();
}

function parseSRT(text) {
  var blocks = text.split('\n\n');
  var lines = [];

  for (var i = 0; i < blocks.length; i++) {
    var linesInBlock = blocks[i].split('\n');
    var number = linesInBlock[0];

    var timestamps = linesInBlock[1].split(' --> ');
    var start = timestamps[0];
    var end = timestamps[1];

    var startSeconds = hmsToSeconds(start);
    var endSeconds = hmsToSeconds(end);

    var text = linesInBlock.slice(2).join('\n');

    lines.push({ number: number, start: startSeconds, end: endSeconds, text: text });
  }

  return lines;
}

function hmsToSeconds(time) {
  var parts = time.split(/[:,]/);
  var hours = parseInt(parts[0], 10);
  var minutes = parseInt(parts[1], 10);
  var seconds = parseFloat(parts[2] + '.' + parts[3]);

  return hours * 3600 + minutes * 60 + seconds;
}
