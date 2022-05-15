import moreinfoCSS from "/maincomponents/moreinfo.css";

export default function moreinfo() {
  return (
    <div className="container-fluid" style={moreinfoCSS}>
      <div className="h3 mx-auto title2 p-5">
        Beneficiile utilizării platformei{" "}
        <span className="pink">Spring Study</span>:
      </div>
      <div className="benefits-list">
        <ul className="list">
          <li className="pink-bullet-list">
            Este o platformă interactivă și ușor de utilizat, cu un design
            atrăgător.
          </li>
          <li className="pink-bullet-list">
            Poți comunica cu alte persoane pe diferite subiecte.
          </li>
          <li className="pink-bullet-list">
            Totul este gratuit, singurul lucru necesar pentru a utiliza
            platforma în totalitate este{" "}
            <span className="pink">
              <a href="#createacc">crearea unui cont</a>
            </span>
            .
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
