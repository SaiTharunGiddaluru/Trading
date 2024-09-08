import React from "react";
function Stats() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="mt-5 mb-5">Trust with confidence</h1>
            <h2 className="mt-3 fs-4 mb-3">Customer-first always</h2>
            <p className="text-muted">
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores of
              <br /> equity investments and contribute to 15% of daily
              <br /> retail exchange volumes in India.
            </p>
            <h2 className="mt-3 fs-4 mb-3">No spam or gimmicks</h2>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              <br />
              High quality apps that you use at your pace, the way you like.
            </p>

            <h2 className="mt-3 fs-4 mb-3">The Zerodha universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+{" "}
              <br /> fintech startups offer you tailored services specific to
              your needs.
            </p>

            <h2 className="mt-3 fs-4 mb-3">Do better with money</h2>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just <br />{" "}
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
          <div className="col-6">
            <img
              src="media\images\ecosystem.png "
              alt="$"
              className="d-flex align-items-center p-5"
              style={{ width: "90%", textAlign: "left" }}
            />
            <div className="text-center">
              <a
                className="mx-5 "
                style={{ textDecoration: "none" }}
                href="sdsjs/"
              >
                Explore our products <i class="fa-solid fa-arrow-right"></i>{" "}
              </a>
              <a
                className="mx-5 "
                style={{ textDecoration: "none" }}
                href="sdsjs/"
              >
                Try Kite Demo <i class="fa-solid fa-arrow-right"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
