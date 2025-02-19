import { Link } from "react-router-dom"

const myAuctions = [
  { id: 1, title: "Vintage Watch", currentBid: 500, endDate: "2023-06-30" },
  { id: 2, title: "Antique Vase", currentBid: 300, endDate: "2023-07-05" },
  { id: 3, title: "Rare Comic Book", currentBid: 1000, endDate: "2023-07-10" },
]

function MyAuctions() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">My Auctions</h1>
      <div className="row">
        {myAuctions.map((auction) => (
          <div key={auction.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{auction.title}</h5>
                <p className="card-text">Current Bid: ${auction.currentBid}</p>
                <p className="card-text">End Date: {auction.endDate}</p>
                <Link to={`/auction-details/${auction.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAuctions

