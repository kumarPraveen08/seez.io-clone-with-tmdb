import { GoHome, GoStop } from "react-icons/go";
import { IoPlayOutline } from "react-icons/io5";
import { BiSlideshow } from "react-icons/bi";
import { BsCollection, BsStopwatch } from "react-icons/bs";
import { AiOutlineInfoCircle, AiOutlineEye } from "react-icons/ai";
import { LiaDiscord, LiaCalendarCheckSolid } from "react-icons/lia";

export const menu = [
  { id: 1, name: "Explore", path: "/", icon: <GoHome /> },
  { id: 1, name: "Movies", path: "/movies/popular", icon: <IoPlayOutline /> },
  { id: 1, name: "Tv Shows", path: "/tv/popular", icon: <BiSlideshow /> },
  { id: 1, name: "Collections", path: "/collection", icon: <BsCollection /> },
];

export const misc = [
  { id: 1, name: "Help", path: "/help", icon: <AiOutlineInfoCircle /> },
  { id: 1, name: "Follow", path: "/", icon: <LiaDiscord /> },
];

export const user_menu = [
  { id: 1, name: "Watching", path: "/watching", icon: <AiOutlineEye /> },
  { id: 1, name: "Planned", path: "/planned", icon: <BsStopwatch /> },
  {
    id: 1,
    name: "Completed",
    path: "/completed",
    icon: <LiaCalendarCheckSolid />,
  },
  { id: 1, name: "Dropped", path: "/dropped", icon: <GoStop /> },
];

export const data = [
  {
    id: 976573,
    poster_path: "/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
    release_date: "2023-06-14",
    title: "Elemental",
    vote_average: 7.8,
  },
  {
    id: 667538,
    poster_path: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    release_date: "2023-06-06",
    title: "Transformers: Rise of the Beasts",
    vote_average: 7.5,
  },
  {
    id: 346698,
    poster_path: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    release_date: "2023-07-19",
    title: "Barbie",
    vote_average: 7.4,
  },
  {
    id: 298618,
    poster_path: "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    release_date: "2023-06-13",
    title: "The Flash",
    vote_average: 7,
  },
  {
    id: 615656,
    poster_path: "/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
    release_date: "2023-08-02",
    title: "Meg 2: The Trench",
    vote_average: 6.9,
  },
  {
    id: 884605,
    poster_path: "/4K7gQjD19CDEPd7A9KZwr2D9Nco.jpg",
    release_date: "2023-06-15",
    title: "No Hard Feelings",
    vote_average: 7.1,
  },
  {
    id: 1006462,
    poster_path: "/mvjqqklMpHwOxc40rn7dMhGT0Fc.jpg",
    release_date: "2023-07-14",
    title: "The Flood",
    vote_average: 6.9,
  },
  {
    id: 614479,
    poster_path: "/d07phJqCx6z5wILDYqkyraorDPi.jpg",
    release_date: "2023-07-05",
    title: "Insidious: The Red Door",
    vote_average: 6.9,
  },
  {
    id: 709631,
    poster_path: "/cGXFosYUHYjjdKrOmA0bbjvzhKz.jpg",
    release_date: "2023-07-19",
    title: "Cobweb",
    vote_average: 6.8,
  },
  {
    id: 457332,
    poster_path: "/zsbolOkw8RhTU4DKOrpf4M7KCmi.jpg",
    release_date: "2023-07-06",
    title: "Hidden Strike",
    vote_average: 7.1,
  },
  {
    id: 565770,
    poster_path: "/lZ2sOCMCcGaPppaXj0Wiv0S7A08.jpg",
    release_date: "2023-08-16",
    title: "Blue Beetle",
    vote_average: 6.9,
  },
  {
    id: 1083862,
    poster_path: "/qayga07ICNDswm0cMJ8P3VwklFZ.jpg",
    release_date: "2023-06-22",
    title: "Resident Evil: Death Island",
    vote_average: 7.7,
  },
  {
    id: 1008042,
    poster_path: "/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
    release_date: "2023-07-26",
    title: "Talk to Me",
    vote_average: 7.2,
  },
  {
    id: 1040148,
    poster_path: "/kgrLpJcLBbyhWIkK7fx1fM4iSvf.jpg",
    release_date: "2023-06-28",
    title: "Ruby Gillman, Teenage Kraken",
    vote_average: 7.6,
  },
  {
    id: 813477,
    poster_path: "/9dTO2RygcDT0cQkawABw4QkDegN.jpg",
    release_date: "2023-03-17",
    title: "Shin Kamen Rider",
    vote_average: 7.1,
  },
  {
    id: 872585,
    poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    release_date: "2023-07-19",
    title: "Oppenheimer",
    vote_average: 8.3,
  },
  // {
  //   id: 496450,
  //   poster_path: "/bBON9XO9Ek0DjRwMBnJNCwC96Cd.jpg",
  //   release_date: "2023-07-05",
  //   title: "Miraculous: Ladybug & Cat Noir, The Movie",
  //   vote_average: 7.9,
  // },
  // {
  //   id: 459003,
  //   poster_path: "/eeJjd9JU2Mdj9d7nWRFLWlrcExi.jpg",
  //   release_date: "2023-03-02",
  //   title: "Mavka: The Forest Song",
  //   vote_average: 7.4,
  // },
  // {
  //   id: 455476,
  //   poster_path: "/qW4crfED8mpNDadSmMdi7ZDzhXF.jpg",
  //   release_date: "2023-04-27",
  //   title: "Knights of the Zodiac",
  //   vote_average: 6.7,
  // },
  // {
  //   id: 1143190,
  //   poster_path: "/4XLZS2xvdv5rxizzTUVREtRyw95.jpg",
  //   release_date: "2023-07-21",
  //   title: "Fear the Night",
  //   vote_average: 6.7,
  // },
];

