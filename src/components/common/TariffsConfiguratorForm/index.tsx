import './RangeInput';
import './styles.scss';
import { useSelector } from 'react-redux';
import RangeInput from './RangeInput';
import CheckboxInput from './CheckboxInput'

function TariffsConfiguratorForm() {
  const tariffsData = useSelector(state => state.tariffsData);
  return (
    <form>
      <h1>Настройте тариф</h1>
      {tariffsData &&
        Object.values(tariffsData).map(e => {
          const { id, type, name, unit, values } = e;
          if (type == 'range') {
            return <RangeInput key={id} values={values} name={name} id={id} />
          }
          if (type == 'checkbox') {
            return <CheckboxInput key={id} values={values} name={name} id={id} />
          }
        })}
    </form>
  );
}

export default TariffsConfiguratorForm;
