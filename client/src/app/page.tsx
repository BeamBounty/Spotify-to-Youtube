import Image from "next/image";
import styles from "./page.module.css";
import PlaylistBar from "./components/search/PlaylistBar";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <PlaylistBar />
    </div>
  );
}
