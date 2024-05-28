import TopBar from "components/TopBar";

import "./style.scss";

interface IProps {
  className: string;
  children: React.ReactNode;
  title?: string;
}

const PageWithTopbar = ({ className, children, title }: IProps) => {
  return (
    <div className={`PageWithTopbar ${className}`}>
      <TopBar />

      <div className="container">
        {title && <div className="title">{title}</div>}
        {children}
      </div>
    </div>
  );
};

export default PageWithTopbar;
