import React, { Children } from 'react';
import classNames from 'classnames';
import PropType from 'prop-types';
import '../list/list.scss';
import Button from '../button/button';

const PropTypes = {
    data: PropType.array,
    children: PropType.arrayOf(Button)
}

const DefaultProps = {

}

const List = ({ children, data }) => {

    const className = classNames(['list']);

    return <div className={className}>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div><i className='bi-google btn-icon'></i>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
    </div>;
}


List.propTypes = PropTypes;
List.defaultProps = DefaultProps;

export default List;