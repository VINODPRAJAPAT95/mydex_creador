import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Button = ({
  children,
  to,
  href,
  variant = "gold",
  className = "",
  type = "button",
  onClick,
}) => {
  const styles = {
    gold: "btn-gold",
    green: "btn-green",
    outline: "btn-outline-gold",
  }[variant];

  const content = (
    <>
      {children}
      <FaArrowRight className="text-xs" />
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${styles} ${className}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`${styles} ${className}`} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${styles} ${className}`}>
      {content}
    </button>
  );
};

export default Button;
