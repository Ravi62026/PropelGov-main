import { toast } from "react-toastify";
import Banner from "../components/Banner";
import CreateProposal from "../components/CreateProposal";
import Proposals from "../components/Proposals";
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // If the user did not navigate from the login page, redirect them back
  if (!location.state || !location.state.fromLogin) {
    toast.error('Please login to access this page');
    return null;
  }
  return (
    <>
      <Banner />
      <CreateProposal />
      <Proposals />
    </>
  )
}

export default Home