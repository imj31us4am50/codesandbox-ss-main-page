import notificationsCSS from "/notifications/notifications.css";

export default function notifications() {
  return (
    <div
      className="container-fluid notifications-section"
      style={notificationsCSS}
    >
      <p className="d-inline pr-5 text-white notif-text">Notificări</p>
      <img
        src="https://imj31us4am50.github.io/SpringStudy-media/notification-icon.png"
        className="notif-icon d-inline"
      />
    </div>
  );
}
