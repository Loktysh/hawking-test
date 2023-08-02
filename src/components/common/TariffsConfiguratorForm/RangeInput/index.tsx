import { useDispatch } from 'react-redux';
import { change } from '../../../../features/userConfiguratorData';

function RangeInput({ values, name, id }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h5>{name}</h5>
      <input onChange={(el) => {
        dispatch(change({id, value: el.target.value}))
      }} type="range" name={id} id={id} min={values[0]} max={values[-1]} />
    </div>
  );
}

export default RangeInput;
