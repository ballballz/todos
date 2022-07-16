import './App.css';
import { FormTodo,ListTodo } from './components'
const get_txt = JSON.parse(localStorage.getItem('todos'));

function App() {
  console.log(get_txt)
  return (
    <div className="App">
      <h1>TodoList</h1>
      <FormTodo />
      <ListTodo />
    </div>
  );
}

export default App;
