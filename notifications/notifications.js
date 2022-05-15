import notificationsCSS from "/notifications/notifications.css";

export default function notifications() {
  return (
    <div
      className="container-fluid notifications-section"
      style={notificationsCSS}
    >
      <img
        src="https://imj31us4am50.github.io/SpringStudy-media/notification-icon.png"
        className="notif-icon"
      />
    </div>
  );
}
