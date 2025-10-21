// components/FigmaEmbed.jsx
export const FigmaEmbed = ({ url, width = "100%", height = "450px" }) => (
  <div style={{ position: 'relative', width: width, paddingBottom: `calc(${height} / ${width} * 100%)`, height: 0 }}>
    <iframe
      src={`https://www.figma.com/design/Zgspj1fLESA1zjk2FxtmEi/Untitled?node-id=1-154&t=W1GBxVKYeQVatPBP-4`}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
      allowFullScreen
    ></iframe>
  </div>
)
