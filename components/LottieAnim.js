import { Player } from '@lottiefiles/react-lottie-player';

export default function LottieAnim({ src, size, width }) {
  return (
    <Player
      autoplay
      loop
      src={src}
      style={{ height: `${size}`, width: `${width}` }}
    ></Player>
  );
}
