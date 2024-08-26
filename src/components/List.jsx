import { FaUtensilSpoon } from 'react-icons/fa';
import { PiScalesDuotone } from 'react-icons/pi';
import { PiPlant } from 'react-icons/pi';

function List({description,quantity,unit}) {
  return (
    <div className="w-[95%] border-b flex flex-row lg:w-[60%] justify-between">
      <span className="flex gap-2 text-xl text-gray-800 items-center">
        <PiPlant className="text-green-800" /> {description}
      </span>

      <span className="flex items-center gap-2 text-gray-600">
        <PiScalesDuotone className="text-red-600 text-xl" />{' '}
        <span className="text-xl"> {quantity} </span>
      </span>

      <span className="flex items-center gap-2 text-gray-600">
        <FaUtensilSpoon /> <span className="text-xl"> {unit} </span>
      </span>
    </div>
  );
}

export default List;
