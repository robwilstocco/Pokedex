import { useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { IPlayer } from "../../interfaces/IPlayer";
import { PlayerButton } from "./styles";

export default function Player({ song }: IPlayer) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioElement = new Audio(song);
    setAudio(audioElement);

    audioElement.addEventListener("ended", () => {
      setIsPlaying(false);
    });

    return () => {
      audioElement.removeEventListener("ended", () => {
        setIsPlaying(false);
      });
    };
  }, [song]);

  const playOrStop = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <PlayerButton onClick={playOrStop}>
      {isPlaying ? <FaPause /> : <FaPlay />}
    </PlayerButton>
  );
}
