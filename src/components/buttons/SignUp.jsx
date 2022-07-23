import React from "react";

const SignUp = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-primary ms-2"
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
      >
        <span className="fa fa-user-plus me-1"></span>
        Register
      </button>

      <div
        className="modal fade"
        id="signupModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-primary w-100 mb-2">
                <span className="fa fa-google me-2"></span>
                Sign Up With Google
              </button>
              <button className="btn btn-primary w-100 mb-2">
                <span className="fa fa-facebook me-2"></span>
                Sign Up With Facebook
              </button>
              <button className="btn btn-primary w-100 mb-2">
                <span className="fa fa-github me-2"></span>
                Sign Up With GitHub
              </button>
              <form>
                <div class="mb-3">
                  <label for="exampleInput" class="form-label">Username</label>
                  <input type="text" class="form-control" id="exampleInput"/>
                    
                </div>
                <div class="mb-3">
                  <label for="exampleInoutEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                  <div id="emailHelp" className="form-text"> Wel'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>

              
                <button type="submit" className="btn btn-outline-primary w-100 mt-5">
                  Register
                </button>
       
              </form>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default SignUp;