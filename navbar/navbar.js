import navbarCSS from "/navbar/navbar.css";

export default function navbar() {
  return (
    <div className="container-fluid m-0 navbar-main" style={navbarCSS}>
      <div className="container-of-navbar d-flex justify-content-between align-items-center">
        <img
          className="logo"
          src="https://imj31us4am50.github.io/SpringStudy-media/logospringstudy.png"
        />
        <div className="navbar-list-container">
          <ul className="navbar-list d-flex text-white">
            <li className="list-item-1">DESCOPERĂ</li>
            <li className="list-item-1">CREEAZĂ</li>
            <li className="list-item-d-1 dropdown-1">
              <span> CHAT </span>
              <div className="dropdown-content-1">
                <li className="sublist-item-1">PRINCIPAL</li>
                <li className="sublist-item-1">SUBIECTE</li>
              </div>
            </li>
            <li className="list-item-1">ÎNR./CON.</li>
            <li className="list-item-1">AJUTOR</li>
          </ul>
        </div>
        <div className="dropdown-list-container">
          <img
            className="dropdown-icon"
            src="https://imj31us4am50.github.io/SpringStudy-media/menu-icon.png"
            onClick={() => {
              let dropdown = document.getElementById("dropdown-el");

              if (dropdown.style.display === "none")
                dropdown.style.display = "block";
              else dropdown.style.display = "none";
            }}
          />
        </div>
      </div>
      <ul className="dropdown-list text-white w-100 m-0 p-0" id="dropdown-el">
        <li className="list-item-2">DESCOPERĂ</li>
        <li className="list-item-2">CREEAZĂ</li>
        <li className="list-item-d-2 dropdown-2 text-center">
          <span className="mx-auto"> CHAT </span>
          <div className="dropdown-content-2 mx-auto">
            <li className="sublist-item-2">PRINCIPAL</li>
            <li className="sublist-item-2">SUBIECTE</li>
          </div>
        </li>
        <li className="list-item-2">ÎNR./CON.</li>
        <li className="list-item-2">AJUTOR</li>
      </ul>
    </div>
  );
}
