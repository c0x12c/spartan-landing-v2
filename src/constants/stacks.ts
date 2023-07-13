// import Kotlin from '@/assets/images/stacks/Kotlin.svg';
// import Java from '@/assets/images/stacks/Java-full.svg';
// import Rust from '@/assets/images/stacks/Rust-full.svg';
// import Go from '@/assets/images/stacks/Go-full.svg';
// import Docker from '@/assets/images/stacks/Docker-full.svg';
// import TerraForm from '@/assets/images/stacks/Terraform-full.svg';
// import Kubernetes from '@/assets/images/stacks/Kubernetes-full.svg';
// import Android from '@/assets/images/stacks/Android-full.svg';
// import Apple from '@/assets/images/stacks/ios-full.svg';
// import Flutter from '@/assets/images/stacks/Flutter-full.svg';
// import Spark from '@/assets/images/stacks/Spark-full.svg';
// import Flink from '@/assets/images/stacks/Flink-full.svg';
// import AWS from '@/assets/images/stacks/AWS-full.svg';
// import Azure from '@/assets/images/stacks/Azure-full.svg';
// import GGCloud from '@/assets/images/stacks/GGCloud-full.svg';
// import React from '@/assets/images/stacks/React-full.svg';
// import Next from '@/assets/images/stacks/Next-full.svg';
import { StaticImageData } from 'next/image';

export type StackType = {
  id: string;
  name: string;
  imgSrc: StaticImageData;
};

export type FieldType = {
  id: string;
  name: string;
  stacks: StackType[];
};

export const Fields: FieldType[] = [
  // {
  //   id: 'field-1',
  //   name: 'Back end',
  //   stacks: [
  //     { id: 'stack-1', name: 'Java', imgSrc: Java },
  //     { id: 'stack-2', name: 'Kotlin', imgSrc: Kotlin },
  //     { id: 'stack-3', name: 'Rust', imgSrc: Rust },
  //     { id: 'stack-4', name: 'Golang', imgSrc: Go },
  //   ],
  // },
  // {
  //   id: 'field-2',
  //   name: 'Front end',
  //   stacks: [
  //     { id: 'stack-5', name: 'React', imgSrc: React },
  //     { id: 'stack-6', name: 'NextJS', imgSrc: Next },
  //   ],
  // },
  // {
  //   id: 'field-3',
  //   name: 'DevOps',
  //   stacks: [
  //     { id: 'stack-7', name: 'Docker', imgSrc: Docker },
  //     { id: 'stack-8', name: 'TerraForm', imgSrc: TerraForm },
  //     { id: 'stack-9', name: 'Kubernetes', imgSrc: Kubernetes },
  //   ],
  // },
  // {
  //   id: 'field-4',
  //   name: 'Mobile',
  //   stacks: [
  //     { id: 'stack-10', name: 'Android', imgSrc: Android },
  //     { id: 'stack-11', name: 'iOS', imgSrc: Apple },
  //     { id: 'stack-12', name: 'Flutter', imgSrc: Flutter },
  //   ],
  // },
  // {
  //   id: 'field-5',
  //   name: 'Big Data',
  //   stacks: [
  //     { id: 'stack-13', name: 'Spark', imgSrc: Spark },
  //     { id: 'stack-14', name: 'Flink', imgSrc: Flink },
  //   ],
  // },
  // {
  //   id: 'field-6',
  //   name: 'Cloud',
  //   stacks: [
  //     { id: 'stack-15', name: 'AWS', imgSrc: AWS },
  //     { id: 'stack-16', name: 'Azure', imgSrc: Azure },
  //     { id: 'stack-17', name: 'Google Cloud', imgSrc: GGCloud },
  //   ],
  // },
];
