let geodataToMarkers = function(geodata) {
    let places = geodata.query.geosearch;
    let markers = [];
    for(let i=0; i<places.length; i++) {
      place = {
        lat: places[i].lat,
        lng: places[i].lon,
        message: getMessage(places[i].title)
      }
      markers.push(place);
    }
  
    return markers;
}
  
let getMessage = function(title) {
    let url = "http://en.wikipedia.org/wiki/" + title;
    return "<a target='_blank' href='" + url + "'>" + title + "</a>";
}