import { Container } from "./e-components/core"

interface Window {
  _econtainer: Container;
}

declare global {
  interface Window {
    _econtainer: Container;
  }
}
