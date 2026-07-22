import React from 'react';

type InstagramReelProps = {
  reelUrl: string;
};

const InstagramReel = ({ reelUrl }: InstagramReelProps) => {
  // Asegúrate de que la URL termine en /embed para renderizar el reproductor correctamente
  const embedUrl = `${reelUrl.replace(/\/$/, "")}/embed`;

  return (
    <div className="reel-container">
      <iframe
        src={embedUrl}
        width="400"
        height="520"
        frameBorder="0"
        scrolling="no"
        //allowTransparency="true"
        allow="encrypted-media"
        title="Instagram Reel"
      />
    </div>
  );
};

export default InstagramReel;
