import React from "react";

const DetailsList = props => {
  return (
    <>
      <div class="boss-page-main__isle">
        <section class="boss-details">
          <p class="boss-details__pointer">
            <span class="boss-details__pointer-text">1</span>
          </p>
          <div class="boss-details__content">
            <h3 class="boss-details__title">Employment Details</h3>
            <ul class="boss-details__list">
              <li class="boss-details__item">
                <p class="boss-details__label">Main Venue</p>
                <p class="boss-details__value">McCoolay’s</p>
              </li>
              <li class="boss-details__item">
                <p class="boss-details__label">Other Venues</p>
                <p class="boss-details__value">N / A</p>
              </li>
              <li class="boss-details__item">
                <p class="boss-details__label">Job Type</p>
                <p class="boss-details__value">Floor Staff</p>
              </li>
              <li class="boss-details__item">
                <p class="boss-details__label">Start Date</p>
                <p class="boss-details__value">Tue 11/15/2016</p>
              </li>
              <li class="boss-details__item">
                <p class="boss-details__label">Pay Rate</p>
                <p class="boss-details__value">Age 18-20</p>
              </li>
              <li class="boss-details__item">
                <p class="boss-details__label">Hour Preference</p>
                <p class="boss-details__value">20 - 25</p>
              </li>
              <li class="boss-details__item">
                <p class="boss-details__label">Day Preference</p>
                <p class="boss-details__value">Thursday / Saturday / Sunday</p>
              </li>
              <li class="boss-details__item">
                <p class="boss-details__label">National Insurance Number</p>
                <p class="boss-details__value">PE630024B</p>
              </li>
              <li class="boss-details__item">
                <p class="boss-details__label">Sage ID</p>
                <p class="boss-details__value">260</p>
              </li>
              <li class="boss-details__item">
                <p class="boss-details__label">Status Statement</p>
                <p class="boss-details__value">A</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div class="boss-page-main__isle">
        <section class="boss-details">
          <p class="boss-details__pointer">
            <span class="boss-details__pointer-text">2</span>
          </p>
          <div class="boss-details__content">
            <h3 class="boss-details__title">Account Details</h3>
            <ul class="boss-details__list">
              <li class="boss-details__item">
                <p class="boss-details__label boss-details__label_size_small">
                  Created
                </p>
                <p class="boss-details__value">Mon 11/14/2016</p>
              </li>
              <li class="boss-details__item">
                <p class="boss-details__label boss-details__label_size_small">
                  Status
                </p>
                <p class="boss-details__value">Active</p>
              </li>
              <li class="boss-details__item">
                <p class="boss-details__label boss-details__label_size_small">
                  User
                </p>
                <p class="boss-details__value">No Associated User</p>
              </li>
              <li class="boss-details__item">
                <p class="boss-details__label boss-details__label_size_small">
                  Application Password
                </p>
                <p class="boss-details__value">
                  <span class="boss-details__value-line">
                    Set at 10:30 Mon 11/15/2016
                  </span>
                </p>
              </li>
              <li class="boss-details__item">
                <p class="boss-details__label boss-details__label_size_small">
                  Avatar Status
                </p>
                <p class="boss-details__value">
                  <span class="boss-details__value-line">
                    Not Setup for Facial Recognition
                    <span class="boss-tooltip boss-tooltip_position_bottom">
                      <span class="boss-tooltip__icon"></span>
                      <span class="boss-tooltip__content">
                        <span class="boss-tooltip__text">
                          The current avatar cannot be used for apps that use
                          facial recognition. Update the avatar to enable this
                          functionality.
                        </span>
                      </span>
                    </span>
                  </span>
                  <span class="boss-details__value-line">
                    <button class="boss-button boss-button_role_exclamation boss-button_type_small">
                      Bypass Protection
                    </button>
                  </span>
                </p>
              </li>
              <li class="boss-details__item">
                <p class="boss-details__label boss-details__label_size_small">
                  ID Scanner App Guid
                </p>
                <p class="boss-details__value">
                  <img
                    src="http://boss-styles.herokuapp.com/images/hello-world_512.png"
                    alt="qr code preview"
                    class="boss-details__qr"
                  />
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div class="boss-page-main__isle">
        <section class="boss-details">
          <p class="boss-details__pointer">
            <span class="boss-details__pointer-text">3</span>
          </p>
          <div class="boss-details__content">
            <h3 class="boss-details__title">Personal Details</h3>
            <ul class="boss-details__list">
              <li class="boss-details__item">
                <p class="boss-details__label">Name</p>
                <p class="boss-details__value">Trulla Collier</p>
              </li>
              <li class="boss-details__item">
                <p class="boss-details__label">Gender</p>
                <p class="boss-details__value">Female</p>
              </li>
              <li class="boss-details__item">
                <p class="boss-details__label">Date of Birth</p>
                <p class="boss-details__value">23 April 1999</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div class="boss-page-main__isle">
        <section class="boss-details">
          <p class="boss-details__pointer">
            <span class="boss-details__pointer-text">4</span>
          </p>
          <div class="boss-details__content">
            <h3 class="boss-details__title">Contact Details</h3>
            <ul class="boss-details__list">
              <li class="boss-details__item">
                <p class="boss-details__label boss-details__label_size_small">
                  Email Address
                </p>
                <p class="boss-details__value boss-details__value_adjust_wrap">
                  trulla.collier@yahoo.com
                </p>
              </li>
              <li class="boss-details__item">
                <p class="boss-details__label boss-details__label_size_small">
                  Phone Number
                </p>
                <p class="boss-details__value">+123 342 342</p>
              </li>
              <li class="boss-details__item">
                <p class="boss-details__label boss-details__label_size_small">
                  Address
                </p>
                <p class="boss-details__value">
                  <span class="boss-details__value-line">
                    907 Charisse Junction
                  </span>
                  <span class="boss-details__value-line">New Jersey</span>
                  <span class="boss-details__value-line">Monaco</span>
                  <span class="boss-details__value-line">42448</span>
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div class="boss-page-main__isle">
        <section class="boss-details">
          <p class="boss-details__pointer">
            <span class="boss-details__pointer-text">5</span>
          </p>
          <div class="boss-details__content">
            <h3 class="boss-details__title">Mobile Apps</h3>
            <ul class="boss-details__list">
              <li class="boss-details__item">
                <p class="boss-details__label">Some App</p>
                <p class="boss-details__value">
                  <span class="boss-details__value-line">
                    <a href="#" class="boss-details__value-action">
                      Send download email
                    </a>
                  </span>
                  <span class="boss-details__value-line">
                    Last sent at 10:30 Mon 11/15/2016
                  </span>
                </p>
              </li>
              <li class="boss-details__item">
                <p class="boss-details__label">Other App</p>
                <p class="boss-details__value">
                  <span class="boss-details__value-line">
                    <a href="#" class="boss-details__value-action">
                      Send download email
                    </a>
                  </span>
                </p>
              </li>
              <li class="boss-details__item">
                <p class="boss-details__label">Another App</p>
                <p class="boss-details__value">
                  <span class="boss-details__value-line">
                    <a href="#" class="boss-details__value-action">
                      Send download email
                    </a>
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div class="boss-page-main__isle">
        <section class="boss-details">
          <p class="boss-details__pointer">
            <span class="boss-details__pointer-text">6</span>
          </p>
          <div class="boss-details__content">
            <h3 class="boss-details__title">Revisions History</h3>
            <ul class="boss-details__list">
              <li class="boss-details__item">
                <button class="boss-button boss-button_role_view-history boss-button_type_small">
                  View History
                </button>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default DetailsList;
