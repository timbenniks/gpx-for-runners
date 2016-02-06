# GPX parser for runners
This is a simple GPX parser for runners who want to parse their gpx files from Nike+, Garmin connect or similar services. The parser only works with trackpoints for now.

## How to use...
The module expects a string of gpx data. It does not have a fetch feature.

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
    <name>Paris 14
     Running</name>
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

const distance = gpx.distance();
// 4.87939601482932

const pace = gpx.pace();
// "06:03"

const elevation = gpx.elevation();
//{
//  elevation: [{
//    dist: 0.000731177171930792,
//    elevation: 73,
//    time: "00:01"
// },{
//    dist: 0.005157667126616718
//    elevation: 73
//    time: "00:03"
//  }
//  ...
//  ],
//  min: 63,
//  max: 79.4000015258789,
//  gain: 58.4000244140625,
//  loss: -57.60002136230469
//}

const duration = gpx.duration();
//{
//  start: Mon Aug 03 2015 21:07:54 GMT+0200 (CEST) (instance of Date),
//  end: Mon Aug 03 2015 21:37:27 GMT+0200 (CEST) (instance of Date),
//  totalMS: 1773000,
//  total: "29:33"
//}
```

## Development
You need to have node and npm installed to be able to work on this code.

### Installation
`npm install`

### Tests
Opens browser as it needs the DOMParser().

`npm run test`

### Dev
`npm run dev`

### Build
`npm run build`