export const providers = [
  {
    id: 1,
    name: "amazon prime",
    img: "https://justrightstudioz.com/wp-content/uploads/2021/12/amazon.jpg",
    path: "/amazon_prime/movies/popular",
  },
  {
    id: 2,
    name: "paramount",
    img: "https://www.alliance4creativity.com/wp-content/uploads/2021/12/paramountplus-2022.jpg",
    path: "/paramount/movies/popular",
  },
  {
    id: 3,
    name: "netflix",
    img: "https://www.alliance4creativity.com/wp-content/uploads/2021/06/net.jpg",
    path: "/netflix/movies/popular",
  },
  {
    id: 4,
    name: "hotstar",
    img: "https://justrightstudioz.com/wp-content/uploads/2021/12/hotstar.jpg",
    path: "/hotstar/movies/popular",
  },
  {
    id: 5,
    name: "sonyliv",
    img: "https://justrightstudioz.com/wp-content/uploads/2021/12/sony-liv.jpg",
    path: "/sonyliv/movies/popular",
  },
  {
    id: 6,
    name: "hulu",
    img: "https://www.alliance4creativity.com/wp-content/uploads/2021/06/hulu.jpg",
    path: "/hulu/movies/popular",
  },
  {
    id: 7,
    name: "voot",
    img: "https://cdn.dotpe.in/longtail/item_thumbnails/7065862/8Uq8V3Hy.webp",
    path: "/voot/movies/popular",
  },
];

export const user = {
  name: "praveen prajapati",
  email: "user@email.com",
  password: "123456",
  items: [
    {
      id: 1,
      type: "movie",
      data: {
        id: 496450,
        poster_path: "/bBON9XO9Ek0DjRwMBnJNCwC96Cd.jpg",
        release_date: "2023-07-05",
        title: "Miraculous: Ladybug & Cat Noir, The Movie",
        vote_average: 7.9,
      },
    },
    {
      id: 1,
      type: "movie",
      data: {
        id: 459003,
        poster_path: "/eeJjd9JU2Mdj9d7nWRFLWlrcExi.jpg",
        release_date: "2023-03-02",
        title: "Mavka: The Forest Song",
        vote_average: 7.4,
      },
    },
    {
      id: 1,
      type: "movie",
      data: {
        id: 1143190,
        poster_path: "/4XLZS2xvdv5rxizzTUVREtRyw95.jpg",
        release_date: "2023-07-21",
        title: "Fear the Night",
        vote_average: 6.7,
      },
    },
    {
      id: 1,
      type: "tv",
      data: {
        id: 94605,
        poster_path: "/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
        release_date: "2021-07-21",
        title: "Arcane",
        vote_average: 8.7,
      },
    },
  ],
};

