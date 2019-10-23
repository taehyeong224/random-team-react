import React from 'react';
import {string} from 'prop-types'

export const MyHeader = ({message}) =>
    <div className="my-header">
        {message}
    </div>


MyHeader.propTypes = {
    message: string
};
