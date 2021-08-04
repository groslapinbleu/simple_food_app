import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer xi3VFLvvcUHUrg_fp4c0_lKul8ZY-9G1A22W7kBYctLPnlH63OfHdZeeMQoP1KPNpbIsG4N4VN_1BXqfZOJifYUqIs3OyTRh78m5_l1O0cyHb_QSyyPi2PaUjecsYHYx',
  },
});
