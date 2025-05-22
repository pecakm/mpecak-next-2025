export const stripProtocol = (url: string) => {
  return url.replace(/^(https?:\/\/|mailto:)/, '');
};
