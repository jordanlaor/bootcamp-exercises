import "./App.css";
import MusicAlbum from "./components/MusicAlbum/MusicAlbum.component";
function App() {
  return (
    <div>
      <MusicAlbum
        albumTitle="Poogy Tales"
        artistName="Kaveret"
        numberOfSongs="13"
        albumLength="43:44"
        link="https://youtu.be/llJ5Ko_14UM"
      />
      <MusicAlbum albumTitle="25" artistName="Adele" numberOfSongs="11" albumLength="48:24" link="https://youtu.be/-fsCc7Be1H0" />
      <MusicAlbum albumTitle="21" numberOfSongs="12" link="https://youtu.be/-fsCc7Be1H0" />
      <MusicAlbum />
    </div>
  );
}

export default App;
