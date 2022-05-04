import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const shortenAddress = () => {
  const { currentAccount } = useContext(TransactionContext);
  const address = currentAccount;
  return `${address?.slice(0, 5)}...${address.slice(address?.length - 4)}`;
};

export default shortenAddress;
