import LinkButton from "components/LinkButton";
import PageWithTopbar from "components/PageWithTopbar";

const ErrorPage = () => {
  return (
    <PageWithTopbar className="ErrorPage" title="Error">
      <p>Se ha producido un error</p>

      <LinkButton linkTo="/" text="Volver" />
    </PageWithTopbar>
  );
};

export default ErrorPage;
