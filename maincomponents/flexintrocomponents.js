import flexintroComponentsCSS from "/maincomponents/flexintrocomponents.css";

export default function flexintrocomponents() {
  return (
    <div className="container-fluid pb-3" style={flexintroComponentsCSS}>
      <div className="notification">
        Trebuie să te înregistrezi/conectezi înainte de a accesa una dintre
        opțiuni!
      </div>
      <div className="flex-items-offer d-flex m-0 p-0">
        <div
          className="offer-item-1 w-100 p-5 m-3 mt-0"
          onClick={() => {
            //aici trb sa adaugi tu sa se intample numai daca nu e pers conectata
            let notif1 = document.querySelector(".notification");
            notif1.style.display = "block";
            setTimeout(() => {
              notif1.style.display = "none";
            }, 2000);
          }}
        >
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
        <div
          className="offer-item-2 w-100 p-5 m-3 mt-0"
          onClick={() => {
            //aici trb sa adaugi tu sa se intample numai daca nu e pers conectata
            let notif2 = document.querySelector(".notification");
            notif2.style.display = "block";
            setTimeout(() => {
              notif2.style.display = "none";
            }, 2000);
          }}
        >
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
        <div
          className="offer-item-3 w-100 p-5 m-3 mt-0"
          onClick={() => {
            //aici trb sa adaugi tu sa se intample numai daca nu e pers conectata
            let notif3 = document.querySelector(".notification");
            notif3.style.display = "block";
            setTimeout(() => {
              notif3.style.display = "none";
            }, 2000);
          }}
        >
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
            Liceenii (și nu numai) pot descoperi pasiuni noi pentru diferite
            subiecte, fie prin comunicarea cu alți utilizatori, fie prin
            materialele de pe site.
          </p>
        </div>
      </div>
    </div>
  );
}
