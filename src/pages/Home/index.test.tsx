import { useTranslation } from "react-i18next";

import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import useUser from "hooks/useUser";

import Home from ".";

jest.mock("react-i18next", () => ({
  useTranslation: jest.fn(),
}));

jest.mock("hooks/useUser");

jest.mock("components/Image", () => (props: any) => (
  <img alt="alt" {...props} />
));

jest.mock("components/LanguageSwitcher", () => () => (
  <div>LanguageSwitcher</div>
));

jest.mock("components/LinkButton", () => (props: any) => (
  <a href={props.linkTo}>{props.text}</a>
));

jest.mock("components/PageWithTopbar", () => ({ children }: any) => (
  <div>{children}</div>
));

jest.mock("components/Separator", () => () => <hr />);

describe("Home Component", () => {
  beforeEach(() => {
    (useTranslation as jest.Mock).mockReturnValue({
      t: (key: string, params?: any) => {
        const translations: { [key: string]: string } = {
          hello: `Hello, ${params?.userName}`,
          "home.predictions": "Predictions",
          "home.start": "Start",
          "home.rules": "Rules",
          "home.rulesButton": "See Rules",
          "home.disconnect": "Disconnect",
        };

        return translations[key];
      },
    });
  });

  describe("if there is a user logged in", () => {
    test("renders correctly", () => {
      (useUser as jest.Mock).mockReturnValue({ userName: "John" });

      render(<Home />);

      expect(screen.getByText("Hello, John")).toBeInTheDocument();
      expect(
        screen.getByRole("img", { name: "Euro 2024" })
      ).toBeInTheDocument();

      expect(
        screen.getByRole("img", { name: "Writing icon" })
      ).toBeInTheDocument();
      expect(screen.getByText("Predictions")).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "Start" })).toBeInTheDocument();

      expect(
        screen.getByRole("img", { name: "Rules book icon" })
      ).toBeInTheDocument();
      expect(screen.getByText("Rules")).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: "See Rules" })
      ).toBeInTheDocument();

      expect(screen.getByText("LanguageSwitcher")).toBeInTheDocument();

      expect(screen.getByRole("link", { name: "Disconnect" })).toHaveAttribute(
        "href",
        "/logout"
      );
    });
  });

  describe("if there is no user", () => {
    test("renders correctly", () => {
      (useUser as jest.Mock).mockReturnValue({ userName: null });

      render(<Home />);

      expect(screen.queryByText("Hello,")).not.toBeInTheDocument();
      expect(
        screen.getByRole("img", { name: "Euro 2024" })
      ).toBeInTheDocument();

      expect(
        screen.queryByRole("img", { name: "Writing icon" })
      ).not.toBeInTheDocument();
      expect(screen.queryByText("Predictions")).not.toBeInTheDocument();
      expect(
        screen.queryByRole("link", { name: "Start" })
      ).not.toBeInTheDocument();

      expect(
        screen.getByRole("img", { name: "Rules book icon" })
      ).toBeInTheDocument();
      expect(screen.getByText("Rules")).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: "See Rules" })
      ).toBeInTheDocument();

      expect(screen.getByText("LanguageSwitcher")).toBeInTheDocument();

      expect(
        screen.queryByRole("link", { name: "Disconnect" })
      ).not.toBeInTheDocument();
    });
  });
});
