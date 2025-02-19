import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ClerkProvider } from "@clerk/clerk-react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import LandingPage from "./pages/LandingPage"
import Dashboard from "./pages/Dashboard"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import PostAuction from "./pages/PostAuction"
import AuctionDetails from "./pages/AuctionDetails"
import MyAuctions from "./pages/MyAuctions"
import BidsPlaced from "./pages/BidsPlaced"
import AuctionsWon from "./pages/AuctionsWon"

// Replace with your actual Clerk publishable key
const clerkPubKey = "pk_test_YW11c2VkLW1vbmFyY2gtNjUuY2xlcmsuYWNjb3VudHMuZGV2JA"

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/post-auction" element={<PostAuction />} />
              <Route path="/auction-details" element={<AuctionDetails />} />
              <Route path="/my-auctions" element={<MyAuctions />} />
              <Route path="/bids-placed" element={<BidsPlaced />} />
              <Route path="/auctions-won" element={<AuctionsWon />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ClerkProvider>
  )
}

export default App

