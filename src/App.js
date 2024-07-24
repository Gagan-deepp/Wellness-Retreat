import Header from './Pages/Header'
import Footer from './Pages/Footer'
import Main from './Pages/Main';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className='flex-1'>
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
