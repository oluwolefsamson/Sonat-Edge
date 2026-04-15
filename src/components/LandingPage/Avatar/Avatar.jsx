import { AvatarCircles } from "../magicui/avatar-circles";

const blackManAvatar =
  "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_an_old_black_man.jpg";
const whiteWomanAvatar =
  "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_woman_in_white_(15082718530).jpg";
const blackWomanAvatar =
  "https://commons.wikimedia.org/wiki/Special:FilePath/Black_woman_(10584108825).jpg";
const whiteManAvatar =
  "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_Galen_Clark,%20the_first_white_man_in_Yosemite_Valley.jpg";

const avatars = [
  {
    imageUrl: blackManAvatar,
    profileUrl: "https://commons.wikimedia.org/wiki/File:Portrait_of_an_old_black_man.jpg",
  },
  {
    imageUrl: whiteWomanAvatar,
    profileUrl:
      "https://commons.wikimedia.org/wiki/File:Portrait_of_woman_in_white_(15082718530).jpg",
  },
  {
    imageUrl: blackWomanAvatar,
    profileUrl: "https://commons.wikimedia.org/wiki/File:Black_woman_(10584108825).jpg",
  },
  {
    imageUrl: whiteManAvatar,
    profileUrl: "https://commons.wikimedia.org/wiki/File:Portrait_of_Galen_Clark,_the_first_white_man_in_Yosemite_Valley.jpg",
  },
];

export function AvatarCirclesDemo() {
  return <AvatarCircles numPeople={99} avatarUrls={avatars} />;
}
