// Photos shown when a place is picked on the globe, keyed by the place id from places.js.
// Each photo needs a full-size file (max ~1600px) and a small thumb (max ~640px) in src/assets/img/places/.

import jp01 from "../assets/img/places/japan-01.jpg";
import jp01t from "../assets/img/places/japan-01-thumb.jpg";
import jp02 from "../assets/img/places/japan-02.jpg";
import jp02t from "../assets/img/places/japan-02-thumb.jpg";
import jp03 from "../assets/img/places/japan-03.jpg";
import jp03t from "../assets/img/places/japan-03-thumb.jpg";
import jp04 from "../assets/img/places/japan-04.jpg";
import jp04t from "../assets/img/places/japan-04-thumb.jpg";
import jp05 from "../assets/img/places/japan-05.jpg";
import jp05t from "../assets/img/places/japan-05-thumb.jpg";
import jp06 from "../assets/img/places/japan-06.jpg";
import jp06t from "../assets/img/places/japan-06-thumb.jpg";
import jp07 from "../assets/img/places/japan-07.jpg";
import jp07t from "../assets/img/places/japan-07-thumb.jpg";
import jp08 from "../assets/img/places/japan-08.jpg";
import jp08t from "../assets/img/places/japan-08-thumb.jpg";
import jp09 from "../assets/img/places/japan-09.jpg";
import jp09t from "../assets/img/places/japan-09-thumb.jpg";
import jp10 from "../assets/img/places/japan-10.jpg";
import jp10t from "../assets/img/places/japan-10-thumb.jpg";
import jp11 from "../assets/img/places/japan-11.jpg";
import jp11t from "../assets/img/places/japan-11-thumb.jpg";
import jp12 from "../assets/img/places/japan-12.jpg";
import jp12t from "../assets/img/places/japan-12-thumb.jpg";
import au01 from "../assets/img/places/austin-01.jpg";
import au01t from "../assets/img/places/austin-01-thumb.jpg";
import au02 from "../assets/img/places/austin-02.jpg";
import au02t from "../assets/img/places/austin-02-thumb.jpg";
import au03 from "../assets/img/places/austin-03.jpg";
import au03t from "../assets/img/places/austin-03-thumb.jpg";
import au04 from "../assets/img/places/austin-04.jpg";
import au04t from "../assets/img/places/austin-04-thumb.jpg";
import au05 from "../assets/img/places/austin-05.jpg";
import au05t from "../assets/img/places/austin-05-thumb.jpg";
import au06 from "../assets/img/places/austin-06.jpg";
import au06t from "../assets/img/places/austin-06-thumb.jpg";
import ny01 from "../assets/img/places/newyork-01.jpg";
import ny01t from "../assets/img/places/newyork-01-thumb.jpg";
import ny02 from "../assets/img/places/newyork-02.jpg";
import ny02t from "../assets/img/places/newyork-02-thumb.jpg";
import ny03 from "../assets/img/places/newyork-03.jpg";
import ny03t from "../assets/img/places/newyork-03-thumb.jpg";
import ny04 from "../assets/img/places/newyork-04.jpg";
import ny04t from "../assets/img/places/newyork-04-thumb.jpg";
import ny05 from "../assets/img/places/newyork-05.jpg";
import ny05t from "../assets/img/places/newyork-05-thumb.jpg";
import sf01 from "../assets/img/places/sanfrancisco-01.jpg";
import sf01t from "../assets/img/places/sanfrancisco-01-thumb.jpg";
import sf02 from "../assets/img/places/sanfrancisco-02.jpg";
import sf02t from "../assets/img/places/sanfrancisco-02-thumb.jpg";
import sf03 from "../assets/img/places/sanfrancisco-03.jpg";
import sf03t from "../assets/img/places/sanfrancisco-03-thumb.jpg";
import sf04 from "../assets/img/places/sanfrancisco-04.jpg";
import sf04t from "../assets/img/places/sanfrancisco-04-thumb.jpg";
import sf05 from "../assets/img/places/sanfrancisco-05.jpg";
import sf05t from "../assets/img/places/sanfrancisco-05-thumb.jpg";
import sf06 from "../assets/img/places/sanfrancisco-06.jpg";
import sf06t from "../assets/img/places/sanfrancisco-06-thumb.jpg";
import sf07 from "../assets/img/places/sanfrancisco-07.jpg";
import sf07t from "../assets/img/places/sanfrancisco-07-thumb.jpg";
import sf08 from "../assets/img/places/sanfrancisco-08.jpg";
import sf08t from "../assets/img/places/sanfrancisco-08-thumb.jpg";
import sf09 from "../assets/img/places/sanfrancisco-09.jpg";
import sf09t from "../assets/img/places/sanfrancisco-09-thumb.jpg";
import sf10 from "../assets/img/places/sanfrancisco-10.jpg";
import sf10t from "../assets/img/places/sanfrancisco-10-thumb.jpg";
import wl01 from "../assets/img/places/waterloo-01.jpg";
import wl01t from "../assets/img/places/waterloo-01-thumb.jpg";
import wl02 from "../assets/img/places/waterloo-02.jpg";
import wl02t from "../assets/img/places/waterloo-02-thumb.jpg";
import wl03 from "../assets/img/places/waterloo-03.jpg";
import wl03t from "../assets/img/places/waterloo-03-thumb.jpg";
import wl04 from "../assets/img/places/waterloo-04.jpg";
import wl04t from "../assets/img/places/waterloo-04-thumb.jpg";
import wl05 from "../assets/img/places/waterloo-05.jpg";
import wl05t from "../assets/img/places/waterloo-05-thumb.jpg";
import wl06 from "../assets/img/places/waterloo-06.jpg";
import wl06t from "../assets/img/places/waterloo-06-thumb.jpg";
import wl07 from "../assets/img/places/waterloo-07.jpg";
import wl07t from "../assets/img/places/waterloo-07-thumb.jpg";
import wl08 from "../assets/img/places/waterloo-08.jpg";
import wl08t from "../assets/img/places/waterloo-08-thumb.jpg";
import wl09 from "../assets/img/places/waterloo-09.jpg";
import wl09t from "../assets/img/places/waterloo-09-thumb.jpg";
import fm01 from "../assets/img/places/fortmcmurray-01.jpg";
import fm01t from "../assets/img/places/fortmcmurray-01-thumb.jpg";
import fm02 from "../assets/img/places/fortmcmurray-02.jpg";
import fm02t from "../assets/img/places/fortmcmurray-02-thumb.jpg";

