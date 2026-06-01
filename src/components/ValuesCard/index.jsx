import "./ValuesCard.styles.css"

export function ValuesCard({ title, bgColor, image }) {
  return (
    <div
      className="value_card"
      style={{ backgroundColor: bgColor }}
    >
      <h3 className="value_card_title">{title}</h3>

      <img
        src={image}
        alt={title}
        className="value_card_img"
      />
    </div>
  );
}
