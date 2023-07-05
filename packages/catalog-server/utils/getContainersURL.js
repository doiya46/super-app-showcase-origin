const getContainersURL = ({
  hostname = 'https://super-app-showcase-cjc7cos1l-doiya46.vercel.app',
  appName,
  version,
  platform,
}) => {
  return `${hostname}/${appName}?platform=${platform}&appVersion=${version}`;
};

export default getContainersURL;
