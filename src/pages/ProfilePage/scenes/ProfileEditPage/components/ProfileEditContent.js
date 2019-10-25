import React from "react";
import ContentWrapper from "../../../../../components/ContentWrapper/ContentWrapper";

const ProfileEditContent = props => {
  return (
    <ContentWrapper>
        <div class="boss-content-switcher">
                        <div class="boss-content-switcher__inner">
                            <aside class="boss-content-switcher__side">
                                <nav class="boss-content-switcher__nav">
                                    <a href="#" class="boss-content-switcher__nav-link boss-content-switcher__nav-link_state_active" data-chapter="employment">Employment Details</a>
                                    <a href="#" class="boss-content-switcher__nav-link" data-chapter="personal">Personal Details</a>
                                    <a href="#" class="boss-content-switcher__nav-link" data-chapter="contact">Contact Details</a>
                                </nav>
                            </aside>
                            <section class="boss-content-switcher__chapters">
                                <article class="boss-content-switcher__chapter boss-content-switcher__chapter_state_visible" data-chapter="employment">
                                    <header class="boss-content-switcher__header">
                                        <h2 class="boss-content-switcher__title">Employment Details</h2>
                                    </header>
                                    <div class="boss-content-switcher__content">

    
                                        <form action="#" class="boss-form boss-form_page_profile-edit">
                                            <div class="boss-form__field">
                                                <label for="select-venue" class="boss-form__label"><span class="boss-form__label-text">Main Venue</span></label>
                                                <div class="boss-form__select boss-form__select_state_error">
                                                
                                                    <div class="Select Select--single" style="overflow: hidden;">
                                                        <div class="Select-control"><span class="Select-multi-value-wrapper" id="react-select-2--value"><div class="Select-placeholder"></div><div role="combobox" aria-expanded="true" aria-owns="react-select-2--list" aria-activedescendant="react-select-2--option-1" class="Select-input" style="border: 0px none; width: 1px; display: inline-block;"></div></span><span class="Select-arrow-zone"><span class="Select-arrow"></span></span>
                                                        </div>
                                                        <div class="Select-menu-outer">
                                                            <div role="listbox" class="Select-menu" id="react-select-2--list">
                                                                <div class="Select-option is-focused" id="react-select-2--option-1">Option</div>
                                                                <div class="Select-option" id="react-select-2--option-2">Option</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="boss-form__error">
                                                    <p class="boss-form__error-text">
                                                        <span class="boss-form__error-line">This is a required field!</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="boss-form__field">
                                                <label class="boss-form__label">
                                                    <span class="boss-form__label-text">Other Venues</span>
                                                    <input name="other-venues" type="text" class="boss-form__input" />
                                                </label>
                                            </div>
                                            <div class="boss-form__field">
                                                <label for="select-staff-type" class="boss-form__label"><span class="boss-form__label-text">Staff Type*</span></label>
                                                <div class="boss-form__select">
                                                   
                                                    <div class="Select Select--single" style={{"overflow: hidden;"}}>
                                                        <div class="Select-control"><span class="Select-multi-value-wrapper" id="react-select-2--value"><div class="Select-placeholder"></div><div role="combobox" aria-expanded="true" aria-owns="react-select-2--list" aria-activedescendant="react-select-2--option-1" class="Select-input" style={{border: "0px none;", width: "1px;", display: "inline-block;"}}></div></span><span class="Select-arrow-zone"><span class="Select-arrow"></span></span>
                                                        </div>
                                                        <div class="Select-menu-outer">
                                                            <div role="listbox" class="Select-menu" id="react-select-2--list">
                                                                <div class="Select-option is-focused" id="react-select-2--option-1">Option</div>
                                                                <div class="Select-option" id="react-select-2--option-2">Option</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="boss-form__field">
                                                <label class="boss-form__label"><span class="boss-form__label-text">Starts At*</span></label>

                                                <div class="date-control date-control_type_icon">
                                                    <div class="SingleDatePicker SingleDatePicker_1">
                                                        <div class="SingleDatePickerInput SingleDatePickerInput_1 SingleDatePickerInput__withBorder SingleDatePickerInput__withBorder_2 SingleDatePickerInput__showClearDate SingleDatePickerInput__showClearDate_3">
                                                            <div class="DateInput DateInput_1">
                                                                <input class="DateInput_input DateInput_input_1 DateInput_input__focused DateInput_input__focused_2" aria-label="Date" name="date" value="" placeholder="Date" autocomplete="off" type="text">
                                                                <p class="DateInput_screenReaderMessage DateInput_screenReaderMessage_1">Press the down arrow key to interact with the calendar and
                                                                    select a date. Press the question mark key to get the keyboard shortcuts for changing dates.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="boss-form__field">
                                                <label for="select-pay-rate" class="boss-form__label"><span class="boss-form__label-text">Pay rate*</span></label>
                                                <div class="boss-form__select">
                                                    <div class="Select Select--single" style="overflow: hidden;">
                                                        <div class="Select-control"><span class="Select-multi-value-wrapper" id="react-select-2--value"><div class="Select-placeholder"></div><div role="combobox" aria-expanded="true" aria-owns="react-select-2--list" aria-activedescendant="react-select-2--option-1" class="Select-input" style="border: 0px none; width: 1px; display: inline-block;"></div></span><span class="Select-arrow-zone"><span class="Select-arrow"></span></span>
                                                        </div>
                                                        <div class="Select-menu-outer">
                                                            <div role="listbox" class="Select-menu" id="react-select-2--list">
                                                                <div class="Select-option is-focused" id="react-select-2--option-1">Option</div>
                                                                <div class="Select-option" id="react-select-2--option-2">Option</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="boss-form__field">
                                                <label class="boss-form__label">
                                                    <span class="boss-form__label-text">Day Preference</span>
                                                    <input name="day-pref" type="text" class="boss-form__input">
                                                </label>
                                                <p class="boss-form__field-note">Preferred days to work displayed to the rota (e.g mornings and weekends)</p>
                                            </div>
                                            <div class="boss-form__field">
                                                <label class="boss-form__label">
                                                    <span class="boss-form__label-text">Hours Preference</span>
                                                    <input name="hours-pref" type="text" class="boss-form__input">
                                                </label>
                                                <p class="boss-form__field-note">Preferred number of hours to work per week displayed in the rota (e.g 40,20+)</p>
                                            </div>
                                            <div class="boss-form__field">
                                                <label class="boss-form__label">
                                                    <span class="boss-form__label-text">National Insurance Number</span>
                                                    <input name="insurance-number" type="text" class="boss-form__input">
                                                </label>
                                            </div>
                                            <div class="boss-form__field">
                                                <label class="boss-form__label">
                                                    <span class="boss-form__label-text">Sage ID</span>
                                                    <input name="sage-id" type="text" class="boss-form__input">
                                                </label>
                                            </div>
                                            <div class="boss-form__field">
                                            
                                                <div class="boss-choice-list">
                                                    <div class="boss-choice-list__header">
                                                        <h3 class="boss-choice-list__title">Starter Employement Status Statement</h3>
                                                    </div>
                                                    <div class="boss-choice-list__content">
                                                        <p class="boss-choice-list__text">Tick one that applies</p>
                                                        <div class="boss-choice-list__controls">
                                                            <label class="boss-choice-list__radio-label">
                                                                <input type="radio" name="employement-status" value="1" class="boss-choice-list__radio-button" checked="">
                                                                <span class="boss-choice-list__radio-label-text">I have supplied my P45 from my previous employer</span>
                                                            </label>
                                                            <label class="boss-choice-list__radio-label">
                                                                <input type="radio" name="employement-status" value="2" class="boss-choice-list__radio-button">
                                                                <span class="boss-choice-list__radio-label-text">This is my first job since the 6th of April. I have not been receiving taxable jobseekers allowance, Incapacity benefits or a state/occupational pernsion</span>
                                                            </label>
                                                            <label class="boss-choice-list__radio-label">
                                                                <input type="radio" name="employement-status" value="3" class="boss-choice-list__radio-button">
                                                                <span class="boss-choice-list__radio-label-text">This is now my only job. Since the 6th of April I have had another jobs received taxable jobseekers allowance, Incapacity benefit. I don’t receivea state/occupational pension</span>
                                                            </label>
                                                            <label class="boss-choice-list__radio-label">
                                                                <input type="radio" name="employement-status" value="4" class="boss-choice-list__radio-button">
                                                                <span class="boss-choice-list__radio-label-text">I have another job or receive a state/occupational pernsion</span>
                                                            </label>
                                                            <label class="boss-choice-list__radio-label">
                                                                <input type="radio" name="employement-status" value="5" class="boss-choice-list__radio-button">
                                                                <span class="boss-choice-list__radio-label-text">I left a course of higher education before the 6th of April &amp; receive my first student loan instalmen on or after the 1st of September 1998 &amp; I have not fully repaid my student loan</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                            <div class="boss-form__field boss-form__field_justify_end">
                                                <button class="boss-button boss-form__submit boss-form__submit_adjust_single" type="submit">Save</button>
                                            </div>
                                        </form>
                                       

                                    </div>
                                </article>

                                <article class="boss-content-switcher__chapter" data-chapter="personal">
                                    <header class="boss-content-switcher__header">
                                        <h2 class="boss-content-switcher__title">Personal Details</h2>
                                    </header>
                                    <div class="boss-content-switcher__content">

                                        
                                        <form action="#" class="boss-form boss-form_page_profile-edit">
                                            <div class="boss-form__field">
                                                <label class="boss-form__label">
                                                    <span class="boss-form__label-text">First Name*</span>
                                                    <input name="first-name" type="text" class="boss-form__input" required="">
                                                </label>
                                            </div>
                                            <div class="boss-form__field">
                                                <label class="boss-form__label">
                                                    <span class="boss-form__label-text">Surname*</span>
                                                    <input name="surname" type="text" class="boss-form__input" required="">
                                                </label>
                                            </div>
                                            <div class="boss-form__field">
                                                <label for="select-gender" class="boss-form__label"><span class="boss-form__label-text">Gender*</span></label>
                                                <div class="boss-form__select">
                                                   
                                                    <div class="Select Select--single" style="overflow: hidden;">
                                                        <div class="Select-control"><span class="Select-multi-value-wrapper" id="react-select-2--value"><div class="Select-placeholder"></div><div role="combobox" aria-expanded="true" aria-owns="react-select-2--list" aria-activedescendant="react-select-2--option-1" class="Select-input" style="border: 0px none; width: 1px; display: inline-block;"></div></span><span class="Select-arrow-zone"><span class="Select-arrow"></span></span>
                                                        </div>
                                                        <div class="Select-menu-outer">
                                                            <div role="listbox" class="Select-menu" id="react-select-2--list">
                                                                <div class="Select-option is-focused" id="react-select-2--option-1">Option</div>
                                                                <div class="Select-option" id="react-select-2--option-2">Option</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="boss-form__field">
                                                <label class="boss-form__label"><span class="boss-form__label-text">Date of Birth*</span></label>

                                                <div class="date-control date-control_type_icon">
                                                    <div class="SingleDatePicker SingleDatePicker_1">
                                                        <div class="SingleDatePickerInput SingleDatePickerInput_1 SingleDatePickerInput__withBorder SingleDatePickerInput__withBorder_2 SingleDatePickerInput__showClearDate SingleDatePickerInput__showClearDate_3">
                                                            <div class="DateInput DateInput_1">
                                                                <input class="DateInput_input DateInput_input_1 DateInput_input__focused DateInput_input__focused_2" aria-label="Date" name="date" value="" placeholder="Date" autocomplete="off" type="text">
                                                                <p class="DateInput_screenReaderMessage DateInput_screenReaderMessage_1">Press the down arrow key to interact with the calendar and
                                                                    select a date. Press the question mark key to get the keyboard shortcuts for changing dates.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="boss-form__field boss-form__field_justify_end">
                                                <button class="boss-button boss-form__submit boss-form__submit_adjust_single" type="submit">Save</button>
                                            </div>
                                        </form>
                                      

                                    </div>
                                </article>

                                <article class="boss-content-switcher__chapter" data-chapter="contact">
                                    <header class="boss-content-switcher__header">
                                        <h2 class="boss-content-switcher__title">Contact Details</h2>
                                    </header>
                                    <div class="boss-content-switcher__content">

                                    
                                        <form action="#" class="boss-form boss-form_page_profile-edit">
                                            <div class="boss-form__field">
                                                <label class="boss-form__label">
                                                    <span class="boss-form__label-text">Email</span>
                                                    <input name="email" type="email" class="boss-form__input boss-form__input_state_error" required="">
                                                </label>

                                                <div class="boss-form__error">
                                                    <p class="boss-form__error-text">
                                                        <span class="boss-form__error-line">This is a required field!</span>
                                                        <span class="boss-form__error-line">It should be a correct email address!</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="boss-form__field">
                                                <label class="boss-form__label">
                                                    <span class="boss-form__label-text">Phone number</span>
                                                    <input name="phone" type="text" class="boss-form__input">
                                                </label>
                                            </div>
                                            <div class="boss-form__field">
                                                <label class="boss-form__label">
                                                    <span class="boss-form__label-text">Address</span>
                                                    <input name="address" type="text" class="boss-form__input">
                                                </label>
                                            </div>
                                            <div class="boss-form__field">
                                                <label class="boss-form__label">
                                                    <span class="boss-form__label-text">Postcode</span>
                                                    <input name="postcode" type="text" class="boss-form__input">
                                                </label>
                                            </div>
                                            <div class="boss-form__field">
                                                <label class="boss-form__label">
                                                    <span class="boss-form__label-text">Country</span>
                                                    <input name="country" type="text" class="boss-form__input">
                                                </label>
                                            </div>
                                            <div class="boss-form__field">
                                                <label class="boss-form__label">
                                                    <span class="boss-form__label-text">County</span>
                                                    <input name="county" type="text" class="boss-form__input">
                                                </label>
                                            </div>
                                            <div class="boss-form__field boss-form__field_justify_end">
                                                <button class="boss-button boss-form__submit boss-form__submit_adjust_single" type="submit">Save</button>
                                            </div>
                                        </form>
                                    
                                    </div>
                                </article>
                            </section>
                        </div>
                    </div>
    </ContentWrapper>
  );
};

export default ProfileEditContent;
