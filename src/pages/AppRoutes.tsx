// Import necessary modules from React Router
import { Redirect, Route, Switch } from 'react-router-dom'; // Make sure to adjust import if using react-router-dom v6
import ExpenseComponent from './expense/Expense'; // Path to the Expense component
import Rent from './rent/Rent'; // Path to the Rent component
import AddRentForm from './form/AddRentForm'; // Path to the Add Rent Form component
import Tab1 from './Tab1'; // Path to Tab1 component
import Tab2 from './Tab2'; // Path to Tab2 component
import Tab3 from './Tab3'; // Path to Tab3 component

// Main routing component
const AppRoutes: React.FC = () => {
    return (
        <Switch>
            {/* Redirect the base path to the main ledger page */}
            <Route exact path="/">
                <Redirect to="/home/ledgers" />
            </Route>

            {/* Routes for ledgers managed in a separate LedgerRoutes component */}
            <Route path="/home/ledgers" component={LedgerRoutes} />

            {/* Other main routes */}
            <Route path="/tab2" component={Tab2} />
            <Route path="/tab3" component={Tab3} />
        </Switch>
    );
};

// Nested routes for ledger-related paths
const LedgerRoutes: React.FC = () => {
    return (
        <Switch>
            {/* Main ledger path leading to Tab1 */}
            <Route exact path="/home/ledgers" component={Tab1} />

            {/* Expense-related routes */}
            <Route exact path="/home/ledgers/expense" component={ExpenseComponent} />
            <Route exact path="/home/ledgers/expense/rent" component={Rent} />
            <Route exact path="/home/ledgers/expense/rent/form" component={AddRentForm} />

            {/* Additional ledger routes */}
            <Route exact path="/home/ledgers/income" component={() => <div>Income Component</div>} />
            <Route exact path="/home/ledgers/capital" component={() => <div>Capital Component</div>} />
            <Route exact path="/home/ledgers/asset" component={() => <div>Asset Component</div>} />
            <Route exact path="/home/ledgers/liability" component={() => <div>Liability Component</div>} />
        </Switch>
    );
};

export default AppRoutes;
