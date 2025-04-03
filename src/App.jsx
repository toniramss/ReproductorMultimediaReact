// App.js
import React, { useState } from 'react';
import MediaPlayer from './components/MediaPlayer';


const videos = [
  {
    "nombre": "Pajaro",
    "url": "/video1.mp4",
  },
  {
    "nombre": "Pato",
    "url": "/video2.mp4",
  },
  {
    "nombre": "Camaleon",
    "url": "/video3.mp4",
  },
  {
    "nombre": "Rio",
    "url": "/video4.mp4",
  },
  {
    "nombre": "Medusa",
    "url": "/video5.mp4",
  },
  {
    "nombre": "Pájaro",
    "url": "/video6.mp4",
  },
]
const audios = [
  {
    "nombre": "Audio 1",
    "url": "/audio1.mp3",
  },
  {
    "nombre": "Audio 2",
    "url": "/audio2.mp3",
  },
]



function App() {
  const [currentVideo, setCurrentVideo] = useState(videos[0].url);
  const [currentAudio, setCurrentAudio] = useState(audios[0].url);

  const [videoKey, setVideoKey] = useState(0);
  const [audioKey, setAudioKey] = useState(0);

  const changeVideo = (video, index) => {
    setCurrentVideo(video.url);
    setVideoKey(index);
  };

  const changeAudio = (audio, index) => {
    setCurrentAudio(audio.url);
    setAudioKey(index);
  };

  return (
    <div className="App p-6 bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <h2 className="text-center text-3xl font-bold my-8 text-blue-500">
        Reproductor Multimedia con React
      </h2>

      {/* Reproductor de Video */}
      <div className="mb-10 w-full pb-4 max-w-4xl rounded-lg overflow-hidden shadow-lg bg-gray-800">

        <h1 className="text-4xl font-extrabold text-center text-gradient bg-gradient-to-r from-blue-400 via-green-500 to-teal-600 p-4 rounded-lg shadow-lg">Reproductor de video</h1>

        <MediaPlayer key={videoKey} type="video" src={currentVideo} />

        {/* Video Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 p-4">
          {videos.map((video, index) => (
            <button
              key={index}
              onClick={() => changeVideo(video, index)}
              className={`px-6 py-2 rounded-lg transition-all font-semibold text-lg ${currentVideo === video.url ? "bg-blue-600 shadow-lg" : "bg-gray-700 hover:bg-gray-600"
                } text-white`}
            >
              {video.nombre}
            </button>
          ))}
        </div>

        <p className="text-sm text-center text-gray-500 mt-4"> Utilizado bajo CC BY-SA. Disponible en: <a target="_blank" href='https://pixabay.com/'>https://pixabay.com/</a></p>
      </div>

      {/* Reproductor de Audio */}
      <div className="mb-10 w-full pb-4 max-w-4xl rounded-lg overflow-hidden shadow-lg bg-gray-800">

        <h1 className="text-4xl font-extrabold text-center text-gradient bg-gradient-to-r from-blue-400 via-green-500 to-teal-600 p-4 rounded-lg shadow-lg">Reproductor de audio</h1>


        <MediaPlayer key={audioKey} type="audio" src={currentAudio} />

        {/* Audio Title */}
        <div className="text-center my-6 text-lg font-semibold text-green-400">
          Reproduciendo: {audios[audioKey].nombre}
        </div>

        {/* Audio Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 pb-4">
          {audios.map((audio, index) => (
            <button
              key={index}
              onClick={() => changeAudio(audio, index)}
              className={`px-6 py-2 rounded-lg transition-all font-semibold text-lg ${currentAudio === audio.url ? "bg-green-600 shadow-lg" : "bg-gray-600 hover:bg-gray-500"
                } text-white`}
            >
              {audio.nombre}
            </button>
          ))}
        </div>

        <p className="text-sm text-center text-gray-500 mt-4"> Utilizado bajo CC BY-SA. Disponible en: <a target="_blank" href='https://freemusicarchive.org/'>https://freemusicarchive.org/</a></p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 mt-auto py-4">
        <p>© 2025 Reproductor Multimedia | Toni Rams</p>
      </footer>
    </div>
  );
}
export default App;