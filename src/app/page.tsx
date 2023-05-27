import { getData } from '@/lib/api/getData';
import BasicTabs from '@/components/BasicTabs';


export default async function Home() { 
  const berlinData = getData("Berlin");
  const londonData = getData("London");
  const newYorkData = getData("New York");

  const [berlin, london, newYork] = await Promise.all([berlinData, londonData, newYorkData]);

  return (
    <main>
      <BasicTabs data={[berlin, london, newYork]} />
    </main>
  );
}