// Import the React library
import React from "react";

// Import the generated hook from our RTK Query API slice
import { usePlayersQuery } from "../api/puppyBowlApi";
// Define a new React component
const Players = () => {
  // Use the generated hook to fetch data from the API
  // When the component is first rendered, it will start the API fetch
  // It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
  const { data = {}, error, isLoading } = usePlayersQuery();

  // Show a loading message while data is being fetched
  if (isLoading) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <h2>Error, please try again later.</h2>
      </section>
    );
  }


  return (
    <div className="players">
      {/* Map through the data array and generate a div for each player */}
      {data.data.players.map((player) => (
        // Use the player's ID as the key for this div
        <div key={player.id} className="player-card">
          {/* Display the player's image, with the player's name as alt text */}
          <img src={player.imageUrl} alt={player.name} className="player-image" />

          <div className="player-details">
            <h2>
              {
                player.name
              }
            </h2>

            <p>
              {
                player.breed
              }
            </p>

            <p>
              {
                player.status
              }
            </p>
          </div>
          <button>Details</button>
          <button>Remove Player</button>
        </div>
      ))}
    </div>
  );
};

// Export the component so it can be imported and used in other files

export default Players;