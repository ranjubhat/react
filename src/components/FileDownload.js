import React from "react";
import axios from "axios";
function FileDownload(props) {
  const fetchFile = () => {
    axios({
      url: "https://upload.wikimedia.org/wikipedia/commons/thu…e.png/640px-Image_created_with_a_mobile_phone.png",
      method: "GET",
      //headers: headers,
      responseType: "blob", // important
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute(
          "download",
          `${this.props.file.name}.${this.props.file.mime}`
        );
        document.body.appendChild(link);
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <button onClick={fetchFile}> Download file </button>
      {/* <a href="" id="id1" hidden/> */}
    </div>
  );
}

export default FileDownload;
