import Link from 'next/link';
import Counter from '../component/Counter';
export default function Home() {

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px'
    }}>
      <h1>Counter App</h1>
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Counter title="Counter #1" />
        <Counter title="Counter #2" />
        <Counter title="Counter #3" />
      </div>
    </main>
   
  );
}