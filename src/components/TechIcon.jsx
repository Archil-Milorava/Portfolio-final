// Renders a Simple Icons icon as a flat single-colour mark. It inherits the
// current text colour, so the parent decides how it looks (see StackBox).
const TechIcon = ({ icon, className = "", style }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
    style={style}
  >
    <path d={icon.path} />
  </svg>
);

export default TechIcon;
