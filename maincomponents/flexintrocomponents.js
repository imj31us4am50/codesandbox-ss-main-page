import introComponentsCSS from "/maincomponents/flexintrocomponents.css";

export default function flexintrocomponents() {
  return (
    <div className="container-fluid m-0">
      <div className="flex-items-offer d-flex align-items-start">
        <div className="offer-item-1 w-100 p-5 m-4 mt-0">
          <div className="container-of-display-icon mx-auto">
            <img
              src="https://imj31us4am50.github.io/SpringStudy-media/calendar-icon.png"
              className="display-icon"
            />
          </div>
          <h5 className="mx-auto p-3 text-center">STUDIU ORGANIZAT</h5>
          <p className="text-center">
            Îți poți crea propriul plan de studiu, bazat pe preferințele alese.
            Un plan bine organizat te va determina să înveți cu ușurință și te
            va menține motivat pe tot parcursul planului.
          </p>
        </div>
        <div className="offer-item-2 w-100 p-5 m-4 mt-0">
          <div className="container-of-display-icon mx-auto">
            <img
              src="https://imj31us4am50.github.io/SpringStudy-media/chat-icon.png"
              className="display-icon"
            />
          </div>
          <h5 className="mx-auto p-3 text-center">CHAT PENTRU UTILIZATORI</h5>
          <p className="text-center">
            Posibilitatea de a te conecta cu alții într-un mediu destinat
            educației este un lucru foarte important, pe care noi îl oferim.
            Chat-ul oferit se împarte în două categorii, principal sau pe
            subiecte.
          </p>
        </div>
        <div className="offer-item-3 w-100 p-5 m-4 mt-0">
          <div className="container-of-display-icon mx-auto">
            <img
              src="https://imj31us4am50.github.io/SpringStudy-media/options-icon.png"
              className="display-icon"
            />
          </div>
          <h5 className="mx-auto p-3 text-center">
            OPȚIUNI PENTRU ELEVII DE CLASELE IX-XII
          </h5>
          <p className="text-center">
            Liceeni (și nu numai) pot descoperi pasiuni noi pentru diferite
            subiecte, fie prin comunicarea cu alți utilizatori, fie prin
            materialele de pe site.
          </p>
        </div>
      </div>
    </div>
  );
}
