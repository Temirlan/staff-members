import React from "react";
import { Link } from "react-router-dom";

const StaffMembersTable = props => {
  return (
    <div className="boss-table boss-table_page_staff-members-index">
      <div className="boss-table__row">
        <div className="boss-table__cell boss-table__cell_role_header"></div>
        <div className="boss-table__cell boss-table__cell_role_header">
          Name
        </div>
        <div className="boss-table__cell boss-table__cell_role_header">
          Modified
        </div>
        <div className="boss-table__cell boss-table__cell_role_header">
          Status
        </div>
        <div className="boss-table__cell boss-table__cell_role_header">
          Type
        </div>
        <div className="boss-table__cell boss-table__cell_role_header">
          Master Venue
        </div>
        <div className="boss-table__cell boss-table__cell_role_header">
          Work Venues
        </div>
      </div>
      <div className="boss-table__row">
        <div className="boss-table__cell">
          <div className="boss-table__image">
            <Link to="/staff_members/1" href="#" className="boss-table__link">
              <div className="boss-avatar boss-avatar_type_combined boss-avatar_type_scannable">
                <img
                  src="http://boss-styles.herokuapp.com/images/avatars/download.jpeg"
                  className="boss-avatar__image"
                  alt="avatar"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="boss-table__cell">
          <div className="boss-table__info">
            <p className="boss-table__label">Name</p>
            <p className="boss-table__text">
              <Link to="/staff_members/1" className="boss-table__link">
                John Doe
              </Link>
            </p>
          </div>
        </div>
        <div class="boss-table__cell">
          <div class="boss-table__info">
            <p class="boss-table__label">Modified</p>
            <p class="boss-table__text">
              <a href="#" class="boss-table__link">
                18:00 Wed 11/16/2016
              </a>
            </p>
          </div>
        </div>
        <div className="boss-table__cell">
          <div className="boss-table__info">
            <p className="boss-table__label">Status</p>
            <p className="boss-table__text">
              <button className="boss-button boss-button_type_small boss-button_role_enabled boss-button_type_no-behavior">
                Enabled
              </button>
            </p>
          </div>
        </div>
        <div className="boss-table__cell">
          <div className="boss-table__info">
            <p className="boss-table__label">Type</p>
            <p className="boss-table__text">
              <a href="#" className="boss-table__link">
                Manager
              </a>
            </p>
          </div>
        </div>
        <div className="boss-table__cell">
          <div className="boss-table__info">
            <p className="boss-table__label">Master Venue</p>
            <p className="boss-table__text">
              <a href="#" className="boss-table__link">
                Black
              </a>
            </p>
          </div>
        </div>
        <div className="boss-table__cell">
          <div className="boss-table__info">
            <p className="boss-table__label">Work Venues</p>
            <p className="boss-table__text">
              <a href="#" className="boss-table__link">
                Mint Green, McCooley's
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="boss-table__row">
        <div className="boss-table__cell">
          <div className="boss-table__image">
            <a href="#" className="boss-table__link">
              <div className="boss-avatar boss-avatar_type_combined">
                <img
                  src="http://boss-styles.herokuapp.com/images/avatars/mr.jpg"
                  className="boss-avatar__image"
                />
                <div className="boss-avatar__overlay">
                  <p className="boss-avatar__overlay-text boss-avatar__overlay-text_role_retake">
                    Please retake picture
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="boss-table__cell">
          <div className="boss-table__info">
            <p className="boss-table__label">Name</p>
            <p className="boss-table__text">
              <a href="#" className="boss-table__link">
                Brian Smith
              </a>
            </p>
          </div>
        </div>
        <div className="boss-table__cell">
          <div className="boss-table__info">
            <p className="boss-table__label">Modified</p>
            <p className="boss-table__text">
              <a href="#" class="boss-table__link">
                11:00 Fri 11/18/2016
              </a>
            </p>
          </div>
        </div>
        <div className="boss-table__cell">
          <div className="boss-table__info">
            <p className="boss-table__label">Status</p>
            <p className="boss-table__text">
              <button className="boss-button boss-button_type_small boss-button_role_enabled boss-button_type_no-behavior">
                Enabled
              </button>
            </p>
          </div>
        </div>
        <div className="boss-table__cell">
          <div className="boss-table__info">
            <p className="boss-table__label">Type</p>
            <p className="boss-table__text">
              <a href="#" className="boss-table__link">
                Manager
              </a>
            </p>
          </div>
        </div>
        <div className="boss-table__cell">
          <div className="boss-table__info">
            <p className="boss-table__label">Master Venue</p>
            <p className="boss-table__text">
              <a href="#" className="boss-table__link">
                Brooklyn Mixer
              </a>
            </p>
          </div>
        </div>
        <div className="boss-table__cell">
          <div className="boss-table__info">
            <p className="boss-table__label">Work Venues</p>
            <p className="boss-table__text">
              <a href="#" className="boss-table__link">
                Black, McCooley's
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="boss-table__row">
        <div className="boss-table__cell">
          <div className="boss-table__image">
            <a href="#" className="boss-table__link">
              <div className="boss-avatar boss-avatar_type_combined">
                <img
                  src="http://boss-styles.herokuapp.com/images/avatars/dj.jpg"
                  className="boss-avatar__image"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="boss-table__cell">
          <div className="boss-table__info">
            <p className="boss-table__label">Name</p>
            <p className="boss-table__text">
              <a href="#" className="boss-table__link">
                Jack McDougal
              </a>
            </p>
          </div>
        </div>
        <div className="boss-table__cell">
          <div className="boss-table__info">
            <p className="boss-table__label">Modified</p>
            <p className="boss-table__text">
              <a href="#" className="boss-table__link">
                11:00 Fri 11/18/2016
              </a>
            </p>
          </div>
        </div>
        <div className="boss-table__cell">
          <div className="boss-table__info">
            <p className="boss-table__label">Status</p>
            <p className="boss-table__text">
              <button className="boss-button boss-button_type_small boss-button_role_disabled boss-button_type_no-behavior">
                Disabled
              </button>
            </p>
          </div>
        </div>
        <div className="boss-table__cell">
          <div className="boss-table__info">
            <p className="boss-table__label">Type</p>
            <p className="boss-table__text">
              <a href="#" className="boss-table__link">
                Manager
              </a>
            </p>
          </div>
        </div>
        <div className="boss-table__cell">
          <div className="boss-table__info">
            <p className="boss-table__label">Master Venue</p>
            <p className="boss-table__text">
              <a href="#" className="boss-table__link">
                Blue
              </a>
            </p>
          </div>
        </div>
        <div className="boss-table__cell">
          <div className="boss-table__info">
            <p className="boss-table__label">Work Venues</p>
            <p className="boss-table__text">
              <a href="#" className="boss-table__link">
                Green, McCooley's
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="boss-table__row">
        <div class="boss-table__row">
          <div class="boss-table__cell">
            <div class="boss-table__image">
              <a href="#" class="boss-table__link">
                <div class="boss-avatar boss-avatar_type_combined">
                  <img
                    src="http://boss-styles.herokuapp.com/images/avatars/jd.jpg"
                    class="boss-avatar__image"
                  />
                </div>
              </a>
            </div>
          </div>
          <div class="boss-table__cell">
            <div class="boss-table__info">
              <p class="boss-table__label">Name</p>
              <p class="boss-table__text">
                <a href="#" class="boss-table__link">
                  John Doe
                </a>
              </p>
            </div>
          </div>
          <div class="boss-table__cell">
            <div class="boss-table__info">
              <p class="boss-table__label">Modified</p>
              <p class="boss-table__text">
                <a href="#" class="boss-table__link">
                  18:00 Wed 11/16/2016
                </a>
              </p>
            </div>
          </div>
          <div class="boss-table__cell">
            <div class="boss-table__info">
              <p class="boss-table__label">Status</p>
              <p class="boss-table__text">
                <button class="boss-button boss-button_type_small boss-button_role_enabled boss-button_type_no-behavior">
                  Enabled
                </button>
              </p>
            </div>
          </div>
          <div class="boss-table__cell">
            <div class="boss-table__info">
              <p class="boss-table__label">Type</p>
              <p class="boss-table__text">
                <a href="#" class="boss-table__link">
                  Manager
                </a>
              </p>
            </div>
          </div>
          <div class="boss-table__cell">
            <div class="boss-table__info">
              <p class="boss-table__label">Master Venue</p>
              <p class="boss-table__text">
                <a href="#" class="boss-table__link">
                  Green
                </a>
              </p>
            </div>
          </div>
          <div class="boss-table__cell">
            <div class="boss-table__info">
              <p class="boss-table__label">Work Venues</p>
              <p class="boss-table__text">
                <a href="#" class="boss-table__link">
                  Black, McCooley's
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffMembersTable;
