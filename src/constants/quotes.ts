import { StaticImageData } from 'next/image';
import KhoaTran from '../assets/images/apply-job/KhoaTran.jpg';

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
    id: 1,
    img: KhoaTran,
    title: 'Spartan is more than just a workplace ',
    text: "Spartan is more than just a workplace; it's a community of passionate and talented individuals who are dedicated to achieving excellence. The collaborative nature of the company fosters innovation and creativity, making every project a rewarding experience. The management team is genuinely invested in the success and well-being of its employees, creating a positive and fulfilling work environment. I'm proud to be a Spartan!",
    author: 'Khoa Tran',
    authorPosition: 'Engineer Manager - Vietnam',
  },
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
    img: KhoaTran,
    title: 'WoooH!',
    text: 'Spartan is more than just a workplace; it`s a community of passionate and talented individuals who are dedicated to achieving excellence. The collaborative nature of the company fosters innovation and creativity, making every project a rewarding experience. The management team is genuinely invested in the success and well-being of its employees, creating a positive and fulfilling work environment. I`m proud to be a Spartan!',
    author: 'Tuan Nguyen',
    authorPosition: 'Vietnam',
  },
];
