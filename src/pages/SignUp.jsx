import { SignUp } from "@clerk/clerk-react"

function SignUpPage() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 d-flex justify-content-center">
          <SignUp />
        </div>
      </div>
    </div>
  )
}

export default SignUpPage

