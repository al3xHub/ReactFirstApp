import Tasklist from './components/Tasklist';
import Taskform from './components/Taskform';

function App() {

  return <main className='px-2 pt-5 bg-gray-100 h-screen'>
    <div className='mx-auto'>

      <Taskform />
      <Tasklist />
    </div>
  </main>

}

export default App
