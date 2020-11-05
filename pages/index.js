import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import Body from '../src/components/Body';
import InventoryScroll from '../src/components/InventoryScroll/InventoryScroll';
import { Toolbar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function Index() {
  return (
    <>
      <Header />
      <Toolbar />
      <Body>
        <Hero />
        <InventoryScroll />
      </Body>
    </>
  );
}
