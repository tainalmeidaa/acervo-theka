import "./TeamCard.styles.css"

export function TeamCard({ image, name, bgColor }) {
  return (
    <div className="team_card" style={{ backgroundColor: bgColor }}>
      <img src={image} alt={name} className="team_card_image" />

      <span
        className="team_card_name"
        style={{ backgroundColor: bgColor }}>
            {name}
      </span>
    </div>
  );
}

