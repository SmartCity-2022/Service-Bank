import NavBar from '../components/NavBar'
import GridLayout from '../components/GridLayout';
import OutlinedButton from '../components/OutlinedButton'

function Accounts() {
  return (
    <div className="Accounts">
      <header className="Accounts-header">
        <NavBar/>
        <br/>
        <GridLayout/>
        <div>
          {OutlinedButton("Neues Konto")}
        </div>
      </header>
    </div>
  );
}

export default Accounts;
