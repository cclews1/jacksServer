import Header from '../src/components/Header';
import Body from '../src/components/Body';
import Subhead from '../src/components/Subhead';
import { Toolbar } from '@material-ui/core';

export default function Inventory() {
  return (
    <>
      <Header />
      <Toolbar />
      <Body>
        <Subhead>Our Entire Inventory</Subhead>
        <h5>inventory goes here</h5>
      </Body>
    </>
  );
}
