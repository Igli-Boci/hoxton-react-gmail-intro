import EmailHeader from "./emailHeader";
import EmailBody from "./emailBody";
import EmailActions from "./emailActions";
import EmailToolBar from "./emailToolBar";

function Main() {
  return (
    <main className="email-view">
      <EmailToolBar />
      <article className="email-content">
        <EmailHeader />
        <EmailBody />
        <EmailActions />
      </article>
    </main>
  );
}
export default Main;