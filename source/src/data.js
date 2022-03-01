import doom from './images/games/doom.jpg';
import diablo from "./images/games/diablo.jpg"
import muppets from "./images/games/muppets.png"
import powerpete from "./images/games/powerpete.jpg"
import ringsofpower from "./images/games/ringsofpower.jpg"
import robocop from "./images/games/robocop.jpg"
import secondsamurai from "./images/games/secondsamurai.jpg"
import socerersgirls from "./images/games/socerersgirls.jpg"
import Indianapolis from "./images/games/Indianapolis.jpg"
import stormlord from "./images/games/Stormlordinlay.jpg"
import tutankham from "./images/games/tutankham.jpg"
import minecraft from "./images/games/minecraft.png"
import darksouls from "./images/games/darksouls.jpg"
import dota from "./images/games/dota.png"
import warcraft from "./images/games/warcraft.jpg"
import gothic from "./images/games/gothic.jpg"
import tzar from "./images/games/tzar.jpg"
import cs from "./images/games/cs.jpg"
import thief from "./images/games/thief.jpg"
import civ from "./images/games/civ.png"
import harry from "./images/games/harry.png"
import dungeon from "./images/games/dungeon.jpg"
import fear from "./images/games/fear.jpg"
import pacman from "./images/games/pacman.png"

