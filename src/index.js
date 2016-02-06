/**
 * GPX parser class
 * @class GPX
 */
export default class GPX{

  /**
   * GPX constructor.
   * @param {string} gpxContent - The xml string of the GPX file.
   * @constructs GPX
   */
  constructor( gpxContent ){
    /**
     * The xml string of the GPX file.
     * @member GPX#gpxContent
     */
    this.gpxContent = gpxContent;

    /**
     * The parsed gpxContent into DOM.
     * @member GPX#xmlDoc
     */
    this.xmlDoc = new DOMParser().parseFromString( this.gpxContent, 'application/xml' );

    /**
     * Object of all trkpts in the gpx DOM.
     * @member GPX#trkpts
     */
    this.trkpts = this.xmlDoc.querySelectorAll( 'trkpt' );

    /**
     * Object of all waypoints as Array
     * @member GPX#waypoints
     */
    this.waypoints = this.createJsonFromGpxDom();

    if( this.waypoints.length === 0 ){
      throw new Error( 'This file has no trackpointns (trkpt)' );
    }
  }

  /**
   * Loops over xml dom and returns array of objects
   * @return {object} lon, lat, elevation, time
   */
  createJsonFromGpxDom(){
    let waypoints = [];

    for( let trkpt = 0; trkpt < this.trkpts.length; trkpt++ ){
      waypoints.push( {
        lon: parseFloat( this.trkpts[ trkpt ].getAttribute( 'lon' ) ),
        lat: parseFloat( this.trkpts[ trkpt ].getAttribute( 'lat' ) ),
        elevation: parseFloat( this.trkpts[ trkpt ].querySelector( 'ele' ).textContent ),
        time: this.trkpts[ trkpt ].querySelector( 'time' ).textContent
      } );
    };

    return waypoints;
  }

  /**
   * Returns the duration of the run.
   * @return {object} start, end, totalMS, total
   */
  duration(){
    let start = new Date( this.waypoints[ 0 ].time ),
      end = new Date( this.waypoints[ this.waypoints.length - 1 ].time ),
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
   * Returns humanized time for miliseconds.
   * @param {string} duration - Duration in milliseconds
   * @return {string} time
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
   * Returns pace of the run.
   * @param {number} duration - Duration in milliseconds.
   * @param {number} distance - Distance in kilometers.
   * @return {object} minutes, seconds
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
   * Returns elevation of the run
   * @return {object} elevation (time, dist, elevation), max, min, loss, gain
   */
  elevation(){
    let eleForMinMax = [],
      richElevation = [],
      gain = 0, loss = 0,
      startTime = new Date( this.waypoints[ 0 ].time ).getTime(),
      dist = 0;

    for( let i = 0; i < this.waypoints.length - 1; i++ ){
      let diff = this.waypoints[ i + 1 ].elevation - this.waypoints[ i ].elevation,
        time = new Date( this.waypoints[ i + 1 ].time ).getTime(),
        timeDiff = Math.abs( time - startTime );

      dist += this.calcDistanceBetweenPoints( this.waypoints[ i ], this.waypoints[ i + 1 ] );

      if( diff < 0 ){
        loss += diff;
      }

      if( diff > 0 ){
        gain += diff;
      }

      eleForMinMax.push( this.waypoints[ i ].elevation );
      richElevation.push( { elevation: this.waypoints[ i ].elevation, time: this.millisecondsToTime( timeDiff ), dist: dist } );
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

    for( let i = 0; i < this.waypoints.length - 1; i++ ){
      distanceInKm += this.calcDistanceBetweenPoints( this.waypoints[ i ], this.waypoints[ i + 1 ] );
    }

    return distanceInKm;
  }

  /**
   * Returns distance betwene points
   * @param {node} wp1 - DOM node from gpx content
   * @param {node} wp2 - DOM node from gpx content
   * @return {number} distance
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
