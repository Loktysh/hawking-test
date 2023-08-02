import { useDispatch, useSelector } from 'react-redux';
import { change } from '../../../../features/userConfiguratorData';

function CheckboxInput({ values, name, id }) {
  const dispatch = useDispatch();
  const prevVal = useSelector((state) => state.userConfiguratorData[id])
  return (
    <div>
      <h5>{name}</h5>
      {values.map((value, i) => (
        <div key={i}>
          <input
            onChange={el => {
              dispatch(change({ id, value, multiselect: true, prevVal }));
            }}
            id={i}
            type="checkbox"
          />
          <label htmlFor={i}>{value}</label>
        </div>
      ))}
    </div>
  );
}

export default CheckboxInput;
