import React from "react";
import { downloadFile } from "../common/downloadCv";
import Button from "../common/button.component";

function Freelance() {
  const handleDownload = () => {
    downloadFile();
  };

  return (
    <div>
      <section id="service" className="freelancer">
        <h1>I'm open for freelancing</h1>
        <p>
          Check my portfolio and CV link in button click button for downloading
        </p>
        <Button
          event={handleDownload}
          className={"btn btn-secondary"}
          text={"DOWNLOAD CV"}
        />
      </section>
    </div>
  );
}

export default Freelance;
