// snippets/FigmaEmbed.jsx
export const FigmaEmbed = ({ url }) => {
  const embedUrl = `https://www.figma.com/embed?embed_host=share&url=${url}`;
  return (
    <iframe
      allowFullScreen
      allow="autoplay; fullscreen; clipboard-write"
      width="700"
      height="500"
      src={embedUrl}
    ></iframe>
  );
};
