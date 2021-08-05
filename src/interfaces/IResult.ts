export default interface IResult {
  alias: string;
  categories: [
    {
      alias: string;
      title: string;
    }
  ];
  coordinates: {
    latitude: number;
    longitude: number;
  };
  display_phone: string;
  distance: number;
  id: string;
  image_url: string;
  name: string;
  price: string;
  rating: number;
  review_count: number;
  photos: string[];
  //TODO: finir cette liste
}
