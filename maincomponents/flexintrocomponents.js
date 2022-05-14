import introComponentsCSS from "/maincomponents/flexintrocomponents.css";

export default function flexintrocomponents() {
  return (
    <div className="container-fluid m-0">
      <div className="flex-items-offer d-flex">
        <div className="offer-item-1 w-100 p-5 bg-danger">
          <div className="container-of-display-icon mx-auto">
            <img
              src="https://imj31us4am50.github.io/SpringStudy-media/calendar-icon.png"
              className="display-icon"
            />
          </div>
          <h5 className="mx-auto p-3 text-center">STUDIU ORGANIZAT</h5>
          <p>
            Îți poți crea propriul plan de studiu, bazat pe răspunsurile la
            chestionar și preferințele alese.
          </p>
        </div>
        <div className="offer-item-2 w-100 p-5 bg-success">
          <div className="container-of-display-icon mx-auto">
            <img
              src="https://imj31us4am50.github.io/SpringStudy-media/chat-icon.png"
              className="display-icon"
            />
          </div>
          <h5 className="mx-auto p-3 text-center">STUDIU ORGANIZAT</h5>
          <p></p>
        </div>
        <div className="offer-item-3 w-100 p-5 bg-dark">
          <div className="container-of-display-icon mx-auto">
            <img
              src="https://imj31us4am50.github.io/SpringStudy-media/options-icon.png"
              className="display-icon"
            />
          </div>
          <h5 className="mx-auto p-3 text-center">STUDIU ORGANIZAT</h5>
          <p></p>
        </div>
      </div>
    </div>
  );
}
