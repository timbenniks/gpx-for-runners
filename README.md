# GPX parser for runners
This is a simple GPX parser for runners who want to parse gpx files from Nike+, Garmin connect or any other running service. The parser works as long as there are trackpoints in the GPX file.

## Functions
* Duration
* Pace
* Elevation
* Distance

## Examples
```js
import gpx from 'gpx-for-runners';

const gpxContent = `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="Garmin Connect"
  xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd http://www.garmin.com/xmlschemas/GpxExtensions/v3 http://www.garmin.com/xmlschemas/GpxExtensionsv3.xsd http://www.garmin.com/xmlschemas/TrackPointExtension/v1 http://www.garmin.com/xmlschemas/TrackPointExtensionv1.xsd"
  xmlns="http://www.topografix.com/GPX/1/1"
  xmlns:gpxtpx="http://www.garmin.com/xmlschemas/TrackPointExtension/v1"
  xmlns:gpxx="http://www.garmin.com/xmlschemas/GpxExtensions/v3" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <metadata>
    <link href="connect.garmin.com">
      <text>Garmin Connect</text>
    </link>
    <time>2015-08-03T19:07:54.000Z</time>
  </metadata>
  <trk>
    <name>Paris 14 Running</name>
    <trkseg>
      <trkpt lon="2.3212804924696684" lat="48.83561119437218">
        <ele>73.0</ele>
        <time>2015-08-03T19:07:54.000Z</time>
      </trkpt>
      <trkpt lon="2.3212731163948774" lat="48.83561563678086">
        <ele>73.0</ele>
        <time>2015-08-03T19:07:55.000Z</time>
      </trkpt>
    </trkseg>
  </trk>
</gpx>`;

const gpx = new gpx( gpxContent );

console.log( gpx.distance(), gpx.pace(), gpx.elevation(), gpx.distance() );
```

## Development
You need to have node and npm installed to be able to work on this code.

```bash
npm install
```

```bash
// tests
npm run test

// dev
npm run dev

// build
npm run build
```
