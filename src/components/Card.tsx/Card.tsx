/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import Image from 'next/image';

interface IProps {
  color: string;
  width?: string;
  height?: string;
  imgSrc: string;
  title: string;
}

const Card: React.FC<IProps> = ({
  color,
  width = '10rem',
  height = '10rem',
  imgSrc,
  title,
}) => (
  <div
    sx={{
      borderRadius: '5px',
      position: 'relative',
      width: width,
      height: height,
      fontFamily: 'Quicksand, sans-serif',
    }}
  >
    <div
      sx={{
        position: 'absolute',
        backgroundColor: color,
        width: width,
        height: height,
        zIndex: 2,
        borderRadius: '5px',
      }}
    />
    <Image
      sx={{ borderRadius: '5px' }}
      loader={() => imgSrc}
      src={imgSrc}
      alt={title}
      layout="fill"
    />
    <div
      sx={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 3,
      }}
    >
      <p
        sx={{
          backgroundColor: '#55A2B4',
          borderRadius: '2px',
          padding: '2% 6%',
          color: '#ffffff',
        }}
      >
        Read more
      </p>
    </div>
  </div>
);

export default Card;
