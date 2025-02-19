import { useUser } from "@clerk/clerk-react"

function Dashboard() {
  const { user } = useUser()

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Welcome to your Dashboard, {user?.firstName}!</h1>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Active Auctions</h5>
              <p className="card-text">You have 3 active auctions.</p>
              <a href="/my-auctions" className="btn btn-primary">
                View Auctions
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Bids Placed</h5>
              <p className="card-text">You have placed 5 bids.</p>
              <a href="/bids-placed" className="btn btn-primary">
                View Bids
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Won Auctions</h5>
              <p className="card-text">You have won 2 auctions.</p>
              <a href="/auctions-won" className="btn btn-primary">
                View Won Items
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

