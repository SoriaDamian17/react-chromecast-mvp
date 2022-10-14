import React, { useCallback } from 'react';
import './App.css';
import useCast from './hooks/useCast';

function App() {
  const cast = useCast({
    initialize_media_player: "DEFAULT_MEDIA_RECEIVER_APP_ID",
    auto_initialize: true,
  });

  const handleconnect = useCallback(async () => {
    if (cast.castReceiver) {
      await cast.handleConnection();
    }
  }, [cast.castReceiver, cast.handleConnection]);

  return (
    <div className="App">
      <h1 style={{ color: "#fff" }}>
        {cast.isConnect ? 'Browser Connected' : 'Hello World'}
      </h1>
      <button className='buttonConnect'
        onClick={handleconnect}
      >
        Connect
      </button>
    </div>
  );
}

export default App;
