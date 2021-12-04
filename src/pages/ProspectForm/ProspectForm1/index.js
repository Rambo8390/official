import ProspectFormLayout from '../Layout';
import './style.css';

const ProspectForm1 = () => {
  return (
    <ProspectFormLayout>
      <div className="form-col-1">
        <h3>Basic Details</h3>
      </div>
      <div className="form-col-2">
        <h3>More Details</h3>
      </div>
    </ProspectFormLayout>
  );
}

export default ProspectForm1;