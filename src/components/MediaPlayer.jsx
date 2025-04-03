// MediaPlayer.js
import React, { useRef, useState } from 'react';

const MediaPlayer = ({ type, src }) => {

    const mediaRef = useRef(null); 

    const [volume, setVolume] = useState(1);

    // Función para reproducir el medio
    const play = () => mediaRef.current.play();

    // Función para pausar el medio
    const pause = () => mediaRef.current.pause();

    // Función para detener el medio (pausar y reiniciar tiempo)
    const stop = () => {
        mediaRef.current.pause();
        mediaRef.current.currentTime = 0;
    };

    // Función para cambiar el volumen
    const changeVolume = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        mediaRef.current.volume = newVolume;
    };

    return (

        <div className="p-4">

            {type === 'video' ? (
                <video ref={mediaRef} className="w-full max-w-xl mx-auto" controls={false}>
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <audio ref={mediaRef} controls={false}>
                    <source src={src} type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>
            )}
            {/* Controles para reproducir, pausar, y detener el medio */}
            <div className="flex justify-center space-x-2 my-2">
                <button onClick={play} className="px-4 py-2 bg-blue-500 text-white rounded">Play</button>
                <button onClick={pause} className="px-4 py-2 bg-yellow-500 text-white rounded">Pause</button>
                <button onClick={stop} className="px-4 py-2 bg-red-500 text-white rounded">Stop</button>
            </div>
            {/* Control deslizante para el volumen */}
            <div className="flex justify-center items-center space-x-2">
                <label htmlFor="volume" className="text-white">Volume:</label>
                <input id="volume" type="range" min="0" max="1" step="0.1" value={volume} onChange={changeVolume} className="w-full max-w-xs" />
            </div>
        </div>
    );
};
export default MediaPlayer;