export const photosByPlace = {
  fortmcmurray: [
    { src: fm01, thumb: fm01t, caption: "Northern lights over the neighbourhood" },
    { src: fm02, thumb: fm02t, caption: "Summer soccer at sunset" },
  ],
  waterloo: [
    { src: wl09, thumb: wl09t, caption: "The Waterloo sign" },
    { src: wl01, thumb: wl01t, caption: "Waterloo Engineering" },
    { src: wl03, thumb: wl03t, caption: "Dana Porter Library at night" },
    { src: wl02, thumb: wl02t, caption: "Google Kitchener from the ION platform" },
    { src: wl04, thumb: wl04t, caption: "Snow day" },
    { src: wl06, thumb: wl06t, caption: "Tracks out of town" },
    { src: wl07, thumb: wl07t, caption: "Out on the water" },
    { src: wl08, thumb: wl08t, caption: "Late night on campus" },
    { src: wl05, thumb: wl05t, caption: "Late-night walk, empty station" },
  ],
  japan: [
    { src: jp01, thumb: jp01t, caption: "Shibuya Crossing, Tokyo" },
    { src: jp02, thumb: jp02t, caption: "Ginza, Tokyo" },
    { src: jp03, thumb: jp03t, caption: "Tokyo side street at dusk" },
    { src: jp04, thumb: jp04t, caption: "Fushimi Inari, Kyoto" },
    { src: jp05, thumb: jp05t, caption: "Senbon Torii, Fushimi Inari" },
    { src: jp06, thumb: jp06t, caption: "Top of Fushimi Inari at sunset" },
    { src: jp07, thumb: jp07t, caption: "Sunset over Kyoto from Fushimi Inari" },
    { src: jp08, thumb: jp08t, caption: "Kiyomizu-dera, Kyoto" },
    { src: jp09, thumb: jp09t, caption: "Kyoto, with friends" },
    { src: jp10, thumb: jp10t, caption: "Nara Park" },
    { src: jp11, thumb: jp11t, caption: "Dōtonbori, Osaka" },
    { src: jp12, thumb: jp12t, caption: "Somewhere in Japan" },
  ],
  austin: [
    { src: au01, thumb: au01t, caption: "Cloudflare's Austin office" },
    { src: au02, thumb: au02t, caption: "Downtown Austin at sunset" },
    { src: au03, thumb: au03t, caption: "West 6th Street at dusk" },
    { src: au04, thumb: au04t, caption: "Waymos lined up on a rainy night" },
    { src: au05, thumb: au05t, caption: "Game 7 night" },
    { src: au06, thumb: au06t, caption: "The summer crew" },
  ],
  newyork: [
    { src: ny01, thumb: ny01t, caption: "Manhattan from Cloudflare's office at One World Trade Center" },
    { src: ny02, thumb: ny02t, caption: "Times Square at dusk" },
    { src: ny03, thumb: ny03t, caption: "Times Square at night" },
    { src: ny04, thumb: ny04t, caption: "Brooklyn Bridge" },
    { src: ny05, thumb: ny05t, caption: "DUMBO, Brooklyn" },
  ],
  sanfrancisco: [
    { src: sf01, thumb: sf01t, caption: "Touching down at SFO" },
    { src: sf02, thumb: sf02t, caption: "YC Startup School 2026" },
    { src: sf03, thumb: sf03t, caption: "Jensen Huang leaving the stage" },
    { src: sf04, thumb: sf04t, caption: "Sam Altman on the main stage" },
    { src: sf05, thumb: sf05t, caption: "Golden Gate Bridge" },
    { src: sf07, thumb: sf07t, caption: "The Painted Ladies, Alamo Square" },
    { src: sf08, thumb: sf08t, caption: "Looking down from Lombard Street" },
    { src: sf09, thumb: sf09t, caption: "Those San Francisco hills" },
    { src: sf10, thumb: sf10t, caption: "Bougainvillea in the Marina" },
    { src: sf06, thumb: sf06t, caption: "Stanford campus" },
  ],
};
