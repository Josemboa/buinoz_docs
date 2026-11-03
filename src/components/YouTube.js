import React from 'react';

// Video do canal youtube.com/@buinoz dentro da pagina.
// Uso: <YouTube id="ID_DO_VIDEO" title="Titulo" />  ou  <YouTube list="PL..." title="..." />  (vertical: vertical)
// youtube-nocookie: sem cookies de rastreio antes do play.
export default function YouTube({id, list, title, vertical = false}) {
  const src = list
    ? `https://www.youtube-nocookie.com/embed/videoseries?list=${list}&rel=0`
    : `https://www.youtube-nocookie.com/embed/${id}?rel=0`;
  const href = list ? `https://www.youtube.com/playlist?list=${list}` : `https://youtu.be/${id}`;
  return (
    <div style={{margin: '1rem 0 1.5rem', maxWidth: vertical ? 360 : 800}}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        style={{width: '100%', aspectRatio: vertical ? '9/16' : '16/9', border: 0, borderRadius: 8}}
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div style={{fontSize: '0.85rem', opacity: 0.8}}>
        ▶️ <a href={href} target="_blank" rel="noopener noreferrer">{title}</a> (abrir no YouTube)
      </div>
    </div>
  );
}
