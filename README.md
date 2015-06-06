# About

[![Build Status](https://api.travis-ci.org/fauria/mongoose-sanitizer.svg)](https://api.travis-ci.org/fauria/mongoose-sanitizer)

Simple plugin for [Mongoose](https://github.com/LearnBoost/mongoose) that sainitizes document fields before saving them. Makes use of [Google Caja's HTML Sanitizer](https://github.com/theSmaw/Caja-HTML-Sanitizer) to perform the sanitization.

<table>
<tr>
<td>Package</td><td>mongoose-sanitizer</td>
</tr>
<tr>
<td>Description</td>
<td>Sanitize Mongoose documents.</td>
</tr>
<tr>
<td>Node Version</td>
<td>stable, iojs</td>
</tr>
</table>

## Installation

`npm install --save mongoose-sanitizer`

## Usage

```javascript
var sanitizerPlugin = require('mongoose-sanitizer');

MyMongooseSchema.plugin(sanitizerPlugin);
```

When saving a document generated with MyMongooseSchema, mongoose-sanitizer will automatically iterate over every field, sanitizing them before storage in the database.

An optional options object can be passed with the following attributes:

- `skip`
  - Default is `[]`
  - Array indicating which fields should be excluded from being sanitized. If omitted or empty, every field in the document will be sanitized.
  
- `include`
  - Default is `[]`
  - Array indicating which fields should be sanitized. If omitted or empty, every field in the document will be sanitized.
   

## License

(The MIT License)

Copyright (c) 2013 Fer Uría &lt;fauria@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.