export const cast = {
  id: 1,
  name: "Liam Cunningham",
  bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nobis a non aspernatur debitis repellat, sed ipsam natus necessitatibus deserunt eveniet magnam harum nihil illum. Cupiditate laboriosam earum odio quia?",
  birthplace: "India",
  dob: "2001-12-01",
  credits: "24",
  social: "instagram.com",
  homepage: "www.example.com",
  img: "https://image.tmdb.org/t/p/w300/iPx1s7EuBEmty7MXdKSBpEBsGYT.jpg",
};

export const casts = [
  {
    id: 1,
    name: "Liam Cunningham",
    role: "role name",
    img: "https://image.tmdb.org/t/p/w300/iPx1s7EuBEmty7MXdKSBpEBsGYT.jpg",
  },
  {
    id: 2,
    name: "Liam Cunningham",
    role: "role name",
    img: "https://image.tmdb.org/t/p/w300/iPx1s7EuBEmty7MXdKSBpEBsGYT.jpg",
  },
  {
    id: 3,
    name: "Liam Cunningham",
    role: "role name",
    img: "https://image.tmdb.org/t/p/w300/iPx1s7EuBEmty7MXdKSBpEBsGYT.jpg",
  },
  {
    id: 4,
    name: "Liam Cunningham",
    role: "role name",
    img: "https://image.tmdb.org/t/p/w300/iPx1s7EuBEmty7MXdKSBpEBsGYT.jpg",
  },
  {
    id: 5,
    name: "Liam Cunningham",
    role: "role name",
    img: "https://image.tmdb.org/t/p/w300/iPx1s7EuBEmty7MXdKSBpEBsGYT.jpg",
  },
  {
    id: 6,
    name: "Liam Cunningham",
    role: "role name",
    img: "https://image.tmdb.org/t/p/w300/iPx1s7EuBEmty7MXdKSBpEBsGYT.jpg",
  },
  {
    id: 7,
    name: "Liam Cunningham",
    role: "role name",
    img: "https://image.tmdb.org/t/p/w300/iPx1s7EuBEmty7MXdKSBpEBsGYT.jpg",
  },
  // {
  //   id: 8,
  //   name: "Liam Cunningham",
  //   role: "role name",
  //   img: "https://image.tmdb.org/t/p/w300/iPx1s7EuBEmty7MXdKSBpEBsGYT.jpg",
  // },
  // {
  //   id: 9,
  //   name: "Liam Cunningham",
  //   role: "role name",
  //   img: "https://image.tmdb.org/t/p/w300/iPx1s7EuBEmty7MXdKSBpEBsGYT.jpg",
  // },
  // {
  //   id: 10,
  //   name: "Liam Cunningham",
  //   role: "role name",
  //   img: "https://image.tmdb.org/t/p/w300/iPx1s7EuBEmty7MXdKSBpEBsGYT.jpg",
  // },
  // {
  //   id: 11,
  //   name: "Liam Cunningham",
  //   role: "role name",
  //   img: "https://image.tmdb.org/t/p/w300/iPx1s7EuBEmty7MXdKSBpEBsGYT.jpg",
  // },
];

export const movieGenres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export const tvGenres = [
  {
    id: 10759,
    name: "Action & Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 10762,
    name: "Kids",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10763,
    name: "News",
  },
  {
    id: 10764,
    name: "Reality",
  },
  {
    id: 10765,
    name: "Sci-Fi & Fantasy",
  },
  {
    id: 10766,
    name: "Soap",
  },
  {
    id: 10767,
    name: "Talk",
  },
  {
    id: 10768,
    name: "War & Politics",
  },
  {
    id: 37,
    name: "Western",
  },
];
