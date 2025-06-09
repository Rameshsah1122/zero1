import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row  mb-1">
        <h1 className="text-center">People</h1>
      </div>
      <div className="row p-3  text-muted">
        <div className="col-6 p-3 text-center">
          <img
            src="/media/images/ramesh11.png"
            alt="Ramesh Sah"
            style={{ borderRadius: "80%", width: "50%" }}
          />
          <h4 className="mt-3">Ramesh Sah</h4>
          <h6>Founder,CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Ramesh bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.{" "}
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p> Playing basketball is his zen.</p>
          <p>
            {" "}
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
      <div className="row p-2 mb-5">
        <div className="col-4 text-center">
          <img
            src="/media/images/abhishek.JPG"
            alt="Ramesh Sah"
            style={{ borderRadius: "80%", width: "40%" }}
          />
          <h4 className="mt-3">Abhishek Yadav</h4>
          <h6 className="text-muted">Co-Founder, &CFO</h6>
          <div class="dropdown mb-5">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              info
            </button>
            <p class="dropdown-menu">
              Abhishek is an astute and experienced investor, and he heads
              financial planning at Zerodha. An avid reader, he always
              appreciates a good game of chess.
            </p>
          </div>
        </div>

        <div className="col-4 text-center">
          <img
            src="/media/images/aniket.JPG"
            alt="Ramesh Sah"
            style={{ borderRadius: "80%", width: "50%" }}
          />
          <h4 className="mt-3">Aniket Singh</h4>
          <h6 className="text-muted">CTO</h6>
          <div class="dropdown mb-5">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              info
            </button>
            <p class="dropdown-menu">
              Aniket has a PhD in Artificial Intelligence & Computational
              Linguistics, and is the brain behind all our technology and
              products. He has been a developer from his adolescence and
              continues to write code every day.
            </p>
          </div>
        </div>

        <div className="col-4 text-center">
          <img
            src="/media/images/munna.jpg"
            alt="Ramesh Sah"
            style={{ borderRadius: "80%", width: "40%" }}
          />
          <h4 className="mt-3">Munna Sah</h4>
          <h6 className="text-muted">COO</h6>
          <div class="dropdown mb-5">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              info
            </button>
            <p class="dropdown-menu">
              Munna is the backbone of Zerodha taking care of operations and
              ensuring that we are compliant to rules and regulations. He has
              over a dozen certifications in financial markets and is also
              proficient in technical analysis. Workouts, cycling, and
              adventuring is what he does outside of Zerodha.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
