import PageTemplate from '../src/components/PageTemplate';
import Hero from '../src/components/Hero';
import InventoryScroll from '../src/components/InventoryScroll';
import Contact from '../src/components/Contact';
import Features from '../src/components/Features';
import { getCars } from '../src/firebaseUtilities';

export default function Index({ data }) {
  return (
    <>
      <PageTemplate>
        <Hero />
        <InventoryScroll data={data} />
        <Features />
        <Contact />
      </PageTemplate>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const data = await getCars();
  return {
    props: { data },
  };
}