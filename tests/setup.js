import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from "@testing-library/jest-dom/matchers";


window.scrollTo = () => {};
expect.extend(matchers);

afterEach(() => {
  cleanup();
});