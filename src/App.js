// import logo from './logo.svg';
// import './App.css';
import SocialProfile from "./components/user/social-profile";
import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import Statistics from "./components/statistics/Statistics";
import FriendList from "./components/friends/friend-list/friendList";
import friends from "./data/friends.json";
import Transactions from "./components/transactions/transaction";
import transactionData from "./data/transactions.json";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
export default function App() {
  return (
    <>
      <SocialProfile
        src={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />
      <Transactions items={transactionData} />
    </>
  );
}
// export default App;
