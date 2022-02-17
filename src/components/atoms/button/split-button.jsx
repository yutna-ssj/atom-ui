import React from 'react';
import classNames from 'classnames';
import PropType from 'prop-types';

const PropTypes = {
    text: PropType.string,
    size: PropType.oneOf(['sm', 'md', 'lg']).isRequired,
    icon: PropType.string,
    color: PropType.string,
    onClick: PropType.func,
    type: PropType.oneOf(['normal', 'ghost']),
}

const DefaultProps = {
    size: 'md',
    type: 'ghost',
    color: 'success'
}

const SplitButton = ({ text, size, icon, color, onClick, type, isPressed }) => {



    const className = classNames(['button', 'split', `__${size}`, `--${type}`, `__${color}`, { '--pressed': isPressed }]);


    return <button className={className}>
        <span className='spl-content'> {icon ? <i className={`bi-${icon} btn-icon`} /> : null}{text}</span>
        <span className='spl-caret'><i className='bi-caret-down-fill btn-icon' style={{ backgroundColor: 'transparent' }} /></span>
    </button>
}

SplitButton.propTypes = PropTypes;
SplitButton.defaultProps = DefaultProps;


export default SplitButton;