const data = [
  {
    id: 1,
    name: 'Doom',
    img: doom,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum id leo et maximus. Cras blandit maximus erat. Etiam rutrum egestas consectetur.",
    isFavourited: false,
    isInCart: false,
  },
  {
      id: 2,
      name: "Diablo 2",
      img: diablo,
      description: "Nullam sed massa nec risus feugiat fringilla. In volutpat ante neque, vel volutpat ex elementum bibendum. Mauris blandit eros vel sodales fermentum. Nunc iaculis pulvinar justo, non efficitur dui sodales vitae.",
      isFavourited: false,
      isInCart: false,
  },
  {
    id: 3,
    name: "Minecraft",
    img: minecraft,
    description: "Minecraft is a sandbox video game developed by the Swedish video game developer Mojang Studios. The game was created by Markus Notch Persson in the Java programming language.",
    isFavourited: false,
    isInCart: false,
},

  {
      id: 4,
      name: "Power Pete",
      img: powerpete,
      description: "Vivamus purus massa, semper ut porttitor ut, porttitor vitae massa. Pellentesque magna leo, dignissim ac massa quis, condimentum tristique leo.",
      isFavourited: false,
      isInCart: false,
  },
  {
      id: 5,
      name: "Rings of Power",
      img: ringsofpower,
      description: "Quisque tempus venenatis ex sit amet luctus. Vivamus tincidunt libero odio, sit amet efficitur nunc vulputate non.",
      isFavourited: false,
      isInCart: false,
  },
  {
      id: 6,
      name: "RoboCop",
      img: robocop,
      description: "Vestibulum congue ullamcorper dignissim. Sed vitae euismod arcu. Nunc ornare lectus et feugiat malesuada. Morbi posuere pellentesque est ac pulvinar. Etiam sodales, enim ut pretium dictum, turpis orci pharetra magna, id molestie sapien augue et enim.",
      isFavourited: false,
      isInCart: false,
  },
  {
      id: 7,
      name: "Second Samurai",
      img: secondsamurai,
      description: "Aenean eget metus condimentum, tempus nisi eu, pharetra nibh. Donec in congue mauris.",
      isFavourited: false,
      isInCart: false,
  },
  {
      id: 8,
      name: "Socerers Girls",
      img: socerersgirls,
      description: "Vestibulum non euismod turpis. Cras ultricies vestibulum tincidunt. Ut commodo, sem eu dapibus cursus, arcu lectus hendrerit libero, eget ullamcorper lacus lacus sed velit.",
      isFavourited: false,
      isInCart: false,
  },
  {
      id: 9,
      name: "Indianapolis",
      img: Indianapolis,
      description: "Suspendisse sit amet cursus purus. Mauris eu efficitur tellus. Pellentesque dignissim orci at nunc accumsan, eget rutrum risus varius. Nullam vestibulum velit in magna facilisis ultrices.",
      isFavourited: false,
      isInCart: false,
  },
  {
      id: 10,
      name: "Storm Lord",
      img: stormlord,
      description: "Etiam in nibh in nibh convallis ullamcorper id a mauris. Donec feugiat massa est, et interdum odio tincidunt vitae. Proin ex turpis, commodo eget libero a, varius tempus ipsum.",
      isFavourited: false,
      isInCart: false,
  },
  {
      id: 11,
      name: "Tutankham",
      img: tutankham,
      description: "Cras commodo accumsan sem, id laoreet diam lacinia sed. Nam vel erat euismod, malesuada libero ac, fringilla nisi. Donec rutrum rutrum ligula, eget tincidunt nulla.",
      isFavourited: false,
      isInCart: false,
  },
  {
    id: 13,
    name: "Muppets Inside",
    img: muppets,
    description: "Praesent vestibulum, magna non malesuada laoreet, arcu massa pharetra sem, in luctus lorem turpis ut purus. Etiam tincidunt mi ac venenatis gravida. Pellentesque dapibus consectetur sapien, in porta ex ultricies nec.",
    isFavourited: false,
    isInCart: false,
},
{
    id: 14,
    name: "Dark Souls",
    img: darksouls,
    description: "Dark Souls[c] is a 2011 action role-playing game developed by FromSoftware and published by Namco Bandai Games. A spiritual successor to FromSoftware's Demon's Souls, the game is the second installment in the Souls series.",
    isFavourited: false,
    isInCart: false,
},
{
    id: 15,
    name: "Dota 2",
    img: dota,
    description: "Dota 2 is a multiplayer online battle arena video game developed and published by Valve.",
    isFavourited: false,
    isInCart: false,
},
{
    id: 16,
    name: "Warcraft 3",
    img: warcraft,
    description: "Warcraft III: Reign of Chaos is a high fantasy real-time strategy computer video game developed and published by Blizzard Entertainment released in July 2002.",
    isFavourited: false,
    isInCart: false,
},
{
    id: 17,
    name: "Tzar",
    img: tzar,
    description: "Tzar: The Burden of the Crown, also known as simply Tzar, is a real-time strategy game for Microsoft Windows published by TalonSoft and developed by the Bulgarian game developer company Haemimont Games.",
    isFavourited: false,
    isInCart: false,
},
{
    id: 18,
    name: "Gothic",
    img: gothic,
    description: "Gothic is a fantasy-themed action role-playing video game for Microsoft Windows developed by the German company Piranha Bytes. Gothic was well received by critics.",
    isFavourited: false,
    isInCart: false,
},
{
    id: 19,
    name: "CS",
    img: cs,
    description: "Counter Strike 1.6 is the most popular online team shooter in history, and for good reason. More than a decade on it is still the best and the most",
    isFavourited: false,
    isInCart: false,
},
{
    id: 20,
    name: "Thief",
    img: thief,
    description: "Thief: The Dark Project is a 1998 first-person stealth video game developed by Looking Glass Studios and published by Eidos Interactive",
    isFavourited: false,
    isInCart: false,
},
{
    id: 21,
    name: "Civilization 3",
    img: civ,
    description: "Sid Meier's Civilization III is the third installment of the Sid Meier's Civilization turn-based strategy video game series.",
    isFavourited: false,
    isInCart: false,
},
{
    id: 22,
    name: "Harry Potter",
    img: harry,
    description: "Harry Potter and the Chamber of Secrets is an action-adventure video game. It is based on the 2002 film of the same name.",
    isFavourited: false,
    isInCart: false,
},
{
    id: 23,
    name: "Dungeon Siege",
    img: dungeon,
    description: "Set in the pseudo-medieval kingdom of Ehb, the high fantasy game follows a young farmer and his companions as they journey to defeat an invading force.",
    isFavourited: false,
    isInCart: false,
},
{
    id: 24,
    name: "Fear",
    img: fear,
    description: "F.E.A.R.: First Encounter Assault Recon is a survival horror first-person shooter video game developed by Monolith Productions and published by Vivendi Universal Games and Warner Bros.",
    isFavourited: false,
    isInCart: false,
},
{
    id: 25,
    name: "Fear",
    img: pacman,
    description: "Pac-Man is a Japanese video game franchise published, developed and owned by Bandai Namco Entertainment.",
    isFavourited: false,
    isInCart: false,
},
];

export default data;



