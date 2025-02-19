import { SignIn } from "@clerk/clerk-react"

function SignInPage() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 d-flex justify-content-center">
          <SignIn />
        </div>
      </div>
    </div>
  )
}

export default SignInPage

