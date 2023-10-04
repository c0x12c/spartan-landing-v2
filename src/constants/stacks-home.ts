import Java from '@/assets/images/stacks-home/java.svg';
import Kotlin from '@/assets/images/stacks-home/kotlin.svg';
import Swift from '@/assets/images/stacks-home/swift.svg';
import Scala from '@/assets/images/stacks-home/scala.svg';
import CSharp from '@/assets/images/stacks-home/CSharp.svg';
import Go from '@/assets/images/stacks-home/go.svg';
import Rust from '@/assets/images/stacks-home/rust.svg';
import Python from '@/assets/images/stacks-home/python.svg';
import Solidity from '@/assets/images/stacks-home/solidity.svg';
import JavaScript from '@/assets/images/stacks-home/javascript.svg';
import Typescript from '@/assets/images/stacks-home/typescript.svg';

import Micronaut from '@/assets/images/stacks-home/micronaut.svg';
import Echo from '@/assets/images/stacks-home/echo-frame.svg';
import NextJS from '@/assets/images/stacks-home/nextJS.svg';
import Nuxt from '@/assets/images/stacks-home/nuxt.svg';
import FastAPI from '@/assets/images/stacks-home/fastAPI.svg';
import Actix from '@/assets/images/stacks-home/actix.svg';
import Agora from '@/assets/images/stacks-home/agora.svg';
import NodeJS from '@/assets/images/stacks-home/nodeJS.svg';

import Solid from '@/assets/images/stacks-home/solid.svg';
import Twillio from '@/assets/images/stacks-home/twillio.svg';
import CoinMarketCap from '@/assets/images/stacks-home/coinMarketCap.svg';
import Zero from '@/assets/images/stacks-home/zero.svg';
import SendGrid from '@/assets/images/stacks-home/sendGrid.svg';

import AWS from '@/assets/images/stacks-home/amazonWebServices.svg';
import Azure from '@/assets/images/stacks-home/azure.svg';
import GGCloud from '@/assets/images/stacks-home/googleCloud.svg';

import PostgreSQL from '@/assets/images/stacks-home/postgreSQL.svg';
import MySQL from '@/assets/images/stacks-home/mySQL.svg';
import MongoDB from '@/assets/images/stacks-home/mongoDB.svg';
import DynamoDB from '@/assets/images/stacks-home/dynamoDB.svg';
import Scylladb from '@/assets/images/stacks-home/scylladb.svg';
import Redis from '@/assets/images/stacks-home/redis.svg';
import ElasticSearch from '@/assets/images/stacks-home/elasticSearch.svg';

import ApacheFlink from '@/assets/images/stacks-home/apacheFlink.svg';
import ApacheBeam from '@/assets/images/stacks-home/apacheBeam.svg';
import ApacheSpark from '@/assets/images/stacks-home/apacheSpark.svg';
import Kafka from '@/assets/images/stacks-home/kafka.svg';
import GooglePubSub from '@/assets/images/stacks-home/googlePubSub.svg';

import Kubernetes from '@/assets/images/stacks-home/kubernetes.svg';
import Docker from '@/assets/images/stacks-home/docker.svg';
import TerraForm from '@/assets/images/stacks-home/terraform.svg';
import Jenkins from '@/assets/images/stacks-home/jenkins.svg';
import GithubAction from '@/assets/images/stacks-home/githubAction.svg';

import OpenAI from '@/assets/images/stacks-home/openAI.svg';
import PalmLLM from '@/assets/images/stacks-home/palmLLM.svg';

import { StaticImageData } from 'next/image';

type StackType = {
  id: string;
  name: string;
  imgSrc: StaticImageData;
};

type FieldType = {
  id: string;
  name: string;
  stacks: StackType[];
};

