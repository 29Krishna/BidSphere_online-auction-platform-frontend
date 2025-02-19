function PostAuction() {
    return (
      <div className="container mt-5">
        <h1 className="mb-4">Post a New Auction</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="itemName" className="form-label">
              Item Name
            </label>
            <input type="text" className="form-control" id="itemName" required />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea className="form-control" id="description" rows="3" required></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="startingPrice" className="form-label">
              Starting Price
            </label>
            <input type="number" className="form-control" id="startingPrice" required />
          </div>
          <div className="mb-3">
            <label htmlFor="endDate" className="form-label">
              End Date
            </label>
            <input type="datetime-local" className="form-control" id="endDate" required />
          </div>
          <button type="submit" className="btn btn-primary">
            Post Auction
          </button>
        </form>
      </div>
    )
  }
  
  export default PostAuction
  
  