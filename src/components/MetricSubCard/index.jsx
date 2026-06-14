import '../MetricSubCard/MetricSubCard.styles.css';

export function MetricSubCard({ numero, descricao, Icon, bg_color, tx_color }) { 

  {/* --- cor padrão para o card e o conteúdo --- */}
  const fundoCard = bg_color || 'var(--cinza500)';
  const textoCard = tx_color || 'var(--cinza200)';

  return (
    <div className="metric__subcard" style={{ backgroundColor: fundoCard }}>
      
      {/* --- conteúdo superior: número e ícone --- */}
      <div className="subcard__header">
        <span className="subcard__number" style={{ color: textoCard }}>
          {numero}
        </span>
        
        {/* --- definir icon por prop --- */}
        <div className="subcard__icon" style={{ color: textoCard }}>
          {Icon && <Icon size={20}/>}
        </div>
      </div>

      {/* --- conteúdo inferior: descrição dos dados --- */}
      <p className="subcard__description" style={{ color: textoCard }}>
        {descricao}
      </p>

    </div>
  );
}