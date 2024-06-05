import { render, screen } from "@testing-library/react";
import { beforeEach, describe } from "vitest";
import Home from "./Home";

describe('snapshops for routes', ()=> {
    test("renders home", ()=> {
      const {container} = render(<Home/>);
      expect(container).toMatchSnapshot();
    });
});