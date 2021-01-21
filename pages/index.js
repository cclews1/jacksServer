import Header from '../src/components/Header';
import BackgroundWrapper from '../src/components/BackgroundWrapper';
import Hero from '../src/components/Hero';
import Body from '../src/components/Body';
import InventoryScroll from '../src/components/InventoryScroll/InventoryScroll';
import Contact from '../src/components/Contact';
import Features from '../src/components/Features';
import { Toolbar } from '@material-ui/core';

export default function Index() {
  return (
    <>
      <BackgroundWrapper>
        <Header />
        <Toolbar />
        <Body>
          <Hero />
          <InventoryScroll />
          <Features />
          <Contact />
        </Body>
      </BackgroundWrapper>
    </>
  );
}
