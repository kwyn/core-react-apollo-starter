import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Dropdown, DropdownTrigger, DropdownContent, DropdownMenu, DropdownItem } from 'bloomer';

export default class LanguagePicker extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const { i18n } = this.props;
    const languages = Object.keys(i18n.store.data);
    return (
      <section className="lang-section">
        {i18n.language &&
          languages.length > 1 && (
            <Dropdown isActive={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownTrigger>
                <Button aria-haspopup="true" aria-controls="dropdown-menu">
                  <span> {i18n.language.slice(0, 2).toUpperCase()}</span>
                  <Icon icon="angle-down" isSize="small" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownContent>
                  {languages.map(lang => (
                    <DropdownItem key={lang} onClick={() => i18n.changeLanguage(lang)}>
                      {lang.slice(0, 2).toUpperCase()}
                    </DropdownItem>
                  ))}
                </DropdownContent>
              </DropdownMenu>
            </Dropdown>
          )}
      </section>
    );
  }
}

LanguagePicker.propTypes = {
  i18n: PropTypes.object.isRequired
};
