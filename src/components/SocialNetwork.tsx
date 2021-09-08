/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

enum SocialNetworkTypes {
  Instagram = 'INSTAGRAM',
  Github = 'GITHUB',
  LinkedIn = 'LINKEDIN',
  Twitter = 'TWITTER',
}

interface ISocialNetwork {
  type: 'INSTAGRAM' | 'GITHUB' | 'LINKEDIN' | 'TWITTER';
}

interface ISocialLogo {
  href: string;
  src: string;
  name: string;
}

const SocialLogo: React.FC<ISocialLogo> = ({ href, src, name }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <img
      sx={{
        width: ['1.3rem', '1.5rem'],
        padding: '0.2rem',
      }}
      src={src}
      alt={name}
    />
  </a>
);

export const SocialNetwork: React.FC<ISocialNetwork> = ({ type }) => {
  if (type === SocialNetworkTypes.Instagram) {
    return (
      <SocialLogo
        href="https://www.instagram.com/jankarloobando"
        src="img/instagram.png"
        name="Instagram"
      />
    );
  }

  if (type === SocialNetworkTypes.Github) {
    return (
      <SocialLogo
        href="https://github.com/boceto1"
        src="img/github.png"
        name="Github"
      />
    );
  }

  if (type === SocialNetworkTypes.LinkedIn) {
    return (
      <SocialLogo
        href="https://www.linkedin.com/in/jean-karlo-obando-ramos"
        src="img/linkedin.png"
        name="LinkedIn"
      />
    );
  }

  if (type === SocialNetworkTypes.Twitter) {
    return (
      <SocialLogo
        href="https://twitter.com/KarloObando"
        src="img/twitter.png"
        name="Twitter"
      />
    );
  }
};
