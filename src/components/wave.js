import React, { useState } from 'react';
import { css } from '@emotion/react';

const Wave = () => {
    const [waves, setwaves] = useState(0);
    const label =  `${waves} ${waves === 1 ? 'wave' : 'waves'}`;

    return (
        <button
            css={css`
                background: rebeccapurple;
                border: none;
                color: white;
                font-size: 1.25rem;
            `}
            onClick={() => setwaves(waves + 1)}
        >
            {label}
        </button>
    )
}

export default Wave;