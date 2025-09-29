import { Suspense } from 'react';
import Navbar from './components/Navbar';
import TitleSection from './TitleSection';
import OrderContainer from './components/OrderContainer';
import { ToastContainer } from 'react-toastify';

const loadOrder = () => fetch('/orders.json').then((res) => res.json());

function App() {
  const promiseData = loadOrder();
  return (
    <>
      <header className="w-11/12 mx-auto py-3">
        <Navbar></Navbar>
      </header>
      <section>
        <TitleSection>Kitchen Room</TitleSection>
      </section>
      <section>
        <Suspense fallback={<p>Loading......</p>}>
          <OrderContainer promiseData={promiseData}></OrderContainer>
        </Suspense>
      </section>
      <ToastContainer autoClose={1000} />
    </>
  );
}

export default App;
