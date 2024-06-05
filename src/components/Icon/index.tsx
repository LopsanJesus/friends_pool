import "./style.scss";

interface IProps {
  src: string;
  alt: string;
  color?: string;
}

const Icon = ({ src, alt, color }: IProps) => {
  return (
    <div className="Icon">
      <img src={src} alt={alt} style={{ fill: color }} />
    </div>
  );
};

export default Icon;
