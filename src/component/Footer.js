import React from 'react'


export default function Footer(){

           return(
             <div color="blue" className="font-small pt-4 mt-4">
      <div  className="text-center text-md-left">
        <div className="row">
          <div className="col-md-6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </div>
          <div className="col-md-6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        <div >
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.google.com"> Bhupinder </a>
        </div>
      </div>
    </div>
           )
}
