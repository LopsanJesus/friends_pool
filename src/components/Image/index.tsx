import "./style.scss";

interface IProps {
  size?: "large" | "medium" | "small" | "flag";
  src: string;
  alt: string;
}

const Image = ({ size = "medium", src, alt }: IProps) => {
  return (
    <div className={`Image ${size}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Image;
