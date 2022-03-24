let api_2 = "https://api.coincap.io/v2/assets";
let cc_row = document.querySelector(".coin-2 main");
let amount = 0;
let bc = 0;
fetch(api_2)
  .then((res) => {
    return res.json();
  })
  .then((conv) => {
    conv.data.forEach((e) => {
      let row = document.createElement("div");
      row.classList.add("row");
      cc_row.append(row);
      let rankR = document.createElement("div");
      let nameR = document.createElement("a");
      let inf24R = document.createElement("div");
      let inf7R = document.createElement("div");
      let priceR = document.createElement("div");
      rankR.classList.add("crypto-rank");
      nameR.classList.add("crypto-name");
      inf24R.classList.add("crypto-inflation-24H");
      inf7R.classList.add("crypto-inflation-7D");
      priceR.classList.add("crypto-price");
      row.append(rankR);
      row.append(nameR);
      row.append(inf24R);
      row.append(inf7R);
      row.append(priceR);
      nameR.href = e.explorer;
      nameR.setAttribute("target", "_blank");
      rankR.appendChild(document.createTextNode(e.rank));
      nameR.appendChild(document.createTextNode(e.name));
      inf7R.appendChild(
        document.createTextNode(`${Number(e.vwap24Hr * amount).toFixed(2)}%`)
      );
      inf24R.appendChild(
        document.createTextNode(`${Number(e.changePercent24Hr).toFixed(2)}%`)
      );
      priceR.appendChild(
        document.createTextNode((e.volumeUsd24Hr * amount).toFixed(2))
      );
      if (Number(e.changePercent24Hr) < 0) {
        inf24R.style.color = "red";
        row.style.backgroundColor = "#ff00000d";
      } else {
        inf24R.style.color = "green";
      }
      if (Number(e.vwap24Hr * amount) < 0) {
        inf7R.style.color = "red";
      } else {
        inf7R.style.color = "green";
      }
    });
  });
// alert Section
let massage_structure = `
  <section class="parent">
      <main>
        <section class="img">
          <img
            src="assets/copyCoinGIF.gif"
            alt="currency picture"
          />
        </section>

          <section class="txt">
            <h2>Currency Exchange</h2>
            <p class="descation">
              By this program you can change any type of currencies in to dollar
              currency, also this program allows you to know the value of dollar
              compared to the digital currencies as bitcoin,Ethereum,Chainlink
              and Litcoin
            </p>
          </section>
      </main>
    </section>
`;
let onclick_logo = (alert_logo) => {
  customAlert.alert("Welcome baby 😊", massage_structure);
};
function CustomAlert() {
  this.alert = function (title, structure) {
    // main structure of alert section
    document.body.innerHTML =
      document.body.innerHTML +
      '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';

    let dialogoverlay = document.getElementById("dialogoverlay");
    let dialogbox = document.getElementById("dialogbox");
    dialogbox.style.top = "100px";
    // Display alert section
    dialogoverlay.style.display = "block";
    dialogbox.style.display = "block";
    // Header of alert
    document.getElementById("dialogboxhead").style.display = "block";
    document.getElementById("dialogboxhead").innerHTML =
      '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> ' + title;
    // Body of alert
    document.getElementById("dialogboxbody").innerHTML = structure;
    // Footer of alert
    document.getElementById("dialogboxfoot").innerHTML =
      '<button class="pure-material-button-contained active" onclick="customAlert.ok()">Start</button>';
  };

  this.ok = function () {
    document.getElementById("dialogbox").style.display = "none";
    document.getElementById("dialogoverlay").style.display = "none";
  };
}

let customAlert = new CustomAlert();

// !Swap Developers
// ! You must add animation but i dont know how
// ! clean your code from any not use element

let dev_img = document.querySelector(".main-developers .contents .image img"),
  dev_name = document.querySelector(".main-developers .contact h2"),
  dev_ptf = document.querySelector(
    ".main-developers .contact button.btn-portfolio"
  ),
  dev_github = document.querySelector(
    ".main-developers .contact .contact-icons a:nth-of-type(1)"
  ),
  dev_discord = document.querySelector(
    ".main-developers .contact .contact-icons a:nth-of-type(2)"
  ),
  dev_linkedin = document.querySelector(
    ".main-developers .contact .contact-icons a:nth-of-type(3)"
  ),
  dev_email = document.querySelector(
    ".main-developers .contact .contact-icons a:nth-of-type(4)"
  );
let radio = document.getElementsByName("slider"),
  dev_AA = document.querySelector(
    ".main-developers .developers label:nth-of-type(1)"
  ),
  dev_AJ = document.querySelector(
    ".main-developers .developers label:nth-of-type(2)"
  ),
  dev_FO = document.querySelector(
    ".main-developers .developers label:nth-of-type(3)"
  ),
  dev_YKh = document.querySelector(
    ".main-developers .developers label:nth-of-type(4)"
  );

let carts = document.querySelectorAll(".main-developers .contents");

Array.from(radio).forEach((ele) => {
  ele.addEventListener("click", (e) => {
    carts.forEach((ele) => {
      if (ele.className.includes(e.target.id)) {
        ele.classList.toggle("show");
        console.log(e.target.id);
      } else {
        ele.classList.remove("show");
      }
    });
    let bol = false;
    carts.forEach((ele) => {
      if (ele.className.includes("show")) {
        bol = true;
      }
    });
    if (!bol) {
      carts[0].classList.add("show");
    }
  });
});
let i = 0;
document.body.addEventListener("mousewheel", (e) => {
  console.log("as");
  i++;
  carts.forEach((ele, ind) => {
    if (i % 4 == ind) {
      ele.classList.toggle("show");
    } else {
      ele.classList.remove("show");
    }
  });
});

let deve = document.querySelector(".main-developers");
let deves = document.querySelector("section.deves");
let eles = document.querySelectorAll("body>*:not(.main-developers)");
deves.addEventListener("click", () => {
  eles.forEach((e) => {
    e.classList.toggle("none");
    deve.style.cssText = "display: block !important";
  });
});
let blur_area = document.querySelector(".main-developers:not(.temp-main)");
blur_area.addEventListener("click", () => {
  eles.forEach((e) => {
    e.classList.toggle("none");
    deve.style.cssText = "display: none !important";
  });
});
