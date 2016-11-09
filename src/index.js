/**
 * GPX parser class
 * @class GPX
 */
export default class GPX{

  /**
   * GPX constructor.
   * @param {string} gpxContent String of gpx XML data.
   * @constructs GPX
   */
  constructor( gpxContent ){
    /**
     * string of gpx XML data.
     * @member GPX#gpxContent
     */
    this.gpxContent = gpxContent;

    /**
     * The parsed gpx string into a DOM object.
     * @member GPX#xmlDoc
     */
    this.xmlDoc = new DOMParser().parseFromString( this.gpxContent, 'application/xml' );

    /**
     * Object of all trackpoints in the gpx DOM.
     * @member GPX#trkpts
     */
    this.trkpts = this.xmlDoc.querySelectorAll( 'trkpt' );

    /**
     * All trackpoints as an Array
     * @member GPX#trackpoints
     */
    this.trackpoints = this.createJsonFromGpxDom();

    if( this.trackpoints.length === 0 ){
      throw new Error( 'This file has no trackpoints (trkpt)' );
    }
  }

  /**
   * @typedef TrackPoint
   * @type Object
   * @property {number} lon The lon coordinate of the trackpoint
   * @property {number} lat The lat coordinate of the trackpoint
   * @property {number} elevation The elevation in meters of the trackpoint
   * @property {string} time The time of the trackpoint
   */

  /**
   * Loops over gpx DOM and returns array of objects
   * @return {TrackPoint} The trackpoint data
   */
  createJsonFromGpxDom(){
    let trackpoints = [];

    for( let trkpt = 0; trkpt < this.trkpts.length; trkpt++ ){
      let point = this.trkpts[ trkpt ],
          lon = parseFloat( point.getAttribute( 'lon' ) ),
          lat = parseFloat( point.getAttribute( 'lat' ) ),
          elevation = ( point.querySelector( 'ele' ) ) ? point.querySelector( 'ele' ).textContent : this.getAverageElevation(),
          time = point.querySelector( 'time' ).textContent;

      trackpoints.push({
        lon: lon,
        lat: lat,
        elevation: elevation,
        time: time
      } );
    };

    return trackpoints;
  }

  /**
   * Return average elevation for the whole gpx track.
   * @return {Number} The average elevation
   */
  getAverageElevation(){
    var elevation = 0,
        devideBy = 0;

    for( let trkpt = 0; trkpt < this.trkpts.length; trkpt++ ){
      let point = this.trkpts[ trkpt ];

      if( point.querySelector( 'ele' ) ){
        elevation += parseFloat( point.querySelector( 'ele' ).textContent );
        devideBy++;
      }
    }

    return elevation / devideBy;
  }

  /**
   * @typedef Duration
   * @type Object
   * @property {date} start The start time of the run as a Date object
   * @property {date} end The end time of the run as a Date object
   * @property {number} totalMS The duration of the run in miliseconds
   * @property {string} total The duration of the run in human readable form
   */

  /**
   * Returns the duration of the run.
   * @return {Duration} The duration information of the run.
   */
  duration(){
    let start = new Date( this.trackpoints[ 0 ].time ),
      end = new Date( this.trackpoints[ this.trackpoints.length - 1 ].time ),
      timeDiff = Math.abs( end.getTime() - start.getTime() ),
      total = this.millisecondsToTime( timeDiff );

    return {
      start: start,
      end: end,
      totalMS: timeDiff,
      total: total
    };
  }

  /**
   * Returns formatted time for milliseconds.
   * @param {string} duration Duration in milliseconds
   * @return {string} Readable time
   */
  millisecondsToTime( duration ){
    let seconds = parseInt( ( duration / 1000 ) % 60, 10 ),
      minutes = parseInt( ( duration / ( 1000 * 60 ) ) % 60, 10 ),
      hours = parseInt( ( duration / ( 1000 * 60 * 60 ) ) % 24, 10 ),
      days = parseInt( duration / ( 1000 * 60 * 60 * 24 ), 10 ),
      hoursDays = parseInt( days * 24, 10 );

    hours += hoursDays;
    hours = ( hours < 10 ) ? '0' + hours : hours;
    minutes = ( minutes < 10 ) ? '0' + minutes : minutes;
    seconds = ( seconds < 10 ) ? '0' + seconds : seconds;
    return ( hours === '00' ) ? minutes + ':' + seconds : hours + ':' + minutes + ':' + seconds;
  }

