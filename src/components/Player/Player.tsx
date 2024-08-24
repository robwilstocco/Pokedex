import { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { IPlayer } from "../../interfaces/IPlayer";
import { PlayerButton } from "./styles";

export default function Player({ song }: IPlayer) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const audio: HTMLAudioElement = new Audio(song);
  audio.addEventListener("ended", () => {
    setIsPlaying(false);
  });

  const playOrStop = (audio: HTMLAudioElement): void => {
    setIsPlaying(true);
    audio.play();
  };

  return (
    <PlayerButton onClick={() => playOrStop(audio)}>
      {isPlaying ? <FaPause /> : <FaPlay />}
    </PlayerButton>
  );
}
