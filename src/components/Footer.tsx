/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { SocialNetwork } from './SocialNetwork';

export const Footer: React.FC = () => (
  <footer
    sx={{
      backgroundColor: 'secondary',
      textAlign: 'center',
      color: 'textSecondary',
      height: '100%',
    }}
  >
    <div
      sx={{
        padding: '0.5rem',
      }}
    >
      <SocialNetwork type="GITHUB" />
      <SocialNetwork type="LINKEDIN" />
      <SocialNetwork type="TWITTER" />
      <SocialNetwork type="INSTAGRAM" />
    </div>
    <p
      sx={{
        margin: 0,
        paddingBottom: '0.5rem',
        fontSize: '0.625rem',
      }}
    >
      Made with ❤ by Jean Karlo Obando, 2021
    </p>
  </footer>
);
