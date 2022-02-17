import React from 'react';
import classNames from 'classnames';
import PropType from 'prop-types';

const PropTypes = {
    size: PropType.oneOf(['sm', 'md', 'lg']),
    icon: PropType.string,
    color: PropType.string,
    onclick: PropType.func,
    isDisabled: PropType.bool,
    isPressed: PropType.bool,
    shape: PropType.oneOf(['round', 'square']),
    type: PropType.oneOf(['normal', 'ghost', 'reverse']),
}

const DefaultProps = {
    size: 'md',
    color: 'success',
    isDisabled: false,
    icon: 'google',
    shape: 'square',
    type: 'normal'
}

const IconButton = ({ size, icon, color, type, onClick, isDisabled, isPressed, shape }) => {

    const className = classNames(['button', `icon`, `__${size}`, `--${type}`, `__${color}`, { '__round': shape === 'round' }, { '--pressed': isPressed }]);

    return <button className={className} disabled={isDisabled}><i className={`bi-${icon} btn-icon`} /></button>
}

IconButton.propTypes = PropTypes;
IconButton.defaultProps = DefaultProps;

export default IconButton;