export const StacksInHome: FieldType[] = [
  {
    id: 'field-1',
    name: 'Programming Languages',
    stacks: [
      { id: 'stack-1', name: 'Java', imgSrc: Java },
      { id: 'stack-2', name: 'Kotlin', imgSrc: Kotlin },
      { id: 'stack-3', name: 'Swift', imgSrc: Swift },
      { id: 'stack-4', name: 'Scala', imgSrc: Scala },
      { id: 'stack-5', name: 'CSharp', imgSrc: CSharp },
      { id: 'stack-6', name: 'Golang', imgSrc: Go },
      { id: 'stack-7', name: 'Rust', imgSrc: Rust },
      { id: 'stack-45', name: 'Python', imgSrc: Python },
      { id: 'stack-17', name: 'Solidity', imgSrc: Solidity },
      { id: 'stack-8', name: 'JavaScript', imgSrc: JavaScript },
      { id: 'stack-9', name: 'Typescript', imgSrc: Typescript },
    ],
  },
  {
    id: 'field-2',
    name: 'Frameworks',
    stacks: [
      { id: 'stack-10', name: 'Micronaut', imgSrc: Micronaut },
      { id: 'stack-11', name: 'Echo', imgSrc: Echo },
      { id: 'stack-12', name: 'NextJS', imgSrc: NextJS },
      { id: 'stack-13', name: 'Nuxt', imgSrc: Nuxt },
      { id: 'stack-14', name: 'FastAPI', imgSrc: FastAPI },
      { id: 'stack-15', name: 'Actix', imgSrc: Actix },
    ],
  },
  {
    id: 'field-3',
    name: 'Platforms',
    stacks: [
      { id: 'stack-16', name: 'Solid', imgSrc: Solid },
      { id: 'stack-18', name: 'Twillio', imgSrc: Twillio },
      { id: 'stack-19', name: 'CoinMarketCap', imgSrc: CoinMarketCap },
      { id: 'stack-20', name: 'Zero', imgSrc: Zero },
      { id: 'stack-21', name: 'SendGrid', imgSrc: SendGrid },
      { id: 'stack-42', name: 'Agora', imgSrc: Agora },
      { id: 'stack-46', name: 'NodeJS', imgSrc: NodeJS },
    ],
  },
  {
    id: 'field-4',
    name: 'Cloud',
    stacks: [
      { id: 'stack-22', name: 'AWS', imgSrc: AWS },
      { id: 'stack-23', name: 'Azure', imgSrc: Azure },
      { id: 'stack-24', name: 'GGCloud', imgSrc: GGCloud },
    ],
  },
  {
    id: 'field-5',
    name: 'Database',
    stacks: [
      { id: 'stack-25', name: 'PostgreSQL', imgSrc: PostgreSQL },
      { id: 'stack-26', name: 'MySQL', imgSrc: MySQL },
      { id: 'stack-27', name: 'MongoDB', imgSrc: MongoDB },
      { id: 'stack-28', name: 'DynamoDB', imgSrc: DynamoDB },
      { id: 'stack-29', name: 'Scylladb', imgSrc: Scylladb },
      { id: 'stack-30', name: 'Redis', imgSrc: Redis },
      { id: 'stack-31', name: 'ElasticSearch', imgSrc: ElasticSearch },
    ],
  },
  {
    id: 'field-6',
    name: 'Data Processing',
    stacks: [
      { id: 'stack-32', name: 'ApacheFlink', imgSrc: ApacheFlink },
      { id: 'stack-33', name: 'ApacheBeam', imgSrc: ApacheBeam },
      { id: 'stack-34', name: 'ApacheSpark', imgSrc: ApacheSpark },
      { id: 'stack-35', name: 'Kafka', imgSrc: Kafka },
      { id: 'stack-36', name: 'GooglePubSub', imgSrc: GooglePubSub },
    ],
  },
  {
    id: 'field-7',
    name: 'Infrastructures',
    stacks: [
      { id: 'stack-37', name: 'Kubernetes', imgSrc: Kubernetes },
      { id: 'stack-38', name: 'Docker', imgSrc: Docker },
      { id: 'stack-39', name: 'TerraForm', imgSrc: TerraForm },
      { id: 'stack-40', name: 'Jenkins', imgSrc: Jenkins },
      { id: 'stack-41', name: 'GithubAction', imgSrc: GithubAction },
    ],
  },
  {
    id: 'field-8',
    name: 'Artificial Intelligence',
    stacks: [
      { id: 'stack-43', name: 'OpenAI', imgSrc: OpenAI },
      { id: 'stack-44', name: 'PalmLLM', imgSrc: PalmLLM },
    ],
  },
];
