/* eslint-disable @typescript-eslint/no-explicit-any */
import Kotlin from '@/assets/images/stacks/Kotlin-full.svg';
import Java from '@/assets/images/stacks/Java-full.svg';
import Rust from '@/assets/images/stacks/Rust-full.svg';
import Go from '@/assets/images/stacks/Go-full.svg';
import Docker from '@/assets/images/stacks/Docker-full.svg';
import TerraForm from '@/assets/images/stacks/Terraform-full.svg';
import Kubernetes from '@/assets/images/stacks/Kubernetes-full.svg';
import Android from '@/assets/images/stacks/Android-full.svg';
import Apple from '@/assets/images/stacks/ios-full.svg';
import Flutter from '@/assets/images/stacks/Flutter-full.svg';
import Spark from '@/assets/images/stacks/Spark-full.svg';
import Flink from '@/assets/images/stacks/Flink-full.svg';
import AWS from '@/assets/images/stacks/AWS-full.svg';
import Azure from '@/assets/images/stacks/Azure-full.svg';
import GGCloud from '@/assets/images/stacks/GGCloud-full.svg';
import React from '@/assets/images/stacks/React-full.svg';
import Next from '@/assets/images/stacks/Next-full.svg';

export type StackType = {
  id: string;
  name: string;
  imgSrc: any;
};

export const Stacks: StackType[] = [
  { id: 'tech-1', name: '[Java]', imgSrc: Java },
  { id: 'tech-2', name: '[kotlin]', imgSrc: Kotlin },
  { id: 'tech-3', name: '[PYTHON]', imgSrc: Rust },
  { id: 'tech-4', name: '[GOLAND]', imgSrc: Go },
  { id: 'tech-5', name: '[Docker]', imgSrc: Docker },
  { id: 'tech-6', name: '[TerraForm]', imgSrc: TerraForm },
  { id: 'tech-7', name: '[Kubernetes]', imgSrc: Kubernetes },
  { id: 'tech-8', name: '[Android]', imgSrc: Android },
  { id: 'tech-9', name: '[Apple]', imgSrc: Apple },
  { id: 'tech-10', name: '[Flutter]', imgSrc: Flutter },
  { id: 'tech-11', name: '[Spark]', imgSrc: Spark },
  { id: 'tech-12', name: '[Flink]', imgSrc: Flink },
  { id: 'tech-13', name: '[AWS]', imgSrc: AWS },
  { id: 'tech-14', name: '[Azure]', imgSrc: Azure },
  { id: 'tech-15', name: '[GGCloud]', imgSrc: GGCloud },
  { id: 'tech-16', name: '[React]', imgSrc: React },
  { id: 'tech-17', name: '[NextJS]', imgSrc: Next },
];
