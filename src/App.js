import './App.css';
import Button from './components/atoms/button/button';
import List from './components/atoms/list/list';
import SplitButton from './components/atoms/button/split-button';
import IconButton from './components/atoms/button/icon-button';

function App() {
  return (
    <div style={{ position: 'relative', display: 'grid', width: '100%', gridTemplateColumns: 'repeat(3, 1fr)', gap: '5px' }}>
      <Button text={':disabled'} size={'md'} icon={'discord'} color={'success'} isDisabled={true} />
      <Button text={':pressed'} size={'md'} icon={'discord'} color={'success'} isPressed={true} />
      <Button text={':normal'} size={'md'} icon={'discord'} color={'success'} />
      <Button text={':disabled'} size={'md'} icon={'caret-down-fill'} type={'ghost'} color={'success'} isDisabled={true} />
      <Button text={':pressed'} size={'md'} icon={'caret-down-fill'} type={'ghost'} color={'success'} isPressed={true} />
      <Button text={':normal'} size={'md'} icon={'caret-down-fill'} type={'ghost'} color={'success'} />
      <SplitButton text={':icon'} size={'sm'} icon={'google'} color='success'></SplitButton>
      <SplitButton text={':not-icon'} size={'md'} color='success' isPressed={true}></SplitButton>
      <SplitButton text={':normal'} type={'normal'} size={'md'} icon={'google'} color='success'></SplitButton>
      <IconButton size='sm' type='ghost' isDisabled={true}></IconButton>
      <IconButton size='md' color='split-header'></IconButton>
      <IconButton shape='round' type='reverse' size='lg'></IconButton>
      <List></List>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
