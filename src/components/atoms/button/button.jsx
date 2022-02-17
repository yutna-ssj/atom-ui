import React, { useState } from 'react';
import './button.scss';
import PropType from 'prop-types';
import classNames from 'classnames';

const PropTypes = {
    text: PropType.string.isRequired,
    size: PropType.oneOf(['sm', 'md', 'lg']),
    icon: PropType.string,
    color: PropType.string,
    onClick: PropType.func,
    type: PropType.oneOf(['normal', 'ghost']),
    isDisabled: PropType.bool,
    isPressed: PropType.bool,
    fit: PropType.bool
}

const DefaultProps = {
    size: 'md',
    type: 'normal',
    color: 'success',
    isDisabled: false,
}

const Button = ({ text, size, icon, color, onClick, type, isDisabled, isPressed, fit }) => {

    const className = classNames(['button', `__${size}`, `--${type}`, `__${color}`, { '--pressed': isPressed }, { '--fit': fit }]);

    return <button className={className} disabled={isDisabled} onClick={(e) => e.preventDefault()}>
        {icon ? <i className={`bi-${icon} btn-icon`} /> : null}{text}</button>;
}


Button.propTypes = PropTypes;
Button.defaultProps = DefaultProps;

export default Button;