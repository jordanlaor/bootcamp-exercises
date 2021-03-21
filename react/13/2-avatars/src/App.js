import axios from "axios";
import React from "react";
import "./App.css";
class App extends React.Component {
  state = { avatars: null };
  getAvatars = async () => {
    try {
      const data = await axios.get("https://randomuser.me/api/", {
        params: {
          results: 20,
        },
      });
      console.log(data);
      this.setState({
        avatars: data.data.results.map((avatar) => ({
          id: avatar.login.uuid,
          name: `${avatar.name.title} ${avatar.name.first} ${avatar.name.last}`,
          image: avatar.picture.large,
          shouldShow: true,
        })),
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  componentDidMount() {
    this.getAvatars();
  }

  drawAvatars = (avatars) => {
    return avatars.map((avatar) => {
      return (
        <div className="avatar-card" key={avatar.id}>
          <img src={avatar.image} alt={avatar.name} />
          <h3 className="avatar-title">{avatar.name}</h3>
        </div>
      );
    });
  };

  filterAvatars = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    this.setState((prevState) => {
      return {
        avatars: prevState.avatars.map((avatar) => {
          if (avatar.name.toLowerCase().includes(searchTerm)) {
            return { id: avatar.id, name: avatar.name, image: avatar.image, shouldShow: true };
          } else {
            return { id: avatar.id, name: avatar.name, image: avatar.image, shouldShow: false };
          }
        }),
      };
    });
  };

  render() {
    return (
      <div className="page">
        <input type="text" onChange={this.filterAvatars} placeholder="Enter a search term to filter" />
        <div className="cards-wrapper">
          {this.state.avatars && this.drawAvatars(this.state.avatars.filter((avatar) => avatar.shouldShow))}
        </div>
      </div>
    );
  }
}

export default App;
