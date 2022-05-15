import moreinfoCSS from "/maincomponents/moreinfo.css";

export default function moreinfo() {
  return (
    <div className="container-fluid pb-3" style={moreinfoCSS}>
      <div className="h3 mx-auto title2 p-5">
        Beneficiile utilizării platformei{" "}
        <span className="pink">Spring Study</span>:
      </div>
      <div className="d-flex container-of-benefits-and-quote justify-content-between">
        <div className="benefits-list m-3 p-4">
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
            <li className="pink-bullet-list">
              Vei fi notificat în legătură cu planul de studiu sau alte lucruri
              importante chiar și din exteriorul platformei.
            </li>
            <li className="pink-bullet-list">
              Te dispensează de nevoia de a deschide nenumărate Tab-uri. Ai tot
              ceea ce îți trebuie pe o singură platformă.
            </li>
            <li className="additional-information mt-4 pink">
              Înainte de a te înregistra pe Spring Study te rugăm să citești
              termenii și condițiile site-ului.
            </li>
          </ul>
        </div>
        <div className="quote text-center m-3 p-4 mx-auto">
          <h5>
            Din seria:
            <br /> <span className="pink">Citate populare</span>
          </h5>
          <p className="mt-2">
            <i>
              „Nimic nu este prea dificil dacă împarți în pași mici ceea ce ai
              de făcut.”
            </i>
            <br /> - Henry Ford
          </p>
        </div>
      </div>
    </div>
  );
}
