import anyquestionsCSS from "/maincomponents/anyquestions.css";

export default function anyquestions() {
  return (
    <div className="container-fluid" style={anyquestionsCSS}>
      <h5 className="title3 text-center p-3">
        Dacă vrei să afli mai multe informații sau ai o întrebare, poți accesa
        secțiunea de{" "}
        <span className="pink">
          <a href="#help">ajutor</a>
        </span>{" "}
        sau să lași o întrebare aici:
      </h5>
      <form method="post" className="m-5 mt-2 mx-auto">
        <div className="inputspart d-flex align-items-start mx-auto">
          <div className="information-part p-4 w-100">
            <input
              type="text"
              placeholder="Nume"
              required
              className="nameinput d-block p-2 m-2 mb-3 w-100"
            ></input>
            <input
              type="email"
              placeholder="Email"
              required
              className="emailinput d-block p-2 m-2 mb-3 w-100"
            ></input>
          </div>
          <div className="message-part p-4 w-100">
            <textarea
              placeholder="Mesajul tău"
              required
              className="messageinput d-block p-2 m-2 w-100"
              spellcheck="false"
            ></textarea>
          </div>
        </div>
        <div className="submitbutton text-center">
          <button className="btn opziqe text-white m-3" type="submit">
            Trimite mesaj
          </button>
        </div>
      </form>
    </div>
  );
}
