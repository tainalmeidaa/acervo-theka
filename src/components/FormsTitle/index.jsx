import '../FormsTitle/FormsTitle.styles.css'

export function FormsTitle({ title = "text" }) {

    return (
        <div className="form-title">
            {title}
        </div>
    );
}