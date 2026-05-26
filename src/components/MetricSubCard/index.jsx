import '../MetricSubCard/MetricSubCard.styles.css';

export function MetricSubCard({ numero, descricao, iconeSvg, corFundo, corTexto }) { 

  {/* --- cor padrão para o card e o conteúdo --- */}
  const fundoCard = corFundo || 'var(--rosa500)';
  const textoCard = corTexto || 'var(--rosa200)';

  return (
    <div className="metric__subcard" style={{ backgroundColor: fundoCard }}>
      
      {/* --- conteúdo superior: número e ícone --- */}
      <div className="subcard__header">
        <span className="subcard__number" style={{ color: textoCard }}>
          {numero}
        </span>
        
        {/* --- definir icon por prop --- */}
        <div className="subcard__icon" style={{ color: textoCard }}>
          {iconeSvg}
        </div>
      </div>

      {/* --- conteúdo inferior: descrição dos dados --- */}
      <p className="subcard__description" style={{ color: textoCard }}>
        {descricao}
      </p>

    </div>
  );
}