  /**
   * @typedef Pace
   * @type Object
   * @property {number} minutes The minutes part of the pace time.
   * @property {number} seconds The seconds part of the pace time.
   */

  /**
   * Returns pace of the run.
   * @param {number} duration Duration in milliseconds.
   * @param {number} distance Distance in kilometers.
   * @return {Pace} The Pace
   */
  pace( duration = this.duration().totalMS, distance = this.distance() ){
    let minutes = new Date( duration / distance ).getUTCMinutes(),
      seconds = new Date( duration / distance ).getUTCSeconds();

    return {
      minutes: ( minutes < 10 ) ? '0' + minutes : minutes,
      seconds: ( seconds < 10 ) ? '0' + seconds : seconds
    };
  }

  /**
   * @typedef Elevation
   * @type Object
   * @property {object} elevation The minutes part of the pace time.
   * @property {number} max The max elevation of the route.
   * @property {number} min The min elevation of the route.
   * @property {number} gain Elevation gained during run.
   * @property {number} loss Elevation lost during run.
   */

  /**
   * Returns elevation info of the run
   * @return {Elevation} The Elevation information object
   */
  elevation(){
    let eleForMinMax = [],
      richElevation = [],
      gain = 0, loss = 0,
      startTime = new Date( this.trackpoints[ 0 ].time ).getTime(),
      dist = 0;

    for( let i = 0; i < this.trackpoints.length - 1; i++ ){
      let diff = this.trackpoints[ i + 1 ].elevation - this.trackpoints[ i ].elevation,
        time = new Date( this.trackpoints[ i + 1 ].time ).getTime(),
        timeDiff = Math.abs( time - startTime );

      dist += this.calcDistanceBetweenPoints( this.trackpoints[ i ], this.trackpoints[ i + 1 ] );

      if( diff < 0 ){
        loss += diff;
      }

      if( diff > 0 ){
        gain += diff;
      }

      eleForMinMax.push( this.trackpoints[ i ].elevation );
      richElevation.push( { elevation: this.trackpoints[ i ].elevation, time: this.millisecondsToTime( timeDiff ), dist: dist } );
    }

    return {
      elevation: richElevation,
      max: Math.max.apply( null, eleForMinMax ),
      min: Math.min.apply( null, eleForMinMax ),
      loss: loss,
      gain: gain
    };
  }

  /**
   * Returns distance of the run
   * @return {number} distance in kilometers.
   */
  distance(){
    let distanceInKm = 0;

    for( let i = 0; i < this.trackpoints.length - 1; i++ ){
      distanceInKm += this.calcDistanceBetweenPoints( this.trackpoints[ i ], this.trackpoints[ i + 1 ] );
    }

    return distanceInKm;
  }

  /**
   * Returns distance betwene points
   * @param {TrackPoint} wp1 Object with trackpoint info
   * @param {TrackPoint} wp2 Object with trackpoint info
   * @return {number} distance Distance between the points.
   */
  calcDistanceBetweenPoints( wp1, wp2 ){
    let point1 = {
        lat: wp1.lat * ( Math.PI / 180 ),
        lon: wp1.lon * ( Math.PI / 180 ),
        alt: wp1.elevation / 1000
      },
      point2 = {
        lat: wp2.lat * ( Math.PI / 180 ),
        lon: wp2.lon * ( Math.PI / 180 ),
        alt: wp2.elevation / 1000
      },
      dp = 2 * Math.asin( Math.sqrt( Math.pow( Math.sin( ( point1.lat - point2.lat ) / 2 ), 2 ) + Math.cos( point1.lat ) * Math.cos( point2.lat ) * Math.pow( Math.sin( ( point1.lon - point2.lon ) / 2 ), 2 ) ) ),
      d = dp * 6366,
      h = Math.sqrt( Math.pow( d, 2 ) + Math.pow( point2.alt - point1.alt, 2 ) );

    return h;
  }
}
