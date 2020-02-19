import React from "react";
import "./App.css";
import { Nav, Navbar } from "react-bootstrap";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import "bootstrap-css-only/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Tugas 1 PBF</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">Alan</Nav.Link>
          <Nav.Link href="#">Rizky</Nav.Link>
          <Nav.Link href="#">Wardana</Nav.Link>
        </Nav>
      </Navbar>

      <div className="biodata">
        <h1>Biodata</h1>
        <div className="Tabel">
          <div class="gambar"></div>
          <table align="center" class="table" style={{ width: "50%" }}>
            <tbody>
              <tr>
                <td rowspan="10" align="center">
                  <img
                    src={require("./assets/picture.jpg")}
                    width="329"
                    height="438"
                    image-align="center"
                  ></img>
                </td>
                <td scope="row">
                  <span class="names">Nama</span>
                </td>
                <td scope="row">
                  <span class="names">:</span>
                </td>
                <td>Alan Rizky Wardana</td>
              </tr>
              <tr>
                <td scope="row">
                  <span class="names">TTL</span>
                </td>
                <td scope="row">
                  <span class="names">:</span>
                </td>
                <td>Tulungagung, 4 Agustus 1999</td>
              </tr>
              <tr>
                <td scope="row">
                  <span class="names">Status</span>
                </td>
                <td scope="row">
                  <span class="names">:</span>
                </td>
                <td>Pelajar</td>
              </tr>
              <tr>
                <td scope="row">
                  <span class="names">Hobi</span>
                </td>
                <td scope="row">
                  <span class="names">:</span>
                </td>
                <td>Bermain gitar</td>
              </tr>
              <tr>
                <td scope="row">
                  <span class="names">Github</span>
                </td>
                <td scope="row">
                  <span class="names">:</span>
                </td>
                <td>https://github.com/alanrizky</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <MDBFooter
        color="black"
        variant="dark"
        className="font-small fixed-bottom pt-4 mt-4"
      >
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="1">
              <h5 className="title">androidmanaic28@gmail.com</h5>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-1">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a> Alan Rizky Wardana </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}

export default App;
