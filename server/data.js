export const data = [
  {
    title: "Risk",
    image_url:
      "https://s3-ap-southeast-2.amazonaws.com/testbeamvideos/Posters/risk.jpg",
  },
  {
    title: "Mad Dog Morgan",
    image_url:
      "https://s3-ap-southeast-2.amazonaws.com/testbeamvideos/Posters/mad-dog-morgan.jpg",
  },
  {
    title: "Emily In Japan",
    image_url:
      "https://s3-ap-southeast-2.amazonaws.com/testbeamvideos/Posters/emily-in-japan.jpg",
  },
  {
    title: "That Good Night",
    image_url:
      "https://s3-ap-southeast-2.amazonaws.com/testbeamvideos/Posters/that-good-night.jpg",
  },
  {
    title: "Harry Seidler - Modernist",
    image_url:
      "https://s3-ap-southeast-2.amazonaws.com/testbeamvideos/Posters/harry-seidler-modernist.jpg",
  },
  {
    title: "The Human Scale",
    image_url:
      "https://s3-ap-southeast-2.amazonaws.com/testbeamvideos/Posters/the-human-scale.jpg",
  },
  {
    title: "Nazareth Cinema Lady",
    image_url:
      "https://s3-ap-southeast-2.amazonaws.com/testbeamvideos/Posters/nazareth-cinema-lady.jpg",
  },
  {
    title: "Childs Pose",
    image_url:
      "https://s3-ap-southeast-2.amazonaws.com/testbeamvideos/Posters/childs-pose.jpg",
  },
  {
    title: "The Minister",
    image_url:
      "https://s3-ap-southeast-2.amazonaws.com/testbeamvideos/Posters/the-minister.jpg",
  },
  {
    title: "The Hammer",
    image_url:
      "https://s3-ap-southeast-2.amazonaws.com/testbeamvideos/Posters/the-hammer.jpg",
  },
  {
    title: "A United Kingdom",
    image_url:
      "https://s3-ap-southeast-2.amazonaws.com/testbeamvideos/Posters/a-united-kingdom.jpg",
  },
  {
    title: "Being Evel",
    image_url:
      "https://s3-ap-southeast-2.amazonaws.com/testbeamvideos/Posters/being-evel.jpg",
  },
  {
    title: "The Ground We Won",
    image_url:
      "https://s3-ap-southeast-2.amazonaws.com/testbeamvideos/Posters/the-ground-we-won.jpg",
  },
  {
    title: "Death of a Superhero",
    image_url:
      "https://s3-ap-southeast-2.amazonaws.com/testbeamvideos/Posters/death-of-a-superhero.jpg",
  },
  {
    title: "Hell and Back Again",
    image_url:
      "https://s3-ap-southeast-2.amazonaws.com/testbeamvideos/Posters/hell-and-back-again.jpg",
  },
  {
    title: "Mr Hulot's Holiday",
    image_url:
      "https://s3-ap-southeast-2.amazonaws.com/testbeamvideos/Posters/mr-hulots-holiday.jpg",
  },
  {
    title: "Concealed",
    image_url:
      "https://s3-ap-southeast-2.amazonaws.com/testbeamvideos/Posters/concealed.jpg",
  },
  {
    title: "Bad Blood",
    image_url:
      "https://s3-ap-southeast-2.amazonaws.com/testbeamvideos/Posters/bad-blood.jpg",
  },
  {
    title: "In The Dog House",
    image_url:
      "https://s3-ap-southeast-2.amazonaws.com/testbeamvideos/Posters/in-the-dog-house.jpg",
  },
  {
    title: "Bikpela Bagarap Big Damage",
    image_url:
      "https://s3-ap-southeast-2.amazonaws.com/testbeamvideos/Posters/bikpela-bagarap-big-damage.jpg",
  },
];

export const shuffleData = () => {
  for (let i = data.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  return data;
};
