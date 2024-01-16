import React from 'react';
import userData from './user.json';
import data from './data.json';
import transactionsData from './transactions.json';
import friendsData from './friends.json';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

const App = () => (
  <div>
    <Profile {...userData} />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friendsData} />
    <TransactionHistory items={transactionsData} />
  </div>
);

export default App;
