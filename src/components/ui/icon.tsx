import Image from 'next/image';
import aws_logo from '$/logos/technos/aws.webp';
import docker_logo from '$/logos/technos/docker.webp';
import express_js_logo from '$/logos/technos/expressjs.webp';
import firebase_logo from '$/logos/technos/firebase.webp';
import flutter_logo from '$/logos/technos/flutter.webp';
import github_logo from '$/logos/technos/github.webp';
import github_dark_logo from '$/logos/technos/github_dark.webp';
import gitlab_logo from '$/logos/technos/gitlab.webp';
import google_cloud_logo from '$/logos/technos/google-cloud.webp';
import google_tag_manager_logo from '$/logos/technos/google-tag-manager.webp';
import graphql_logo from '$/logos/technos/graphql.webp';
import javascript from '$/logos/technos/javascript.webp';
import mongodb_logo from '$/logos/technos/mongodb.webp';
import mysql from '$/logos/technos/mysql.webp';
import nextjs_logo from '$/logos/technos/nextjs.webp';
import nextjs_dark_logo from '$/logos/technos/nextjs_dark.webp';
import nodejs_logo from '$/logos/technos/nodejs.webp';
import php_logo from '$/logos/technos/php.webp';
import python_logo from '$/logos/technos/python.webp';
import react_js_logo from '$/logos/technos/react-js.webp';
import typescript_logo from '$/logos/technos/typescript.webp';
import vercel_logo from '$/logos/technos/vercel.webp';

type IconProps = {
  icon: IconName;
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
};

export type IconName = keyof typeof iconPaths;

export const iconPaths = {
  aws: aws_logo,
  reactjs: react_js_logo,
  react_native: react_js_logo,
  googleCloud: google_cloud_logo,
  python: python_logo,
  mongodb: mongodb_logo,
  nextjs: nextjs_logo,
  nextjs_dark: nextjs_dark_logo,
  docker: docker_logo,
  nodejs: nodejs_logo,
  typescript: typescript_logo,
  vercel: vercel_logo,
  javascript: javascript,
  mysql: mysql,
  gitlab: gitlab_logo,
  github: github_logo,
  github_dark: github_dark_logo,
  php: php_logo,
  flutter: flutter_logo,
  firebase: firebase_logo,
  graphql: graphql_logo,
  expressjs: express_js_logo,
  tag_manager: google_tag_manager_logo,
} as const;

const Icon = ({ icon, className, width = 0, height = 0, alt }: IconProps) => {
  return (
    <Image
      alt={alt || icon}
      className={className}
      height={height}
      src={iconPaths[icon]}
      width={width}
    />
  );
};

export default Icon;
