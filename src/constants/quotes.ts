import { StaticImageData } from 'next/image';
import KhoaTran from '../assets/images/apply-job/KhoaTran.jpg';
import Ihor from '../assets/images/apply-job/Ihor.png';

export interface QuoteType {
  id: number;
  img: StaticImageData;
  title: string;
  text: string;
  author: string;
  authorPosition: string;
}

export const quotes = [
  {
    id: 2,
    img: KhoaTran,
    title: 'The best',
    text: 'Spartan is more than just a workplace; it`s a community of passionate and talented individuals who are dedicated to achieving excellence. The collaborative nature of the company fosters innovation and creativity, making every project a rewarding experience. The management team is genuinely invested in the success and well-being of its employees, creating a positive and fulfilling work environment. I`m proud to be a Spartan!',
    author: 'Nhi Tran',
    authorPosition: 'Vietnam',
  },
  {
    id: 3,
    img: KhoaTran,
    title: 'Amazing',
    text: 'Spartan is more than just a workplace; it`s a community of passionate and talented individuals who are dedicated to achieving excellence. The collaborative nature of the company fosters innovation and creativity, making every project a rewarding experience. The management team is genuinely invested in the success and well-being of its employees, creating a positive and fulfilling work environment. I`m proud to be a Spartan!',
    author: 'Quyen Nguyen',
    authorPosition: 'Vietnam',
  },
  {
    id: 4,
    img: Ihor,
    title: 'Fueling growth and inspiration: My journey with Spartan',
    text: 'Embarking on my journey with Spartan, I can undoubtedly affirm that this isn’t merely a job for me—it’s a passion that continually fuels my personal and professional growth. Working at Spartan has allowed me to tap into an enriching reservoir of experiences that equip me with diverse skills and enhance my adaptability in dynamic environments. The amalgamation of technology, innovation, and problem-solving here aligns perfectly with my fervor for continual learning. \\n However, what truly sets this experience apart is the team. Collaborating with such talented, driven individuals is nothing short of inspirational. They encouraged me to push my boundaries, fostering mutual respect and shared learning. I’m happy to be a part of the Spartans. ',
    author: 'Ihor Mysak',
    authorPosition: 'Software Engineer - Ukraine',
  },
  {
    id: 1,
    img: KhoaTran,
    title: 'Spartan is more than just a workplace',
    text: "Spartan is more than just a workplace; it's a community of passionate and talented individuals who are dedicated to achieving excellence. The collaborative nature of the company fosters innovation and creativity, making every project a rewarding experience. The management team is genuinely invested in the success and well-being of its employees, creating a positive and fulfilling work environment. I'm proud to be a Spartan!",
    author: 'Khoa Tran',
    authorPosition: 'Engineer Manager - Vietnam',
  },
];
