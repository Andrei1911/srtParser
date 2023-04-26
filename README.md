# SRT File Parser

This repository contains a simple ExtendScript to parse SubRip (SRT) subtitle files and return a JavaScript object containing the parsed data.

## How to Use

1. Copy the contents of the refactored script (found in the `srt-parser.jsx` file) into a new ExtendScript file.
2. Run the script in your desired Adobe application, such as Adobe After Effects or Premiere Pro.
3. When prompted, choose an SRT file that you want to parse.
4. The script will generate an output file with the same name as the input file but with an added `_` and a `.txt` extension (e.g., `input_.txt`), containing the parsed data in JSON format.

## Function Overview

- `parseSRTFile(src, dest)`: Handles opening the input file, reading its contents, and writing the parsed data to the output file.
- `parseSRT(text)`: Takes the raw text from the SRT file, splits it into blocks, and extracts the timestamp and subtitle text, appending this information to an array of lines.
- `hmsToSeconds(time)`: Converts a timestamp string in the format "hh:mm:ss,ms" to decimal seconds for easier data manipulation.

## Output Format

The output file will contain an array of JavaScript objects, with each object representing a single subtitle entry. Each object has the following properties:

- `number`: The subtitle entry's index number.
- `start`: The start time of the subtitle entry in decimal seconds.
- `end`: The end time of the subtitle entry in decimal seconds.
- `text`: The subtitle text.

Example output:

```json
[
  {
    "number": "1",
    "start": 0.5,
    "end": 2.3,
    "text": "This is the first subtitle."
  },
  {
    "number": "2",
    "start": 3.7,
    "end": 6.4,
    "text": "This is the second subtitle."
  }
]
```

## License

This project is available under the [MIT License](LICENSE).

## Contributing

Feel free to submit pull requests, create issues, or suggest improvements.
