import { useDispatch } from 'react-redux';
import { loadData } from './features/tariffsData';
import data from './mocks/configuratorFormData'
import TariffsConfiguratorForm from './components/common/TariffsConfiguratorForm'
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('Loading mock data');
    dispatch(loadData(data));
  }, []);
  
  return (
    <TariffsConfiguratorForm />
  )
}

export default App
