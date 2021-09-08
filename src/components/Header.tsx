/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

export const Header: React.FC = () => (
  <header
    sx={{
      color: '#fff',
      height: 'fit-content',
      padding: '1rem',
      display: 'flex',
      flexFlow: ['column wrap', 'column wrap', 'row wrap'],
      borderColor: 'primary',
      bg: 'primary',
    }}
  >
    <div
      sx={{
        flex: ['0 0 92%', '0 1 60%'],
        margin: ['0 4%'],
        alignSelf: ['center'],
        textAlign: ['center', 'left'],
      }}
    >
      <h1 sx={{ fontSize: '2.5rem' }}>Hello, I'm Jean Karlo Obando</h1>
      <h3
        sx={{
          fontStyle: 'italic',
          display: ['none', 'none', 'block'],
        }}
      >
        Software Developer and Community Enthusiast
      </h3>
    </div>
    <picture>
      <source srcSet="img/profile-original.png" media="(min-width: 1200px)" />
      <source srcSet="img/profile-500.png" media="(min-width: 800px)" />
      <img
        sx={{
          width: ['9rem', '10rem', '12rem'],
          border: ['2px solid #463940'],
          borderRadius: ['50%'],
        }}
        src="img/profile-200.png"
        alt="Profile Photo"
      />
    </picture>
    <h3
      sx={{
        fontStyle: 'italic',
        display: ['block', 'block', 'none'],
      }}
    >
      Software Developer and Community Enthusiast
    </h3>
  </header>
);
