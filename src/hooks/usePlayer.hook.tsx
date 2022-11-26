import { useContext } from "react";
import { PlayerContext } from "../contexts/Player.context";

const usePlayer = () => {
  const context = useContext(PlayerContext);

  if(!context) {
    throw Error("usePlayer musi znajdować się wewnątrz PlayerProvider");
  }

  return context;
}

export default usePlayer;