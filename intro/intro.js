import introCSS from "/intro/intro.css";

export default function intro() {
  return (
    <div
      className="container-fluid m-0 p-0 d-flex intro-container mt-5"
      style={introCSS}
    >
      <div className="empty w-100 p-4"></div>
      <div className="intro-content w-100 p-4 text-white">
        <h1>
          <span className="pink">Spring Study</span>: Platforma perfectă pentru
          studiu în era digitală!
        </h1>
        <h5>
          Cu ajutorul platformei noastre poți învăța rapid, eficient și cu
          ușurință. Oferim o varietate de opțiuni, de la plan de studiu
          personalizat până la Chat pentru utilizatori!
        </h5>
        <br />
        <div className="call-to-action mx-auto text-center">
          <p>Poți începe prin a-ți crea un cont: </p>
          <button className="btn btn-default text-white">ÎNCEPE ACUM</button>
        </div>
      </div>
    </div>
  );
}
