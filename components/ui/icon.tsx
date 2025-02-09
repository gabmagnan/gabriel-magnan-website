import Image from 'next/image';
import aws_logo from '$/logos/technos/aws.webp';
import docker_logo from '$/logos/technos/docker.webp';
import google_cloud_logo from '$/logos/technos/google-cloud.webp';
import mongodb_logo from '$/logos/technos/mongodb.webp';
import nextjs_logo from '$/logos/technos/nextjs.webp';
import nodejs_logo from '$/logos/technos/nodejs.webp';
import python_logo from '$/logos/technos/python.webp';
import react_js_logo from '$/logos/technos/react-js.webp';
import typescript_logo from '$/logos/technos/typescript.webp';

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
  react: react_js_logo,
  googleCloud: google_cloud_logo,
  python: python_logo,
  mongodb: mongodb_logo,
  nextjs: nextjs_logo,
  docker: docker_logo,
  nodejs: nodejs_logo,
  typescript: typescript_logo,
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
